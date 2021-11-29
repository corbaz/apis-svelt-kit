<script>
	import logo from '/static/favicon.png';
	import back from '/static/backIcon.svg';
	import home from '/static/homeIcon.svg';
	import { goto } from '$app/navigation';

	const goBack = () => {
		window.history.back();
	};
</script>

<video autoplay id='myVideo' loop muted poster='img/videoframe.jpg'>
	<source src='/static/Apple%20Music_2.mp4' type='video/mp4'>
</video>
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

<!--<header class='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>-->

<!--	<video-->
<!--		autoplay-->
<!--		class='absolute z-10 w-auto min-w-full min-h-full max-w-none'-->
<!--		loop-->
<!--		muted-->
<!--	>-->
<!--		<source-->
<!--			src='/static/Apple%20Music_2.mp4'-->
<!--			type='video/mp4'-->
<!--		/>-->
<!--		Your browser does not support the video tag.-->
<!--	</video>-->
<!--</header>-->

<style>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: Arial;
        font-size: 17px;
    }

    #myVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }

    .content {
        position: fixed;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        color: #f1f1f1;
        width: 100%;
        padding: 20px;
    }

    #myBtn {
        width: 200px;
        font-size: 18px;
        padding: 10px;
        border: none;
        background: #000;
        color: #fff;
        cursor: pointer;
    }

    #myBtn:hover {
        background: #ddd;
        color: black;
    }
</style>