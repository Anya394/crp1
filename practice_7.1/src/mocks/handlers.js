import { http, HttpResponse } from 'msw'
import { TODOS } from './constants'

let todos = [...TODOS];
export const handlers = [
  http.get('https://api.example.com/todos', () => {
    return HttpResponse.json(todos, { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }),

  http.post('https://api.example.com/todos', async ({ request }) => {
    const { text } = await request.json()
    return HttpResponse.json(
      { id: Date.now(), text, completed: false },
      { status: 201 }
    )
  })
];