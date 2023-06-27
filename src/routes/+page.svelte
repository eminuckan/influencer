<script>
  export let data;
  $: pageData = data;
  // components
  import FeatureCard from "$lib/components/Card/FeatureCard.svelte";
  import ButtonOutline from "$lib/components/Button/ButtonOutline.svelte";
  import InfluencerCard from "$lib/components/Card/InfluencerCard.svelte";
  import StepCard from "$lib/components/Card/StepCard.svelte";
  import Timeline from "$lib/components/Roadmap/Timeline.svelte";
  import BlogCard from "../lib/components/Card/BlogCard.svelte";
  import ButtonPrimary from "../lib/components/Button/ButtonPrimary.svelte";

  // package Components
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";

  // package styles
  import "@splidejs/svelte-splide/css";

  //icons
  import statsUp from "$lib/icons/statsUp.svg?raw";
  import handshake from "$lib/icons/handshake.svg?raw";
  import revenue from "$lib/icons/revenue.svg?raw";

  /**
   * TODO:
   * [x] Aşağıdaki timeline elemanları supabaseden çekilecek.
   * Footer yapılacak
   * [x] Giriş/Kayıt sayfası yapılacak
   * Supabase ile oauth authentication vs. araştırılacak
   * Metamask JavascriptSDK entegrasyonu yapılacak.
   */
</script>

<div class="overlay">
  <img src="/img/waves.svg" alt />
</div>

<section
  class="
    container
    mx-auto
    mb-14
    sm:mb-24
    px-8
    sm:px-16
    flex
    flex-col
    gap-20
"
>
  <div
    class="row flex flex-col sm:flex-row gap-6 sm:mt-14 justify-between items-center"
  >
    <div class="basis-2/3 flex flex-col gap-6">
      <h1 class="uppercase my-0">
        Destek olmak istediğin influencer'a yatırım yap
        <strong class="text-primary-400">birlikte kazan.</strong>
      </h1>
      <p>
        Influencerların fan tokenlerini satın alarak hem onlara destek olabilir,
        hem de gelişimlerinden para kazanabilirsiniz.
      </p>
      <div class="flex gap-4">
        <ButtonPrimary url="/on-satis">Ön Satış</ButtonPrimary>
        <ButtonOutline url="/token-listesi">Token Listesi</ButtonOutline>
      </div>
    </div>
    <div class="basis-1/3">
    </div>
  </div>

  <div class="row col-span-3 flex flex-col sm:flex-row gap-4">
    <StepCard
      num={1}
      title="Kayıt ol ve cüzdanını bağla."
      desc="Occaecat veniam esse fugiat nostrud ullamco laborum est."
    />
    <StepCard
      num={2}
      title="Ön satış listesinden tokeni seç."
      desc="Occaecat veniam esse fugiat nostrud ullamco laborum est."
    />
    <StepCard
      num={3}
      title="Desteklerken kazanmaya başla."
      desc="Occaecat veniam esse fugiat nostrud ullamco laborum est."
    />
  </div>
</section>

<!-- <section class="stretched banner-container">
    <Banner label="Ön Satışlar 30 Haziranda Başlıyor!" />
</section> -->

<section
  class="
    container
    mx-auto
    mb-14
    sm:mb-24
    px-8
    sm:px-16
    flex
    flex-col-reverse
    sm:flex-row
    items-center
    justify-center
    gap-12
    sm:gap-6
"
>
  <div class="basis-2/3 flex flex-col gap-6">
    <h1 class="uppercase">
      Ön satış sonrası 1 yıl boyunca coınler kılıtlı kalacak
    </h1>
    <p>
      Quis ut excepteur nisi est nulla commodo ea occaecat id eiusmod non dolor
      est.Elit eu aliqua sunt fugiat ea id aliquip.Quis dolor fugiat pariatur
      duis in.
    </p>
    <div>
      <ButtonPrimary url="/proje-hakkinda">Daha Fazla</ButtonPrimary>
    </div>
  </div>

  <div class="basis-1/3">
    <img src="/img/safe.png" alt="Token Güvenliği" />
  </div>
</section>

<section
  class="container
mx-auto
mb-14
sm:mb-24
px-8
sm:px-16
flex
flex-col
items-start
justify-start
gap-8"
>
  <div class="">
    <h1 class="uppercase">Borem ipsum dolor adipiscing</h1>
  </div>
  <div class="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-4">
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

<section
  class="
    container
    mx-auto
    mb-14
    sm:mb-24
    px-8
    sm:px-16
    flex
    flex-col
    justify-start
    gap-8
"
>
  <div>
    <h1 class="uppercase">Partnerlerimiz</h1>
  </div>
  <Splide
    aria-label="Influencers"
    class="carousel-container"
    options={{
      perPage: 4,
      breakpoints: {
        640: {
          perPage: 1,
        },
        768: {
          perPage: 2,
        },
        1024: {
          perPage: 3,
        },
        1280: {
          perPage: 3,
        },
        1536: {
          perPage: 4,
        },
      },
      type: "loop",
      perMove: 1,
      autoplay: false,
      lazyLoad: "nearby",
      interval: 3000,
      gap: "1em",
      pagination: false,
    }}
  >
    {#each pageData.influencers as influencer}
      <SplideSlide>
        <InfluencerCard
          name={influencer.name}
          pic={influencer.pic}
          links={influencer.influencer_links}
        />
      </SplideSlide>
    {/each}
  </Splide>
</section>

<section
  class="
    container
    mx-auto
    mb-14
    sm:mb-24
    px-8
    sm:px-16
    flex
    flex-col
    justify-start
    gap-12
"
>
  <div>
    <h1 class="uppercase">Yol Haritası</h1>
  </div>
  <div class="flex flex-col sm:flex-row">
    <Timeline items={data.timelineItems} />
    <div class="img" />
  </div>
</section>

<section class="
    container
    mx-auto
    mb-14
    sm:mb-24
    px-8
    sm:px-16
    flex
    flex-col
    justify-start
    gap-12

">
  <h1 class="upper">Son Yazılar</h1>
  <div class="flex flex-col sm:flex-row gap-4">
    <BlogCard 
      imageUrl="https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
      title="Lorem Ipsum Dolor Sit Amet"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae luctus nisl nunc vitae nisl."  
      url="/blog/lorem-ipsum-dolor-sit-amet"  
    />
    <BlogCard 
      imageUrl="https://images.unsplash.com/photo-1634704784915-aacf363b021f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      title="Lorem Ipsum Dolor Sit Amet"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, vitae luctus nisl nunc vitae nisl."    
      url="/blog/lorem-ipsum-dolor-sit-amet"
    />
    <BlogCard 
      imageUrl="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2446&q=80" 
      title="Lorem Ipsum Dolor Sit Amet"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies."  
      url="/blog/lorem-ipsum-dolor-sit-amet"
    />
  </div>
</section>

<style lang="postcss">
  
</style>
