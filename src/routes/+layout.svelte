<script lang="ts">
	import './app.scss';

	// function randomScreenPosition(): [number, number] {
	// 	return [getRandomIntInclusive(0, window.innerWidth), getRandomIntInclusive(0, window.innerHeight)]
	// }

	// function getRandomIntInclusive(min, max) {
	// 	min = Math.ceil(min);
	// 	max = Math.floor(max);
	// 	return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
	// }


	// function randomSize(): [number, number] {
	// 	const num = getRandomIntInclusive(400, 500)
	// 	const scale = getRandomIntInclusive(1, 5)
	// 	return [num, num/scale]
	// }

	// function rotation(): number {
	// 	return getRandomIntInclusive(0, 360)
	// }

	const list: {
		screen: [number, number],
		size: [number, number],
		rotation: number
	}[] = [{"screen":[28.385416666666668,4.0358744394618835],"size":[21.979166666666668,9.46188340807175],"rotation":20},{"screen":[63.072916666666664,26.569506726457398],"size":[25.677083333333332,13.81726457399103],"rotation":67},{"screen":[7.5,43.38565022421525],"size":[24.895833333333332,53.58744394618834],"rotation":247},{"screen":[85.88541666666667,48.654708520179376],"size":[25.364583333333336,27.298206278026903],"rotation":82}]
</script>

<div class="absolute overflow-hidden w-screen h-screen -z-10">
	<!-- <pre class="z-40 pointer-events-auto">
		{JSON.stringify(list2)}
	</pre> -->
	<div class="
		bg-repeat
		left-0
		top-0
		bottom-0
		right-0
		absolute
		bg-[length:45%]
		invert
		opacity-10
		bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7d%2Fec%2F3a%2F7dec3a3708da693b08461cb95bd5ab18.png&f=1&nofb=1&ipt=3e222ddf69e33aa7c45451e16120b0f526957bfe0bbb58df321810a644c951f6&ipo=images')]">
	</div>
	{#each list as l}
		<div
			style="transform: rotate({l.rotation}deg); width: {l.size[0]}%; height: {l.size[1]}%;left: {l.screen[0]}%; top: {l.screen[1]}%;"
			class="absolute from-blue-600 via-fuchsia-500 to-rose-500 bg-gradient-to-r blur-[1000em] opacity-20"
		>
		</div>
	{/each}
</div>

<slot/>