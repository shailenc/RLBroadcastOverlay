<script>
    import PlayerBoostBar from "./PlayerBoostBar.svelte";

    export let team;
    export let players;
    export let targetPlayer;

    const side = team=="blue" ? "left" : "right";
</script>

{#if players?.length > 0}
    <div class="teamblock" style="{side}: 5px; text-align: {side};">
        {#each players as player}
            
                <div class="playerslide">
                    <PlayerBoostBar {team} boost={player.boost} name={player.name} isTarget={player.id == targetPlayer.id}/>
                </div>

        {/each}
    </div>
{/if}

<style>

    .teamblock {
        position: absolute;
        /* background-color: rgba(200 100 200 / 0.1); */
        width: 300px;
        height: 100%;
    }

    .playerslide {
        height: 33%;
    }

</style>