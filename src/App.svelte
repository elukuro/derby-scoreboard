<script>
	import { onMount } from 'svelte';
	import axios from "axios";
	import Card from './Component/Card.svelte';
	import Podium from './Component/Podium.svelte';
	// yay finally aync await 
	let url = CONFIG.env.BASE_API_URL;
	let loading = false;
	async function getData() {
		loading = true;
		try{
			const response = await axios.get(`${url}/activity-list-challenge`);
			loading = false;
			return response;
		}catch(error){
			console.error(error)
		}
	}

	let challenges = [];
	let podium = [];
	let height = 0;
	onMount(async () => {
		fetchData();
	});
	async function fetchData() {
		const res = await getData();
		challenges =res.data.slice(3);
		podium = res.data.slice(0, 3);
	}
	
  
</script>
<svelte:window bind:innerHeight={height}/>
<main>
	{#if loading}
		<div class="loading"/>
	{/if}
	<div class="challenge">
		{#if podium.length >= 1}
			<Podium podium={podium}/>
		{/if}
		<div class="result">
			<div class="result-wrapper" style="height:{Math.floor(height/2)-10}px">
				{#if challenges.length >=1}
					{#each challenges as challenge,index}
						<Card challenge={challenge} index={index}/>
					{/each}
				{:else}
					<p>No data avaliable..</p>
				{/if}
			</div>
		</div>
	</div>
	<div class="sync">
		<a href="https://www.strava.com/oauth/authorize?client_id=35087&redirect_uri={url}/autorize-challenge&scope=read_all&state=generate&response_type=code">Sync</a>
	</div>
</main>

<style lang="scss">
	.challenge{
		background: #1488CC;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to top, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		padding-top:40px;
		position: relative;
		overflow: hidden;
		&:before{
			content:'Derby Running Distance Challenge';
			position: absolute;
			font-size: 80px;
			text-align: left;
			width:100%;
			display: block;
			color:#1488CC;
			line-height: 1em;
			transform: skewY(-20deg);
			top:0;
			left:0;
			font-weight: bold;
		}
		.result{
			padding:40px 10px 0px 10px;
			background:#fff;
			border-top-left-radius:20px;
			border-top-right-radius:20px;
			position: relative;
			z-index: 2;
			&-wrapper{
				overflow:scroll;
				padding:10px 1px;
				p{
					color:#555;
				}
			}
		}
	}
	.sync{
		position: fixed;
		bottom: 10%;
		right:0px;
		width:80px;
		text-align: center;
		z-index:2;
		background: #1488CC;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to top, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		border-top-left-radius: 30px;
		border-bottom-left-radius: 30px;
		opacity:.8;
		a{
			display: block;
			width:100%;
			text-transform: uppercase;
			padding:20px 0px;
			font-weight: bold;
			color: #fafafa;
			font-size: 18px;
			&:focus{
				text-decoration: none;
			}
		}
	}
	.loading{
		width:100%;
		position: fixed;
		left:0;
		top:0;
		bottom:0;
		background: #1488CC;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to top, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		z-index:3;
		&:before{
			content:'Please Wait...';
			position: absolute;
			font-size: 120px;
			text-align: left;
			width:100%;
			display: block;
			color:#1488CC;
			line-height: 1em;
			transform: skewY(20deg);
			font-weight: bold;
		}
	}
	
</style>