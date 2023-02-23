<script>

    import Scoreboard from "./Scoreboard.svelte";
    import { targetPlayer, scoreboardInfo, playersInfo, teamShots, goalScored } from "./processor";
    import UpperTeamBoostBars from "./UpperTeamBoostBars.svelte";
    import TargetPlayerInfo from "./TargetPlayerInfo.svelte";

</script>

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
{#if $playersInfo}
    <div style="position: absolute; top: 5px; left: 0; width: 1920px; height: 135px;">
    <UpperTeamBoostBars playersInfo={$playersInfo} targetPlayer={$targetPlayer}/>
    </div>
{/if}
