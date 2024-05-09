<script>

    export let boost = 80;
    export let name = "samplename";
    export let isTarget = false;
    export let team;
  
    // $: console.log(percent);
</script>

<div class="container {team} {isTarget ? "target":""}">
    <div class="name">
        {name}
    </div>

    <div class="boost"></div>
    <div class="boost fill" style="width: {boost*92/100}%;"></div>
</div>

<style>
    
    .container {
        position: relative;
        height: 85%;
        width: 100%;
        border-radius: 2px;

        background: var(--bg-3);
        background: linear-gradient(
            90deg, 
            var(--bg-3) 44%, 
            var(--bg-2) 95%,
            var(--bg-1) 100%
        );

        outline:3px solid rgb(5 5 5 / 0.1);

        transition: box-shadow 0.5s ease;
    }

    .container.target.blue {
        outline: 1px groove rgba(148, 146, 160, 0.15);
        box-shadow: 7px 0px 0px 0px var(--team0-1);
    }

    .container.target.orange {
        outline: 1px groove rgba(148, 146, 160, 0.15);
        box-shadow: -7px 0px 0px 0px var(--team1-1);
    }

    .boost {
        position: absolute;
        height: 8px;
        border-radius: 8px;
        width: 92%;
        left: 4%;
        background-color: var(--bg-3);

        transition: all ease 0.2s;
    }

    .blue .boost.fill {
        background-color: var(--team0-3);
    }

    .orange .boost.fill {
        background-color: var(--team1-1);
    }

    .target.blue .boost.fill, .target.orange .boost.fill {
        background-color: var(--offWhite);
    }

    .name {
        margin: 0 auto;
        width: 92%;
        color: var(--offWhite);
        transition: all 0.3 ease;
    }

    .target .name {
        color: var(--offWhite);
        transition: all 0.3 ease;
    }

</style>