<script>
	import { onMount } from 'svelte';
	import HeroCard from '@components/HeroCard.svelte';
	import Card from '@components/Card.svelte';
	import Img from '@components/Img.svelte';

	import { celebrities } from '@contexts/celebrities';

	let displayMode = 'grid';

	onMount(() => {
		const localStorageCelebrities = localStorage.getItem('celebrities');

		if (localStorageCelebrities) {
			const localStorageCelebritiesParsed = JSON.parse(localStorageCelebrities);

			$celebrities = localStorageCelebritiesParsed;
		}
	});
</script>

<HeroCard class=" pt-[66px] md:pt-[90px] lg:pt-[140px]" celebrity={$celebrities[0]} />

<div class="container my-6 md:my-9">
	<div class="flex gap-4 md:gap-6 bg-thumbGray-300 p-3 md:p-6">
		<div class="flex flex-col justify-center text-center">
			<p class="text-sm md:text-base w-max">Speak out. Be heard.</p>
			<p class="text-xl md:text-2xl font-semibold tracking-wider">Be counted</p>
		</div>
		<p>
			Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak
			out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a
			public report.
		</p>
	</div>
</div>

<div class="container overflow-hidden">
	<div class="flex justify-between mb-5 md:mb-6 lg:mb-8">
		<h2>Previous Rulings</h2>
		<select
			class="hidden md:block"
			value={displayMode}
			on:change={(e) => (displayMode = e.target.value)}
		>
			<option value="list">List</option>
			<option value="grid">Grid</option>
		</select>
	</div>
	<div
		class={`w-full flex overflow-x-auto overflow-y-hidden  gap-4 ${
			displayMode == 'grid' ? 'md:grid grid-cols-2 lg:grid-cols-3' : 'md:flex-col'
		}`}
	>
		{#each $celebrities as celebrity, index}
			{#if index !== 0}
				<Card mode={displayMode} class="" {celebrity} />
			{/if}
		{/each}
	</div>
</div>

<div class="container mt-6 md:mt-9">
	<div
		class="relative p-5 md:p-9 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
	>
		<Img
			class="absolute w-full h-full top-0 left-0 object-cover object-center opacity-30"
			path="/assets/images/bg/bg-people"
			alt="Rule of Thumb"
		/>

		<p class="font-normal text-2xl text-center md:text-left">
			Is there anyone else you would want us to add?
		</p>
		<button class=" text-2xl border border-black text-black px-10 py-2"> Submit a name </button>
	</div>
</div>
