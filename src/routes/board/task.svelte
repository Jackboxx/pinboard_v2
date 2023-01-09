<script lang="ts">
	export let title: string;
	export let description: string | undefined = undefined;
</script>

<div class="w-[300px] h-[200px] rounded m-4 bg-gray-800">
	<div class="w-full h-[40px] truncate p-2 rounded bg-violet-600">{title}</div>
	<div class="p-2 break-all truncate">{description ?? ''}</div>
</div>
