<script>
	import logo from '/static/favicon.png';
	import back from '/static/backIcon.svg';
	import home from '/static/homeIcon.svg';
	import { goto } from '$app/navigation';

	const goBack = () => {
		window.history.back();
	};
</script>

<div class='fixed z-50 bg-black grid grid-cols-3 w-full py-3 px-10 md:px-20 lg:px-52'>
	<button class='col-span-1 text-white ml-2'
					on:click={goBack}>
		<img alt='back' class='h-4' src={back} />
	</button>
	<div class='col-span-1 mx-auto'>
		<span class='text-white'>Api Music</span>
	</div>
	<div class='col-span-1'>
		<div class='grid grid-cols-3 gap-2'>
			<div class='col-span-1'></div>
			<button class='text-white col-span-1 ml-auto'
							on:click={() => {
								goto('/');
							}}
			>
				<img alt='back' class='h-6' src={home} />
			</button>
			<a class='col-span-1 ml-auto' href='https://www.linkedin.com/in/julio-corbaz/'
				 target='_blank'>
				<img alt='logo' class='h-6' src={logo} />
			</a>
		</div>
	</div>
</div>