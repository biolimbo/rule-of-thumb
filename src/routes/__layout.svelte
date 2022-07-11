<script>
	import Navbar from '@components/Navbar.svelte';
	import '../styles/app.css';
</script>

<main class="flex flex-col">
	<Navbar />
	<slot />
</main>
