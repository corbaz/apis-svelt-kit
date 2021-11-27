<!--</section>-->
<script>
	import { goto } from '$app/navigation';
	import logo from '/mundo.gif';

	let artista_buscado = '';
	const search = () => {
		goto(`${artista_buscado}`);
	};
</script>

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

<section class="">
	<div class="flex flex-col items-center justify-center">
		<div
			class="text-3xl
		 						md:text-5xl
		 						text-center text-white font-semibold mb-5"
		>
			{artista_buscado.length > 0 ? artista_buscado : 'Buscar un Artista'}
			<div
				class="w-full flex flex-row justify-between
		 rounded-md bg-white bg-opacity-20 p-1 gap-1
								border border-white border-opacity-30"
			>
				<input
					class="w-full px-2 bg-transparent text-white"
					type="text"
					bind:value={artista_buscado}
					on:keydown={(evento) => {
						if (evento.keyCode !== 13) return;
						search();
					}}
				/>
				<button on:click={search}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="text-red-400 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
			<div class="w-full pt-10 flex justify-center">
				<img src={logo} alt="logo" class="h-60 w-60" />
			</div>
		</div>
	</div>
</section>

<style>
	button {
		--glow-color: rgb(217, 176, 255);
		--glow-spread-color: rgba(191, 123, 255, 0.781);
		--enhanced-glow-color: rgb(231, 206, 255);
		--btn-color: rgb(100, 61, 136);
		outline: none;
		border: 0.25em solid var(--glow-color);
		padding: 1em;
		color: var(--glow-color);
		font-size: 5px;
		font-weight: bold;
		background-color: var(--btn-color);
		border-radius: 1em;
		outline: none;
		box-shadow: 0 0 1em 0.25em var(--glow-color), 0 0 4em 1em var(--glow-spread-color),
			inset 0 0 0.75em 0.25em var(--glow-color);
		text-shadow: 0 0 0.5em var(--glow-color);
		position: relative;
		transition: all 0.3s;
	}

	button::after {
		pointer-events: none;
		position: absolute;
		top: 120%;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: var(--glow-spread-color);
		filter: blur(2em);
		opacity: 0.7;
		transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
	}

	button:hover {
		color: var(--btn-color);
		background-color: var(--glow-color);
		box-shadow: 0 0 1em 0.25em var(--glow-color), 0 0 4em 2em var(--glow-spread-color),
			inset 0 0 0.75em 0.25em var(--glow-color);
	}

	button:active {
		box-shadow: 0 0 0.6em 0.25em var(--glow-color), 0 0 2.5em 2em var(--glow-spread-color),
			inset 0 0 0.5em 0.25em var(--glow-color);
	}
</style>
