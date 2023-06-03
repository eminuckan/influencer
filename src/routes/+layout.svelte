<script>
  import "../app.postcss";
  import Header from "$lib/components/Header/Header.svelte";
</script>

<svelte:head>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&amp;display=swap"
    rel="stylesheet"
  />
</svelte:head>

<sveltekit:body>
  <!-- Overlay--Start -->
  <div class="overlay">
    <img src="/img/waves.svg" alt />
  </div>
  <!-- Overlay--End -->

  <!-- Button Animation Filter -->

  <!-- Button Animation Filter -->

  <!-- Header--Start -->
  <Header />
  <!-- Header--End -->

  <slot />

  <!-- Hero Container--Start -->

  <!-- Hero Container--End -->

  <!-- Banner--Start -->

  <!-- Banner--End -->
</sveltekit:body>



