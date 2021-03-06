import React from 'react'
import {render, screen, act} from '@testing-library/react'
import '@testing-library/jest-dom'
import Films from './Films';

test('Renders Film Component', async () => {
  const data = [
    {
      title: 'A New Hope'
    }
  ]
  act(() => {
    render(<Films data={data} />);
  })

  expect(screen.getByText(/A New Hope/)).toBeInTheDocument();
})