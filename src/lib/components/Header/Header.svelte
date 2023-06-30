<script>
  import ButtonPrimary from "$lib/components/Button/ButtonPrimary.svelte";
  import Dropdown from "../Button/Dropdown.svelte";
  export let data;
</script>

<header class="container mx-auto px-8 md:px-16 lg:px-16 py-8">
  <nav class="border-gray-200">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"
    >
      <a href="/" class="flex items-center">
        <img src="/img/logo.svg" class="h-10 mr-3" alt="Inffinance Logo" />
      </a>
      <div class="flex justify-between gap-12">
        <div class="flex gap-3 md:order-2">
          {#if !data.session}
            <ButtonPrimary url="/login">Giriş / Kayıt</ButtonPrimary>
          {:else}
            <Dropdown
              items={[
                { name: "Hesabım", url: "/account" },
                { name: "Çıkış Yap", url: "/logout" },
              ]}
              userData={data}
            />
          {/if}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Menüyü Aç</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              /></svg
            >
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700"
          >
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 text-white bg-primary-400 rounded md:bg-transparent md:text-primary-400 md:p-0 md:dark:text-primary-400"
                aria-current="page">Ana Sayfa</a
              >
            </li>
            <li>
              <a
                href="/proje-hakkinda"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-400 md:p-0 md:dark:hover:text-primary-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Proje Hakkında</a
              >
            </li>
            <li>
              <a
                href="/on-satis"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-400 md:p-0 md:dark:hover:text-primary-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Ön Satış</a
              >
            </li>
            <li>
              <a
                href="/iletisim"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-400 md:p-0 md:dark:hover:text-primary-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >İletişim</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>
