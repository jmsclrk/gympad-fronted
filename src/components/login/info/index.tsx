import React, { useState } from 'react';

import './styles.scss'
import { FieldData } from '../../../models/form'
import FormBody from '../../form/body';

export default function LoginInfo() {
    const [formData] = useState<Array<FieldData>>([
        { key: 'email', value: '', type: 'text' },
        { key: 'password', value: '', type: 'password' },
    ])

    return (
        <div id="login-info-container">
            <div id="login-info-body-container">
                <FormBody formData={formData} width="75%" />
            </div>
        </div>
    );
}