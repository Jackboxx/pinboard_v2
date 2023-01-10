<script lang="ts">
	export let value: string;
	export let name: string;
</script>

<input
	bind:value
	{name}
	class="w-full bg-gray-600 rounded h-[42px] p-2 focus:outline-none focus:outline-violet-600"
/>
