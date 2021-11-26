<!--<script>-->
<!--	let buscador;-->
<!--	const buscar = async () => {-->
<!--		const respuesta = await fetch(`/api/buscar/${buscador.value}`);-->
<!--		const peliculas = await respuesta.json();-->
<!--		console.log(peliculas);-->
<!--	};-->
<!--</script>-->

<!--<section>-->
<!--	<div>-->
<!--		<h1 class='text-3xl bg-indigo-700 text-yellow-400 text-center	p-5'>-->
<!--			Buscador de Gif´s y Sticker´s-->
<!--		</h1>-->
<!--		<div class='py-8 mx-2 grid grid-cols-10 gap-10'>-->
<!--			<div class='text-gray-700 text-sm font-bold-->
<!--			 				col-span-2 text-center py-5'>-->
<!--				Gif´s o Sticker´s-->
<!--			</div>-->
<!--			<input class='shadow appearance-none border rounded w-full py-2 px-3-->
<!--						 text-gray-700 leading-tight focus:outline-none-->
<!--						 focus:shadow-outline col-span-6'-->
<!--						 id='inputBusqueda' type='text'-->
<!--						 bind:value={buscador}-->
<!--						 placeholder='Ingrese el Gif o Sticker que desea buscar'>-->

<!--			<button on:click={buscar}-->
<!--							class='bg-blue-500 hover:bg-blue-700 text-white font-bold-->
<!--							py-2 px-4 rounded col-span-2'>-->
<!--				Buscar-->
<!--			</button>-->
<!--		</div>-->
<!--	</div>-->
<!--</section>-->

<script>
	import {goto} from '$app/navigation';
	var searched = '';
	const search = () => {
		goto(`${searched}`)
	}
</script>

<section>
	<div class="flex flex-col items-center justify-center">
		<div class="text-5xl text-center text-white font-semibold mb-12">Search an artist</div>
		<div class="w-full flex rounded-md bg-white bg-opacity-20 p-1 border border-white border-opacity-30">
			<input class="w-4/5 bg-transparent text-white" type="text" bind:value={searched}>
			<button class="w-1/5 p-2 rounded-md bg-white font-medium" on:click={search}>Search</button>
		</div>

	</div>
</section>