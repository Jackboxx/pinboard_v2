<script lang="ts">
	import Board from './board.svelte';

	export let data: { result: { title: string; description: string | undefined }[] };
</script>

<Board tasks={data.result} />
