<script>
	import Img from '@components/Img.svelte';
	import ThumbsUp from '@icons/ThumbsUp.svelte';
	import ThumbsDown from '@icons/ThumbsDown.svelte';

	export let celebrity;
	export let mode = 'grid';

	$: totalVotes = celebrity.votes.positive + celebrity.votes.negative;

	$: percentages = {
		positive: Math.ceil((celebrity.votes.positive / totalVotes) * 100),
		negative: Math.floor((celebrity.votes.negative / totalVotes) * 100)
	};
</script>

<div
	class={`${$$props.class} ${
		mode == 'grid' ? 'h-96' : 'h-96 md:h-36 lg:h-44'
	} min-w-full relative bg-thumbGray-300 flex`}
>
	<Img
		path={`/assets/images/celebrities/list/${celebrity.picture}`}
		alt={celebrity.name}
		class={`absolute top-0 left-0 ${
			mode == 'grid' ? 'w-full' : 'w-full md:w-56 lg:w-72'
		} h-full object-cover object-center`}
	/>

	<div
		class={`absolute hidden top-0 left-0 z-10 h-full bg-gradient-to-l from-[#888] ${
			mode == 'grid' ? '' : ' md:block md:ml-40 lg:ml-56 md:w-16'
		}`}
	/>
	<div
		class={`absolute hidden top-0 left-0 h-full bg-gradient-to-r from-[#888] via-[#666] to-[#333]/60 ${
			mode == 'grid'
				? ''
				: ' md:block md:ml-56 lg:ml-72 md:w-[calc(100%-14rem)] lg:w-[calc(100%-18rem)]'
		}`}
	/>

	<div
		class={`absolute bottom-0 left-0 w-full h-5/6 bg-gradient-to-t from-black/60 ${
			mode == 'grid' ? '' : ' md:hidden'
		}`}
	/>

	<div
		class={`bg-thumbYellow p-2 absolute z-10 top-1/3 left-0 ${mode == 'grid' ? '' : ' md:top-0'}`}
	>
		<ThumbsDown class="w-6 h-auto" />
	</div>

	<div
		class={`relative mb-auto mt-32  z-20 flex flex-col  w-full px-12  text-white ${
			mode == 'grid' ? ' ' : 'md:mt-0 md:flex-row md:pr-4 md:pl-18 md:pt-2 lg:pt-4'
		}`}
	>
		<div class={`flex flex-col  mr-8 ${mode == 'grid' ? ' ' : 'md:ml-40 lg:ml-56'}`}>
			<h3 class="">{celebrity.name}</h3>
			<p class="mb-3 line-clamp-2">
				{celebrity.description}
			</p>
		</div>

		<div class="flex flex-col items-end ml-auto">
			<p class="text-xs font-medium">1 month ago in {celebrity.category}</p>
			<div class="flex mt-2 gap-3">
				<button class="p-3 md:p-4 bg-thumbEmerald flex justify-center items-center">
					<ThumbsUp class="w-4 lg:w-5 h-auto" />
				</button>
				<button class="p-3 md:p-4 bg-thumbYellow flex justify-center items-center">
					<ThumbsUp class="w-4 lg:w-5 h-auto" />
				</button>
				<button class="border border-white bg-black/60 text-white px-4 py-2 w-max">
					Vote now
				</button>
			</div>
		</div>
	</div>
	<div class={`absolute w-full bottom-0 h-9  flex z-20 ${mode == 'grid' ? ' ' : 'lg:h-14'}`}>
		<div class="relative w-full h-full flex justify-between text-white px-4">
			<div class="flex items-center relative z-10 gap-2">
				<ThumbsUp class="w-4 md:w-5 h-auto" />
				<p class="font-normal">{percentages.positive}%</p>
			</div>
			<div class="flex items-center relative z-10 gap-2">
				<p class="font-normal">{percentages.negative}%</p>
				<ThumbsUp class="w-4 md:w-5 h-auto" />
			</div>
			<div
				style="width: {percentages.positive}%;"
				class="absolute top-0 left-0 h-full bg-thumbEmerald/60 flex items-center px-3"
			>
				<!--  -->
			</div>
			<div
				style="width: {percentages.negative}%;"
				class="absolute top-0 right-0 h-full bg-thumbYellow/60 flex items-center px-3"
			>
				<!--  -->
			</div>
		</div>
	</div>
</div>
