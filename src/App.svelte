<script>
    // import Boost from "./lib/Boost.svelte";
    import CurrentPlayercard from "./lib/CurrentPlayercard.svelte";
    import Scoreboard from "./lib/Scoreboard.svelte";
    import { targetPlayer, scoreboardInfo } from "./lib/processor";
    import { socketMessageStore } from "./lib/socket";

    $: console.log($socketMessageStore);
</script>

<main>
    <!-- {#if $targetPlayer?.name}
  <Boost percent="{$targetPlayer.boost}" />
  {/if} -->

    <h1>ooga</h1>

    <div id="playerCard">
        {#if $targetPlayer?.name}
            <CurrentPlayercard player={$targetPlayer} />
        {/if}
    </div>

    <div id="scoreboard">
        <Scoreboard game={$scoreboardInfo} />
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

    * {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>
