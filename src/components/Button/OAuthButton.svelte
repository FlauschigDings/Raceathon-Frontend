<script lang="ts">
	export let name: string
	export let color: string // hex
	export let image: string
	export let oauthLink: string = "#oauth"

	$: hexColor = `${color}F0`

</script>

<a
	style="background-color: {hexColor};
	--tw-shadow-color: {hexColor};
	--tw-shadow: var(--tw-shadow-colored);
	"
	class="w-full flex items-center justify-center rounded py-3
		   focus:translate-y-[0.075rem]
		   hover:opacity-90 transition-all duration-75
		   mb-4 shadow
	"
	href={oauthLink}
>
	<img class="mr-2 h-5 w-5" src={image} alt="">
	<span>{name}</span>
</a>