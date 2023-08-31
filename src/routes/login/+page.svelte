<script lang="ts">
	import { onMount } from "svelte";
	import Button from "../../components/Button/Button.svelte";
	import OAuthButton from "../../components/Button/OAuthButton.svelte";
	import Checkbox from "../../components/Input/Checkbox.svelte";
	import Input from "../../components/Input/Input.svelte";
	import image from './ComfyUI_00016__-0_2.png'

	export let data;

	let value: string

	onMount(() => {
	})

</script>

<div class="h-full grid place-items-center">
	<div class="flex flex-wrap justify-center w-3/6 max-md:w-9/12 gap-6 2xl:justify-between items-center">
		<div class="xl:h-80 grayscale max-sm:h-20 h-40">
			<img class="max-w-full max-h-full" src={image} alt="cat">
		</div>
		
		<form class="w-5/12 flex flex-col max-2xl:w-10/12 max-sm:w-full mx-auto">
			<div class="flex flex-col">
				<Input label="E-Mail Adresse" bind:value type="text" />
				<Input label="Passwort" bind:value type="password" />
				<div class="flex justify-between items-center mb-4">
					<Checkbox label="Angemeldet bleiben" />
					<a href="/reset-password" class="hover:opacity-90 text-indigo-400 ms-8">Passwort Vergessen?</a>
				</div>
				<Button class="bg-indigo-500 mt-3">Login</Button>
			</div>
			<!-- OAuth -->
			<div>
				<div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300/75 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300/75">
					<span class="uppercase px-5 text-white/75">oder</span>
				</div>
				{#each data.providers as provider}
				<OAuthButton
					name={provider.Name}
					color={provider.Color}
					image={provider.Image}
					oauthLink={provider.OauthLink}
				/>
				{/each}
				<!-- <OAuthButton
					name="Google"
					color="#AC3A3A"
					image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F53%2FGoogle_%2522G%2522_Logo.svg%2F1024px-Google_%2522G%2522_Logo.svg.png&f=1&nofb=1&ipt=873bd87054046991e6bf856af6407f6ae3b6d64b69d29dd0969a5dc0d2eb7b41&ipo=images"
					oauthLink={"/api/v1/o/google/login"}
				/>
				<OAuthButton
					name="Facebook"
					color="#4267B2"
					image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogopng.com.br%2Flogos%2Ffacebook-13.png&f=1&nofb=1&ipt=d5f2e0809a5d6e1e3c093f7209debdb3f27b91edfe0183e3ebd3bac7e238c622&ipo=images"
				/>
				<OAuthButton
				name="Microsoft"
				color="#016490"
				image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png&f=1&nofb=1&ipt=254c8996031669efc5a3b7b277c2750993cb79351ae819842ee630289008cc17&ipo=images"
				/> -->
			</div>
		</form>
	</div>
</div>