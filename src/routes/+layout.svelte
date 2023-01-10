<script lang="ts">
	import '../app.css';
	import Header from './header.svelte';
</script>

<div class="flex flex-col bg-gray-700  h-[100vh]">
	<Header />
	<slot />
</div>

<style>
	* {
		color: white;
	}
</style>
