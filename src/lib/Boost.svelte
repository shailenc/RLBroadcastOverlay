<script>

    export let percent = 80;
  
    $: console.log(percent);
</script>
  
<div class="boost bg">
    <div class="boost" style="width: {percent}%" />
</div>
  
<style>
    .boost {
        position: relative;
        height: 50px;
        background-color: pink;
        transition: width 100ms ease;
    }
    .bg {
        width: 100%;
        background-color: #000;
    }
</style>