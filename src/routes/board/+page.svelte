<script lang="ts">
	import type { Board, Status, Task } from '@prisma/client';
	import type { ResponseOne } from 'src/types/response';
	import BoardComponent from './board.svelte';

	export let data: ResponseOne<Board & { tasks: Task[]; statuses: Status[] }>;
</script>

<BoardComponent board={data.result} />
