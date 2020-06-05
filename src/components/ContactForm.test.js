import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import ContactForm from "./ContactForm"
import { act } from 'react-dom/test-utils'

test('form renders to screen', () => {
    const {getByTestId} = render(<ContactForm />)

    const form = getByTestId(/submitform/i)
    expect(form).toBeVisible();
})


test('ContactForm adds new contact',() => { 
    render(<ContactForm />)
    //type all inputs
        //1.query for all inputs
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)

        //2. run the change event to add text
    fireEvent.change(firstNameInput, {target: {value: 'Jen'}})
    fireEvent.change(lastNameInput, {target: {value: 'Smith'}})
    fireEvent.change(emailInput, {target: {value: 'jen@jen.com'}})
    fireEvent.change(messageInput, {target: {value: 'Hello'}})

    //click submit button
        //1.query for the button
    const submitButton = screen.getByTestId(/click/i)
        //2. run the click event on the button
    act(() => {
        fireEvent.click(submitButton)
        const newContact = screen.getByText(/jen/i)
        expect(newContact).toBeInTheDocument()
    }
    // fireEvent.click(submitButton)

    // const newContact = screen.getByText(/jen/i)
    
})