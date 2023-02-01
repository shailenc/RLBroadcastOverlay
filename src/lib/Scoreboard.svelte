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
    </div>
</div>

<style>

    .game-info-container {
        background-color: rgb(23, 26, 27);
        width: 100%;
        height: 35px;
        font-size: 15px;
        line-height: 35px;
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
        height: 75px;
        line-height: 75px;
        font-size: 35px;
    }

</style>