<script>

    export let game = {
        teams: [
            {name: "sampleteam1", score: 69},
            {name: "sampleteam2", score: 4},
        ]
    };

    export let gameInfo = "scrimmage league winter major  |  semifinals";

    function getSecs(num) {
        num = num % 60;
        const str = num.toString();
        return str.padStart(2,"0");
    }

    export let teamShots = {
        blue: 0,
        orange: 0,
    };

    export let goalScored;

    import { quadOut, expoInOut, expoIn, expoOut } from "svelte/easing";

    function goalAnimation(node, { duration }) {

        return {
            duration,
            css: t => {
                const eased = expoInOut(t) * 1.05;
                const textEase2 = expoOut(t);
                const textEase = quadOut(t);
                const opac = expoIn(t);

                return `
                    clip-path: polygon(
                        ${(1+eased)*50}% 0%, ${(1-eased)*50}% 0%, ${(1-eased)*50}% 100%, ${(1+eased)*50}% 100%
                    );

                    rgb(101, 176, 241);

                    letter-spacing: ${3+120*textEase*textEase}px;
                    text-indent: ${120*textEase*textEase}px;
                    
                    color: rgba(250 250 250 / ${textEase2});

                    filter: brightness(${30*textEase+80}%);

                    opacity: ${Math.min(1,(1-opac)*3)};
                `
            }
        }
    }

    import {fly} from "svelte/transition";

    // $:  console.log(goalScored);

</script>

<div class="container">

    <!-- "GOAL" animation over scoreboard  -->
    {#if goalScored?.scorer}
        {#key goalScored}

            {#each [1500,2000,2500,3000,3500,4000] as delay}
                <div 
                    class="goal-scored-animation {goalScored.scorer.teamnum ? "orange" : "blue"}"
                    in:goalAnimation="{{duration: delay}}"
                    >
                </div>
            {/each}

            <div 
                class="goal-scored-animation {goalScored.scorer.teamnum ? "orange" : "blue"}"
                in:goalAnimation="{{duration: 4500}}"
            >
                GOAL
            </div>

        {/key}
    {/if}

    <div class="game-info-container"
        in:fly="{{ y:-100, duration: 300, delay: 300, opacity: 1 }}"
    >
        {gameInfo}
    </div>

    <div class="scoreboard-container"
        in:fly="{{ y:-200, duration: 150, delay: 500, opacity: 1 }}"
    >

        <div class="blueTeam" style="overflow:hidden; position: relative; height: 100%; display: flex;">

            <div class="teamName blue"
                style="z-index: -4;"
                in:fly="{{ x:370, duration: 400, delay: 775, opacity: 0 }}"
            >
                {game.teams[0].name}
            </div>
        
            <div class="teamScore blue"
                style="z-index: -3;"
                in:fly="{{ x:70, duration: 200, delay: 700, opacity: 0.5 }}"
            >
                {game.teams[0].score}
            </div>

        </div>
        
        <div class="orangeTeam" style="overflow:hidden; position: relative; height: 100%; display: flex;">
            <div class="timeContainer" style="z-index: -2;">
                {Math.floor(game.time_seconds/60)}:{getSecs(game.time_seconds)}
            </div>
        
            <div class="teamScore orange"
                style="z-index: -3;"
                in:fly="{{ x:-70, duration: 200, delay: 700, opacity: 0.5 }}"
            >
                {game.teams[1].score} 
            </div>
        
            <div class="teamName orange"
                style="z-index: -4;"
                in:fly="{{ x:-370, duration: 400, delay: 775, opacity: 0 }}"
            >
                {game.teams[1].name}
            </div>
        </div>
    </div>

    <div class="shots-container" 
        in:fly="{{ y:-25, duration: 200, delay: 1050, opacity: 0 }}"
        style="z-index:-5;"
    >
        <div class="triangle triangle-left"></div>
        <div class="shotCount blue">{teamShots.blue}</div>
        <div class="shotsLabel">SHOTS</div>
        <div class="shotCount orange">{teamShots.orange}</div>
        <div class="triangle triangle-right"></div>

    </div>
</div>

<style>
    
    .goal-scored-animation {
        position: absolute;
        height: 100px;
        line-height: 90px;
        width: 100%;
        top: 0px;
        

        font-size: 90px;
        text-align: center;
        border-radius: 3px;
        color: rgb(250 250 250 / 0);
    }

    .goal-scored-animation.blue {
        background-color: var(--team0-2);
    }

    .goal-scored-animation.orange {
        background-color: var(--team1-2);
    }

    .triangle {
        background-color: var(--bg-2);
        height: 25px;
        width: 35px;
    }

    .triangle-left {
        clip-path: polygon(
            0% 0%, 100% 0%, 100% 100%
        );
    }

    .triangle-right {
        clip-path: polygon(
            100% 0%, 0% 0%, 0% 100%
        );
    }

    .shots-container {
        display: flex;
        justify-content: center;
        width: 100%;
        
        height: 25px;
        line-height: 25px;
        position: relative;
    }

    .shots-container > * {
        height: 100%;
        font-weight: 600;
        color: var(--text-muted);

    }

    .shotsLabel {
        width: 80px;
        background-color: var(--bg-1);
        font-size: var(--text-sm);
        letter-spacing: 0.1em;
    }

    .shotCount {
        font-size: var(--text-sm);
        width: 40px;
        background-color: var(--bg-2);
    }

    .game-info-container {
        background-color: var(--bg-3);
        width: 100%;
        height: 30px;
        font-size: var(--text-sm);
        line-height: 30px;
        font-weight: 500;
        letter-spacing: 0.15rem;
        color: var(--text-muted);
    }

    .scoreboard-container {
        display: flex;
        justify-content: center;
        align-items: top;
        width: 100%;
        height: 100%;
        /* background-color: rgb(0 0 0 / 1); */
        line-height: 80px;
        font-size: var(--text-lg);
    }

    .scoreboard-container > * {
        display: inline-block;
    }

    .teamName {
        width: 300px;
        height: 100%;
        line-height: 70px;
        z-index: -1;
    }

    .teamName.blue {
        background-color: var(--team0-2); 
        border-radius: 3px 0 0 3px; 
    }

    .teamScore.blue {
        background-color: var(--team0-1);
        box-shadow: var(--box-shadow-left);
    }

    .teamName.orange {
        background-color: var(--team1-2);
        border-radius: 0 3px 3px 0;
    }

    .teamScore.orange {
        background-color: var(--team1-1);
        box-shadow: var(--box-shadow-right);
    }

    .teamScore {
        width: 70px;
        height: 70px;
        line-height: 70px;
        font-size: var(--text-xxl);
    }

    .timeContainer {
        width: 160px;
        background-color: var(--bg-1);
        height: 70px;
        line-height: 75px;
        font-size: var(--text-xl);
        font-weight: 600;
    }

</style>