<script>
    export let podium;
    export let mode;
</script>
<article class="podium">
    {#each podium as winner,index}
        <div class="podium-wrapper">
            <div class="podium-info">
            <img src={winner.athlete.profile} onerror="this.src='/icon.png'" alt={winner.athlete.firstname}/>
                <h1>#{index +1}</h1>
                <div class="athlete-info">
                    <p>{winner.athlete.firstname}</p>
                    <span>
                        {Math.floor(winner.workout[mode].distance/1000)}<span>KM</span>
                    </span>
                    <span class="detail">
                        {winner.workout[mode].count} <span>Run</span> {Math.floor(winner.workout[mode].moving_time/60/60)} <span>Hour</span>
                    </span>
                </div>
            </div>
        </div>
    {/each}
</article>

<style lang="scss">
 .podium{
     display: flex;
     z-index: 2;
     justify-content: space-around;
     align-items: flex-end;
     // flex-direction: row-reverse;
     position:relative;
     z-index: 2;
     bottom:-5px;
     padding-top:30px;
     &-wrapper{
        background: #83a4d4;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #b6fbff, #83a4d4);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #b6fbff, #83a4d4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        border-top-left-radius: 60px;
        border-top-right-radius: 60px;
        padding-bottom:80px;
        &:nth-child(1){
            height:180px;
        }
        &:nth-child(2){
            height:160px;
        }
        &:nth-child(3){
            height:140px;
        }
        .podium-info{
         text-align:center;
         padding:2px;
         h1{
             font-size: 25px;
             color:#1488CC;
             margin:0;
             padding:3px 0px 5px 0px;
             line-height: 1em;
         }
         span{
             font-size: 12px;
             line-height: 1em;
         }
         img{
             border-radius:60px;
             display:block;
             margin:0 auto;
             border: 4px solid #1488CC;
             width:100px;
             min-height:100px;
         }
         p{
            font-size: 14px;
            font-weight: bold;
            display:block;
            text-transform: capitalize;
            padding:0px 3px;
            display:block;
            line-height: 1em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width:100px;
         }
        }
        .athlete-info{
            span{
                font-size:12px;
                font-weight: bold;
                span{
                    font-weight: normal;
                }
            }
            .detail{
                display:block;
                position:relative;
            }
        }
     }
     
 }
</style>