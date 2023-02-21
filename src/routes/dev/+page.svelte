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
  <div id="flex-github">
    <div class="iframe-container">
      <iframe src="https://github-readme-stats.vercel.app/api?username=evfeal&show_icons=true&theme=gruvbox"
              frameborder="0" 
              marginheight="0" 
              marginwidth="0" 
              width="500vh" 
              height="200vh" 
              scrolling="auto">
      </iframe>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">GitHub</h2>
        <p>This is where I keep all of my projects and other dotfiles</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" on:click={openGithub}>Go To</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  function openGithub() {
      window.open('https://github.com/evfeal','_blank');
    }
</script>

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
		justify-content: left;
		width: 100vw;
		overflow-x: 0;
	}

	#flex-github {
		display: flex;
		flex-direction: column;
	}

  .card {
      margin-left: 5vw;
    }
  
  .iframe-container iframe {
      align-self: right;
      margin-top: 2vh;
      margin-left: 5vw;
      border: none;
    }

	h1 {
		align-self: center;
		font-size: 46vw;
	}

	h3 {
		align-self: center;
		margin-top: 1.5vw;
		font-size: 26vw;
		color: #808080;
	}

	p {
		font-size: 18px;
	}
</style>
