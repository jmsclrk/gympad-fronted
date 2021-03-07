import React from 'react';
import MultiColumn from '../../components/layout/multi-column';
import WidthControl from '../../components/layout/width-control';
import { ColumnOptions } from '../../models/layout';

import './styles.scss';
import LoginLogo from '../../components/login/logo';
import LoginInfo from '../../components/login/info';

export default function LoginPage() {
    const columns: Array<ColumnOptions> = [
        {
            minWidth: 700,
            options: {
                2: {
                    component: <LoginLogo logoSize={250} />,
                    flex: 1,
                },
            }
        },
        {
            minWidth: 0,
            options: {
                1: {
                    component: <><LoginLogo /><LoginInfo /></>,
                    flex: 1,
                },
                2: {
                    component: <LoginInfo />,
                    flex: 1,
                },
            }
        },
    ];

    return (
        <WidthControl max={800} min={500}>
            <div data-testid="login-container" id="login-container">
                <MultiColumn columns={columns} />
            </div>
        </WidthControl>
    );
}
