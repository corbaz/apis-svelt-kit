<script>
	import '../tailwind.css';
	import Menu from '../components/Menu.svelte';
	import video from '/static/music.mp4';
</script>

<video autoplay class='w-screen h-screen object-cover fixed
							left-0 top-0 right-0 bottom-0 z-0
							bg-opacity-75 bg-black'
			 id='idVideo'
			 loop muted
			 poster='https://assets.codepen.io/6093409/river.jpg'
>
	<source src='{video}' type='video/mp4' />
</video>
<Menu />
<div class='w-screen h-screen object-cover fixed
						left-0 top-0 right-0 bottom-0 z-40
 						bg-opacity-75 bg-red-700
						justify-center items-center'
		 id='idFiltro'
		 on:mousemove={()=>{
			 let r = parseInt((Math.random()*256).toString())

			 let g = parseInt((Math.random()*256).toString())

			 let b = parseInt((Math.random()*256).toString())
			 console.log(r,g,b)
			 document.getElementById('idFiltro').style.background = `rgba(${r},${g},${b},0.4)`
			}}>
	<slot />
</div>
