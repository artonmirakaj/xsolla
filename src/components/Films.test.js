import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Films from './Films';

const server = setupServer(
  rest.get('https://swapi.dev/api/films', (req, res, ctx) => {
    return res(ctx.json({ title: "A New Hope" }))
  })
)



beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('Renders Film Component', async () => {
  // render(<Films />);

  // expect(screen.getByText(/A New Hope/)).toBeInTheDocument();
  // screen.debug()
})