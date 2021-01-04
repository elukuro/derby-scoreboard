<script>
	import Home from './Component/Home.svelte';
	import Help from './Component/help.svelte';
	import Router from 'svelte-spa-router';
	// import {link} from 'svelte-spa-router'

	const routes = {
		'/help': Help,
		'/:id?': Home,
	}
</script>
<div>
	<Router {routes}/>
</div>