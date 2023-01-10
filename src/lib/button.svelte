<script lang="ts">
	export let text: string;
	export let onClick: () => void;
	export let disabled = false;
	export let formaction = '';
</script>

<button
	on:click={() => {
		if (!disabled) onClick();
	}}
	on:keydown={() => undefined}
	class={`flex justify-center items-center w-full h-[64px] rounded 
    ${!disabled ? 'bg-violet-600 hover:bg-violet-500 hover:cursor-pointer' : 'bg-gray-400'}`}
	{formaction}
>
	<span class="text-4xl p-4 font-medium">{text}</span>
</button>
