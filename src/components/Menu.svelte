<script>
	import back from '/static/backIcon.svg';
	import pause from '/static/pause.svg';
	import play from '/static/play.svg';
	import home from '/static/homeIcon.svg';
	import logo from '/static/julio.png';
	import { goto } from '$app/navigation';

	let video = true;
	const goBack = () => {
		window.history.back();
	};
</script>

<div class='w-screen h-20 object-cover fixed
		 left-0 top-0 right-0 bottom-0 z-50
		 bg-opacity-50 bg-black
		 grid grid-cols-3 gap-3'>

	<div class='col-span-1 ml-5 my-auto'>
		<button class='pr-2' on:click={goBack}>
			<img alt='back' class='h-5 w-5' src={back} />
		</button>
		<button on:click={()=>{
				video ? document.querySelector('video').pause() : document.querySelector('video').play()
				video = !video
		}}>
			<img alt='Video' class='h-5 w-5' src={video ? pause : play} />
		</button>
	</div>

	<div class='col-span-1 mx-auto my-auto'>
		<span class='text-white '>Api Music</span>
	</div>

	<div class='col-span-1 ml-auto mr-5 my-auto'>

		<!--	Home-->
		<button class='pr-2' on:click={() => {
							goto('/');
						}}
		>
			<img alt='back' class='h-5 w-5' src={home} />
		</button>

		<!--	Home-->
		<button on:click={() => {
							window.open('https://www.linkedin.com/in/julio-corbaz/', '_blank').focus();
						}}
		>
			<img alt='back' class='h-5 w-5' src={logo} />
		</button>

		<!--		&lt;!&ndash;	Linkedin&ndash;&gt;-->
		<!--		<a href='https://www.linkedin.com/in/julio-corbaz/'-->
		<!--			 target='_blank'-->
		<!--		>-->
		<!--			<img alt='logo' class='h-5 w-5' src={logo} />-->
		<!--		</a>-->
	</div>

</div>

