<script>
    export let num;
    export let title;
    export let desc;
</script>

<div class="card">
    <div class="card__num text-md">
        {num}
    </div>
    <div class="card__info">
        <h6 >{title}</h6>
        <p class="text-xs">{desc}</p>
    </div>
</div>

<style lang="postcss">
    .card{
        background-color: var(--gray-color);
        border-radius: var(--radius);
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 400px;
        max-height: 50px;
        color: var(--light-color);
        gap:var(--space-md);
        padding: var(--space-md) var(--space-md);
        &__num{
            color: var(--dark-color);
            background-color: var(--primary-color);
            filter: drop-shadow(1px 1px 10px rgba(255, 255, 63, 0.2));
            border-radius: 50%;
            width: calc(45px + (var(--space-md)/2));
            max-width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__info{
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
            h6{
                margin: 0;
                font-family: var(--primary-font);
            }
            p{
                color: rgba(255, 255, 255, 0.5);
                margin: 0;
                font-weight: 400;
            }
        }
    }
</style>