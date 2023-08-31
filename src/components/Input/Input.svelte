<script lang="ts">
	type HTMLInputTypeAttribute =
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week'
	| (string & {});

	export let label: string
	export let value: string
	export let type: HTMLInputTypeAttribute

	function typeAction(node) {
		node.type = type;
	}
</script>

<div class="relative flex mb-5 w-full">
	<input 
		bind:value
		class="
			flex-1 p-3 border border-white/25 bg-transparent rounded-md outline-none text-white text-base
			peer
			valid:border-indigo-500
			focus:border-indigo-500
		"
		use:typeAction
		required
	>
	<span class="
		absolute
		left-0
		p-3
		translate-x-[.2em]
		translate-y-[.05em]
		pointer-events-none
		uppercase
		text-base
		text-white/25
		transition-all
		duration-200
		border-transparent
		peer-valid:translate-x-2 peer-valid:translate-y-[-.5rem] peer-valid:text-xs peer-valid:py-0
		peer-focus:translate-x-2 peer-focus:translate-y-[-.5rem] peer-focus:text-xs peer-focus:py-0
		peer-focus:bg-indigo-500
		peer-focus:text-white
		peer-valid:bg-indigo-500
		peer-valid:text-white
		rounded-sm
	">{label}</span>
</div>
<!-- <div class="relative flex mb-3">
	<input class="
		w-100 p-3 border border-white/25 bg-transparent rounded-md outline-none text-white text-base
		peer
		valid:border-indigo-500
		focus:border-indigo-500
	" type="text"
	required
	>
	<span class="
		absolute
		left-0
		p-3
		translate-x-[.2rem]
		translate-y-[.09rem]
		pointer-events-none
		uppercase
		text-base
		text-white/25
		transition-all
		border-transparent
		peer-valid:text-indigo-500 peer-valid:translate-x-2 peer-valid:translate-y-[-.5rem] peer-valid:text-xs peer-valid:py-0
		peer-focus:text-indigo-500 peer-focus:translate-x-2 peer-focus:translate-y-[-.5rem] peer-focus:text-xs peer-focus:py-0
		peer-focus:border-l peer-focus:border-indigo-500
		peer-focus:border-r
		peer-valid:border-l peer-valid:border-indigo-500
		peer-valid:border-r
		bg-gray-900
	">Option 2</span>
</div> -->