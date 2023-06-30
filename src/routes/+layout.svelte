<script>
  import "../app.postcss";
  import Header from "$lib/components/Header/Header.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import { page } from "$app/stores";
  import {onMount} from "svelte";
  import { supabase } from "../lib/supabaseClient";
  import { invalidate } from "$app/navigation";

  $: displayHeader =
    $page.url.pathname === "/login" || $page.url.pathname === "/register";

  export let data;

  let {session} = data;
  $:({session} = data);

  onMount(() => {
    const {data} = supabase.auth.onAuthStateChange((event,_session) => {
      if(_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });


    return ()=> {
      data.subscription.unsubscribe();
    }
  });


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
    <Header data={data} />
  {/if}
  <!-- Header--End -->

    <slot />
  {#if !displayHeader}
    <!-- Footer--Start -->
    <Footer />
    <!-- Footer--End -->
  {/if}
</sveltekit:body>
