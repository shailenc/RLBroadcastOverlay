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
    <div class="boost fill" style="width: {boost*92/100}%;"></div>
</div>

<style>
    
    .container {
        position: relative;
        height: 85%;
        width: 100%;
        border-radius: 2px;

        background: rgb(23,25,31);
        background: linear-gradient(90deg, rgba(25,27,33,1) 44%, rgba(32,34,41,1) 93%, rgba(36,39,46,1) 100%);
        outline:3px solid rgb(5 5 5 / 0.1);

        box-shadow: 0px 0px 0px 0px rgb(55, 153, 239);
        transition: box-shadow 0.5s ease;
    }

    .container.target.blue {
        outline: 1px groove rgba(148, 146, 160, 0.15);
        box-shadow: 7px 0px 0px 0px rgb(55, 153, 239);
    }

    .container.target.orange {
        outline: 1px groove rgba(148, 146, 160, 0.15);
        box-shadow: -7px 0px 0px 0px rgb(239, 135, 55);
    }

    .boost {
        position: absolute;
        height: 8px;
        border-radius: 8px;
        width: 92%;
        left: 4%;
        background-color: rgba(40 40 40 / 0.8);

        transition: all ease 0.2s;
    }

    .blue .boost.fill {
        background-color: rgba(56, 118, 225, 0.7);
    }

    .orange .boost.fill {
        background-color: rgba(255, 102, 0, 0.7);
    }

    .target.blue .boost.fill, .target.orange .boost.fill {
        background-color: rgb(250 250 250 / 1);
    }

    .boost.fill {
        background-color: rgb(250 250 250 / 0.5);
    }

    .name {
        margin: 0 auto;
        width: 92%;
        color: rgb(250 250 250 / 0.7);
        transition: all 0.3 ease;
    }

    .target .name {
        color: rgb(250 250 250 / 1);
        transition: all 0.3 ease;
    }

</style>