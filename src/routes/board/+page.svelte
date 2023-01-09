<script lang="ts">
	import type { Task } from '@prisma/client';
	import type { ResponseMany } from 'src/types/response';
	import Board from './board.svelte';

	export let data: ResponseMany<Task>;
</script>

<Board tasks={data.result} />
