<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let songResults = [];

	onMount(async () => {
		let searched = $page.params.searched;
		const itunesSearched = await fetch(
			`https://itunes.apple.com/search?term=${searched}&entity=song`
		);
		let res = await itunesSearched.json();
		songResults = res.results;
		console.log(songResults);
	});
</script>

<section>
	<div
		class="grid grid-cols-1 sm:grid-cols-2
              lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
              grod-flow row gap-3"
	>
		{#each songResults as song}
			<button
				on:click={goto(`${$page.params.searched}/${song.trackId}`)}
				class="p-3 gap-3 flex bg-white rounded-md
            bg-opacity-20 border-2 border-white border-opacity-30"
			>
				<img src={song.artworkUrl100} alt="img" class="w-24 h-24 rounded-2xl drop-shadow-3xl" />
				<div class="grid grid-rows-2 text-center">
					<div class="text-base h-12 overflow-hidden">{song.trackName}</div>
					<div class="text-xs   h-12 font-bold">{song.artistName}</div>
				</div>
			</button>
		{/each}
	</div>
</section>
