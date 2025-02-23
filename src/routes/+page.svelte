<script lang="ts">
    import type { PageProps } from "./$types";

    const today = new Date(Date.now())
    let { data } : PageProps = $props();
    let calDialog;
</script>

<svelte:head>
    <title>HEA: 홈</title>
</svelte:head>
<main class="flex justify-center items-center m-4">
    <section>
        <p class="text-3xl">안녕하세요, <span class="font-bold">{data.name}</span>님!</p>
        <p class="text-lg">오늘도 건강한 하루 보내세요</p>
        
        <div class="card w-full shadow-sm card-body my-4 p-4">
            <h1 class="text-2xl">
                {today.getMonth() + 1}월 {today.getDate()}일<br>
                <span class="text-xl">오늘의 추천 식단</span>
            </h1>

            <div class="collapse collapse-arrow">
                <input type="checkbox" class="peer" checked />
                <h2 class="collapse-title text-xl">아침</h2>
                <div class="collapse-content">
                    <ul>
                        <li class="text-lg font-normal flex justify-between">
                            <span class="flex items-center gap-2">
                                <span class="badge badge-secondary text-base">밥류</span>
                                <span>김밥채소</span>    
                            </span>
                            <span class="ms-1 text-base text-gray-400">105kcal</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="collapse collapse-arrow">
                <input type="checkbox" class="peer" />
                <h2 class="collapse-title text-xl">점심</h2>
                <div class="collapse-content">
                    <ul>
                        <li class="text-lg font-normal flex justify-between">
                            <span class="flex items-center gap-2">
                                <span class="badge badge-secondary text-base">밥류</span>
                                <span>김밥채소</span>    
                            </span>
                            <span class="ms-1 text-base text-gray-400">105kcal</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="collapse collapse-arrow">
                <input type="checkbox" class="peer" />
                <h2 class="collapse-title text-xl">저녁</h2>
                <div class="collapse-content">
                    <ul>
                        <li class="text-lg font-normal flex justify-between">
                            <span class="flex items-center gap-2">
                                <span class="badge badge-secondary text-base">밥류</span>
                                <span>김밥채소</span>    
                            </span>
                            <span class="ms-1 text-base text-gray-400">105kcal</span>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="text-gray-400 break-keep">
                <span class="font-bold">정보 제공</span>
                <a href="https://various.foodsafetykorea.go.kr/nutrient/" target="_blank">식품의약품안전처 식품영양성분 데이터베이스</a>
            </p>
        </div>
        <div class="card w-full shadow-sm card-body my-4 p-4">
            <h1 class="text-xl">운동도 함께 해보세요</h1>
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=h66Ua2mYbRk" target="_blank" class="btn btn-ghost w-full justify-between text-lg font-normal">
                        <span>국민체조</span>
                        <span class="material-symbols-rounded">chevron_right</span>
                    </a>
                </li>
            </ul>
        </div>
        <div role="alert" class="alert alert-info text-base">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 shrink-0 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>
                추천 항목이 잘 맞지 않는 것 같나요? 신체 정보를 변경해보세요.
                <a href="/update" class="link block mt-1">지금 변경하기</a>
            </span>
        </div>
    </section>
    <dialog bind:this={calDialog}>

    </dialog>
</main>
