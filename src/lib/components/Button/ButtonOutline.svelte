<script>
    export let label ;
    export let url;
</script>


<a href={url} class="button button-outline" >
    {label}
</a>

<style lang="postcss">
    .button-outline{
        color: var(--light-color);
        background: none;   
        border: none;
        border-radius: var(--radius);
        position: relative;
        transition: all 0.5s ease 0s;

        &::before{
            content: "";
            position: absolute;
            border: 2px solid var(--primary-color);
            border-radius:inherit;
            background: var(--dark-color);
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            z-index: -1;
        }

        &::after{
            content: "";
            position: absolute;
            border: 2px solid var(--primary-color);
            border-radius: inherit;
            background: var(--primary-color);
            left: 4px;
            top: 4px;
            height: 100%;
            width: 100%;
            transition: all 0.5s ease 0s;
            z-index: -2;
        }

        &:hover{
            -webkit-transform: translate(3px,3px);
            transform: translate(3px,3px);
        }

        &:hover::after{
            top: 0;
            left: 0;
            background-color: var(--dark-color);
        }

        
    }
</style>