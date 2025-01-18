<script lang="ts">
	type Props = {
		bodyMain: string;
		actionLabel: string;
	};
	let { bodyMain, actionLabel }: Props = $props();
</script>

<div style:margin="0 auto" style:max-width="600px">
	<h1 style:font-size="48px" style:margin-bottom="32px" style:text-align="center">
		<a
			href="https://kurachiweb.com/"
			target="_blank"
			style:color="inherit"
			style:text-decoration="none">KurachiWeb</a
		>
	</h1>
	<div style:font-size="24px" style:margin-bottom="16px">
		{#each bodyMain.split('\n') as line}
			<p style:margin-bottom="8px">{line}</p>
		{/each}
	</div>
	<p style:margin-bottom="64px" style:text-align="center">
		<a
			href="https://kurachiweb.com/?signUpLinkHere=bf3e9a03f795a375084b06f54b5cc7eafb0c4316371965b84f912f0acce75bb2"
			style:background-color="#b5420e"
			style:color="#fff"
			style:display="inline-block"
			style:font-size="32px"
			style:font-weight="bold"
			style:padding="12px 16px"
			style:text-decoration="none">{actionLabel}</a
		>
	</p>
	<div style:font-size="14px" style:text-align="center">
		<p style:margin-bottom="8px">Footer text here</p>
		<p style:margin-bottom="8px">FooBar Inc.</p>
		<p><a href="https://shortbook.life/ja/policies/term" target="_blank">Term of Use</a></p>
	</div>
</div>
