<script>

    export let game = {};
    $: console.log(game);

</script>

<div class="container">

    <div class="teamContainer" id="t0">
        <div class="teamName">
            {game.teams[0].name}
        </div>

        <div class="teamScore">
            {game.teams[0].score}
        </div>
    </div>

    <div class="teamContainer" id="t1">
        <div class="teamName">
            {game.teams[1].name}
        </div>

        <div class="teamScore">
            {game.teams[1].score}
        </div>
    </div>

    <div id="timeContainer">
        {game.time_seconds}
    </div>

</div>

<style>

    .container {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: rgb(0 0 0 / 1);
    }
    
    .teamContainer {
        position: absolute;
        background-color: red;
        width: 40%;
        height: 100%;
    }

    .container {
        line-height: 80px;
        font-size: 40px;
    }

    .teamName {
        padding: 0 10px 0 10px;
    }

    .teamScore {
        position: absolute;
        top: 0;
        height: 100%;
        width: 80px;
        outline: rgb(200 200 200 / 0.9) solid 5px;
    }

    #t1 .teamScore {
        right: 0;
    }

    #timeContainer {
        position: absolute;
        width: 20%;
        left: 40%;
        height: 100%;
        background-color: green;
    }

    #t0 {
        left: 0;
    }

    #t1 {
        right: 0;
    }

</style>