import {env} from '@/env'
import {uploadImageRoute} from '@/infra/http/routes/upload-image'
import {fastifyCors} from '@fastify/cors'
import {fastify} from 'fastify'
import {hasZodFastifySchemaValidationErrors, serializerCompiler, validatorCompiler,} from 'fastify-type-provider-zod'
import fastifyMultipart from "@fastify/multipart";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {transformSwaggerSchema} from "@/infra/http/transform-swagger-schema";
import {getUploadsRoute} from "@/infra/http/routes/get-uploads";

const server = fastify()

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.setErrorHandler((error, request, reply) => {
    if (hasZodFastifySchemaValidationErrors(error)) {
        return reply.status(400).send({
            message: 'Validation error',
            issues: error.validation,
        })
    }

    // TODO: Implement integration with observability tools (Sentry/DataDog/Grafana/OTel)

    console.error(error)

    return reply.status(500).send({ message: 'Internal server error.' })
})

server.register(fastifyCors, { origin: '*' })

server.register(fastifyMultipart)
server.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Upload Server',
            version: '1.0.0',
        },
    },
    transform: transformSwaggerSchema,
})

server.register(fastifySwaggerUi, {
    routePrefix: '/docs',
})

server.register(uploadImageRoute)
server.register(getUploadsRoute)

server.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
    console.log(`Server is running on port ${env.PORT}`)
})