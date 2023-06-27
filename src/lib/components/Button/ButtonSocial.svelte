<script>
    export let type;
    export let sr;

    import Icon from "svelte-icon/Icon.svelte";
    import google from '$lib/icons/social-auth/google.svg?raw';
    import twitch from '$lib/icons/social-auth/twitch.svg?raw';

</script>

<button
  href="#"
  class="inline-flex w-full justify-center rounded-md border-2 border-mordor-300 bg-mordor-500 py-3 px-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-mordor-800"
>
  <span class="sr-only">Google İle Giriş Yap</span>
  {#if type === 'google'}
  <Icon data={google} />
  {:else if type === 'twitch'}
  <Icon data={twitch} />
  {/if}
    
</button>

<style lang="postcss">

    svg{
        @apply h-5 w-5;
    }
</style>
