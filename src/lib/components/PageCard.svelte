<script>
	import { goto } from '$app/navigation';
	let { title } = $props();

	const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	function navigateTo(id) {
		goto(`./${title}/${id}`);
	}
</script>

<div class="flex flex-col items-center justify-center gap-4 p-8 font-serif">
	<fieldset
		class=" rounded-lg border bg-white p-8 text-xl shadow-lg dark:border-gray-700 dark:bg-gray-800"
	>
		<h5 class="mb-4 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
			{title}
		</h5>
		<div class="text-md flex flex-col items-center justify-center gap-4 px-4 font-serif">
			{#each indexes as index}
				<button
					onclick={() => navigateTo(index)}
					class="block text-blue-600 hover:underline dark:text-blue-400"
				>
					No info is given
				</button>
			{/each}
		</div>
	</fieldset>
</div>
