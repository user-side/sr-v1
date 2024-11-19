<script>
	import Card from '$lib/components/Card.svelte';
	export let data;
	console.log('something');
	console.log(data.postData.id);
</script>

<div class="flex h-screen items-center justify-center">
	<Card title="answer-key" />
</div>
