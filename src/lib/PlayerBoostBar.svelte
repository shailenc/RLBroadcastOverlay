<script>

    export let boost = 80;
    export let name = "geoff monkey333";
    export let isTarget = false;
    export let team;
  
    // $: console.log(percent);
</script>

<div class="container {team} {isTarget ? "target":""}">
    <div class="name">
        {name}
    </div>

    <div class="boost"></div>
    <div class="boost fill" style="width: {boost}%;"></div>
</div>

<style>

    .container {
        height: 85%;
        width: 100%;
        border-radius: 5px;
    }

    .container.blue {
        background: rgb(38,69,171);
        background: linear-gradient(100deg, rgba(38,69,171,1) 0%, rgba(32,79,169,1) 60%, rgb(75, 93, 164) 100%); 
    }

    .container.orange {
        background: rgb(171,80,38);
        background: linear-gradient(260deg, rgba(171,80,38,1) 0%, rgba(165,79,22,1) 64%, rgba(197,152,54,1) 100%); 
    }

    .boost {
        position: absolute;
        height: 8px;
        border-radius: 8px;
        width: 92%;
        left: 4%;
        background-color: rgba(40 40 40 / 0.8);

        transition: all ease 0.5;
    }

    .target .boost.fill {
        background-color: rgb(250 250 250);
    }

    .boost.fill {
        background-color: rgb(250 250 250 / 0.5);
    }

    .name {
        margin: 0 auto;
        width: 92%;
        color: rgb(250 250 250 / 0.75);

        transition: all 500ms ease;
    }

    .target .name {
        color: rgb(250 250 250 / 1);
        transition: all 500ms ease;

    }

</style>