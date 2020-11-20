<script>
	import { onMount } from 'svelte';
	import axios from "axios";
	import Card from './Component/Card.svelte';
	import Podium from './Component/Podium.svelte';
	// yay finally aync await 
	let url = CONFIG.env.BASE_API_URL;
	async function getData() {
		try{
			const response = await axios.get(`${url}/activity-list-challenge`);
			return response;
		}catch(error){
			console.error(error)
		}
	}

	let challenges = [];
	let podium = []
	onMount(async () => {
		fetchData();
	});
	async function fetchData() {
		const res = await getData();
		challenges =res.data;
		podium = challenges.slice(0, 3);
	}
	
  
</script>

<main>
	<div class="challenge">
		<Podium podium={podium}/>
		<div class="result">
			{#each challenges as challenge,index}
				<Card challenge={challenge} index={index}/>
			{/each}
		</div>
	</div>
</main>

<style lang="scss">
	.challenge{
		background: #1488CC;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to top, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		padding-top:300px;
		position: relative;
		&:before{
			content:'Strava Running Distance Challenge';
			position: absolute;
			font-size: 80px;
			text-align: left;
			width:100%;
			display: block;
			color:#1488CC;
			line-height: 1em;
			transform: skewY(20deg);
			top:0;
			left:0;
			font-weight: bold;
		}
		.result{
			padding:40px 10px;
			background:#fff;
			border-top-left-radius:20px;
			border-top-right-radius:20px;
			height:320px;
			overflow:scroll;
			position: relative;
			
		}
	}
	
</style>