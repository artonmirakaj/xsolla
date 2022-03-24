import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import axios from 'axios';
import films from './mock/films'
import people from './mock/people'
import planets from './mock/planets'

async function mockAxiosCall(url) {
  switch (url) {
    case 'https://swapi.dev/api/films': {
      return {
        ok: true,
        status: 200,
        data: {
          results: films
        }
      };
    }
    case 'https://swapi.dev/api/people': {
      return {
        ok: true,
        status: 200,
        data: {
          results: people
        }
      };
    }
    case 'https://swapi.dev/api/planets': {
      return {
        ok: true,
        status: 200,
        data: {
          results: planets
        }
      };
    }
    default: {
        throw new Error(`URL Not Found!: ${url}`);
    }
  }
}

beforeAll(() => jest.spyOn(axios, 'get'));
beforeEach(() => axios.get.mockImplementation(mockAxiosCall));

test('renders Welcome Page', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = await screen.getByText(/Welcome to Star Wars/i);
  expect(linkElement).toBeInTheDocument();
});

test('load films', async () => {
    render(<App />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/films');
    });
});

test('load people', async () => {
    render(<App />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/people');
    });
});

test('load planets', async () => {
    render(<App />, { wrapper: BrowserRouter });
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/planets');
    });
});