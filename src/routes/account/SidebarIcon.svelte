<script lang="ts">
	let className: string = ""

	export let url: string
	export let last: boolean = false
	export let selected: boolean = false

	$: lastStyle = last ? "border-none" : ""
	$: selectedStyle = selected ? "bg-indigo-500" : ""

</script>

<li class="contents">
	<a
		href={url}
		class="
		{lastStyle}
		{selectedStyle}
		max-md:border-x md:border-b
		max-md:flex-1
		md:h-16 md:w-16 border-white/10 grid place-items-center
		cursor-pointer
		hover:bg-indigo-500/75 transition-all duration-100
		outline-none
		"
	>
		<slot class="pointer-events-none"/>
	</a>
</li>
