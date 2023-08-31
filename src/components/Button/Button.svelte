<script lang="ts">
	let className = '';
	export { className as class }
	export let style: string = ""
	export let click: () => void = () => {}
</script>

<button
	style={style}
	class="flex items-center justify-center rounded p-4 p-2
		   focus:translate-y-[0.075rem]
		   hover:opacity-90 transition-all duration-75
		   {className}
	"
	on:click={click}
>
	<slot/>
</button>