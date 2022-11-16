import {
	act,
	fireEvent,
	render,
	renderHook,
	screen,
} from "@testing-library/react";
import useMethodChange from "../utils/Hooks/useMethodChange";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";

describe("Testing Registration", () => {
	const {
		result: {
			current: { method, methodChange },
		},
	} = renderHook(() => useMethodChange());

	beforeEach(() => {
		render(<LoginForm methodChange={() => methodChange("Register")} />);
	});

	it("disables register button on load", () => {
		const loginBtn = screen.getByRole("button", {
			name: "Login",
		});

		expect(loginBtn).toBeDisabled();
	});

	it("checks that passwords match", async () => {
		userEvent.setup();
		const loginBtn = screen.getByRole("button", {
			name: "Login",
		});
		const emailInput = screen.getByLabelText(/email/i, { selector: "input" });
		const passwordInput = screen.getByLabelText(/^password$/i, {
			selector: "input",
		});

		await userEvent.type(emailInput, "abcd@abc.com");
		await userEvent.type(passwordInput, "12345678");

		expect(loginBtn).toBeEnabled();
	});
});
