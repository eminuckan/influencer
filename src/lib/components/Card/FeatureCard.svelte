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
    // viewBox?: string

    // size?: string
    // width?: string
    // height?: string

    // color?: string
    // stroke?: string
    // fill?: string
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
        padding: var(--space-xl);
        background-color: var(--gray-color);
        border-radius: var(--radius);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-md);
        text-align: center;
        h5{
            margin-top: 0;
            margin-bottom:0;
        }
        p{
            font-size: var(--text-sm);
            margin-top: 0;
            margin-bottom: 0;
        }
    }
</style>
