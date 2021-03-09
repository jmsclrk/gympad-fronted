import React, { useState } from 'react';

import './styles.scss';
import { FieldData } from '../../../models/form';
import FormBody from '../../form/body';
import Button from '../../function/button';

export default function LoginInfo() {
    const [formData] = useState<Array<FieldData>>([
        { key: 'email', value: '', type: 'text' },
        { key: 'password', value: '', type: 'password' },
    ]);

    function attemptLogIn() {
        console.log(formData[0].value);
        console.log(formData[1].value);
    }

    return (
        <div id="login-info-container">
            <div id="login-info-body-container">
                <FormBody formData={formData} width="75%" />
                <Button name="Log In" onClick={attemptLogIn} />
            </div>
        </div>
    );
}