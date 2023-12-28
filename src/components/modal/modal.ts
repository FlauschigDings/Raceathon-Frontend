import type { EventDispatcher } from "svelte"
import { writable } from "svelte/store"

export interface Modal {
	component: any
	args?: any
	dispatcher?: EventDispatcher<any>
}

export default writable<Modal | null>(null)