<script>
  import ButtonPrimary from "$lib/components/Button/ButtonPrimary.svelte";
  import ButtonSocial from "$lib/components/Button/ButtonSocial.svelte";
  import InputSolid from "$lib/components/Form/InputSolid.svelte";

  export let form;
</script>

<!-- 
  TODO: inputlar componente alınacak [x]
  TODO: supabase'e kullanıcı eklenecek ve eklenirken telefon doğrulaması yapılacak.
-->
<div class="flex min-h-screen">
  <div
    class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
  >
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <img class="h-10 w-auto mb-16" src="/img/logo.svg" alt="Inffinance" />
        <h2
          class="mt-6 text-3xl font-primary font-bold tracking-tight text-zinc-50"
        >
          Tekrar Hoşgeldiniz
        </h2>
        <p class="mt-2 text-sm">
          Henüz Kayıt Olmadınız Mı?
          <a
            href="/register"
            class="font-medium text-primary-400 hover:text-zinc-50"
            >Hemen Kayıt Olun</a
          >
        </p>

        {#if form?.success}
          <p>{form?.message}</p>
        {/if}
      </div>

      <div class="mt-8">
        <form action="?/login" method="POST">
          <div>
            <div>
              <div class="mt-1 flex gap-3">
                <div class="basis-1/2">
                  <ButtonSocial
                    type="submit"
                    formaction="?/login&provider=google"
                    sr="Google İle Giriş Yap"
                    icon="google"
                  />
                </div>

                <div class="basis-1/2">
                  <ButtonSocial
                    type="submit"
                    formaction="?/login&provider=twitch"
                    sr="Twitch İle Giriş Yap"
                    icon="twitch"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="mt-6">
          <form action="?/login" method="POST" class="space-y-6">
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
              placeholder="********"
              autocomplete="current-password"
              required={false}
            />

            <div class="flex items-center justify-end">
              <div class="text-sm">
                <a
                  href="/parola-sıfırlama"
                  class="font-medium text-primary-400 hover:text-zinc-50"
                  >Parolanızı mı unuttunuz?</a
                >
              </div>
            </div>

            <div>
              <ButtonPrimary type="submit">Giriş Yap</ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div
    class="hidden flex-1 sm:block bg-center bg-cover min-h-full"
    style="background-image: url('https://cdn.dribbble.com/users/1484654/screenshots/12018680/media/bb5fc75f66bcc4601d3cd5c5b372366f.jpg?compress=1&resize=1600x1200&vertical=center');"
  />
</div>

<style lang="postcss">
</style>
