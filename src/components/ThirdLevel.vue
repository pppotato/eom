<template>
  <el-container>
    <div class="title">
      <h1>你能治好这只神兽吗</h1>
    </div>
    <div class="problem">
      <div class="container">
        <el-dropdown placement="bottom" @command="handle">
  <span class="el-dropdown-link">
    药品清单
  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(element,idx) in m[index]" :key="idx" :command="idx">{{ element }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-popover popper-class="answer"
          placement="right-start"
          width="200"
          trigger="hover"
          :content="msg[index]">
          <div class="animal" slot="reference">
<!--            <div class="dazzle"></div>-->
          </div>
      </el-popover>
    </div>
  </el-container>
</template>

<script>
export default {
  name: "ThirdLevel",
  data:function (){
    return {
      index:0,
      answer:0,
      msg:["我头好晕~","我便血了~","我水肿了~","我腹胀了~"],
      m:[["归脾汤", "天麻钩藤饮","通窍活血汤","左归丸"],
        ["黄土汤", "清脏汤","脏连丸","地榆散"],
        ["实脾饮","五苓散","五皮饮","疏凿饮子"],
        ["补中益气汤","保和丸","二陈汤","连朴饮"]
          ]
    }
  },
  methods:{
    handle:function (elem){
      if(elem===this.answer){
        this.$alert('恭喜你治好了该病症，请继续为该神兽医治', '提示', {
          confirmButtonText: '继续',
          callback: action => {
            console.log(action)
            this.index++;
            if(this.index>=4){
              this.$alert('<strong>你已经成功通关啦</strong><br/><i>以下是你得分点：</i><ul><li>将青龙放置到了召唤阵的正确位置</li><li>将白虎放置到了召唤阵的正确位置</li><li>将朱雀放置到了召唤阵的正确位置</li><li>将玄武放置到了召唤阵的正确位置</li><li>将麒麟放置到了召唤阵的正确位置</li><li>正确的将四个脏器放置到了神兽上</li><li>使用归脾汤治好了眩晕</li><li>使用实脾饮治好了水肿</li><li>使用黄土汤治好了便血</li><li>使用补中益气汤治好了腹胀</li></ul>', '最终结果', {
                dangerouslyUseHTMLString: true,
                callback: action => {
                  console.log(action)
                  this.$router.push("/")
                }
              })
            }
          }
        });
      }else{
        this.$alert('下错药了，神兽病情好像越来越严重了/(ㄒoㄒ)/~~', '提示', {

        })
      }
    }
  }
}
</script>

<style scoped>

.el-container {
  width: 100%;
  height: 100%;
  background: url("../../public/bgp/2.jpg") no-repeat;
  background-size:100% 100%;
  position:absolute;
  flex-direction: column;
  align-items: center;
}
.problem{
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
/*.answer{*/
/*  position: absolute;*/
/*  bottom: 30px;*/
/*}*/
.container{
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../../public/container.jpg");
  display: flex;
  justify-content: space-around;
  align-items: center
}
.animal{
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 300px;
  height: 300px;
  background-image: url('../../public/animals/1991637885227_.pic_hd.jpg');
}
/*.dazzle{*/
/*  background-repeat: no-repeat;*/
/*  background-size: 100% 100%;*/
/*  width: 300px;*/
/*  height: 150px;*/
/*  position: relative;*/
/*  top: -50px;*/
/*  background-image: url('../../public/duzzle.png');*/
/*}*/
@keyframes gif {
  0% {
    background-image: url('../../public/animals/1931637885222_.pic_hd.jpg');
  }
  50% {
    background-image: url('../../public/animals/1991637885227_.pic_hd.jpg');
  }
  100% {
    background-image: url('../../public/animals/1981637885227_.pic_hd.jpg');
  }
}
</style>