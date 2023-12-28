<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { ButtonDesign } from "./button";

	const dispatcher = createEventDispatcher()

	let className = '';
	export { className as class }
	export let style: string = ""
	export let name: string | undefined = undefined
	export let formaction: string | undefined = undefined
	export let disabled: boolean = false

	export let design: ButtonDesign = ButtonDesign.UNSTYLED

	const designs = {
		[ButtonDesign.UNSTYLED]:  "",
		[ButtonDesign.PRIMARY]:   "bg-primary-500 px-3 py-2",
		[ButtonDesign.SECONDARY]: "bg-secondary-500 px-3 py-2",

		[ButtonDesign.SUCCESS]:   "bg-success-500 px-3 py-2",
		[ButtonDesign.WARNING]:   "bg-warning-400 px-3 py-2",
		[ButtonDesign.DANGER]:   "bg-danger-500 px-3 py-2",
		[ButtonDesign.INFO]:   "bg-info-500 px-3 py-2",

		[ButtonDesign.PENDING]:   "bg-pending-700 px-3 py-2",
	}

	$: buttonDesign = designs[design]

</script>

<button
	formaction={formaction}
	name={name}
	disabled={disabled}
	style={style}
	class={`font-sans text-base flex items-center justify-center rounded
		   focus:translate-y-[0.075rem]
		   hover:opacity-90 transition-all duration-75
		   ${className}
		   ${buttonDesign}
	`}
	on:click={() => dispatcher('click')}
>
	<slot/>
</button>