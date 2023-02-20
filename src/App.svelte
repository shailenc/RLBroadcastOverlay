<script>
    import Scoreboard from "./lib/Scoreboard.svelte";
    import { targetPlayer, scoreboardInfo, playersInfo, teamShots, goalScored } from "./lib/processor";
    import UpperTeamBoostBars from "./lib/UpperTeamBoostBars.svelte";
    import TargetPlayerInfo from "./lib/TargetPlayerInfo.svelte";
    // $: console.log($socketMessageStore);
    // $: console.log($playersInfo);
</script>

<main>

    <div class="swagbg"></div>

    <!-- Target player info; bottom bar, boost circle on right -->
    {#if $targetPlayer?.name}
        <div style="position:absolute; left: 0; bottom: 0">
            <TargetPlayerInfo player={$targetPlayer} />
        </div>
    {/if}

    
    <!-- Scoreboard -->
    {#if $scoreboardInfo}
    <div style="position: absolute; width: 900px; height: 70px; top: 0px; left: 510px;">
        <Scoreboard game={$scoreboardInfo} teamShots={$teamShots} goalScored={$goalScored}/>
    </div>
    {/if}

    <!-- All individual player boost cards at top left/right -->
    <div style="position: absolute; top: 5px; left: 0; width: 1920px; height: 135px;">
        <UpperTeamBoostBars playersInfo={$playersInfo} targetPlayer={$targetPlayer}/>
    </div>

</main>

<style>

    .swagbg {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -10;
        left: 0;
        top: 0;
        /* background-image: url("https://pbs.twimg.com/ext_tw_video_thumb/1586753786042793987/pu/img/sBBwCOijoDCLRvqh.jpg"); */
        background-size: 100% 100%;
        background-color: rgb(120 0 0 / 0);

        display: none;
    }

</style>
