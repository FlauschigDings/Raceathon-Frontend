<script>
	import Button from "../../../components/Button/Button.svelte";
	import Card from "../../../components/Card/Card.svelte";

	let show = false

	function changeShow() {
		show = !show
	}

</script>

<style>
	@keyframes fade-in {
		from { height: 0px; opacity: 0; }
		to { height: 16rem; opacity: 1; }
	}

	@keyframes fade-out {
		from { height: 16rem; opacity: 1; }
		to { height: 0px; opacity: 0; }
	}

	.fade-in-animation {
		animation: fade-in .25s;
	}

	.fade-out-animation {
		animation: fade-out .25s;
	}
</style>

<div class="flex max-lg:flex-col lg:flex-row-reverse gap-2">
	<Card>
		<span slot="head">
		</span>
		<span slot="body">
			<div class="flex flex-wrap max-md:items-center max-md:flex-col-reverse">
				<div class="flex-1 min-w-[60%] p-4">
					<h4 class="text-3xl mb-2">Lorem ipsum dolor</h4>
					<p class="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora dignissimos excepturi at necessitatibus, sed facere molestias ex, porro in quas culpa et omnis eius, tenetur laboriosam corrupti. Ipsum, deserunt?</p>
					<p class="py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quas nostrum ipsum at suscipit doloremque, illo eius? Distinctio laudantium cum fuga quidem earum dolorum voluptatum, ab recusandae debitis obcaecati asperiores?</p>
				</div>
				<div class="max-md:w-64 w-[25%] max-w-sm">
					<img
					src="/api/qr"
					class="mx-auto transition
					{show ? "fade-in-animation" : "fade-out-animation max-md:h-0"}"
					alt=""
					>
				</div>
				<Button class="bg-indigo-500 px-4 py-2 md:hidden mb-4" click={changeShow}>
					QR-Code Anzeigen
				</Button>
			</div>
		</span>
	</Card>
</div>

<!-- <div class="flex justify-between items-center">
	<h3 class="text-lg">
		QR-Code
	</h3>
	<Button
		class="bg-indigo-500 py-1.5 px-2 lg:invisible"
		click={changeShow}
	>
		Anzeigen
	</Button>
</div>
<img
	src="/api/qr"
	class="h-64 w-64 mt-2 mx-auto transition
		   {show ? "fade-in-animation" : "fade-out-animation max-lg:h-0"}"
	alt=""
> -->