<script>
    import PlayerBoostBar from "./PlayerBoostBar.svelte";
    import { fly } from 'svelte/transition';

    export let team;
    export let players;
    export let targetPlayer;

    const side = team=="blue" ? "left" : "right";
</script>

{#if players?.length > 0}
    <div class="teamblock" style="{side}: 5px; text-align: {side};">
        {#each players as player, n}
            
                <div class="playerslide" in:fly="{{ x:(team=="blue" ? -350 : 350), duration: 400, delay: 700+100*n, opacity: 0.5 }}">
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