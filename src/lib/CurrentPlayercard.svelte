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


<!--  -->

<style>

    .main.container {
        position: absolute;
        height: 30px;
        width: 870px;
        background-color: hsl(195, 8%, 10%);
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
        padding: 0 15px 0 15px;
    }

    .container > .container {
        padding: 0;
    }

    .label, .stat {
        font-weight: 600;
        color: rgb(250 250 250 / 0.75);
        font-size: 20px;
        line-height: 30px;
    }

    .label {
        font-size: 13px;
        color: rgb(250 250 250 / 0.5);
        width: 3rem;
    }

    .name {
        width: 200px;
        background-color: rgba(36,39,46,1);
        text-align: right;
        font-size: 18px;
    }

</style>