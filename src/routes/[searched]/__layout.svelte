<script>
	// import back from '/static/backIcon.svg';
	// import home from '/static/homeIcon.svg';
	// import { goto } from '$app/navigation';
	//
	// const goBack = () => {
	// 	window.history.back();
	// };
</script>

<!--<div class='flex items-center justify-between mb-12'>-->
<!--	<button class='flex items-center justify-center text-white' on:click={goBack}>-->
<!--		<img alt='back' class='h-4' src={back} />-->
<!--		<div class='ml-2'>Back</div>-->
<!--	</button>-->
<!--	<button-->
<!--		class='flex items-center justify-center text-white'-->
<!--		on:click={() => {-->
<!--			goto('/');-->
<!--		}}-->
<!--	>-->
<!--		<img alt='back' class='h-5' src={home} />-->
<!--	</button>-->
<!--</div>-->
<slot />
