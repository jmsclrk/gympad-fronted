import React, { useState } from 'react';

import './styles.scss';
import { FieldData } from '../../../models/form';

interface Props {
    fieldData: FieldData;
    width?: string | number | null;
}

export default function TextInput({ fieldData, width=null }: Props) {
    const [text, setText] = useState<string>(fieldData.value);

    function update(t: string): void {
        setText(t);
        fieldData.value = t;
    }

    return (
        <div className="form-text-input-container">
            <input
                className="form-text-input"
                style={width ? { width: width } : {}}
                placeholder={fieldData.key}
                type={fieldData.type}
                value={text}
                onChange={e => update(e.target.value)} />  
        </div>
    );
}