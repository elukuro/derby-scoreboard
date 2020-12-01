<script>
    export let data;
</script>
<div class="current-pos">
<span>Hi <b>{data.athlete}</b> you're <b>#{data.position}</b> place</span>
</div>

<style lang="scss">
    .current-pos{
        position:relative;
        z-index: 2;
        span{
            background: #fff;
            opacity:.7;
            padding:5px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }
</style>