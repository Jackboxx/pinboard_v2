<script lang="ts">
	import type { Board, Status, Task } from '@prisma/client';
	import TaskComponent from './task.svelte';

	export let board: Board & { tasks: Task[]; statuses: Status[] };
</script>

<div>
	<div class="flex justify-around">
		{#each board.statuses as status}
			<div class="flex flex-col">
				<span class="m-2 p-2 text-center bg-blue-800 rounded">{status.name}</span>
				{#each board.tasks.filter((task) => task.statusId == status.id) as task}
					<TaskComponent title={task.title} description={task.description} />
				{/each}
			</div>
		{/each}
	</div>
</div>
