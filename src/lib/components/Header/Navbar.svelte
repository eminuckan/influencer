<script>
    export let items = [
        {title: 'Ana Sayfa', href:'/'},
        {title: 'Proje Hakkında', href:'/proje-hakkinda'},
    ];
</script>

<nav>
    <ul class="nav__links"> 
        {#each items as item}
            <li><a href={item.href}>{item.title}</a></li>
        {/each}
    </ul>
</nav>

<style lang="postcss">
    nav{
        .nav__links{
            list-style: none;
            &>li{
                display: inline-block;
                padding: 0px 20px;

                a{
                    transition: all 0.5s ease 0s;
                    font-family: var(--primary-font);
                    font-weight: 500;
                    font-size: var(--text-sm);
                    color: var(--light-color);
                    text-decoration: none;

                    &:hover{
                        color: var(--primary-color);
                    }
                }
            }
        }
    }
</style>