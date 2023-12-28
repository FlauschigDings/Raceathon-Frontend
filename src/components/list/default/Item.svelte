<script lang="ts">

	let className: string = ""
	export { className as class }

</script>

<li>
	<div class={className}>
		<slot/>
	</div>
	<div class="rounded-full h-0.5 bg-slate-400/20"></div>
</li>