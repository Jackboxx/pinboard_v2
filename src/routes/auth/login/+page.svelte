<script lang="ts">
	import Button from '$lib/button.svelte';
	import Input from '$lib/input.svelte';
	import Loading from '$lib/loading.svelte';
	import { onMount } from 'svelte';
	import AuthCard from '../authCard.svelte';
	import type { ActionData } from '../$types';

	export let form: ActionData;

	onMount(() => {
		if (form?.success) {
			window.location.href = '/';
		}
	});

	let email: string;
	let password: string;

	let loading = false;
</script>

<AuthCard>
	<form method="POST">
		<div class="mb-4 text-5xl w-full text-center">Login</div>
		<div class="m-2">
			<div class="mb-2 text-xl">Email</div>
			<Input bind:value={email} name="email" />
		</div>
		<div class="m-2">
			<div class="mb-2 text-xl">Password</div>
			<Input bind:value={password} name="password" />
		</div>

		<div class="m-2 mt-8">
			<Button
				formaction="..?/login"
				text={'Login'}
				onClick={() => {
					loading = true;
				}}
				disabled={!password || !email}
			/>
		</div>

		{#if loading}
			<div class="mt-16 flex justify-center">
				<Loading />
			</div>
		{/if}
	</form>
</AuthCard>
