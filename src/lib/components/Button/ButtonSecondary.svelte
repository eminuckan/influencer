<script>
    export let className;
</script>


<button type="button" 
class="btn {className}"><slot></slot></button>


<style lang="postcss">
    .btn{
        @apply
            inline-flex 
            items-center 
            rounded-lg 
            border 
            border-transparent 
            bg-indigo-100 
            px-7 
            py-3 
            text-base     
            font-medium 
            text-zinc-950               
            hover:bg-zinc-800
            hover:text-indigo-100
            ease-in-out
            duration-300 
    }
</style>