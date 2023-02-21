<script>
	import '../app.css';
	import logo from '$lib/assets/logo.svg';
</script>

<header class="px-20 py-6 bg-white flex items-center justify-between text-nord-0">
	<a href="/">
		<div class="flex items-center">
			<img src={logo} alt="logo" />
			<h1 class="font-inter font-semibold text-3xl ml-4">Veles</h1>
		</div>
	</a>
	<nav class="">
		<ul>
			<li class="inline"><a href="/">Home</a></li>
			<li class="inline ml-3"><a href="/about-us">About Us</a></li>
			<li class="inline ml-3"><a href="/products">Products</a></li>
			<li class="inline ml-3 px-4 py-2 rounded border-nord-0 border-2">
				<a href="/login">Login</a>
			</li>
			<li class="inline ml-3 px-3 py-2 rounded bg-nord-8 border-nord-8 border-2">
				<a href="/sign-up">Sign Up</a>
			</li>
		</ul>
	</nav>
</header>

<slot />
