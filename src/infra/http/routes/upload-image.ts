import {FastifyPluginAsyncZod} from "fastify-type-provider-zod";
import {FastifyInstance} from "fastify";
import {z} from "zod";
import {db} from "@/infra/db";
import {schema} from "@/infra/db/schemas";

export const uploadImageRoute: FastifyPluginAsyncZod = async (server: FastifyInstance) => {
    server.post('/uploads', {
            schema: {
                summary: 'Upload an image',
                body: z.object({
                    name: z.string(),
                    remoteKey: z.string().optional(),
                    remoteUrl: z.string().optional(),
                }),
                response: {
                    201: z.object({ uploadId: z.string() }),
                    409: z
                        .object({ message: z.string() })
                        .describe('Upload already exists.'),
                },
            },
        },
        async (request, reply) => {
            await db.insert(schema.uploads).values({
                name: 'test2',
                remoteKey: 'test2.jpg',
                remoteUrl: 'http://asdasd.com',
            })
        return reply.status(201).send({ uploadId: '123' })
        }
    )
}