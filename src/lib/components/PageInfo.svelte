<script>
	let { title = 'Not given', additional_info } = $props();
</script>

<div
	class="container relative mx-auto mt-5 flex h-full max-w-6xl flex-col justify-between px-10 xl:px-0"
>
	<h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">{title}</h2>
	<p class="mb-12 text-lg text-gray-500">Total Posts : {additional_info.extra_info.Total_Post}</p>
	<div class="w-full">
		<div class="mb-10 flex w-full flex-col sm:flex-row">
			<div class="mb-10 w-full sm:mb-0 sm:w-1/2">
				<div class="relative ml-0 mr-0 h-full sm:mr-10">
					<span class="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-indigo-500"
					></span>
					<div class="relative h-full rounded-lg border-2 border-indigo-500 bg-white p-5">
						<div class="-mt-1 flex items-center">
							<h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Short Information</h3>
						</div>
						<p class="mb-1 mt-3 text-xs font-medium uppercase text-indigo-500">------------</p>
						<p class="mb-2 text-gray-600">
							{additional_info.short_info}
						</p>
					</div>
				</div>
			</div>
			<div class="w-full sm:w-1/2">
				<div class="relative ml-0 h-full md:mr-10">
					<span class="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-purple-500"
					></span>
					<div class="relative h-full rounded-lg border-2 border-purple-500 bg-white p-5">
						<div class="-mt-1 flex items-center">
							<h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Eligibility Criteria</h3>
						</div>
						<p class="mb-1 mt-3 text-xs font-medium uppercase text-purple-500">------------</p>
						<p class="mb-2 text-gray-600">
							{#each additional_info.extra_info.Eligibility_Criteria as criteria}
								<li>{criteria}</li>
							{/each}
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="mb-5 flex w-full flex-col sm:flex-row">
			<div class="mb-10 w-full sm:mb-0 sm:w-1/2">
				<div class="relative ml-0 mr-0 h-full sm:mr-10">
					<span class="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-blue-400"></span>
					<div class="relative h-full rounded-lg border-2 border-blue-400 bg-white p-5">
						<div class="-mt-1 flex items-center">
							<h3 class="my-2 ml-3 text-lg font-bold text-gray-800">How to fill the form</h3>
						</div>
						<p class="mb-1 mt-3 text-xs font-medium uppercase text-blue-400">------------</p>
						<p class="mb-2 text-gray-600">
							{#each additional_info.how_to_fill as step}
								<li>{step}</li>
							{/each}
						</p>
					</div>
				</div>
			</div>
			<div class="mb-10 w-full sm:mb-0 sm:w-1/2">
				<div class="relative ml-0 mr-0 h-full sm:mr-10">
					<span class="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-yellow-400"
					></span>
					<div class="relative h-full rounded-lg border-2 border-yellow-400 bg-white p-5">
						<div class="-mt-1 flex items-center">
							<h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Important Dates</h3>
						</div>
						<p class="mb-1 mt-3 text-xs font-medium uppercase text-yellow-400">------------</p>
						<p class="mb-2 text-gray-600">
							{#if additional_info}
								<li>Application Begin: {additional_info.important_dates.Application_Begin}</li>
								<li>
									Last Date to Apply Online: {additional_info.important_dates
										.Last_Date_for_Apply_Online}
								</li>
								<li>
									Last Date to Send Application Form: {additional_info.important_dates
										.Last_Date_Send_Application_Form}
								</li>
							{:else}
								<p>Loading data</p>
							{/if}
						</p>
					</div>
				</div>
			</div>
			<div class="w-full sm:w-1/2">
				<div class="relative ml-0 h-full md:mr-10">
					<span class="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-green-500"
					></span>
					<div class="relative h-full rounded-lg border-2 border-green-500 bg-white p-5">
						<div class="-mt-1 flex items-center">
							<h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Age Limit</h3>
						</div>
						<p class="mb-1 mt-3 text-xs font-medium uppercase text-green-500">------------</p>
						<p class="mb-2 text-gray-600">
							{additional_info.age_limit.Age_Limit_for_July_2025_Batch}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- source:https://tailwind.besoeasy.com -->
