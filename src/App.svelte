<script>
	import { onMount } from 'svelte';
	import axios from "axios";
	import Card from './Component/Card.svelte';
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
	
	onMount(async () => {
		fetchData();
	});
	async function fetchData() {
		const res = await getData();
		challenges =res.data;
	}
  
</script>

<main>
	<div class="challenge">
		<h1>Derby Running Distance Challenge 2021</h1>
		<div class="result">
			{#each challenges as challenge,index}
				<Card challenge={challenge} index={0}/>
				<Card challenge={challenge} index={1}/>
				<Card challenge={challenge} index={2}/>
				<Card challenge={challenge} index={3}/>
				<Card challenge={challenge} index={4}/>
				<Card challenge={challenge} index={5}/>
				<Card challenge={challenge} index={6}/>
				<Card challenge={challenge} index={7}/>
				<Card challenge={challenge} index={8}/>
			{/each}
		</div>
	</div>
</main>

<style lang="scss">
	.challenge{
		background:#333;
		h1{
			font-size: 30px;
			text-align: left;
			width:100%;
			display: block;
			color:#555;
			margin:0px 20px 20px 0px;
			line-height: 1em;
		}
		.result{
			padding:40px 10px;
			background:#fff;
			border-top-left-radius:20px;
			border-top-right-radius:20px;
			height:320px;
			overflow:scroll;
			
		}
	}
	
</style>