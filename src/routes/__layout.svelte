<script>
	import '../tailwind.css';
	import Header from '../components/Header.svelte';
</script>

<Header />
<div
	class='w-full min-h-screen px-10 md:px-20 lg:px-52 py-20'
	style='background-image: linear-gradient(to right top,
#D7DFEA,
#8B9BAF,
#5A677C,
#6E5372)'>
	<slot />
</div>