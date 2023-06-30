<script>
    export let icon;
    export let type;
    export let sr = "Social Auth";
    export let formaction;

    import Icon from "svelte-icon/Icon.svelte";
    import google from '$lib/icons/social-auth/google.svg?raw';
    import twitch from '$lib/icons/social-auth/twitch.svg?raw';

</script>

<button
  type={type}
  formaction={formaction}
  class="inline-flex w-full justify-center rounded-md border-2 border-mordor-300 bg-mordor-500 py-3 px-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-mordor-800"
>
  <span class="sr-only">{sr}</span>
  {#if icon === 'google'}
  <Icon data={google} width="1.25rem" height="1.25rem" />
  {:else if icon === 'twitch'}
  <Icon data={twitch} width="1.25rem" height="1.25rem" />
  {/if}
    
</button>
