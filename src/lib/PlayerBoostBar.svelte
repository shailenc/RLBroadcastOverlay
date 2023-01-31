<script>

    export let boost = 80;
    export let name = "geoff monkey333";
    export let isTarget = false;
  
    // $: console.log(percent);
</script>

<div class="container {isTarget ? "isTarget" : ""}">
    
    <div class="boost" style="width: {boost}%;"></div>

    <div class="name">{name}</div>

</div>
  
<style>
    .container {
        position: relative;
        height: 90%;
        top: 5%;
    }

    .name {
        line-height: 40px;
        font-size: 20px;
        /* text-transform: uppercase; */
    }

    .boost {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(46, 46, 46);
        transition: all 100ms ease;
        z-index: -1;
    }

    .isTarget .boost {
        background-color: pink;
    }

    .isTarget .name {
        letter-spacing: 2px;
    }

    .bg {
        width: 100%;
        background-color: #000;
    }
</style>