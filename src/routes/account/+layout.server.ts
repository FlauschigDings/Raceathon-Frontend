import { redirect } from "@sveltejs/kit"
import AiFillHome from "svelte-icons-pack/ai/AiFillHome";
import AiFillHeart from "svelte-icons-pack/ai/AiFillHeart";
import TiGroup from "svelte-icons-pack/ti/TiGroup";
import AiFillDollarCircle from "svelte-icons-pack/ai/AiFillDollarCircle";

export interface Path {
	url: string
	icon: any
}

export interface Registry {
	[key: string]: Path
}

export interface ServerState {
	selected: Path
	paths: Path[]
}

const paths: Registry = {
	home: {
		url: "home",
		icon: AiFillHome,
	},
	sponsor: {
		url: "sponsor",
		icon: AiFillHeart,
	},
	groups: {
		url: "groups",
		icon: TiGroup,
	},
	sponsorhub: {
		url: "sponsorhub",
		icon: AiFillDollarCircle,
	}
}

export function load({ url }): ServerState {

	const path = url.pathname.replaceAll("/account", "")
	const name = path.replaceAll("/", "")

	
	if (path === '') {
		throw redirect(303, "/account/"+paths.home.url)
	}

	const currentPath = Object.entries(paths).find(([k, v]) => k === name)[1]
	const objects = Object.values(paths)

	return {
		selected: currentPath,
		paths: objects,
	}
}
