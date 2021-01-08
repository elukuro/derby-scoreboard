<script>
     export let lastUpdate;
     const last = 1609606800000;
     const seconds = Math.floor((Date.now() - lastUpdate)/1000);
     const minute = Math.floor(seconds / 60);
     const hour = Math.floor(minute / 60);
     const day = Math.floor(hour/24);
</script>
<span>Last Sync: <b>{(day>0) ? `${day} days ago` : `today`}</b></span>
<style lang="scss">
    span{
        font-size:10px;
        display:block;
        margin:0;
        padding:0;
        color:#fafafa;
    }
</style>
