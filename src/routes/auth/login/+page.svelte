<script lang="ts">
	import Button from '$lib/button.svelte';
	import Input from '$lib/input.svelte';
	import Loading from '$lib/loading.svelte';
	import AuthCard from '../authCard.svelte';

	let email: string;
	let password: string;

	let loading = false;
</script>

<AuthCard>
	<div class="mb-4 text-5xl w-full text-center">Login</div>
	<div class="m-2">
		<div class="mb-2 text-xl">Email</div>
		<Input bind:value={email} />
	</div>
	<div class="m-2">
		<div class="mb-2 text-xl">Password</div>
		<Input bind:value={password} />
	</div>

	<div class="m-2 mt-8">
		<Button text={'Register'} onClick={() => undefined} disabled={!password || !email} />
	</div>

	{#if loading}
		<div class="mt-16 flex justify-center">
			<Loading />
		</div>
	{/if}
</AuthCard>
