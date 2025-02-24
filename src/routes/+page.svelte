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
                <h2 class="collapse-title text-xl">
                    아침
                    <span class="ms-1 text-base text-gray-400">약 450kcal</span>
                </h2>
                <div class="collapse-content">
                    <ul>
                        <li class="text-lg font-normal flex justify-between">
                            <span class="flex items-center gap-2">
                                <span class="badge badge-secondary text-base">120g</span>
                                <span>북어구이</span>    
                            </span>
                        </li>
                        <li class="text-lg font-normal flex justify-between">
                            <span class="flex items-center gap-2">
                                <span class="badge badge-secondary text-base">1컵</span>
                                <span>찐밥</span>    
                            </span>
                        </li>
                        <li class="text-lg font-normal flex justify-between">
                            <span class="flex items-center gap-2">
                                <span class="badge badge-secondary text-base">1/2컵</span>
                                <span>무생채</span>    
                            </span>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="collapse collapse-arrow">
                <input type="checkbox" class="peer" />
                <h2 class="collapse-title text-xl">
                    점심
                    <span class="ms-1 text-base text-gray-400">약 500kcal</span>
                </h2>
                <div class="collapse-content">
                    <ul>
                        <li class="text-lg font-normal flex justify-between">
                            <span class="flex items-center gap-2">
                                <span class="badge badge-secondary text-base">1컵</span>
                                <span>오징어채무침</span>    
                            </span>
                        </li>
                        <li class="text-lg font-normal flex justify-between">
                            <span class="flex items-center gap-2">
                                <span class="badge badge-secondary text-base">1컵</span>
                                <span>잡곡밥</span>    
                            </span>
                        </li>
                        <li class="text-lg font-normal flex justify-between">
                            <span class="flex items-center gap-2">
                                <span class="badge badge-secondary text-base">1컵</span>
                                <span>미역국</span>    
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="collapse collapse-arrow">
                <input type="checkbox" class="peer" />
                <h2 class="collapse-title text-xl">
                    저녁
                    <span class="ms-1 text-base text-gray-400">약 550kcal</span>
                </h2>
                <div class="collapse-content">
                    <ul>
                        <li class="text-lg font-normal flex justify-between">
                            <span class="flex items-center gap-2">
                                <span class="badge badge-secondary text-base">120g</span>
                                <span>닭고기볶음</span>    
                            </span>
                        </li>
                        <li class="text-lg font-normal flex justify-between">
                            <span class="flex items-center gap-2">
                                <span class="badge badge-secondary text-base">1컵</span>
                                <span>현미밥</span>    
                            </span>
                        </li>
                        <li class="text-lg font-normal flex justify-between">
                            <span class="flex items-center gap-2">
                                <span class="badge badge-secondary text-base">1/2컵</span>
                                <span>김치</span>    
                            </span>
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
                <li class="w-full m-2 text-lg font-normal">
                    주 3회 이상의 중강도 유산소 운동(달리기, 수영, 자전거 타기) 30분 이상
                </li>
                <li class="w-full m-2 text-lg font-normal">
                    주 2회 이상의 저항 운동(웨이트 트레이닝, 체중 운동) 20-30분 이상
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
