import { writable } from "svelte/store";

export interface Menu {
	menu: any
	args: any
	position: Position
}


const ctxMenu = writable<Menu | null>(null)

export default ctxMenu