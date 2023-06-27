<script>
  import "../app.postcss";
  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import { page } from "$app/stores";

  $: displayHeader =
    $page.url.pathname === "/giris" || $page.url.pathname === "/kayit-ol";
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
  <!-- Header--Start -->
  {#if !displayHeader}
    <Header />
  {/if}
  <!-- Header--End -->

    <slot />
  {#if !displayHeader}
    <!-- Footer--Start -->
    <Footer />
    <!-- Footer--End -->
  {/if}
</sveltekit:body>
