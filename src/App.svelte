<script>
	import Home from './Component/Home.svelte';
	import Router from 'svelte-spa-router';
	// import {link} from 'svelte-spa-router'

	const routes = {
		'/:id?': Home,
	}
</script>
<div>
	<Router {routes}/>
</div>