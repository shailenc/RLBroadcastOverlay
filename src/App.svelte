<script>
    // import Boost from "./lib/Boost.svelte";
    import CurrentPlayercard from "./lib/CurrentPlayercard.svelte";
    import Scoreboard from "./lib/Scoreboard.svelte";
    import { targetPlayer, scoreboardInfo, playersInfo } from "./lib/processor";
    import { socketMessageStore } from "./lib/socket";
    import PlayerBoostBar from "./lib/PlayerBoostBar.svelte";

    // $: console.log($socketMessageStore);
    // $: console.log($playersInfo);
</script>

<main>

    <h1>ooga</h1>

    <div id="playerCard">
        {#if $targetPlayer?.name}
            <CurrentPlayercard player={$targetPlayer} />
        {/if}
    </div>

    <div id="scoreboard">
        <Scoreboard game={$scoreboardInfo} />
    </div>

    <div id="teamboosts">
        <div class="blue">
            {#if $playersInfo && $playersInfo.blue && $playersInfo.blue.length > 0}
                {#each $playersInfo.blue as player}
                    <div class="playerslide">
                        <PlayerBoostBar boost={player.boost} name={player.name} isTarget={player.id == $targetPlayer.id}/>
                    </div>
                {/each}
            {/if}
        </div>

        <div class="orange">
            {#if $playersInfo && $playersInfo.orange && $playersInfo.orange.length > 0}
                {#each $playersInfo.orange as player}
                    <div class="playerslide">
                        <PlayerBoostBar boost={player.boost} name={player.name} isTarget={player.id == $targetPlayer.id}/>
                    </div>
                {/each}
            {/if}
        </div>

    </div>

</main>

<style>
    #playerCard {
        position: absolute;
        width: 300px;
        height: 325px;
        left: 30px;
        bottom: 40px;
    }

    #scoreboard {
        position: absolute;
        width: 1250px;
        height: 80px;
        top: 10px;
        left: 335px;

    }

    #teamboosts {
        position: absolute;
        top: 0;
        left: 0;
        width: 1920px;
        height: 150px;
    }

    #teamboosts .blue, #teamboosts .orange {
        position: absolute;
        /* background-color: rgba(200 100 200 / 0.1); */
        width: 300px;
        height: 100%;
    }

    #teamboosts .blue {
        left: 0;
    }

    #teamboosts .orange {
        right: 0;
    }

    .playerslide {
        height: 33%;
    }

    :global(*) {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        text-transform: uppercase;
    }
</style>
