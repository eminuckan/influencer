<script>
    export let items;
</script>

<div class="timeline">
    {#each items as item }
        <div class="timeline__card">
            <span class="text-lg timeline__card--date" 
                style="color: {item.active ? 'var(--primary-color)' : 'var(--body-color)'}"
            >
                {item.date}
            </span>
            <div class="timeline__card--info">
                <h5 class="capitalize">{item.title}</h5>
                <p class="text-sm">{item.desc}</p>
            </div>
        </div>
    {/each}
</div>

<style lang="postcss">
    .timeline{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        margin-left: 30px;
        &::before{
            content: "";
            position: absolute;
            top:0;
            left: calc(-1 * var(--space-lg));
            height: 100%;
            width: 100%;
            border-left: 3px solid var(--primary-color);
        }
        &__card{    
            display: flex;
            gap: var(--space-md);
            align-items: center;
            &--info{
                display: flex;
                flex-direction: column;
                gap: var(--space-sm);
                background-color: var(--gray-color);
                padding: var(--space-lg);
                border-radius: var(--radius);

                h5{
                    font-family: var(--primary-font);
                    margin: 0;
                }

                p{
                    margin: 0;
                }
            }

            &--date{
                position: relative;
                flex-basis: 100px;
                &::before{
                    content: "";
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    border: 10px solid var(--primary-color);
                    border-radius: 50%;
                    left: calc(calc(-1 * var(--space-lg)) + 1px);
                    top: 0;
                    transform: translateY(-4px);
                    background-color: var(--dark-color);
                    filter: drop-shadow(1px 1px 10px rgba(255, 255, 63, 0.2));
                }
            }
            
        }
    }
</style>