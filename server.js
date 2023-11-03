//import {createServer} from  'node:http';


//const server = createServer((resquest, response) => {

    //response.write('Backend on')

   // return response.end()
//});


//server.listen(3333)

//fremoworck  Fastify

import { app } from './ServerRotes.js';


app.listen({
    port: 3333
});