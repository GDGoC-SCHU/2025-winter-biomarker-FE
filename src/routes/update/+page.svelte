<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageProps } from "./$types";

    let { form } : PageProps = $props();
</script>

<main class="flex flex-col justify-center items-center m-4">
    <form class="fieldset w-fit" method="POST" use:enhance>
        <div>
            <h1 class="text-3xl">정보 등록·갱신</h1>
            <p class="text-base">새로 등록하시거나, 등록된 정보를 바꾸고 싶다면 <wbr>여기에서 바꾸실 수 있어요. 단, 이메일, 이름, 성별은 현재 바꿀 수 없어요.</p>
        </div>
        {#if form && form.success}
        <div role="alert" class="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>성공적으로 등록했어요!</span>
        </div>
        {:else if form && !form.success}
        <div role="alert" class="alert alert-warning">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>등록에 실패했어요. 다시 시도해주세요.</span>
        </div>          
        {/if}

        <label for="height" class="fieldset-label text-base">키</label>
        <div class="flex w-full items-center">
            <input type="number" step="0.01" class="input text-base flex-1" name="height" required />
            <span class="ms-1 text-base">cm</span>
        </div>

        <label for="weight" class="fieldset-label text-base">몸무게</label>
        <div class="flex w-full items-center">
            <input type="number" step="0.01" class="input text-base flex-1" name="weight" required />
            <span class="ms-1 text-base">kg</span>
        </div>

        <label for="body_fat_percentage" class="fieldset-label text-base">체지방률</label>
        <div class="flex w-full items-center">
            <input type="number" step="0.01" class="input text-base flex-1" name="body_fat_percentage" required />
            <span class="ms-1 text-base">%</span>
        </div>

        <label for="skeletal_muscle_mass" class="fieldset-label text-base">골격근량</label>
        <div class="flex w-full items-center">
            <input type="number" step="0.01" class="input text-base flex-1" name="skeletal_muscle_mass" required />
            <span class="ms-1 text-base">kg</span>
        </div>
        
        <label for="bmr" class="fieldset-label text-base">기초대사량</label>
        <div class="flex w-full items-center">
            <input type="number" step="0.01" class="input text-base flex-1" name="bmr" required />
            <span class="ms-1 text-base">kcal</span>
        </div>

        <label for="body_fat_mass" class="fieldset-label text-base">체지방량</label>
        <div class="flex w-full items-center">
            <input type="number" step="0.01" class="input text-base flex-1" name="body_fat_mass" required />
            <span class="ms-1 text-base">kg</span>
        </div>

        <label for="goal" class="fieldset-label text-base">목표</label>
        <select name="goal" class="select w-full">
            <option value="reduce">지방/체중 감량</option>
            <option value="maintain">체중 유지</option>
            <option value="bulk">체력 및 근육 확보</option>
        </select>
        <button type="submit" class="btn btn-neutral my-4 text-base">저장하기</button>

        <div role="alert" class="alert alert-info text-base">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>
                해당하는 정보를 가지고 계시지 않다면, 인근 보건소, 헬스장 등에서 InBody 검사를 받아보세요.
            </span>
        </div>
    </form>
</main>