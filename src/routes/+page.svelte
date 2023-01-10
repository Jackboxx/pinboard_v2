<script lang="ts">
	import type { User } from '@prisma/client';
	import { userStore } from 'src/state/user';
	import type { ResponseOne } from 'src/types/response';
	import { onMount } from 'svelte';

	export let data: ResponseOne<User | undefined>;
	userStore.subscribe((v) => console.log(v));

	onMount(() => {
		userStore.set(data.result);
		window.location.href = data.result ? '/board' : 'auth/login';
	});
</script>
