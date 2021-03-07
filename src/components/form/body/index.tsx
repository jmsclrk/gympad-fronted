import React from 'react';

import { FieldData } from '../../../models/form';
import TextInput from '../text-input';

interface Props {
    formData: Array<FieldData>;
    width?: string | number | null;
}

export default function FormBody({ formData, width=null }: Props) {
    return (
        <>
            {formData.map(fd => <TextInput key={fd.key} fieldData={fd} width={width} />)}
        </>
    );
}