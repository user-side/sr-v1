<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte'; // Import Navbar component
	import Footer from '../lib/components/Footer.svelte'; // Import Footer component
	let { children } = $props();
</script>

<Navbar />

<!-- Render the child components in the middle -->
{@render children()}

<Footer />
