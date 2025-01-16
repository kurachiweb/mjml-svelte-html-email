import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { sendEmail } from '$lib/email';

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const targetEmail = form.get('email')?.toString();
		const body = form.get('body')?.toString();
		if (targetEmail == undefined) {
			error(400, 'Please input your email.');
		} else if (body == undefined) {
			error(400, 'Please input email body.');
		}

		const bodyHtml = body
			.split('\n')
			.map((line) => `<p>${line}</p>`)
			.join('');

		const { sendEmailError } = await sendEmail(
			'KurachiWeb',
			env.EMAIL_FROM,
			[targetEmail],
			'Email send from Svelte test',
			`<div style="font-size: 32px">${bodyHtml}</div>`,
			body
		);
		if (sendEmailError instanceof Error) {
			error(500, sendEmailError.message);
		}

		return {};
	}
};
