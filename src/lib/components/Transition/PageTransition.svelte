<script>
    import {fly} from 'svelte/transition'
    
    export let url;
</script>

{#key url}
    <div
    transition:fly
    >
        <slot />
    </div>
{/key}