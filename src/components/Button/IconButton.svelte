<script lang="ts">
	import { ButtonDesign, IconDesign} from "./button";
    import Button from "./Button.svelte";
	import Icon from 'svelte-icons-pack/Icon.svelte';

	let className = '';
	export { className as class }
	export let style: string = ""
	export let name: string | undefined = undefined
	export let formaction: string | undefined = undefined
	export let disabled: boolean = false

	export let design: ButtonDesign = ButtonDesign.UNSTYLED
    export let iconDesign: IconDesign = IconDesign.UNSTYLED

	export let icon: any | undefined = undefined
 
    const iconDesigns = {
		[ButtonDesign.UNSTYLED]:  "",
		[ButtonDesign.PRIMARY]:   "fill-white",
		[ButtonDesign.SECONDARY]: "fill-black",
	}

    $: iconDesignState = iconDesigns[iconDesign]

</script>

<Button
    design={design}
	formaction={formaction}
	name={name}
	disabled={disabled}
	style={style}
	class={className}
>
	{#if icon}<p class={`inline ${iconDesignState}`}><Icon src={icon}/></p>{/if}
	<slot/>
</Button>