<script>
	import { onMount } from 'svelte';
	import axios from "axios";
	import Card from './Card.svelte';
	import Podium from './Podium.svelte';
	import CurrentPosition from './CurrentPosition.svelte';
	import ConfettiGenerator from "confetti-js";

	// yay finally aync await 
	let url = CONFIG.env.BASE_API_URL;
	let loading = false;
	let mode = 'ytd_run_totals';
	export let params = {};
	let response = {};
	let challenges = [];
	let podium = [];
    let height = 0;
	let currentPosition = {};
	let isFemale = false;
	onMount(async () => {
		fetchData(true);
		confetti();
    });
    async function getData(withLoading) {
		loading = withLoading;
		try{
			const response = await axios.get(`${url}/activity-list-challenge`);
			const sorting = response.data.sort((a,b)=>b.workout[mode].distance - a.workout[mode].distance);
			localStorage.setItem("activityListChallenge",JSON.stringify(sorting));
			loading = false;
			return sorting;
		}catch(error){
			loading = false;
			const storage = localStorage.getItem("activityListChallenge")
			return JSON.parse(storage);
		}
    }
    function confetti(){
		var confettiSettings = {
			target: 'my-canvas',
			clock:24,
		};
		var confetti = new ConfettiGenerator(confettiSettings);
		confetti.render();
	}
	async function fetchData(withLoading) {
		response = await getData(withLoading);		
		let data = {};
		if(!isFemale){
			data = response;
		}else{
			data = response.filter((item)=>item.athlete.sex === 'F');
		}
		challenges =data.slice(3)
		podium = data.slice(0, 3);
        getCurrentPosition(data,params.id);
	}

	// function setMode(val) {
	// 	mode = val;
	// 	const sorting = response.sort((a,b)=>b.workout[mode].distance - a.workout[mode].distance);
	// 	challenges =sorting.slice(3);
	// 	podium = sorting.slice(0, 3);
	// 	getCurrentPosition(sorting,params.id);
    // }
    
    function getCurrentPosition(data,id) {
        if(id){
            currentPosition = {
                position: data.findIndex((item)=> item.athlete.id == id ) + 1,
                athlete:data.find((item)=> item.athlete.id == id).athlete.firstname
            } 
        }
	}
	
	async function femaleOnly(){
		isFemale = !isFemale;
		fetchData(false);	
	}
  
</script>
<svelte:window bind:innerHeight={height}/>
<main>
	{#if loading}
		<div class="loading"/>
	{/if}
	<a href="/#/help" class="help">Need help ?</a>
	<div class="challenge">
        {#if params.id}
            <CurrentPosition data = {currentPosition} />
        {/if}
		{#if podium.length >= 1}
			<Podium podium={podium} mode={mode}/>
		{/if}
		<div class="result">
			<div class="filter-wrapper">
				<button on:click={femaleOnly} class = "filter">Female only:<span>{isFemale ? 'ON' : 'OFF'}</span></button>	
			</div>
			<div class="result-wrapper" style="height:{Math.floor(height/2)-10}px">
				{#if challenges.length >=1}
					{#each challenges as challenge,index}
						<Card challenge={challenge} index={index} mode={mode}/>
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
	<!-- 
	<div class="mode">
		<button on:click={()=> setMode('ytd_run_totals')} class="{mode === 'ytd_run_totals' ? 'active' : ''}">Year to Date</button>
		<button on:click={()=> setMode('recent_run_totals')} class="{mode === 'recent_run_totals' ? 'active' : ''}">Recent 4 Weeks</button>
	</div>
	-->
</main>

<style lang="scss">
	.filter{
		padding:none;
		font-size:10px;
		background:#fff;
		border:1px solid #666;
		border-radius:3px;
		span{
			font-weight:bold;
		}
		&-wrapper{
			text-align: right;
			padding-bottom:4px;
		}
	}
	.help{
		background: #fff;
		opacity: .7;
		padding: 5px;
		border-bottom-left-radius: 10px;
		position:fixed;
		z-index:2;
		right:0px;
		font-size: 12px;
		color:#555;
	}
	.challenge{
		background: #1488CC;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to top, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to top, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		padding-top:20px;
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
			padding:20px 10px 50px 10px;
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
	.mode{
		position:fixed;
		bottom:0px;
		z-index:2;
		background:#fff;
		box-shadow: 0px 1px 3px #ccc;
		width:100%;
		left:0;
		display:flex;
		button{
			border:none;
			width:50%;
			font-size: 12px;
			padding:15px 0px;
			color:#1488CC;
			text-transform: uppercase;
			font-weight:bold;
		}
		.active{
			background: #1488CC;
			color:#fff;
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