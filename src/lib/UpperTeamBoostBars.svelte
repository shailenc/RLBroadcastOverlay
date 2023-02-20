<script>
    import SingleTeamBoostBars from "./SingleTeamBoostBars.svelte";
    export let playersInfo = [];
    export let targetPlayer;
</script>

<!-- {#if playersInfo.length > 0} -->
{#each ["blue","orange"] as team}
    <div class:team>
        <SingleTeamBoostBars {team} {targetPlayer} players={playersInfo[team]}/>
    </div>
{/each}
<!-- {/if} -->