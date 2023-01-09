<script lang="ts">
	import type { Task } from '@prisma/client';
	import TaskComponent from './task.svelte';

	export let tasks: Task[];
</script>

<div class="bg-gray-700 w-full h-full">
	{#each tasks as task}
		<TaskComponent title={task.title} description={task.description} />
	{/each}
</div>
