<script lang="ts">
	const webcamVideo: HTMLVideoElement = document.getElementById('webcamVideo') as HTMLVideoElement;
	const remoteVideo: HTMLVideoElement = document.getElementById('remoteVideo') as HTMLVideoElement;

	const servers = {
		iceServers: [{ urls: 'stun:23.21.150.121' }, { urls: 'stun:stun.1.google.com:19302' }]
	};

	// Global State
	let pc = new RTCPeerConnection(servers);
	let localStream: MediaStream;
	let remoteStream: MediaStream;

	// 1. Setup media sources

	async function toggleWebcam() {
		localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
		remoteStream = new MediaStream();

		// Push tracks from local stream to peer connection
		localStream.getTracks().forEach((track) => {
			pc.addTrack(track, localStream);
		});

		// Pull tracks from remote stream, add to video stream
		pc.ontrack = (event) => {
			event.streams[0].getTracks.forEach((track) => {
				remoteStream.addTrack(track);
			});
		};

		webcamVideo.srcObject = localStream;
		remoteVideo.srcObject = remoteStream;
	}

	// 2. Create an offer
	async function callButton() {
		// Reference firestore collection
		const callDoc = firestore.collection();
	}
</script>

<main>
	<h2>1. Start your Webcam</h2>
	<div class="videos">
		<span>
			<h3>Local Stream</h3>
			<!-- svelte-ignore a11y-media-has-caption -->
			<video id="webcamVideo" autoplay playsinline />
		</span>
		<span>
			<h3>Remote Stream</h3>
			<!-- svelte-ignore a11y-media-has-caption -->
			<video id="remoteVideo" autoplay playsinline />
		</span>
	</div>

	<button on:click|once={toggleWebcam}>Start webcam</button>
	<h2>2. Create a new Call</h2>
	<button id="callButton" disabled>Create Call (offer)</button>

	<h2>3. Join a Call</h2>
	<p>Answer the call from a different browser window or device</p>

	<input id="callInput" />
	<button id="answerButton" disabled>Answer</button>

	<h2>4. Hangup</h2>

	<button id="hangupButton" disabled>Hangup</button>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');

	main {
		font-family: 'Syne Mono', monospace;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin: 80px 10px;
	}

	video {
		width: 40vw;
		height: 30vw;
		margin: 2rem;
		background: #2c3e50;
	}

	.videos {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
