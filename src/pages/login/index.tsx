import React from 'react';
import MultiColumn from '../../components/layout/multi-column';
import WidthControl from '../../components/layout/width-control';
import { ColumnOptions } from '../../models/layout';

export default function LoginPage() {
    return (
        <WidthControl max={1200} min={800}>
            <div data-testid="login-container">
                <h2>Login Page</h2>
            </div>
        </WidthControl>
    );
}
