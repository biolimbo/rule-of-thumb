<script>
	import HeroCard from '@components/HeroCard.svelte';

	import { celebrities } from '@contexts/celebrities';
</script>

<HeroCard class=" pt-[66px] md:pt-[90px] lg:pt-[140px]" celebrity={celebrities[0]} />

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
