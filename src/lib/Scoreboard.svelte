<script>

    export let game = {
        teams: [
            {name: "sampleteam1", score: 69},
            {name: "sampleteam2", score: 4},
        ]
    };

    export let gameInfo = "shidleague winter major  |  semifinals";

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

                    letter-spacing: ${60*textEase}px;
                    background-color: hsl(${goalScored.scorer.team_num === 0 ? 208:26}, 90%, ${30*textEase+35}%);
                    color: rgba(250 250 250 / ${textEase2});

                    opacity: ${Math.min(1,(1-opac)*3)};
                `
            }
        }
    }

    // $:  console.log(goalScored);

</script>

<div class="container">

    <div class="game-info-container">
        {gameInfo}
    </div>

    <div class="scoreboard-container">

        <div class="teamName blue">
            {game.teams[0].name}
        </div>
    
        <div class="teamScore blue">
            {game.teams[0].score}
        </div>
    
        <div class="timeContainer">
            {Math.floor(game.time_seconds/60)}:{getSecs(game.time_seconds)}
        </div>
    
        <div class="teamScore orange">
            {game.teams[1].score}
        </div>
    
        <div class="teamName orange">
            {game.teams[1].name}
        </div>

        {#if goalScored?.scorer}
            {#key goalScored}

                    <!-- dumb shit below -->

                    <div 
                        class="goal-scored-animation {goalScored.scorer.teamnum ? "blue" : "orange"}"
                        in:goalAnimation="{{duration: 1500}}"
                        >
                    </div>
        
                    <div 
                        class="goal-scored-animation {goalScored.scorer.teamnum ? "blue" : "orange"}"
                        in:goalAnimation="{{duration: 2000}}"
                        >
                    </div>

        
                    <div 
                        class="goal-scored-animation {goalScored.scorer.teamnum ? "blue" : "orange"}"
                        in:goalAnimation="{{duration: 2500}}"
                        >
                    </div>
        
                    <div 
                        class="goal-scored-animation {goalScored.scorer.teamnum ? "blue" : "orange"}"
                        in:goalAnimation="{{duration: 3000}}"
                        >
                    </div>

                    <div 
                        class="goal-scored-animation {goalScored.scorer.teamnum ? "blue" : "orange"}"
                        in:goalAnimation="{{duration: 3500}}"
                        >
                    </div>
        
                    <!-- dumb shit above -->


                    <div 
                        class="goal-scored-animation {goalScored.scorer.teamnum ? "blue" : "orange"}"
                        in:goalAnimation="{{duration: 4500}}"
                    >
                        GOAL
                    </div>

            {/key}
        {/if}
    </div>

    <div class="shots-container">
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
        height: 102%;
        line-height: 89%;
        width: 100%;
        top: 5px;
        /* bottom: 0; */
        left: 0;
        /* background-color: rgb(32, 37, 67); */
        margin-top: 24px;

        /* clip-path: polygon(
            50% 0%, 50% 0%, 50% 100%, 50% 100%
        ); */

        font-size: 70px;
        text-align: center;
        border-radius: 3px;
        color: rgb(250 250 250 / 0);
    }

    .triangle {
        background-color: rgba(27,30,37,1);
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
    }

    .shots-container > * {
        height: 100%;
        font-weight: 600;
        color: rgb(250 250 250 / 0.7);

    }

    .shotsLabel {
        width: 80px;
        background-color: rgba(27,30,37,1);
        font-size: 15px;
        letter-spacing: 0.1em;
    }

    .shotCount {
        width: 40px;
        background-color: rgba(20,23,30,1);
    }

    .game-info-container {
        background-color: rgb(23, 26, 27);
        width: 100%;
        height: 30px;
        font-size: 15px;
        line-height: 30px;
        font-weight: 700;
        letter-spacing: 0.15rem;
        color: rgb(250 250 250 / 0.3);
    }

    .scoreboard-container {
        display: flex;
        justify-content: center;
        align-items: top;
        width: 100%;
        height: 100%;
        /* background-color: rgb(0 0 0 / 1); */
        line-height: 80px;
        font-size: 28px;
    }

    .scoreboard-container > * {
        display: inline-block;
    }

    .teamName {
        width: 300px;
        height: 100%;
        line-height: 70px;
    }

    .teamName.blue {
        background-color: rgb(55, 153, 239); 
        border-radius: 3px 0 0 3px; 
    }

    .teamScore.blue {
        background-color: rgb(101, 176, 241);
    }

    .teamName.orange {
        background-color: rgb(239, 135, 55);
        border-radius: 0 3px 3px 0;
    }

    .teamScore.orange {
        background-color: rgb(247, 165, 102);
    }

    .teamScore {
        width: 70px;
        height: 70px;
        line-height: 70px;
        background-color: blue; 
        box-shadow: 0px 0px 8px 4px rgb(200 200 200 / 0.1);
        font-size: 50px;
    }

    .timeContainer {
        width: 160px;
        background-color: rgba(36,39,46,1);
        height: 70px;
        line-height: 75px;
        font-size: 35px;
        font-weight: 600;
    }

</style>