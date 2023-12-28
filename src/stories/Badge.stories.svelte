<script>
	import '../global.css'
	import Badge from "@components/Badge/Badge.svelte";
	import { Badges } from '@components/Badge/badge';
	import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Meta title="Badge" component={Badge}/>

<Template let:args>
	<Badge badge={Badges.PRIMARY}>
		Primary
	</Badge>
	<Badge badge={Badges.SECONDARY}>
		Secondary
	</Badge>
	<Badge badge={Badges.SUCCESS}>
		Success
	</Badge>
	<Badge badge={Badges.WARNING}>
		Warning
	</Badge>
	<Badge badge={Badges.DANGER}>
		Danger
	</Badge>
	<Badge badge={Badges.INFO}>
		Info
	</Badge>
	<Badge badge={Badges.PENDING}>
		Pending
	</Badge>
</Template>

<Story name="Badge" args={{}}/>