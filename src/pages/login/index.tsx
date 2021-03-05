import React from 'react';
import WidthControl from '../../components/layout/width-control';

export default function LoginPage() {
    return (
        <WidthControl max={1200} min={800}>
            <div data-testid="login-container">
                <h2>Login Page</h2>
            </div>
        </WidthControl>
    );
}
