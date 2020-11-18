<script>
     export let challenge;
     export let index;
     let workout = challenge.workout.ytd_run_totals;
     let athlete = challenge.athlete;
</script>

<article class="cardScore">
    <slot></slot>
    <div class="athlete">
        <h2>#{index +1}</h2>
        <img src={athlete.profile} alt="profile image"/>
        <div class="athlete-info">
            <p><span>{athlete.firstname} {athlete.lastname}</span></p>
            <p><span>{challenge.athlete.city}</span></p>
        </div>
    </div>
    <div class="workout">
        <p>{Math.floor(workout.distance/1000)}<span>KM</span> {workout.count}<span>Run</span> {Math.floor(workout.moving_time/60/60)}<span>Hour</span></p> 
    </div>
</article>
<style lang="scss">
	.cardScore{
        border:1px solid #fff;
        border-radius:3px;
        padding:5px;
        margin-bottom:3px;
        box-shadow: 0px 1px 3px #ccc;
        display: flex;
        justify-content: space-between;
        background:#fff;
        .athlete{
            display:flex;
            align-items: center;
            img{
                width:40px;
                border-radius:30px;
            }
            .athlete-info{
                padding-left:10px;
                width:95%;
                p{
                    color:#555;
                    font-size: 12px;
                    text-transform: capitalize;
                }
            }
        }
        h2{
            font-size: 12px;
            margin:0px 10px;
        }
        .workout{
          p{
              font-size: 11px;
              display: inline;
              color:#999;
              font-weight: bold;
              span{
                  font-weight: normal;
                  font-size: 8px;
              }
          }  
        }
    }
</style>