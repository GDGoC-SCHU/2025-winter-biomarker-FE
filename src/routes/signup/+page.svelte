<script lang="ts">
    import type { PageProps } from "./$types";

    let { data, form } : PageProps = $props();
</script>
<main class="flex justify-center items-center m-4">
    {#if !form || !form.success}
    <form class="fieldset w-fit" method="POST">
        <div>
            <h1 class="text-3xl">회원가입</h1>
            <p class="text-base">건강 데이터를 저장하고 관리하세요.</p>
        </div>
        <label for="email" class="fieldset-label text-base">이메일</label>
        <input type="email" class="input" placeholder="gdgoc@example.com" name="email" required />

        <label for="name" class="fieldset-label text-base">이름</label>
        <input type="text" class="input" placeholder="지디지" name="name" required />
        
        <label for="password" class="fieldset-label text-base">암호</label>
        <input name="password" type="password" class="input" placeholder="타인에게 공개되지 않도록 조심하세요" required />

        <label for="genderset" class="fieldset-label text-base">성별</label>
        <fieldset name="genderset">
            {#each data.genderList as gitem}
                <input name="gender" id={gitem.value} value={gitem.value} type="radio" class="radio">
                <label for={gitem.value} class="ms-1 me-2">{gitem.text}</label>
            {/each}
        </fieldset>
        
        {#if form && !form.success}
        <div role="alert" class="alert alert-warning my-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>입력하신 값을 확인해주세요.</span>
        </div>
        {/if}

        <button type="submit" class="btn btn-neutral mt-4 text-base">가입하기</button>
        <a href="/login" class="link text-center m-2">계정을 갖고 계신가요?</a>
    </form>
    {/if}

    {#if form?.success}
    <section>
        <span class="material-symbols-rounded text-3xl">check</span>
        <h1>회원가입 성공!</h1>
        <p>이제 서비스를 이용하실 수 있어요.</p>
        <a class="btn btn-neutral mt-4 w-full" href="/">홈으로</a>
        <a class="btn btn-neutral mt-2 w-full" href="/update">신체 정보 등록하기</a>
    </section>
    {/if}
</main>