<script>
	import { goto } from '$app/navigation';

	let { title = '', name = 'Name is not given', posts = [], onclick = null } = $props();

	function handleClick(title, id) {
		goto(`./${title}/${id}`);
	}
</script>

<div
	class="h-108 mb-8 w-96 max-w-md overflow-hidden rounded-lg border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-700 dark:bg-gray-800"
>
	<h5 class="mb-4 items-center text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
		{name}
	</h5>
	<ul class="space-y-3 overflow-y-auto">
		{#each posts as post}
			<li>
				<button
					onclick={() => handleClick(title, post.id)}
					class="block text-blue-600 hover:underline dark:text-blue-400"
				>
					{post.url}
				</button>
			</li>
		{/each}
	</ul>
	<div class="mt-4">
		<button
			onclick={() => console.log('clicked')}
			class="font-medium text-blue-600 hover:underline dark:text-blue-400"
		>
			Read more
		</button>
	</div>
</div>
