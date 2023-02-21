<script lang="ts">
	import '$lib/global.css';
</script>

<div class="navbar bg-base-300">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">Evan Alvarez</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/">/home</a></li>
			<li><a href="/dev">/dev</a></li>
			<li><a href="/mail">/mail</a></li>
		</ul>
	</div>
</div>

<div class="flex-frame">
	<div id="flex-home">
		<h3>// hello, my name is...</h3>
		<h1>&#123; Evan Alvarez &#125;</h1>
		<p>
			I'm a high school student, who likes free (as in freedom) software, this is my personal
			website, <br /> and hopefully soon, a portfolio and a resume!
		</p>
	</div>
</div>

<style>
	/* Web Fonts  (IBM Plex)*/

	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

	* {
		font-family: 'IBM Plex Sans', sans-serif;
	}

	.flex-frame {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100vw;
		overflow-x: 0;
	}

	#flex-home {
		display: flex;
		flex-direction: column;
	}

	h1 {
		align-self: center;
		font-size: 2.5vw;
	}

	h3 {
		align-self: center;
		margin-top: 1.5vw;
		font-size: 1.2vw;
		color: #808080;
	}

	p {
		font-size: 1.1vw;
	}
</style>
