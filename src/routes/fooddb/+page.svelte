<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import type { PageProps } from "./$types";

    let { form } : PageProps = $props();
    let searchBox: HTMLInputElement;
    let loading = $state(false);
    let pageNo = $state(1);

    function closeBox() {
        if (searchBox) {
            searchBox.checked = false;
            loading = true;
        }
    }
</script>
<form class="flex flex-col justify-center items-center m-4" method="POST" use:enhance={() => {
    return async ({ result, update }) => {
        if (result.type === "success") {
            loading = false;
            await applyAction(result);
        }
    }
}}>
    <header class="collapse collapse-arrow">
        <input type="checkbox" checked bind:this={searchBox} />
        <section class="collapse-title">
            <h1 class="text-3xl">음식 찾아보기</h1>
            <p class="text-base">칼로리 및 영양성분을 확인하고 싶은 식단이 있으신가요? 여기에서 확인하세요.</p>    
        </section>
        <section class="collapse-content">
            <label for="company" class="fieldset-label my-2">업체명으로 검색</label>
            <input type="text" class="input w-full" name="company" placeholder="업체명" />

            <label for="title" class="fieldset-label my-2">식품명으로 검색</label>
            <input type="text" class="input w-full" name="title" placeholder="식품명" />

            <button type="submit" class="btn w-full mt-4 text-base" onclick={closeBox}>
                <span class="material-symbols-rounded">
                    search
                </span>
                검색
            </button>
        </section>
    </header>

    {#if loading}
    <div class="flex justify-between w-full">
            <p>총 0종</p>
            <p>0 페이지</p>
        </div>
        <ul class="list w-full">
            {#each { length: 5 }}
            <li class="list-row">
                <div class="list-col-grow">
                    <div class="flex gap-2 items-center">
                        <span class="skeleton h-4 w-12"></span>
                        <span class="skeleton h-4 w-32"></span>
                    </div>
                    <p class="skeleton h-4 w-full mt-2"></p>
                </div>
            </li>
            {/each}
        </ul>
    {/if}

    {#if form && form.success && !loading}
        <div class="flex justify-between w-full">
            <p>총 {form.data.totalCount}종</p>
            <p>{form.data.pageNo} 페이지</p>
        </div>
        <ul class="list w-full">
            {#each form.data.items as item}
            <li class="list-row">
                <div class="list-col-grow">
                    <div class="flex gap-2 items-center">
                        <span class="badge badge-warning shrink-0">{item.foodLv3Nm}</span>
                        <h2 class="text-lg">{item.foodNm}</h2>
                    </div>
                    <p>
                        <span class="text-base text-gray-400">{item.foodOriginNm} | {item.nutConSrtrQua}당 {item.enerc}kcal</span>
                    </p>
                </div>
            </li>
            {/each}
        </ul>
        
        <div class="flex justify-between w-full">
            <input type="hidden" name="pageNo" value={pageNo} />
            <button aria-label="이전 페이지" name="prev_btn" class="btn btn-square" type="submit"
                onclick={() => { pageNo--; }} disabled={form.data.pageNo < 2}>
                <span class="material-symbols-rounded">chevron_left</span>
            </button>
            <button aria-label="다음 페이지" name="next_btn" class="btn btn-square" type="submit"
                onclick={() => { pageNo++; }} disabled={form.data.pageNo > form.data.totalCount / 10}>
                <span class="material-symbols-rounded">chevron_right</span>
            </button>    
        </div>
    {/if}

    {#if form && !form.success}
        <div role="alert" class="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-base">검색 결과가 없나요? 식품명은 등록된 명칭과 완전히 일치해야 하는 기술적인 문제로 제대로 나오지 않을 수 있어요. 가공식품이나 외식인 경우 업체명으로 검색해보세요. 일부 데이터는 너무 최신이라 나오지 않을 수 있어요.</span>
      </div>
    {/if}
</form>