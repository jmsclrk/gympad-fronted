import React from 'react';

import './styles.scss';
import logo from '../../../images/gympad-green.png';

interface Props {
    logoSize?: number;
}

export default function LoginLogo({ logoSize=200 }: Props) {
    return (
        <div id="login-logo-container">
            <img style={{ height: logoSize, width: logoSize }} alt="logo" src={logo} />
            <h2>GymPad</h2>
        </div>
    );
}