<script>
    import {fly,slide} from 'svelte/transition'
    
    export let url;
</script>

{#key url}
    <div
    transition:slide={{delay:0,duration:300}}
    >
        <slot />
    </div>
{/key}