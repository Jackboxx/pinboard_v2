<script lang="ts">
	import Task from './task.svelte';

	export let tasks: { title: string; description: string | undefined }[];
</script>

<div class="bg-gray-700 w-full h-full">
	{#each tasks as task}
		<Task title={task.title} description={task.description} />
	{/each}
</div>
