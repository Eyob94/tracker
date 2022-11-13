import {
	act,
	fireEvent,
	render,
	renderHook,
	screen,
	waitFor,
} from "@testing-library/react";
import useMethodChange from "../utils/Hooks/useMethodChange";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import RegisterForm from "./RegisterForm";
import Registration from "../Functions/Register";

describe("Testing Registration", () => {
	const {
		result: {
			current: { method, methodChange },
		},
	} = renderHook(() => useMethodChange());

	beforeEach(() => {
		render(<RegisterForm methodChange={methodChange} />);
	});

	it("disables register button on load", () => {
		const registerBtn = screen.getByRole("button", {
			name: "Register",
		});

		expect(registerBtn).toBeDisabled();
	});

	it("checks that passwords match", async () => {
		userEvent.setup();
		const registerBtn = screen.getByRole("button", { name: /register/i });
		const emailInput = screen.getByLabelText(/email/i, { selector: "input" });
		const passwordInput = screen.getByLabelText(/^password$/i, {
			selector: "input",
		});
		const confirmInput = screen.getByLabelText(/confirm password/i, {
			selector: "input",
		});

		await userEvent.type(emailInput, "abcd@abc.com");
		await userEvent.type(passwordInput, "12345678");
		await userEvent.type(confirmInput, "123456789");

		await act(() => {
			fireEvent.click(registerBtn);
		});

		expect(registerBtn).toBeDisabled();
	});
});
