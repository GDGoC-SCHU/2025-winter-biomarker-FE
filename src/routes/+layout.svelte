<script lang="ts">
	import '../app.css';
    import type { LayoutProps } from './$types';
	let { children, data } : LayoutProps = $props();
</script>

<svelte:head>
    <title>HEA: YOUR HEALTH MANAGER</title>
</svelte:head>

<nav class="navbar bg-base-100 shadow-sm">
    <input id="menu" type="checkbox" class="drawer-toggle" />
    <div class="flex-none">
      <label class="btn btn-square btn-ghost" aria-label="메뉴" for="menu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
      </label>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" href="/">HEA</a>
    </div>
    <div class="drawer-side z-10">
      <label for="menu" aria-label="메뉴 닫기" class="drawer-overlay"></label>
      <section class="flex justify-between bg-base-200 min-h-full flex-col">
        <ul class="menu text-base-content w-80 p-4">
            <li class="text-xl">
              {#if !data || !data.name}
              <a href="/login" class="flex items-end gap-0">
                먼저<br>로그인하세요
                <span class="material-symbols-rounded mb-0.25">chevron_right</span>
              </a>
              {:else if data?.name}
              <a href="/update">
                <span>
                  <span class="font-bold">{data.name}</span>님
                  <br>반갑습니다
                </span>
              </a>
              {/if}
            </li>
            <li class="text-lg">
              <a href="/">
                <span class="material-symbols-rounded">home</span>
                오늘의 식단
              </a>
            </li>
            <li class="text-lg">
              <a href="/fooddb">
                <span class="material-symbols-rounded">menu_book</span>
                음식 찾아보기
              </a>
            </li>
            <li class="text-lg">
              <a href="/update">
                <span class="material-symbols-rounded">contract_edit</span>
                신체 정보 갱신하기
              </a>
            </li>
        </ul>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li class="text-lg">
            {#if data?.name}
            <form method="POST" action="/login?/out">
              <button type="submit" class="cursor-pointer flex items-end gap-0">
                로그아웃
                <span class="material-symbols-rounded mb-0.25">chevron_right</span>
              </button>
            </form>
            {/if}
          </li>
        </ul>
      </section>
    </div>
</nav>

{@render children()}

<footer class="m-4 text-center">
    <p>
        ⓒ 2025 GDGoC SCHU BIOMARKER TEAM.
        <a href="/oss" class="link block">Open Source License</a>
    </p>
</footer>



