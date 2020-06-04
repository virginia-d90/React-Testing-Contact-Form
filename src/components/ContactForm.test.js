import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import ContactForm from "./ContactForm"

test('form renders to screen', () => {
    const {getByTestId} = render(<ContactForm />)

    const form = getByTestId(/imhere/i)
    expect(form).toBeVisible();
})

test('first name will input', () => {
    // const {getByLabelText} = render(<ContactForm />)
    render(<ContactForm />)
    const firstInput = screen.getByLabelText(/first name/i)
    fireEvent.change(firstInput, {target: {value: 'Virginia'}})
})