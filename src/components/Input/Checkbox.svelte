<script lang="ts">
	export let label: string
</script>

<style>
	.testr:checked:before {
		border-width: 0 2px 2px 0;
		transform: rotate(45deg);
	}
</style>

<label class="flex justify-center items-center">
	<input
		type="checkbox"
		class="
			h-5
			w-5
			appearance-none relative border-0 outline-0 cursor-pointer me-2
			after:content-['']
			after:w-full
			after:h-full
			after:border after:border-white/25
			after:rounded-md
			after:inline-block
			after:clear-both
			checked:after:border-indigo-500
			transition-all
			after:transition-all
			
			before:content-['']
			before:absolute before:top-0 before:left-0.5 before:right-0 before:bottom-0.5
			before:m-auto
			before:w-1.5
			before:h-3
			checked:before:border-2 checked:before:border-white
			testr
		"
	>
	<span class="text-md flex-1">{label}</span>
</label>