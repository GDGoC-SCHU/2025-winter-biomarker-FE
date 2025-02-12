<script lang="ts">
    import type { PageProps } from "./$types";

    let { data } : PageProps = $props();
</script>
<main class="flex justify-center items-center m-4">
    <form class="fieldset w-fit">
        <div>
            <h1 class="text-3xl">회원가입</h1>
            <p class="text-lg">건강 데이터를 저장하고 관리하세요.</p>
        </div>
        <label for="password" class="fieldset-label">이메일</label>
        <input type="email" class="input" placeholder="gdgoc@example.com" />
        
        <label for="password" class="fieldset-label">암호</label>
        <input name="password" type="password" class="input" placeholder="타인에게 공개되지 않도록 조심하세요" />

        <label for="genderset" class="fieldset-label">성별</label>
        <fieldset name="genderset">
            {#each data.genderList as gitem}
                <input name="gender" id={gitem.value} value={gitem.value} type="radio" class="radio">
                <label for={gitem.value} class="ms-1 me-2">{gitem.text}</label>
            {/each}
        </fieldset>
        
        <button type="submit" class="btn btn-neutral mt-4">가입하기</button>
        <a href="/login" class="link text-center m-2">계정을 갖고 계신가요?</a>
    </form>
</main>