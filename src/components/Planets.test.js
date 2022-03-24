import React from 'react'
import {render, screen, act} from '@testing-library/react'
import '@testing-library/jest-dom'
import Planets from './Planets';

test('Renders Film Component', async () => {
  const data = [
    {
      name: 'Tatooine'
    }
  ]
  act(() => {
    render(<Planets data={data} />);
  })

  expect(screen.getByText(/Tatooine/)).toBeInTheDocument();
})