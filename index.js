const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);

const endpoint = getEndpoint();
const router = jsonServer.router(endpoint);

server.use(router);

server.listen(port);

function getEndpoint() {
  if (process.env.NODE_ENV === 'production') {
    return process.env.VITE_ENDPOINT_PRODUCCION;
  } else {
    return process.env.VITE_ENDPOINT_DESARROLLO;
  }
}
