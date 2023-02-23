<script>
	import '../../app.css';
	import logo from '$lib/assets/logo.svg';
</script>

<header class="px-20 py-6 bg-white flex items-center justify-between text-nord-0">
	<a href="/">
		<div class="flex items-center">
			<img src={logo} alt="logo" />
			<h1 class="font-semibold font-inter text-3xl ml-4 ">Veles AI</h1>
		</div>
	</a>
	<nav>
		<ul>
			<li
				class="inline px-4 py-2 rounded border-transparent border-2 hover:bg-shade transition duration-200"
			>
				<a href="/">Home</a>
			</li>
			<li
				class="inline ml-3 px-4 py-2 rounded border-transparent border-2 hover:bg-shade transition duration-200"
			>
				<a href="/about-us">About Us</a>
			</li>
			<li
				class="inline ml-3 px-4 py-2 rounded border-transparent border-2 hover:bg-shade transition duration-200"
			>
				<a href="/products">Products</a>
			</li>
			<li
				class="inline ml-3 px-4 py-2 rounded border-nord-0 border-2 hover:shadow hover:bg-nord-8 transition duration-200"
			>
				<a href="/login">Login</a>
			</li>
			<li
				class="inline ml-6 px-3 py-2 rounded bg-nord-8 border-nord-8 border-2 hover:shadow hover:border-nord-0 transition duration-200"
			>
				<a href="/sign-up">Sign Up</a>
			</li>
		</ul>
	</nav>
</header>

<slot />

<footer class="bg-nord-6 w-screen px-20 py-6">
	<div class="mb-6 flex justify-between">
		<ul class="w-40">
			<li
				class="mb-3 px-4 py-2 rounded border-transparent border-2 hover:bg-shade transition duration-200"
			>
				<a href="/">Home</a>
			</li>
			<li
				class="mb-3 px-4 py-2 rounded border-transparent border-2 hover:bg-shade transition duration-200"
			>
				<a href="/about-us">About Us</a>
			</li>
			<li
				class="px-4 py-2 rounded border-transparent border-2 hover:bg-shade transition duration-200"
			>
				<a href="/products">Products</a>
			</li>
		</ul>
		<div class="flex-col justify-between">
			<ul>
				<li class="inline-block">
					<a
						class="flex justify-center items-center p-1 ml-2 rounded-full hover:bg-shade w-10 h-10 align-middle text-xl text-center transition duration-200"
						href="mailto:help@velesai.co.uk"><i class="ri-mail-line" /></a
					>
				</li>
				<li class="inline-block">
					<a
						class="flex justify-center items-center p-1 ml-2 rounded-full hover:bg-shade w-10 h-10 align-middle text-xl text-center transition duration-200"
						href="https://twitter.com/Veles_AI"><i class="ri-twitter-line" /><i /></a
					>
				</li>
				<li class="inline-block">
					<a
						class="flex justify-center items-center p-1 ml-2 rounded-full hover:bg-shade w-10 h-10 align-middle text-xl text-center transition duration-200"
						href="https://github.com/Veles-Team"><i class="ri-github-line" /></a
					>
				</li>
			</ul>
		</div>
	</div>
	<hr class="border-nord-4" />
	<div class="mt-6 text-sm flex items-center justify-between">
		<div class="flex items-center">
			<span>© Veles AI</span>
			<span class="ml-2 text-xs">
				Colours from <a
					class="font-semibold hover:text-nord-10"
					href="https://www.nordtheme.com"
					target="_blank"
					rel="noopener noreferrer">Nord Theme</a
				>
			</span>
		</div>
		<span>Helping you find the best people</span>
	</div>
</footer>
