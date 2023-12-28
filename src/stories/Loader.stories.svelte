<script>
	import Button from "@components/Button/Button.svelte";
    import { ButtonDesign } from "@components/Button/button";
    import Loader from "@components/Loader/Loader.svelte";
    import { Size } from "@components/Loader/loader";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Meta title="Loader" component={Loader}/>

<Template let:args>
	<div class="flex flex-col gap-1">
		<Loader size={Size.SM} />
		<Loader size={Size.MD} />
	</div>
</Template>

<Story name="Loader" args={{ label: "Loader", design: ButtonDesign.PRIMARY }}/>