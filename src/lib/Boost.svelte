<script>

    export let boost = 80;
  
    // $: console.log(percent);
</script>
  
<div class="boost bg">
    <div class="boost" style="width: {boost}%" />
</div>
  
<style>
    .boost {
        position: relative;
        height: 10px;
        background-color: pink;
        transition: width 100ms ease;
        border-radius: 10px;
    }
    .bg {
        width: 100%;
        background-color: #000;
    }
</style>