<script>
	import IconButton from "@components/Button/IconButton.svelte";
	import { ButtonDesign, IconDesign } from "@components/Button/button";
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
	import FaSolidToilet from "svelte-icons-pack/fa/FaSolidToilet";
	import FaSolidMoneyCheckAlt from "svelte-icons-pack/fa/FaSolidMoneyCheckAlt";
	import FiAperture from "svelte-icons-pack/fi/FiAperture";
	import WiDayStormShowers from "svelte-icons-pack/wi/WiDayStormShowers";
	import SiActigraph from "svelte-icons-pack/si/SiActigraph";
	import VscBug from "svelte-icons-pack/vsc/VscBug";
	import RiHealthInfraredThermometerLine from "svelte-icons-pack/ri/RiHealthInfraredThermometerLine";
</script>

<Meta title="Button/IconButton" component={IconButton}/>

<Template let:args>
	<div class="block">
		<IconButton type="button" {...args} class="my-1 text-xs" icon={ FaSolidToilet } iconDesign={IconDesign.SECONDARY}>
			{args.label}
		</IconButton>
		<IconButton type="button" {...args} class="my-1 text-sm" icon={ FaSolidMoneyCheckAlt } iconDesign={IconDesign.PRIMARY}>
			{args.label}
		</IconButton>
		<IconButton type="button" {...args} class="my-1 text-base" icon={ FiAperture } iconDesign={IconDesign.SECONDARY}>
			{args.label}
		</IconButton>
		<IconButton type="button" {...args} class="my-1 text-lg" icon={ WiDayStormShowers } iconDesign={IconDesign.PRIMARY}>
			{args.label}
		</IconButton>
		<IconButton type="button" {...args} class="my-1 text-xl" icon={ VscBug } iconDesign={IconDesign.SECONDARY}>
			{args.label}
		</IconButton>
		<IconButton type="button" {...args} class="my-1 text-2xl" icon={ RiHealthInfraredThermometerLine } iconDesign={IconDesign.PRIMARY}>
			{args.label}
		</IconButton>
	</div>
</Template>

<Story name="Primary"   args={{ label: "Primary",   design: ButtonDesign.PRIMARY  }}/>
<Story name="Secondary" args={{ label: "Secondary", design: ButtonDesign.SECONDARY}}/>
<Story name="Success"   args={{ label: "Success",   design: ButtonDesign.SUCCESS  }}/>
<Story name="Warning"   args={{ label: "Warning",   design: ButtonDesign.WARNING  }}/>
<Story name="Danger"    args={{ label: "Danger",    design: ButtonDesign.DANGER   }}/>
<Story name="Info"      args={{ label: "Info",      design: ButtonDesign.INFO     }}/>
<Story name="Pending"   args={{ label: "Pending",   design: ButtonDesign.PENDING  }}/>