<script>
    import { goalScored } from "./processor";

    $: console.log("SHIDSHISHID:",$goalScored);

</script>

{#if $goalScored}

    <p class="name">{$goalScored.scorer.name}</p>

    {#if $goalScored.assister?.name}
        <p class="assister">Assisted by {$goalScored.assister.name}</p>
    {/if}

    <p class="speed">{$goalScored.goalspeed} speed idk the unit</p>

{/if}