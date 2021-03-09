import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import TextInput from '.';
import { FieldData } from '../../../models/form';


test('Passes field data to correct input props', () => {
    const testFieldData: FieldData = { key: 'test', value: 'default', type: 'text' };
    render(<TextInput fieldData={testFieldData} />);
    const input = screen.getByTestId('form-text-input');
    expect(input).toHaveAttribute('placeholder', testFieldData.key);
    expect(input).toHaveAttribute('value', testFieldData.value);
    expect(input).toHaveAttribute('type', testFieldData.type);
});

test('Changing input value updates FieldData value', () => {
    const testFieldData: FieldData = { key: 'test', value: '', type: 'text' };
    render(<TextInput fieldData={testFieldData} />)
    const input = screen.getByTestId('form-text-input');
    fireEvent.change(input, { target: { value: 'TEST' } })
    expect(testFieldData.value).toBe('TEST')
});