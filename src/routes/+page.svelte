<script lang="ts">
	let isSubmitting = $state(false);
	function onSubmit() {
		isSubmitting = true;
	}
</script>

<svelte:head>
	<title>Send an email example using Svelte</title>
</svelte:head>

<form method="POST" action="/" class="mx-auto max-w-xl p-4 py-8 sm:px-8" onsubmit={onSubmit}>
	<h1 class="mb-1 text-2xl font-semibold">Send an HTML email using Svelte</h1>
	<p class="mb-8">
		by <a href="https://github.com/kurachiweb" target="_blank" class="text-blue-700 underline"
			>KurachiWeb</a
		>
	</p>
	<label class="mb-8 block">
		<p class="mb-2">Your email address</p>
		<input
			type="email"
			name="email"
			required
			maxlength="254"
			class="w-full border border-stone-500 p-2"
			placeholder="your@email.example"
		/>
	</label>
	<label class="mb-8 block">
		<p class="mb-2">Body</p>
		<textarea
			name="body"
			required
			class="h-48 w-full border border-stone-500 p-2"
			placeholder="Input email body"
			defaultValue="Sign up is almost complete."
		></textarea>
	</label>
	<label class="mb-8 block">
		<p class="mb-2">Action-link label</p>
		<input
			name="action"
			required
			maxlength="32"
			class="w-full border border-stone-500 p-2"
			defaultValue="Sign up"
		/>
	</label>
	<button
		disabled={isSubmitting}
		class="bg-orange-200 px-4 py-3 text-lg disabled:cursor-not-allowed [&:not(:disabled)]:hover:bg-orange-300"
		>Send email</button
	>
</form>
