import React from 'react';
import { render, screen } from '@testing-library/react';

import FormBody from '.';
import { FieldData } from '../../../models/form';

const testOneField: Array<FieldData> = [{ key: 'test', value: 'default', type: 'text' }];

const testTwoField: Array<FieldData> = [
    { key: 'test1', value: '', type: 'text' },
    { key: 'test2', value: '', type: 'text' },
];

jest.mock('../text-input', () => {
    return function MockedTextInput(): JSX.Element {
        return <div data-testid='mock-text-input'></div>
    }
});

test('Renders one text input one povided one FieldData', () => {
    render(<div><FormBody formData={testOneField} /></div>);
    expect(screen.getAllByTestId('mock-text-input')).toHaveLength(1);
});

test('Renders two text inputs one povided two FieldData', () => {
    render(<div><FormBody formData={testTwoField} /></div>);
    expect(screen.getAllByTestId('mock-text-input')).toHaveLength(2);
});