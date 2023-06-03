<script>
    export let animated = false;
    export let label;
    export let url;
</script>

{#if animated}
    <!-- Button Animation Filter -->
    <svg class="button-filter" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="gooey">
                <!-- in="sourceGraphic" -->
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
            </filter>
        </defs>
    </svg>
    <!-- Button Animation Filter -->
{/if}


<a href={url} id="gooey-button" class="button button-solid">
    {label}
    {#if animated}
        <span class="bubbles">
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
            <span class="bubble"></span>
        </span>
    {/if}
</a>

<style lang="postcss">

    .button-solid{
        border: none;
        border-radius: var(--radius);
        filter: url('#gooey');
        position: relative;
        background-color: var(--primary-color);
        border: 2px solid var(--primary-color);
        &:focus{
            outline: none;
        }

        .bubbles{
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;

            .bubble{
                background-color: var(--primary-color);
                border-radius: 100%;
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                z-index: -1;

                @for $bubble from 1 to 10 {
                    &:nth-child($bubble){
                        $size: 25px;
                        left: random(0,80)%;
                        width: $size;
                        height: $size;
                        animation: move-$(bubble) calc(3s + calc($bubble * 0.02s)) infinite;
                        animation-delay: calc($bubble*0.2s);
                    }
                }
            }
        }
    }

    @for $bubble from 1 to 10{
        @keyframes move-$(bubble){
            0%{
                transform: translate(0, 0);
            }
                
            99%{
                transform: translate(0, calc(-random(80)px + -50px));
            }
                
            100%{
                transform: translate(0, 0);
                opacity: 0;
            }          
                
        }
        
    }

    .button-filter{
        width: 100%;
        display: none;
    }

</style>