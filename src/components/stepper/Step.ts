export enum StepState {
	FINISHED = "finished",
	PROCESS = "process",
	PENDING = "pending",
}

export interface Step {
	title: string
	description: string
}