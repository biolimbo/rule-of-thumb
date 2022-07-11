<script>
	import FacebookIcon from '@icons/Facebook.svelte';
	import TwitterIcon from '@icons/Twitter.svelte';
</script>

<footer class=" px-3 md:px-5 w-full max-w-6xl mx-auto">
	<div
		class="w-full flex justify-between items-end md:items-center border-dashed border-t-2 border-black py-4 md:py-9"
	>
		<div class="flex flex-col md:flex-row gap-3 md:gap-7">
			<a href="/">Terms and Conditions</a>
			<a href="/">Privacy Policy</a>
			<a href="/">Contact Us</a>
		</div>

		<div class="flex flex-col md:flex-row gap-2 md:gap-4">
			<p>Follow us</p>
			<div class="flex">
				<FacebookIcon class="w-6 h-auto" />
				<TwitterIcon class="w-6 h-auto ml-3" />
			</div>
		</div>
	</div>
</footer>
