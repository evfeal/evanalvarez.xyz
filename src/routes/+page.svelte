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
      <li><a class="btn btn-ghost normal-case" href="/dev">/dev</a></li>
      <li><a class="btn btn-ghost normal-case" href="/mail">/mail</a></li>
    </ul>
  </div>
</div>

<div class="flex-frame">
  <div id="flex-home">
    <h3>// Hello, my name is...</h3>
    <div class="type-container">
      <h1 id="typeText ">&#123; Evan Alvarez &#125;</h1>
    </div>
    <p>
      I'm a high school student, who likes free (as in freedom) software, <br> this
      is my personal website, and hopefully soon, a portfolio and a <br> resume! I'm
      actually a backend developer mainly, but I have been <br> bullied into trying
      out front end development, while i'm liking it so far, <br> i'm obviously no designer!
    </p>

    <h2>&#123; Skills &#125;</h2>
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

  .flex-frame {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    overflow-x: 0;
    place-items: center;
  }

  #flex-home {
    display: flex;
    flex-direction: column;
  }

  .type-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  h1 {
    align-self: center;
    font-size: 6vh;
    white-space: nowrap;
    animation: typing 1.7s steps(40, end) forwards;
    overflow: hidden;
    text-align: center;
  }

  h2 {
    align-self: center;
    margin-top: 1.5vw;
    font-size: 4.5vh;
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
