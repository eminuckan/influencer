<script>
    export let label;
</script>

<div class="banner">
    <div class="banner__content">
        <h4 class="upper">
            {label}
        </h4>
    </div>
</div>

<style lang="postcss">
    .banner{
        overflow-x: clip;
        max-height: 250px;
        width: 100%;

        &__content {
            height: 75px;
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
            background: none;

            &::before{
                content: "";
                background: var(--primary-color);
                height: 100%;
                width: 101%;
                top: 0;
                left: -2px;
                position: absolute;
                transform: rotate(-1.7deg);
                z-index: 1;
            }

            &::after{
                content: "";
                height: 100%;
                width: 100%;
                position: absolute;
                top: 1;
                left: 0;
                background-color: var(--primary-dark-color);
                z-index: -1;
            }

            & > h4 {
                color: var(--dark-color);
                transform: rotate(-1.7deg);
                z-index: 3;
            }
        }
    }
</style>