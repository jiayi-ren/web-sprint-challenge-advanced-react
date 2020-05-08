import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    const header = getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByText, getByLabelText, container } = render(<CheckoutForm />)

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const addressInput = getByLabelText(/address/i);
    const cityInput = getByLabelText(/city/i);
    const stateInput = getByLabelText(/state/i);
    const zipInput = getByLabelText(/zip/i);

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
    expect(zipInput).toBeInTheDocument();

    // console.log(firstNameInput.value)
    // console.log(lastNameInput.value)
    // console.log(addressInput.value)
    // console.log(cityInput.value)
    // console.log(stateInput.value)
    // console.log(zipInput.value)
    fireEvent.change(firstNameInput, { target: { value: 'firstnametest' } })
    fireEvent.change(lastNameInput, { target: { value: 'lastnametest' } })
    fireEvent.change(addressInput, { target: { value: 'addresstest' } })
    fireEvent.change(cityInput, { target: { value: 'citytest' } })
    fireEvent.change(stateInput, { target: { value: 'statetest' } })
    fireEvent.change(zipInput, { target: { value: 'ziptest' } })
    // console.log(firstNameInput.value)
    // console.log(lastNameInput.value)
    // console.log(addressInput.value)
    // console.log(cityInput.value)
    // console.log(stateInput.value)
    // console.log(zipInput.value)
    expect(firstNameInput).toHaveValue("firstnametest")
    expect(lastNameInput).toHaveValue("lastnametest")
    expect(addressInput).toHaveValue("addresstest")
    expect(cityInput).toHaveValue("citytest")
    expect(stateInput).toHaveValue("statetest")
    expect(zipInput).toHaveValue("ziptest")

    const checkout = container.querySelector("button");
    // console.log(checkout)
    expect(checkout).toBeInTheDocument();
    fireEvent.click(checkout);

    const success = getByText(/woo-hoo/i);
    // console.log(success)
    expect(success).toBeInTheDocument();

    const ship = getByText(/shipped/i);
    // console.log(ship)
    expect(ship).toBeInTheDocument();

    expect(getByText(/firstnametest/i)).toBeInTheDocument();
    expect(getByText(/lastnametest/i)).toBeInTheDocument();
    expect(getByText(/addresstest/i)).toBeInTheDocument();
    expect(getByText(/citytest/i)).toBeInTheDocument();
    expect(getByText(/statetest/i)).toBeInTheDocument();
    expect(getByText(/ziptest/i)).toBeInTheDocument();
});
