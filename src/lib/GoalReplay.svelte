<script>
    import { goalScored } from "./processor";

    $: console.log("GOALSCORED:",$goalScored);

    import { fly } from 'svelte/transition';

</script>

{#if $goalScored}

    <div class="container" in:fly="{{y:200, duration: 700, delay: 1100 }}">

        <div class="top"><span class="red">• </span> REPLAY</div>

        <div class="row">
            <div class="col label">scorer</div>
            <div class="col val">{$goalScored.scorer.name}</div>
        </div>
        <div class="row">
            <div class="col label">speed</div>
            <div class="col val">{Math.round($goalScored.goalspeed)} KPH</div>
        </div>
        <div class="row">
            <div class="col label">assister</div>
            <div class="col val">{$goalScored.assister.name ? $goalScored.assister.name : "unassisted"}</div>
        </div>
    </div>

{/if}

<style>

    .container {
        position: absolute;
        left: 25px;
        bottom: 25px;

        background-color: var(--bg-1);
        width: 510px;
        height: 200px;

        border-radius: 20px;
    }

    .top {
        width: 100%;
        height: 16%;
        font-size: var(--text-md);
        line-height: 100%;
    }

    .red {
        color: red;
        font-size: var(--text-lg);
    }

    .row {
        display: flex;
        width: 100%;
        height: 28%;
        overflow: hidden;
    }

    .row.row:nth-child(2n) {
        background-color: var(--bg-2);
    }

    .col {
        height: 100%;
        padding-right: 25px;
    }

    .col.label {
        background-color: var(--bg-2);
    }

    .label, .val {
        font-size: var(--text-md);
        line-height: 60px;    
    }

    .label {
        width: 25%;
        color: var(--text-muted);
        text-align: right;
    }

    .val {
        width: 75%;
        color: var(--offWhite);
    }

</style>