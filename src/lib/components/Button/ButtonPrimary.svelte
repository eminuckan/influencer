<script>
    export let url;
</script>

{#if url}
    <a class="btn" href={url}><slot></slot></a>
{:else}
    <button 
        type="button" 
        class="btn"
        >
        <slot></slot>
    </button>
{/if}


<style lang="postcss">
    .btn{
        @apply  
                
                inline-flex 
                items-center 
                text-center
                rounded-lg 
                border 
                border-transparent 
                bg-primary-400 
                px-6
                py-2 
                text-base          
                font-medium 
                text-mordor-800 shadow-sm 
                hover:bg-primary-600 
                ease-in-out
                duration-300 
    }
</style>