<script lang="ts">
    import { page } from "$app/state";
    import type { PageProps } from "./$types";

    let { data, form } : PageProps = $props();
</script>
<main class="flex justify-center items-center m-4">
    {#if !data.login && (!form || !form.success)}
    <form class="fieldset w-fit" method="POST" action="?/in">
        <div>
            <h1 class="text-3xl">로그인</h1>
            <p class="text-lg">건강 관리, 식단에서부터.</p>
            {#if page.url.searchParams.get("message_type") === "no_session"}
            <div role="alert" class="alert alert-warning my-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>서비스를 이용하시려면 먼저 로그인해주세요.</span>
            </div>
            {/if}
        </div>
        <label for="email" class="fieldset-label text-base">이메일</label>
        <input name="email" type="email" class="input" placeholder="gdgoc@example.com" required />
        
        <label for="password" class="fieldset-label text-base">암호</label>
        <input name="password" type="password" class="input" placeholder="타인에게 공개되지 않도록 조심하세요" required />

        {#if form && !form.success}
        <div role="alert" class="alert alert-warning my-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>입력하신 값을 확인해주세요.</span>
        </div>
        {/if}
        
        <button class="btn btn-neutral mt-4 text-base">로그인</button>
        <a href="/signup" class="link text-center m-2 text-base">계정이 없으신가요?</a>
    </form>
    {/if}

    {#if data?.login}
    <section>
        <span class="material-symbols-rounded text-3xl">close</span>
        <h1>이미 이용 중이에요</h1>
        <p>다른 계정으로 이용하시려면 메뉴 하단 로그아웃을 눌러주세요.</p>
        <a class="btn btn-neutral mt-4 w-full" href="/">홈으로</a>
    </section>
    {/if}
</main>