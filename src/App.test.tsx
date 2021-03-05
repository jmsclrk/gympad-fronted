import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { SetupServerApi } from 'msw/node';
import { createMockServer, killMockServer } from '../utils/testing/mock-server';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { User, userUrl } from './models/user';


const testUser: User = {
    email: 'testuser@test.com',
    username: 'testuser',
    first_name: 'test',
    last_name: 'user'
}

test('Renders workout page when getUser attempt returns user', async () => {
    const server: SetupServerApi = createMockServer(userUrl + 'me/', testUser);
    server.listen();
    render(<Router><App /></Router>);
    await waitFor(() => screen.getAllByTestId('workout-container'));
    expect(screen.getByTestId('workout-container')).toBeInTheDocument();
    killMockServer(server);
})

test('Renders login page when getUser attempt fails', async () => {
    const server: SetupServerApi = createMockServer(userUrl + 'me/', testUser, 401);
    server.listen();
    render(<Router><App /></Router>);
    await waitFor(() => screen.getAllByTestId('login-container'));
    expect(screen.getByTestId('login-container')).toBeInTheDocument();
    killMockServer(server);
})
