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

<div id="flex-frame">
  <div id="flex-projects">
    <h2>&#123; Projects &#125;</h2>
    
    <h3>IDK... Coming Soon I Guess...</h3>
  </div>
</div>

<style>
  /* Web Fonts  (IBM Plex)*/

  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");

  * {
    font-family: "IBM Plex Sans", sans-serif;
  }

  #flex-frame {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    overflow-x: 0;
  }

  #flex-projects {
      display: flex;
      flex-direction: column;
    }

  h2 {
    align-self: center;
    text-align: center;
    margin-top: 1.5vw;
    margin-bottom: 0.5vw;
    font-size: 4.5vh;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 1s steps(25, end) forwards;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  h3 {
    align-self: center;
    margin-top: 1.5vw;
    font-size: 3vh;
    color: #808080;
  }

  p {
    font-size: 18px;
  }
</style>
