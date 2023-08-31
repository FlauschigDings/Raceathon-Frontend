<script lang="ts">
	export let label: string
</script>

<label class="flex justify-center items-center">
	<input
		type="checkbox"
		class="
			h-5
			w-11
			appearance-none relative border-0 outline-0 cursor-pointer m-2
			after:content-['']
			after:w-full
			after:h-full
			after:bg-indigo-800/50 after:inline-block
			after:rounded-full after:clear-both

			before:content-[''] before:w-5 before:h-5
			before:left-0 before:scale-[1.20]
			before:absolute
			before:bg-indigo-100
			before:block before:rounded-full

			checked:before:left-6
			checked:after:bg-indigo-600
			transition-all
			before:transition-all
			after:transition-all
		"
	>
	<span class="text-md">{label}</span>
</label>