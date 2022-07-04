const http = require('http')
const { URL } = require('url')
const routes = require('./routes')

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:8000${request.url}`)

  const route = routes.find((routeObj) => (
    routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
  ))

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams)
    route.handler(request, response)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`)
  }
})

server.listen(8000, () => console.log('server started at http://localhost:8000/'))