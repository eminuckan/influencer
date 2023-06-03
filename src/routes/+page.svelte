<script>

    export let data;
    // components
    import FeatureCard from '$lib/components/Card/FeatureCard.svelte';
    import Banner from "$lib/components/Banner/Banner.svelte";
    import ButtonOutline from "$lib/components/Button/ButtonOutline.svelte";
    import ButtonSolid from "$lib/components/Button/ButtonSolid.svelte";
    import InfluencerCard from '$lib/components/Card/InfluencerCard.svelte';
    import StepCard from '$lib/components/Card/StepCard.svelte';
    import Timeline from '$lib/components/Roadmap/Timeline.svelte';
    import BlogCard from '../lib/components/Card/BlogCard.svelte';

    // package Components
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';

    // package styles
    import '@splidejs/svelte-splide/css';

    //icons
    import statsUp from '$lib/icons/statsUp.svg?raw';
    import handshake from '$lib/icons/handshake.svg?raw';
    import revenue from '$lib/icons/revenue.svg?raw';

    /**
     * TODO:
     * Aşağıdaki timeline elemanları supabaseden çekilecek.
     * Footer yapılacak
     * Giriş/Kayıt sayfası yapılacak
     * Supabase ile oauth authentication vs. araştırılacak
     * Metamask JavascriptSDK entegrasyonu yapılacak.
     */
    const items = [
        {
            date: "2023 Q3",
            title: "Lorem Culpa Magna sunt velit",
            desc: "Ut aliquip ipsum incididunt magna tempor commodo ullamco nisi velit eu.",
            active: false
        },
        {
            date: "2022 Q1",
            title: "Lorem Culpa Magna sunt velit",
            desc: "Ut aliquip ipsum incididunt magna tempor commodo ullamco nisi velit eu.",
            active: true
        },
        {
            date: "2022 Q1",
            title: "Lorem Culpa Magna sunt velit",
            desc: "Ut aliquip ipsum incididunt magna tempor commodo ullamco nisi velit eu.",
            active: false,
        },
        {
            date: "2022 Q1",
            title: "Lorem Culpa Magna sunt velit",
            desc: "Ut aliquip ipsum incididunt magna tempor commodo ullamco nisi velit eu.",
            active: false,
        },
        {
            date: "2024 Q1",
            title: "Tüm yatırımcılar fatihi götten sikecek",
            desc: "Ut aliquip ipsum incididunt magna tempor commodo ullamco nisi velit eu.",
            active: false
        }
    ];

</script>   

<section class="hero boxed">
    <div class="hero__info">
        <h1 class="upper">Destek olmak istediğin influencer'a yatırım yap 
            <strong class="highlight">birlikte kazan.</strong>
        </h1>
        <p>Influencerların fan tokenlerini satın alarak hem onlara destek olabilir, hem de gelişimlerinden para kazanabilirsiniz.</p>
        <div class="button-group">
            <ButtonOutline label="Token Listesi" url="/token-listesi" />
            <ButtonSolid label="Ön Satış" url="/on-satis" animated={true} />
        </div>
    </div>
    <div class="hero__image">

    </div>

    <div class="hero__steps">
        <StepCard num={1} 
             
            title="Kayıt ol ve cüzdanını bağla." 
            desc="Occaecat veniam esse fugiat nostrud ullamco laborum est."
        />
        <StepCard num={2} 
            title="Ön satış listesinden tokeni seç." 
            desc="Occaecat veniam esse fugiat nostrud ullamco laborum est."
        />
        <StepCard num={3} 
            title="Desteklerken kazanmaya başla." 
            desc="Occaecat veniam esse fugiat nostrud ullamco laborum est."
        />
    </div>
</section>


<!-- <section class="stretched banner-container">
    <Banner label="Ön Satışlar 30 Haziranda Başlıyor!" />
</section> -->

