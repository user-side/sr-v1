<script>
	import { goto } from '$app/navigation';

	function navigateTo(path) {
		goto(path);
	}
</script>

<nav class="border-gray-200 bg-white dark:bg-gray-900">
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
		<a href="/" class="flex items-center">
			<img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" />
			<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
				>Adi-raj-company</span
			>
		</a>
		<div class="flex md:order-2">
			<!-- Search and menu buttons here -->
		</div>
		<div class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
			<ul
				class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900"
			>
				<li>
					<button
						onclick={() => navigateTo('/')}
						class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>Home</button
					>
				</li>
				<li>
					<button
						onclick={() => navigateTo('/latest-jobs')}
						class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>Latest Jobs</button
					>
				</li>
				<li>
					<button
						onclick={() => navigateTo('/results')}
						class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>Results</button
					>
				</li>
				<li>
					<button
						onclick={() => navigateTo('/admit-card')}
						class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>Admit Card</button
					>
				</li>
				<li>
					<button
						onclick={() => navigateTo('/answer-key')}
						class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>Answer Key</button
					>
				</li>
				<li>
					<button
						onclick={() => navigateTo('/syllabus')}
						class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
						>Syllabus</button
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
