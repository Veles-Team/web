<script lang="ts">
	import { goto } from '$app/navigation';
	import { pb } from '$lib/scripts/pocketbase';

	let email: string;
	let password: string;

	async function login() {
		await pb.collection('users').authWithPassword(email, password);
		goto('/dashboard');
	}
</script>

<svelte:head>
	<title>Sign Up - Veles AI</title>
</svelte:head>

<main class="flex justify-center items-center bg-nord-6 w-screen h-screen">
	<form on:submit|preventDefault class="w-96 h-min p-6 bg-white drop-shadow rounded-lg">
		<h2 class="text-center text-xl font-semibold">Login</h2>
		<div class="relative mt-6">
			<input
				required
				type="email"
				id="email"
				bind:value={email}
				class="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-nord-0 bg-nord-6 dark:bg-gray-700 border-0 border-b-2 border-nord-4 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-nord-10 peer"
				placeholder=" "
			/>
			<label
				for="email"
				class="absolute text-sm text-nord-0 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-nord-10 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
				>Email</label
			>
		</div>
		<div class="relative mt-3">
			<input
				required
				type="password"
				id="password"
				bind:value={password}
				class="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-nord-0 bg-nord-6 dark:bg-gray-700 border-0 border-b-2 border-nord-4 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-nord-10 peer"
				placeholder=" "
			/>
			<label
				for="password"
				class="absolute text-sm text-nord-0 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-nord-10 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
				>Password</label
			>
		</div>

		<div class="relative mt-6 flex align-middle justify-center">
			<a
				href="/sign-up"
				class="inline px-4 py-2 rounded border-nord-0 border-2 hover:shadow hover:bg-nord-8 transition duration-200"
				>Sign Up</a
			>
			<input
				type="submit"
				value="Login"
				on:click={login}
				class="inline ml-6 px-3 py-2 rounded bg-nord-8 border-nord-8 border-2 hover:shadow hover:border-nord-0 transition duration-200 hover:cursor-pointer"
			/>
		</div>
	</form>
</main>
