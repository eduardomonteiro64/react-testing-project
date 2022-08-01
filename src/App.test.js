import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"
import App from './App'


describe("App component", () => {
    test("codesweetly test heading", () => {
        render(<App />);
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/CodeSweetly Test/i);
    });

    test("a codesweetly project heading", () => {
        render(<App />);

        const button = screen.getByRole("button", { name: "Update Heading" });

        userEvent.click(button);

        expect(screen.getByRole("heading")).toHaveTextContent(/A CodeSweetly Project/i);
    });
});