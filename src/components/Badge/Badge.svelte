<script lang="ts">
	import { Badges } from "./badge";

	export let badge: Badges = Badges.SUCCESS
</script>

<span class="text-xs rounded-md px-2 py-0.5 border {badge}">
	<slot/>
</span>