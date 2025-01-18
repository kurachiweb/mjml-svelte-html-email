import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { sendEmail } from '$lib/email';
import { render } from 'svelte/server';
import EmailTemplateHtml from '$lib/email-template-html.svelte';
import { renderTextEmailBody } from '$lib/email-template-text';

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

		const bodyHtml = render(EmailTemplateHtml, {
			props: { bodyMain, actionLabel }
		});

		const { sendEmailError } = await sendEmail(
			'KurachiWeb',
			env.EMAIL_FROM,
			[emailTo],
			'Email send from Svelte test',
			bodyHtml.body,
			renderTextEmailBody(bodyMain, actionLabel)
		);
		if (sendEmailError instanceof Error) {
			error(500, sendEmailError.message);
		}

		return {};
	}
};
