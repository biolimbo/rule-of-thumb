<script>
	import Img from '@components/Img.svelte';
	import WikipediaIcon from '@icons/Wikipedia.svelte';

	import ThumbsDown from '@icons/ThumbsDown.svelte';
	import ThumbsUp from '@icons/ThumbsUp.svelte';

	export let celebrity;
</script>

<div class={`${$$props.class} relative w-full justify-center items-center overflow-hidden`}>
	<Img
		path={`/assets/images/celebrities/hero/${celebrity.picture}`}
		alt={celebrity.name}
		class="absolute top-0 left-0 w-full h-full object-cover object-center"
	/>
	<div class="container relative z-30 mb-16 md:mb-20">
		<div class="w-8/12 md:w-6/12 max-w-xl">
			<div class="w-full bg-black/40 text-white backdrop-blur-lg p-3 md:p-6 lg:p-8 flex flex-col">
				<p class="text-sm lg:text-lg">What’s your opinion on</p>
				<h1 class="">{celebrity.name}?</h1>

				<p class=" lg:text-lg my-3">
					{celebrity.description}
				</p>

				<a href={`${celebrity.wiki}`} class=" hidden md:flex">
					<WikipediaIcon class="w-6 h-auto" />
					<p class="ml-2">Wikipedia</p>
				</a>

				<p class="font-semibold mt-3 text-sm md:text-base lg:text-xl">What’s Your Veredict?</p>
			</div>
			<div class="flex w-full">
				<button class="w-1/2 py-2 md:py-6 flex items-center justify-center bg-thumbEmerald">
					<ThumbsUp class=" w-4 md:w-5 lg:w-9 h-auto" />
				</button>
				<button class="w-1/2 py-2 md:py-6 flex items-center justify-center bg-thumbYellow">
					<ThumbsDown class=" w-4 md:w-5 lg:w-9 h-auto" />
				</button>
			</div>
		</div>
	</div>
	<div class="absolute z-10 bottom-0 left-0 w-full flex mt-auto">
		<div class=" w-4/12 md:w-3/12 bg-black/40 px-2 py-3 lg:px-4 lg:py-4">
			<p class="text-right font-light text-sm md:text-base lg:text-2xl text-white">CLOSING IN</p>
		</div>
		<div class="w-8/12 md:w-9/12 bg-white/40 text-thumbGray px-2 py-3 lg:px-4 lg:py-4">
			<p class="text-sm md:text-base lg:text-2xl">
				<span class=" font-normal">22</span>
				<span class=" font-light">days</span>
			</p>
		</div>
	</div>
</div>
