<script>
    export let items;
</script>

<ol 
>
    {#each items as item}
        <li>
            <span class="ring {item.isActive ? 'active' : ''}"/>
            <div
                class="title"
            >
                <h3>
                {item.title}
                </h3>
                <time>{item.quarter}</time
                >
            </div>

            <p>
               {item.desc}
            </p>
        </li>
    {/each}
    
</ol>

<style lang="postcss">
    ol{
        @apply
            relative border-l-2 border-mordor-400 md:basis-2/3 lg:basis-2/3 xl:basis-2/3
    }

    li{
        @apply
            mb-10 last:mb-0 ml-12 bg-mordor-500 py-8 px-10 rounded-lg
    }

    .ring{
        @apply
            absolute font-title flex items-center justify-center w-6 h-6 bg-mordor-500 rounded-full -left-3 ring-8 ring-mordor-400 
    }

    .active{
        @apply
            ring-primary-400 drop-shadow-primary-xl
    }

    .title{
        @apply
            flex flex-col-reverse sm:flex-row items-start sm:items-center justify-start gap-4 mb-4
    }

    h3{
        @apply
            text-xl font-semibold text-zinc-100 capitalize
    }

    time{
        @apply
            bg-primary-400 text-mordor-500 text-sm font-extrabold mr-2 px-2.5 py-0.5 rounded
    }
    
</style>