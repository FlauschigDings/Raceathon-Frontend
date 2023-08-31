<script lang="ts">
	import { onMount } from "svelte";
	import Loader from "../../components/Loader/Loader.svelte";

	onMount(() => {
		const value = window.location.hash.substring(1)
		submitData(value, "/api/qr")
	});

	async function submitData(value: string, url: string) {
		const formData = new FormData()
		formData.append("code", value)

		await fetch(url, {
			method: "POST",
			body: formData,
			redirect: 'follow',
		})
		window.location.href = url
	}
</script>

<div class="absolute top-0 left-0 right-0 bottom-0 grid place-items-center overflow-hidden">
	<Loader/>
</div>
