<script>
    import { currentScene } from "./lib/processor";
    import Pregame from "./lib/Pregame.svelte";
    import MatchPlay from "./lib/MatchPlay.svelte";
    import GoalReplay from "./lib/GoalReplay.svelte";
    import MatchEnd from "./lib/MatchEnd.svelte";

    const scenes = {
        "pregame":  Pregame,
        "gameplay": MatchPlay,
        "replay":   GoalReplay,
        "end":      MatchEnd,
    };

</script>

<main>

    <div class="swagbg"></div>

    <p style="position: absolute; top: 0px; left: 0px; font-size:90px; height: 1080px; width: 1920px; text-align:center; line-height: 1080px; margin: 0 0 0 0; opacity: 0.04;">&#60; {$currentScene} &#62;</p>

    <svelte:component 
        this={scenes[$currentScene]}
    />

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