<section class="commitment boxed">
    <div class="commitment__info">
        <h1 class="upper">Ön satış sonrası
            1 yıl boyunca 
            coınler kılıtlı 
            kalacak</h1>
        <p>Quis ut excepteur nisi est nulla commodo ea occaecat id eiusmod non dolor est.Elit eu aliqua sunt fugiat ea id aliquip.Quis dolor fugiat pariatur duis in.</p>
        <ButtonOutline label="Daha Fazla" url="/proje-hakkinda" />
    </div>

    <div class="commitment__image">
        <img src="/img/safe.png" alt="Token Güvenliği">
    </div>

</section>

<section class="features boxed">
    <div class="features__title">
        <h1 class="upper">Borem ipsum dolor adipiscing</h1>
    </div>
    <div class="features__cards">
        <FeatureCard 
            title="Forem Ipsum" 
            desc="Sorem ipsum dolor sit amet, consectetur adipiscing elit."
            svgIcon={statsUp}
        />
        <FeatureCard 
            title="Forem Ipsum" 
            desc="Sorem ipsum dolor sit amet, consectetur adipiscing elit."
            svgIcon={revenue}
        />
        <FeatureCard 
            title="Win - Win" 
            desc="Sorem ipsum dolor sit amet, consectetur adipiscing elit."
            svgIcon={handshake}
        />
    </div>
</section>

<section class="influencers boxed">
    <div class="influencers__title">
        <h1 class="upper">Partnerlerimiz</h1>
    </div>
    <Splide aria-label="Influencers" class="carousel-container"
        options={{ 
            perPage: 4,
            type: 'loop',
            perMove:1,
            autoplay: true,
            lazyLoad: 'nearby',
            interval: 3000,
            gap:'1em',
            pagination:false
         }}
    >
         {#each data.influencers as influencer}
            <SplideSlide>
                <InfluencerCard name={influencer.name} pic={influencer.pic} links={influencer.influencer_links} />
            </SplideSlide>
         {/each}
        
        
    </Splide>
      
</section>

<section class="boxed roadmap">
    <h1 class="upper">Yol Haritası</h1>
    <div class="roadmap__timeline">
        <Timeline items={items} />
    </div>
</section>

<section class="boxed blog">
    <h1 class="upper">Son Yazılar</h1>
    <div class="blog__posts">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
    </div>

</section>




<style lang="postcss">
    h1{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .hero{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: auto 1fr;
        grid-column-gap: var(--space-sm);
        grid-row-gap: var(--space-xxl);

        &__info{
            grid-area: 1 / 1 / 2 / 3;
            p{
                color: var(--grayish-color);
            }
            .button-group{
                display: flex;
                align-items: center;
                gap: var(--space-md);

                :global{
                    #gooey-button{
                        margin-top: 10px;
                    }
                }
            }
        }

        &__image{
            grid-area: 1 / 3 / 2 / 4;
        }

        &__steps{
            grid-area: 2 / 1 / 3 / 4;
            display: flex;
            gap: var(--space-sm);
        }
    }

    .commitment{
        display: grid;
        justify-items: right;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: auto;
        grid-column-gap: var(--space-sm);
        grid-row-gap: 0px;
        &__info{
            grid-area: 1/1/2/2;
            p{
                margin-bottom: var(--space-lg);
                color: var(--grayish-color);
            }
        }

        &__image{
            grid-area: 1/2/2/3;
            height: 400px;
            img{
                height:100%;
            }
        }
    }

    .features{
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        &__cards{
            :global{
                svg{
                    fill: var(--primary-color);
                }
            }

            display:flex;
            align-items: space-between;
            gap: var(--space-xl)
        }
        
    }

    .influencers{
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    }

    .roadmap{
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        &__timeline{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto;
            grid-column-gap: var(--space-sm);
            justify-content: space-between;
        :global{
            .timeline{
                grid-area:1 / 1 / 2 / 3;
            }
        }
        }
    }

    .blog{
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        h1{
            margin: 0;
        }
        &__posts{
            display: flex;
            gap: var(--space-md);
        }
    }

</style>