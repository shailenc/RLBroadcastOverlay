<script>
    // import Boost from "./lib/Boost.svelte";
    import CurrentPlayercard from "./lib/CurrentPlayercard.svelte";
    import Scoreboard from "./lib/Scoreboard.svelte";
    import { targetPlayer, scoreboardInfo, playersInfo, teamShots, goalScored } from "./lib/processor";
    import { socketMessageStore } from "./lib/socket";
    import PlayerBoostBar from "./lib/PlayerBoostBar.svelte";

    // $: console.log($socketMessageStore);
    // $: console.log($playersInfo);
</script>

<main>

    <!-- <h1>ooga</h1> -->

    <div class="swagbg"></div>

    <div id="playerCard">
        {#if $targetPlayer?.name}
            <CurrentPlayercard player={$targetPlayer} />
        {/if}
    </div>

    <div id="scoreboard">
        <Scoreboard game={$scoreboardInfo} teamShots={$teamShots} goalScored={$goalScored}/>
    </div>

    <div id="teamboosts">
        <div class="blue">
            {#if $playersInfo && $playersInfo.blue && $playersInfo.blue.length > 0}
                {#each $playersInfo.blue as player}
                    <div class="playerslide">
                        <PlayerBoostBar boost={player.boost} name={player.name} isTarget={player.id == $targetPlayer.id} team={"blue"}/>
                    </div>
                {/each}
            {/if}
        </div>

        <div class="orange">
            {#if $playersInfo && $playersInfo.orange && $playersInfo.orange.length > 0}
                {#each $playersInfo.orange as player}
                    <div class="playerslide">
                        <PlayerBoostBar boost={player.boost} name={player.name} isTarget={player.id == $targetPlayer.id} team={"orange"}/>
                    </div>
                {/each}
            {/if}
        </div>

    </div>

</main>

<style>
    #playerCard {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    #scoreboard {
        position: absolute;
        width: 900px;
        height: 70px;
        top: 0px;
        left: 510px;

    }

    #teamboosts {
        position: absolute;
        top: 5px;
        left: 0;
        width: 1920px;
        height: 135px;
    }

    #teamboosts .blue, #teamboosts .orange {
        position: absolute;
        /* background-color: rgba(200 100 200 / 0.1); */
        width: 300px;
        height: 100%;
    }

    #teamboosts .blue {
        left: 5px;
        text-align: left;
    }

    #teamboosts .orange {
        right: 5px;
        text-align: right;
    }

    .playerslide {
        height: 33%;
    }

    :global(*) {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        text-transform: uppercase;
    }

    .swagbg {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -10;
        left: 0;
        top: 0;
        /* background-image: url("https://pbs.twimg.com/ext_tw_video_thumb/1586753786042793987/pu/img/sBBwCOijoDCLRvqh.jpg"); */
        background-size: 100% 100%;
    }

</style>
