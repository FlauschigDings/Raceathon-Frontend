<script lang="ts">
	import waves from "@image/layered-waves-haikei.svg";

	let className = "";
	export { className as class }
</script>

<div class="flex flex-col bg-slate-700 h-full relative overflow-hidden rounded-2xl z-10 shadow {className}">
	<div class="
		w-full h-full
		absolute -z-10
		opacity-10 bg-center
		bg-cover
		rotate-180
		grayscale
		rounded-2xl"
		style="background-image: url({waves})"
	/>
	<div class="p-4 flex flex-col h-full">
		<h4 class="text-xl">
			<slot name="title"/>
		</h4>
		<div class="z-30 overflow-auto h-full">
			<slot/>
		</div>
	</div>
</div>