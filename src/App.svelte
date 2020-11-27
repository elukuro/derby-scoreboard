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
	<div class="challenge">
		{#if podium.length >= 1}
			<Podium podium={podium}/>
		{/if}
			<div class="result">
				<div class="result-wrapper" style="height:{Math.floor(height/2)-20}px">
					{#each challenges as challenge,index}
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
						<Card challenge={challenge} index={index}/>
					{/each}
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
			content:'Running Distance Challenge';
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
			}
		}
	}
	.sync{
		position: fixed;
		bottom: 10%;
		right:0px;
		width:60px;
		text-align: center;
		box-shadow: 0px 1px 3px #ccc;
		z-index:2;
		background: #1488CC;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to top, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		border-top-left-radius: 30px;
		border-bottom-left-radius: 30px;
		a{
			display: block;
			width:100%;
			text-transform: uppercase;
			padding:10px 0px;
			font-weight: bold;
			color: #fafafa;
			font-size: 14px;
			&:focus{
				text-decoration: none;
			}
		}
	}
	
</style>