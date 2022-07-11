<script>
	import MenuIcon from '@icons/Menu.svelte';
	import SearchIcon from '@icons/Search.svelte';
</script>

<header
	class="text-white min-h-[120px] md:min-h-[180px] bg-gradient-to-b from-black/70 flex justify-center"
>
	<nav class="w-full max-w-6xl flex justify-between items-start pt-7 md:pt-9 lg:pt-12 px-3 md:px-5">
		<p class="text-2xl">Rule of thumb.</p>
		<MenuIcon class="w-10 h-auto lg:hidden cursor-pointer p-2" />
		<div class="hidden lg:flex items-center gap-5">
			<a href="/">Past Trials</a>
			<a href="/">How It Works</a>
			<a href="/">Login / Sign Up</a>

			<SearchIcon class=" ml-2 w-12 h-auto cursor-pointer p-2" />
		</div>
	</nav>
</header>
