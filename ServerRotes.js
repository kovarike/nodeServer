import { fastify} from 'fastify';

import {DatabaseMemory} from './database.js';

export const app = fastify();

    app.post('/videos', () => {
    return 'backend Danilo'
});

    app.get('/video', () => {
    return ' Danilo'
});

    app.put('/videos/:id', () => {
    return 'backend Danilo'
});

    app.delete('/videos/:id', () => {
    return 'backend Danilo'
});

