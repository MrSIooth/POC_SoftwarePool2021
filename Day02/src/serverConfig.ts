import { get } from 'env-var'

const env = (name: string, required = true) => get(name).required(required);
export const PORT = env('SERVER_PORT', false).default(8080).asPortNumber();
export const HOST = env('HOST', false).default('localhost').asString();
export const HELLO_MESSAGE = env('HELLO_MESSAGE').asString();
