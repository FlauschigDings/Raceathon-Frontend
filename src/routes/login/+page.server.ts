import type { Load } from "@sveltejs/kit";

interface OauthProvider {
	Name: string
	Color: string
	Image: string
	OauthLink: string
}

// const oauthProviders = {
// 	"Google": {
// 		color: "#AC3A3A",
// 		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F53%2FGoogle_%2522G%2522_Logo.svg%2F1024px-Google_%2522G%2522_Logo.svg.png&f=1&nofb=1&ipt=873bd87054046991e6bf856af6407f6ae3b6d64b69d29dd0969a5dc0d2eb7b41&ipo=images",
// 	},
// 	"Facebook": {
// 		color: "#4267B2",
// 		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogopng.com.br%2Flogos%2Ffacebook-13.png&f=1&nofb=1&ipt=d5f2e0809a5d6e1e3c093f7209debdb3f27b91edfe0183e3ebd3bac7e238c622&ipo=images",
// 	},
// 	"Microsoft": {
// 		color: "#016490",
// 		image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png&f=1&nofb=1&ipt=254c8996031669efc5a3b7b277c2750993cb79351ae819842ee630289008cc17&ipo=images",
// 	}
// }

export const load: Load = async ({ fetch }) => {
	const request = await fetch("/api/v1/o/list")
	const providers = await request.json() as OauthProvider[]

	console.log(providers)

	const mappedProviders = providers.map(e => {
		const Name = capitalizeFirstLetter(e.Name)
		return ({
			...e,
			// ...oauthProviders[Name],
			Name,
		})
	})

	return {
		providers: mappedProviders
	}
}

function capitalizeFirstLetter(name: string) {
	return name.charAt(0).toUpperCase() + name.slice(1)
  }
  