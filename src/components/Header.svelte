<script>
	import logo from '/static/favicon.png';
	import back from '/static/backIcon.svg';
	import home from '/static/homeIcon.svg';
	import { goto } from '$app/navigation';

	const goBack = () => {
		window.history.back();
	};
</script>

<div class='fixed z-50 bg-black w-full flex flex-row justify-end py-3 px-10 md:px-20 lg:px-52'>
	<button class='flex items-center justify-center text-white ml-2'
					on:click={goBack}>
		<img alt='back' class='h-4' src={back} />
	</button>

	<button
		class='flex items-center justify-center text-white ml-2'
		on:click={() => {
			goto('/');
		}}
	>
		<img alt='back' class='h-6' src={home} />
	</button>
	<a class='ml-2' href='https://www.linkedin.com/in/julio-corbaz/'>
		<img alt='logo' class='h-6' src={logo} target='_blank' />
	</a>
	<span class='text-white ml-2'>Api Music</span>
</div>