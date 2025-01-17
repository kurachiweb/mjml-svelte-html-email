import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { sendEmail } from '$lib/email';

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const emailTo = form.get('email')?.toString();
		const bodyMain = form.get('body')?.toString();
		const actionLabel = form.get('action')?.toString();
		if (emailTo == undefined) {
			error(400, 'Please input your email.');
		} else if (bodyMain == undefined) {
			error(400, 'Please input email body.');
		} else if (actionLabel == undefined) {
			error(400, 'Please input action-link label.');
		}

		const bodyMainHTML = bodyMain
			.split('\n')
			.map((line) => `<p style="margin-bottom: 8px;">${line}</p>`)
			.join('');

		const { sendEmailError } = await sendEmail(
			'KurachiWeb',
			env.EMAIL_FROM,
			[emailTo],
			'Email send from Svelte test',
			`<div style="margin: 0 auto; max-width: 600px;"><h1 style="font-size: 48px; margin-bottom: 32px; text-align: center;"><a href="https://kurachiweb.com/" target="_blank" style="color: inherit; text-decoration: none;">KurachiWeb</a></h1><div style="font-size: 24px; margin-bottom: 16px;">${bodyMainHTML}</div><p style="margin-bottom: 64px; text-align: center;"><a href="https://kurachiweb.com/?signUpLinkHere=bf3e9a03f795a375084b06f54b5cc7eafb0c4316371965b84f912f0acce75bb2" target="_blank" style="background-color: #b5420e; color: #fff; display: inline-block; font-size: 32px; font-weight: bold; padding: 12px 16px; text-decoration: none;">${actionLabel}</a></p><div style="font-size: 14px; text-align: center;"><p style="margin-bottom: 8px;">Footer text here</p><p style="margin-bottom: 8px;">FooBar Inc.</p><p><a href="https://shortbook.life/" target="_blank">Term of Use</a></p></div></div>`,
			`KurachiWeb\nhttps://kurachiweb.com/\n\n\n${bodyMain}\n\n${actionLabel}\nhttps://kurachiweb.com/?signUpLinkHere=bf3e9a03f795a375084b06f54b5cc7eafb0c4316371965b84f912f0acce75bb2\n\n\nFooter text here\n\nFooBar Inc.\n\nTerm of Use\nhttps://shortbook.life/ja/policies/term`
		);
		if (sendEmailError instanceof Error) {
			error(500, sendEmailError.message);
		}

		return {};
	}
};
