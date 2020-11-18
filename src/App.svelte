<script>
	import { onMount } from 'svelte';
	import axios from "axios";
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
	<ul>
		{#each challenges as challenge}
		
		<li>{JSON.stringify(challenge.athlete.firstname)}</li>
		{/each}
	</ul>
</main>

<style lang="scss">
	$color:red;
	ul{
		li{
			color:$color;
		}
	}
</style>