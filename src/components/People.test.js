import React from 'react'
import {render, screen, act} from '@testing-library/react'
import '@testing-library/jest-dom'
import People from './People';

test('Renders Film Component', async () => {
  const data = [
    {
      name: 'Luke Skywalker'
    }
  ]
  act(() => {
    render(<People data={data} />);
  })

  expect(screen.getByText(/Luke Skywalker/)).toBeInTheDocument();
})