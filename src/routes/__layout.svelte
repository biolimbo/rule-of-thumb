<script>
	import Navbar from '@components/Navbar.svelte';
	import Footer from '@components/Footer.svelte';
	import '../styles/app.css';
</script>

<Navbar />
<main class="">
	<slot />
</main>
<Footer />
