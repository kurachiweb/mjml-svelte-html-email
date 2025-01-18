export function renderTextEmailBody(bodyMain: string, actionLabel: string) {
	return [
		'KurachiWeb',
		'',
		'',
		bodyMain,
		'',
		`■ ${actionLabel} ■`,
		'https://kurachiweb.com/?signUpLinkHere=bf3e9a03f795a375084b06f54b5cc7eafb0c4316371965b84f912f0acce75bb2',
		'',
		'',
		'',
		'Footer text here',
		'',
		'FooBar Inc.',
		'',
		'Term of Use',
		'https://shortbook.life/ja/policies/term'
	].join('\n');
}
