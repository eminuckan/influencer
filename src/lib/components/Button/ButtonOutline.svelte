<script>
  export let url;
</script>

{#if url}
  <a href={url}><slot /></a>
{:else}
  <button on:click type="button">
    <slot />
  </button>
{/if}

<style lang="postcss">
  a,button {
    @apply
        text-zinc-50 
        hover:text-mordor-800 
        active:text-mordor-800
        border-2 
        border-zinc-50 
        hover:bg-zinc-50 
        active:bg-zinc-50
        font-medium 
        rounded-lg 
        text-base 
        px-6
        py-2
        text-center 
        ease-in-out
        duration-300 
  }
</style>
