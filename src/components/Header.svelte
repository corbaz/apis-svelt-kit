<script>
	import logo from '/apple-logo.png';
	import back from '/backIcon.svg';
	import home from '/homeIcon.svg';
	import { goto } from '$app/navigation';

	const goBack = () => {
		window.history.back();
	};
</script>

<div class='fixed z-50 bg-black w-full flex flex-row justify-end py-3 px-10 md:px-20 lg:px-52'>
	<img alt='logo' class='h-6 mr-2' src={logo} />
	<button class='flex items-center justify-center text-white' on:click={goBack}>
		<img alt='back' class='h-4' src={back} />
	</button>
	<button
		class='flex items-center justify-center text-white'
		on:click={() => {
			goto('/');
		}}
	>
		<img alt='back' class='h-6 ml-2' src={home} />
	</button>
</div>