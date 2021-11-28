<script>
	import { goto } from '$app/navigation';
	import logo from '/static/caricatura.png';

	let artista_buscado = '';
	const search = () => {
		goto(`${artista_buscado}`);
	};
</script>
<svelte:head>
	<title>Api Music</title>
</svelte:head>
<section class=''>
	<div class='flex flex-col justify-center items-center'>
		<div
			class='text-center text-white font-semibold mb-5
		 					text-3xl	md:text-5xl'
		>
			{artista_buscado.length > 0 ? artista_buscado : 'Buscar un Artista'}
		</div>
		<div
			class='flex flex-row p-1 w-full bg-white bg-opacity-20
			 rounded-md border-white border-opacity-30 justify-between
			 	 gap-1 border'
		>
			<input
				bind:value={artista_buscado}
				class='px-2 w-full text-white bg-transparent'
				on:keydown={(evento) => {
					if (evento.keyCode !== 13) return;
					search();
				}}
				type='text'
			/>
			<button on:click={search}>
				<svg
					class='w-6 h-6 text-red-400'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
					/>
				</svg>
			</button>
		</div>
		<div class='flex justify-center pt-10 w-full'>
			<img alt='logo' class='w-60 h-60' src={logo} />
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