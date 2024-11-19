<script>
	import Card from '$lib/components/Card.svelte';
	export let data;
	//console.log('something');
	const posts = data.postData.posts;
	//console.log(data.postData.posts[0].id);
</script>

<div class="flex h-screen items-center justify-center">
	<Card title="latest-jobs" name="Latest Jobs" {posts} />
</div>
