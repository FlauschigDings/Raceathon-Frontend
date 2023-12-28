<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import BsClipboard2 from "svelte-icons-pack/bs/BsClipboard2";
	import BsClipboard2Check from "svelte-icons-pack/bs/BsClipboard2Check";

	import Button from "./Button.svelte";
	import { ButtonDesign } from "./button";

	export let name1: string = "Kopieren"
	export let name2: string = "Kopiert"

	export let clipText: string

	$: state = true
	$: stateText = (state)? name1 : name2;

	function copy(str: string) {
		state = false
		copyToClipboard(str)
		setTimeout(() => {
			state = true
		}, 2e3)
	}
	
	function copyToClipboard(str: string) {
		navigator.clipboard.writeText(str);
	}
</script>

<Button design={ButtonDesign.SECONDARY} on:click={() => copy(clipText)}>
	<Icon className="fill-white mr-1" src={(state)? BsClipboard2 : BsClipboard2Check}/>{stateText}
</Button>