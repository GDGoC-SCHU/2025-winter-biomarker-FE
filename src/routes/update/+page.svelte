<script lang="ts">
    import type { PageProps } from "./$types";

    let { data, form } : PageProps = $props();
</script>

<main class="flex flex-col justify-center items-center m-4">
    <form class="fieldset w-fit" method="POST">
        <div>
            <h1 class="text-3xl">정보 등록·갱신</h1>
            <p class="text-base">새로 등록하시거나, 등록된 정보를 바꾸고 싶다면 <wbr>여기에서 바꾸실 수 있어요. 단, 이메일, 이름, 성별은 현재 바꿀 수 없어요.</p>
        </div>
        <label for="height" class="fieldset-label text-base">키</label>
        <div class="flex w-full items-center">
            <input type="number" class="input text-base flex-1" name="height" required />
            <span class="ms-1 text-base">cm</span>
        </div>

        <label for="weight" class="fieldset-label text-base">몸무게</label>
        <div class="flex w-full items-center">
            <input type="number" class="input text-base flex-1" name="weight" required />
            <span class="ms-1 text-base">kg</span>
        </div>

        <label for="body_fat_percentage" class="fieldset-label text-base">체지방률</label>
        <div class="flex w-full items-center">
            <input type="number" class="input text-base flex-1" name="body_fat_percentage" required />
            <span class="ms-1 text-base">%</span>
        </div>

        <label for="skeletal_muscle_mass" class="fieldset-label text-base">골격근량</label>
        <div class="flex w-full items-center">
            <input type="number" class="input text-base flex-1" name="skeletal_muscle_mass" required />
            <span class="ms-1 text-base">kg</span>
        </div>
        
        <label for="bmr" class="fieldset-label text-base">기초대사량</label>
        <div class="flex w-full items-center">
            <input type="number" class="input text-base flex-1" name="bmr" required />
            <span class="ms-1 text-base">kcal</span>
        </div>

        <label for="body_fat_mass" class="fieldset-label text-base">체지방량</label>
        <div class="flex w-full items-center">
            <input type="number" class="input text-base flex-1" name="body_fat_mass" required />
            <span class="ms-1 text-base">kg</span>
        </div>

        <label for="goal" class="fieldset-label text-base">목표</label>
        <select name="goal" class="select w-full">
            <option value="maintain">지방/체중 감량</option>
            <option value="muscle">체력 및 근육 확보</option>
        </select>
        <input type="hidden" name="gender" value={data.gender} />
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