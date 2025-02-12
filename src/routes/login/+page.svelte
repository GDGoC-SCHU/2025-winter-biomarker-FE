<script lang="ts">
    import { page } from "$app/state";
</script>
<main class="flex justify-center items-center m-4">
    <form class="fieldset w-fit">
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
        <label for="password" class="fieldset-label">이메일</label>
        <input type="email" class="input" placeholder="gdgoc@example.com" />
        
        <label for="password" class="fieldset-label">암호</label>
        <input name="password" type="password" class="input" placeholder="타인에게 공개되지 않도록 조심하세요" />
        
        <button class="btn btn-neutral mt-4">로그인</button>
        <a href="/signup" class="link text-center m-2">계정이 없으신가요?</a>
    </form>
</main>