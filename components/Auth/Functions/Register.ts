const axios = require("axios");

interface registerTypes {
	email: string;
	password: string;
	confirm: string;
}

interface error {
	error: string;
}

const Registration = async ({
	email,
	password,
	confirm,
}: registerTypes): Promise<Boolean | error | undefined> => {
	if (!(email && password && confirm)) return { error: "missing credentials" };

	if (password != confirm) return { error: "passwords don't match" };

	try {
		const {
			data: { success },
		} = await axios({
			method: "POST",
			url: "/api/user/register",
			data: {
				credentials: {
					email,
					password,
				},
			},
		});

		if (success) return true;
	} catch (err: any) {
		throw err.response.data.error.code;
	}
};

export default Registration;
