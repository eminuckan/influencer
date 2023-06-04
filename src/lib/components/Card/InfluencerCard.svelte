<script>
    import Icon from 'svelte-icon/Icon.svelte'
    import twitchLogo from '$lib/icons/social-media/twitch.svg?raw';
    import youtubeLogo from '$lib/icons/social-media/youtube.svg?raw';
    import instagramLogo from '$lib/icons/social-media/instagram.svg?raw';
    import twitterLogo from '$lib/icons/social-media/twitter.svg?raw';

    export let name;
    export let pic;
    export let links;
    

    const icons = {
        twitch: twitchLogo,
        youtube: youtubeLogo,
        instagram: instagramLogo,
        twitter: twitterLogo
    };

    const socialIconOptions = {
        width: 25,
        height: 25,
        stroke: "none"
    }

    const trimUrl = (url) => {
        const urlObject = new URL(url);
        return urlObject.hostname.replace(/.+\/\/|www.|\..+/g,'');
    }
</script>


<div style="background-image: url({pic})" class="influencer-card">
    <div class="influencer-card__info">
        <h6 class="capitalize">{name}</h6>
        <div class="influencer-card__info--icons">
            {#each links as link}
                <a href={link.link} target="_blank"><Icon data={icons[trimUrl(link.link)]} {...socialIconOptions} /></a>
            {/each}
        </div>
    </div>
</div>


<style lang="postcss">
    .influencer-card{
        padding: var(--space-xl) var(--space-xs) var(--space-xs) var(--space-xs);
        border-radius: var(--radius);
        display: flex;
        justify-content: center;
        background-size: cover;
        min-height: 12.5em;
        min-width: 15.625em;
        position: relative;
        &__info{
            margin-top:auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            gap: var(--space-md);
            z-index: 999;
            h6{
                font-family: var(--title-font);
                margin-top: 0;
                margin-bottom: 0;
            }
            :global{
                svg{
                    fill: var(--primary-color);
                }
            }

            &--icons{
                display: flex;
                gap: var(--space-xs);
                align-items: center;
                justify-content: flex-start;
            }
        }

        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background: rgb(5,5,5);
            background: linear-gradient(360deg, rgba(5,5,5,0.5798144941570378) 0%, rgba(255,255,255,0) 60%);
            width: 100%;
            height: 100%;
            border-radius: var(--radius);
            
        }

    }
</style>