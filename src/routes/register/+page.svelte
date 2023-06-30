<script>
  import ButtonPrimary from "$lib/components/Button/ButtonPrimary.svelte";
  import ButtonSocial from "$lib/components/Button/ButtonSocial.svelte";
  import InputSolid from "$lib/components/Form/InputSolid.svelte";

  export let form;
</script>

<div class="flex min-h-screen">
  <div
    class="flex flex-1 flex-col justify-center py-2 px-10 sm:px-4 lg:flex-none lg:px-20 xl:px-24"
  >
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <img class="h-10 w-auto" src="/img/logo.svg" alt="Inffinance" />
        {#if !form?.success}
          <h2
            class="mt-6 text-3xl font-primary font-bold tracking-tight text-zinc-50"
          >
            Inffinance Dünyasına Katılın
          </h2>
          <p class="mt-2 text-sm">
            Zaten bir hesabınız mı var?
            <a
              href="/login"
              class="font-medium text-primary-400 hover:text-zinc-50"
              >Hemen Giriş Yapın</a
            >
          </p>
        {:else}
          <p class="my-10">Başarıyla kayıt oldunuz. Onay bağlantısını e posta adresinize gönderildi. Hesabınızı onaylayarak ön satış avantajlarından yararlanmaya başlayabilirsiniz.</p>
          <ButtonPrimary url="/">Ana Sayfa</ButtonPrimary>
        {/if}
      </div>
      {#if !form?.success}
      <div class="mt-8">
        <form action="?/register" method="POST">
          <div>
            <div>
              <div class="mt-1 flex gap-3">
                <div class="basis-1/2">
                  <ButtonSocial type="submit" formaction="?/register&provider=google" sr="Google İle Giriş Yap" icon="google" />
                </div>
  
                <div class="basis-1/2">
                  <ButtonSocial type="submit" formaction="?/register&provider=twitch" sr="Twitch İle Giriş Yap" icon="twitch" />
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="mt-6">
          <form method="POST" class="space-y-6" action="?/register">
            
            <InputSolid
              label="Adınız Soyadınız"
              id="name"
              name="name"
              type="text"
              placeholder="Adınız Soyadınız"
              autocomplete="name"
              required={false}
            />

            <InputSolid
              label="E Posta"
              id="email"
              name="email"
              type="email"
              placeholder="ornek@email.com"
              autocomplete="email"
              required={false}
            />
            <InputSolid
              label="Parola"
              id="password"
              name="password"
              type="password"
              placeholder="*********"
              autocomplete="current-password"
              required={false}
            />

            <div>
              <ButtonPrimary formaction="?/register" type="submit">Kayıt Ol</ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
      {/if}
    </div>
  </div>
  <div
    class="hidden flex-1 sm:block bg-center bg-cover min-h-full"
    style="background-image: url('https://cdn.dribbble.com/users/1484654/screenshots/12018680/media/ac0d0439ca6e4ec05904c365ecf5bee6.jpg?compress=1&resize=1600x1200&vertical=center');"
  />
</div>
