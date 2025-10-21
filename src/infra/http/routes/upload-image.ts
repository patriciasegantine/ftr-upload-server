import {FastifyPluginAsyncZod} from "fastify-type-provider-zod";

export const uploadImageRoute: FastifyPluginAsyncZod = async server => {
    server.get('/uploads', () => {
        return 'Hello Word!'
    })
}