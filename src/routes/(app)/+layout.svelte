<script>
	import '../../app.css';
	import { currentUser, pb } from '$lib/scripts/pocketbase';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	console.log(currentUser);

	if (browser) {
		console.log('hey');
		if (currentUser === null) {
			goto('/login');
			console.log('hello');
		} else {
			console.log('boo');
		}
	}

	/*pb.auth().onAuthStateChanged((user) => {
		if (user === null) {
			// User is not logged in, prompt to log in or create account
		} else {
			// User is logged in, proceed with app functionality
		}
	});*/
</script>

<slot />
