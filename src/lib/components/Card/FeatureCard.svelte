<script>
    import Icon from 'svelte-icon/Icon.svelte'
    export let title;
    export let desc;
    export let svgIcon;

    const iconOptions = {
        width: 45,
        height:45,
        stroke: "none"

    }

</script>

<div class="card">
    <div class="card__icon">
        <Icon data={svgIcon} {...iconOptions}/>
    </div>

    <h5 class="upper">{title}</h5>
    <p>{desc}</p>
</div>


<style lang="postcss">
    .card{
        @apply
            p-12
            bg-mordor-600
            rounded-lg
            flex
            flex-col
            items-center
            gap-3
            text-center
    }
    :global{
        svg{
            @apply
                fill-primary-400
        }
    }
</style>
