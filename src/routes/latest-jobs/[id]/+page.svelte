<script>
	import PageInfo from '$lib/components/PageInfo.svelte';
	export let data;
	const post = data.post;
	console.log(post);
</script>

<PageInfo title={post.url} additional_info={post.additional_info} />
