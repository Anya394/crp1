require('@testing-library/jest-dom');
const { server } = require('./src/mocks/server');

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})