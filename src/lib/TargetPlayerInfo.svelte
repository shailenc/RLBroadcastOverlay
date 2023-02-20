<script>

    export let player = {};

</script>


<div class="container main">
    
    <div class="name">
        {player.name}
    </div>

    <div class="container statContainer">

        <div class="label">goals</div>
        <div class="stat">{player.goals}</div>

        <div class="label">assists</div>
        <div class="stat">{player.assists}</div>

        <div class="label">shots</div>
        <div class="stat">{player.shots}</div>

        <div class="label">saves</div>
        <div class="stat">{player.saves}</div>

        <div class="label">demos</div>
        <div class="stat">{player.demos}</div>
    </div>

</div>

<!-- <TargetBoostMeter {boost} {team}/> -->


<!--  -->

<style>

    .main.container {
        position: absolute;
        height: 30px;
        width: 870px;
        background-color: var(--bg-3);
        bottom: 0;
        left: 0;

        clip-path: polygon(
            100% 100%, 0% 100%, 0% 0%, 95% 0%
        );
    }

    .container {
        display: flex;
        justify-content: left;
    }

    .container > * {
        line-height: 30px;
        padding: 0 10px 0 10px;
    }

    .label, .stat {
        font-weight: 600;
        color: var(--text-muted);
        font-size: var(--text-lg);
        line-height: 30px;
    }

    .label {
        font-size: var(--text-sm);
        color: var(--text-muted);
        max-width: 5rem;
        /* text-align: right; */
        /* padding: 0 0 0 10px; */
    }

    .stat {
        width: 1rem;
        /* padding: 0 10px 0 0; */
        font-size: var(--text-md);
        transform: translateY(-1px);
        color: var(--offWhite);
    }

    .name {
        width: 200px;
        background-color: var(--bg-1);
        text-align: right;
        font-size: var(--text-md);
    }

</style>