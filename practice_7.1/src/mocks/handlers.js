import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.example.com/todos', () => {
    return HttpResponse.json([
        { id: 1, text: 'Mocked todo', completed: false },
        { id: 2, text: 'Написать тесты', completed: true }
      ], { 
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