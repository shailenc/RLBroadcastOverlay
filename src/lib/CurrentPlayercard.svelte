<script>
    import Boost from "./Boost.svelte";


    export let player = {};

</script>


<div id="card">

    
    <p>{player.name}</p>
    <p>Goals: {player.goals}</p>
    <div id="boost">
        <Boost percent={player.boost}/>
    </div>

</div>



<style>

    #card {
        position: relative;
        background-color: rgba(250, 115, 115, 0.7);
        height: 100%;
        width: 100%;
        padding: 0;
    }

    #boost {
        position: absolute;
        width: 100%;
        bottom: 0;
    }

</style>