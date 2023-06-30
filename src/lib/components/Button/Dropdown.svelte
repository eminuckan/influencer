<script>
  import ButtonOutline from "$lib/components/Button/ButtonOutline.svelte";
  import PageTransition from "$lib/components/Transition/PageTransition.svelte";
  import { each } from "svelte/internal";

  let accountDropdown = false;
  $: dropDownState = accountDropdown;

  let container;

  export let userData;
  export let items;

  const onWindowClick = (e) => {
    if (container.contains(e.target) == false) {
      accountDropdown = false;
    }
  };
</script>

<svelte:window on:click={onWindowClick} />
<div class="relative inline-block text-left" bind:this={container}>
  <div>
    <ButtonOutline on:click={() => (accountDropdown = !accountDropdown)}
      >Hesabım</ButtonOutline
    >
  </div>
  {#if dropDownState}
    <PageTransition>
      <div
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-mordor-400 rounded-lg bg-mordor-500 shadow-lg focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="px-4 py-3" role="none">
          <p class="text-sm text-zinc-50" role="none">Merhaba,</p>
          <p class="truncate text-sm font-medium" role="none">
            {userData?.session.user.email}
          </p>
        </div>
        {#each items as item}
          <div class="py-1" role="none">
            <a
              href={item.url}
              class="text-neutral-400 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0">{item.name}</a
            >
          </div>
        {/each}
      </div>
    </PageTransition>
  {/if}
</div>
