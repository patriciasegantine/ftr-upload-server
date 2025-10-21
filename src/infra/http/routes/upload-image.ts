import {FastifyPluginAsyncZod} from "fastify-type-provider-zod";
import {FastifyInstance} from "fastify";

export const uploadImageRoute: FastifyPluginAsyncZod = async (server: FastifyInstance) => {
    server.get('/uploads', () => {
        return 'Hello Word!'
    })
}