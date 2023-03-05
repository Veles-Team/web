<script lang="ts">
	import { pb } from '$lib/scripts/pocketbase';
	function signOut() {
		pb.authStore.clear();
		console.log('User left the chat');
	}

	let addResumeVisible: boolean = false;
	function switchResumeVisibility() {
		if (addResumeVisible) {
			addResumeVisible = false;
		}

		if (!addResumeVisible) {
			addResumeVisible = true;
		}
	}
</script>

<input
	on:click={signOut}
	value="Sign Out"
	class="px-4 py-2 rounded border-nord-0 border-2 hover:shadow hover:bg-nord-8 transition duration-200"
/>

<button
	on:click={switchResumeVisibility}
	class="px-4 py-2 rounded border-nord-0 border-2 hover:shadow hover:bg-nord-8 transition duration-200"
	>Add Resumes</button
>

{#if addResumeVisible}
	<div
		class="w-screen h-screen bg-nord-6/30 backdrop-blur-sm top-0 left-0 absolute grid place-items-center"
	>
		<form
			on:submit|preventDefault
			class="w-max h-min p-6 bg-white drop-shadow rounded-xl grid gap-6 grid-cols-2 grid-rows-1 text-nord-0"
		>
			<div class="w-96 min-h-96 p-6 rounded-lg bg-white drop-shadow">
				<h2 class="font-bold text-2xl">Filter</h2>
				<h3 class="text-lg mt-3 mb-1">Skills</h3>
			</div>
		</form>
	</div>
{/if}
