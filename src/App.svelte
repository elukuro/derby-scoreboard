<script>
	import { onMount } from 'svelte';
	import axios from "axios";
	import Nested from './Nested.svelte';
	let count = 0;
	// so I think $: is look like computed with stereoid in vue js but withour return and more , CMIIW 
	$: doubled = count *2 ;
	function handleClick() {
		count += 1;
	} 
	$: if(count >= 10) {
		count = 9;
		alert(`anda sudah mengklik ${count} kali`)
	}
	// because svelte is reactivity then push and splice won't work automaticaly 
	let number = [1,2,3]
	function addNumbers() {
		number = [...number,number.length +1];
	}
	$: sum = number.reduce((accumummator,current)=> accumummator + current , 0)

	// try to loop with each 

	const cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	]

	// yay finally aync await 

	async function getData() {
		try{
			const response = await axios.get(`http://localhost:3000/activity-list-challenge`);
			return response;
		}catch(error){
			console.error(error)
		}
	}

	let challenges = [];
	
	onMount(async () => {
		console.warn(`this is simillar with compontnt did mount`)
	});
	async function fetchData() {
		const res = await getData();
		challenges =res.data;
	}
  
</script>

<main>
	<p>{number.join('+')} = {sum}</p>
	<button on:click={handleClick}>click {count} and the doubled is {doubled}</button>	
	<button on:click={addNumbers}>Add Number</button>
	<button on:click={fetchData}> Fetch Data</button>
	{#if sum > 10}
		<Nested/>	
	{:else}
		<p>no title</p>
	{/if}
	<ul>
		{#each challenges as challenge}
		<li>{JSON.stringify(challenge.athlete.firstname)}</li>
		{/each}
	</ul>
</main>

<style>
</style>