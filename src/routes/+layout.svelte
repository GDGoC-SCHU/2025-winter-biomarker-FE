<script lang="ts">
	import '../app.css';
	let { children } = $props();
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
    <div class="drawer-side">
        <label for="menu" aria-label="메뉴 닫기" class="drawer-overlay"></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <!-- Sidebar content here -->
            <li>메뉴 1</li>
            <li>메뉴 2</li>
        </ul>
    </div>
</nav>

{@render children()}

<footer class="m-4 text-center">
    <p>
        ⓒ 2025 GDGoC SCHU BIOMARKER TEAM.
        <a href="/oss" class="link">Open Source License</a>
    </p>
</footer>



