<script lang="ts">
  import "$lib/global.css";
</script>

<div class="navbar bg-base-300">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">Evan Alvarez</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a class="btn btn-ghost normal-case" href="/">/home</a></li>
      <li><a class="btn btn-ghost normal-case" href="/rice">/rices</a></li>
      <li><a class="btn btn-ghost normal-case" href="/dev">/dev</a></li>
      <li><a class="btn btn-ghost normal-case" href="/mail">/mail</a></li>
    </ul>
  </div>
</div>

<div class="flex-frame">
  <div id="flex-ricelist">
    <h2 id="typeText">&#123; Rices &#125;</h2>
    <p> 
    Here are some of my rices that I have made over the years, 
    all of <br> my rices  are optimized for performance and 
    are as minimal as possible
    </p>

      <div class="hero min-h-50% bg-base-100">
        <div class="hero-content flex-col lg:flex-row">
          <img src="src/routes/rice/rice-ibrahim.png" class="max-w-sm rounded-lg shadow-2xl rice-images" />
        <div>
          <h1 class="text-5xl font-bold">Ibrahim (Sway)</h1>
          <p class="py-6">This is my first decent rice, it is on the sway window manager <br> (wayland), and focuses on appearance over minimalism.</p>
          <button class="btn btn-primary" onclick="location.href = 'https://github.com/evfeal/rice-ibrahim';">Go to Github</button>
      </div>
    </div>
    </div>
  </div>
</div>

<style>
  /* Web Fonts  (IBM Plex)*/

  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");

  * {
    font-family: "IBM Plex Sans", sans-serif;
  }

  .hero {
      height: auto;
      width: auto;
      margin-top: 10vh;
    }
  
  .flex-frame {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    overflow-x: 0;
    place-items: center;
  }

  #flex-ricelist {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  
  .rice-images {
      filter: blur(1px);
      -webkit-filter: blur(1px);
    }

  h2 {
    align-self: center;
    margin-top: 1.5vw;
    font-size: 4.5vh;
    white-space: nowrap;
    animation: typing 3s steps(80, end) forwards;
    overflow: hidden;
  }

  h3 {
    align-self: center;
    margin-top: 1.5vw;
    font-size: 3vh;
    color: #808080;
  }

  p {
    font-size: 2.3vh;
  }
</style>
