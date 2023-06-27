<script>
    import ButtonPrimary from "$lib/components/Button/ButtonPrimary.svelte";
    import ButtonSocial from "$lib/components/Button/ButtonSocial.svelte";
  
  </script>
  <div class="flex min-h-screen">
    <div
      class="flex flex-1 flex-col justify-center py-12 px-10 sm:px-4 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-10 w-auto mb-16" src="/img/logo.svg" alt="Inffinance" />
          <h2
            class="mt-6 text-3xl font-primary font-bold tracking-tight text-zinc-50"
          >
            Inffinance Dünyasına Katılın
          </h2>
          <p class="mt-2 text-sm">
            Zaten bir hesabınız mı var?
            <a href="/giris" class="font-medium text-primary-400 hover:text-zinc-50"
              >Hemen Giriş Yapın</a
            >
          </p>
        </div>
  
        <div class="mt-8">
          <div>
            <div>
  
              <div class="mt-1 flex gap-3">
                <div class="basis-1/2">
                  <ButtonSocial type="google" />
                </div>
  
                <div class="basis-1/2">
                  <ButtonSocial type="twitch" />
                </div>
              </div>
            </div>
          </div>
  
          <div class="mt-6">
            <form action="#" method="POST" class="space-y-6">
              <div>
                <label for="name" class="label">Ad Soyad</label>
                <div class="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Adınız Soyadınız"
                    autocomplete="name"
                    required
                    class="input"
                  />
                </div>
              </div>

              <div>
                <label for="email" class="label">E Posta</label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ornek@email.com"
                    autocomplete="email"
                    required
                    class="input"
                  />
                </div>
              </div>

              <div>
                <label for="tel" class="label">Telefon</label>
                <div class="mt-1">
                  <input
                    id="tel"
                    name="tel"
                    type="text"
                    placeholder="0532-123-4567"
                    autocomplete="tel-national"
                    required
                    class="input"
                  />
                </div>
              </div>
  
              <div class="space-y-1">
                <label for="password" class="label">Parola</label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="********"
                    autocomplete="current-password"
                    required
                    class="input"
                  />
                </div>
              </div>
  
              <div>
                <ButtonPrimary>Kayıt Ol</ButtonPrimary>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden flex-1 sm:block bg-center bg-cover min-h-full" style="background-image: url('https://cdn.dribbble.com/users/1484654/screenshots/12018680/media/ac0d0439ca6e4ec05904c365ecf5bee6.jpg?compress=1&resize=1600x1200&vertical=center');">
      
    </div>
  </div>
  
  <style lang="postcss">
    .input {
      border: 2px solid #484848;
  
      @apply block py-3 
              box-border
              min-h-0
              min-w-0
              overflow-hidden
              w-full
              rounded-lg 
              bg-mordor-500 
              text-zinc-50 
              placeholder-mordor-300
              focus:ring-0 
              focus:ring-offset-0
              focus:border-primary-400 
              ease-in-out
              duration-300
              sm:text-base;
    }
  
    .label {
      @apply block text-sm font-medium text-zinc-50 opacity-70;
    }
  

  </style>
  