<script context='module'>
	export async function load({ page }) {
		let songId = page.params.songId;
		const itunesSearched = await fetch(
			`https://itunes.apple.com/search?term=${songId}&entity=song&limit=200&sort=recent&country=us`
		);
		let res = await itunesSearched.json();
		let songResults = res.results[0];
		return { props: { songResults } };
	}
</script>

<script>
	export let songResults;
</script>

<section>
	<div class='flex flex-col items-center justify-center'>
		<h1 class='text-3xl font-bold text-center mb-8 text-indigo-300'>{songResults.trackName}</h1>
		<img
			alt='img'
			class='w-48 md:w-56 lg:w-64 rounded-2xl drop-shadow-3xl mb-12'
			src={songResults.artworkUrl100}
		/>
		<audio autoplay class='drop-shadow-3xl ' controls>
			<source src={songResults.previewUrl} type='audio/mpeg' />
		</audio>
	</div>
</section>
