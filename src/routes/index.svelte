<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Post from '../components/Post.svelte';
	export let posts;
</script>

<style>
	.Posts {
		display: grid;
		justify-content: space-between;
		grid-gap: 15px;
		grid-template-columns: 1fr;
	}
</style>

<svelte:head>
	<title>Guillermo Castaño Vélez</title>
	<meta name="description" content="Blog de Guillermo Castaño Vélez">

	<meta name="twitter:card" content="summary_large_image"/>
	<meta name="twitter:site" content="@guillermocv"/>
	<meta name="twitter:creator" content="@guillermocv"/>
	<meta name="twitter:title" content="Guillermo Castaño Vélez"/>
	<meta name="twitter:description" content="Blog de Guillermo Castaño Vélez"/>
	
	<meta name="og:title" content="Guillermo Castaño Vélez"/>
	<meta name="og:description" content="Blog de Guillermo Castaño Vélez"/>
	<meta name="og:url" content="https://guillermocv.com"/>
	<meta name="og:site_name" content="Guillermo Castaño Vélez"/>
	<meta name="og:locale" content="es_ES"/>
	<meta name="og:type" content="article">
	
</svelte:head>

<div class="Home">
	<div class="Posts">
		{#each posts as post}
		<Post {post}></Post>
		{/each}
	</div>
</div>
