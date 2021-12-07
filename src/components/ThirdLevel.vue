<template>
  <el-container>
    <div class="title">
      <h1>第三关</h1>
      <p>你能治好这只神兽吗</p>
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
      tip:["<ul><li><strong>提示1:脾气虚则清阳不升，血虚则清窍失养，故发生眩晕。</strong></li><li><strong>提示2:治法当以补益气血，健运脾胃。</strong></li><li><strong>提示3:方中黄芪，龙眼肉为君药。</strong></li></ul>",
        "<ul><li><strong>提示1:脾阳不足，统摄无权，血不循常道，故便血。</strong></li><li><strong>提示2:治法当以健脾温中，养血止血。</strong></li><li><strong>提示3:方中君药为灶心土。</strong></li></ul>","<ul><li><strong>提示1:脾失健运，水湿内停，乃成水肿。</strong></li><li><strong>提示2:治以健脾温阳利水。</strong></li><li><strong>提示3:方子君药:附子、干姜。</strong></li></ul>",
        "<ul><li><strong>提示1:脾虚无力，运化失司。食饮入胃，不能消化，停积于内，故腹胀。</strong></li><li><strong>提示2:治疗脾虚气陷之代表方。（补气健脾，升清降浊）</strong></li><li><strong>提示3 : 方中重用黄芪补气健脾。</strong></li></ul>"],
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
              this.$alert('<strong>你已经成功通关啦</strong><br/><i>以下是你得分点：</i><ul><li>将青龙放置到了召唤阵的正确位置</li><li>将白虎放置到了召唤阵的正确位置</li><li>将朱雀放置到了召唤阵的正确位置</li><li>将玄武放置到了召唤阵的正确位置</li><li>将勾陈放置到了召唤阵的正确位置</li><li>正确地将四个脏器放置到了神兽上</li><li>使用归脾汤治好了眩晕</li><li>使用实脾饮治好了水肿</li><li>使用黄土汤治好了便血</li><li>使用补中益气汤治好了腹胀</li></ul>', '最终结果', {
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
        this.$alert(this.tip[this.index], '提示', {
          dangerouslyUseHTMLString: true,
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
  background: url("https://cdn.jsdelivr.net/gh/pppotato/CDN@master/bgp/2.jpg") no-repeat;
  background-size:100% 100%;
  position:absolute;
  flex-direction: column;
  align-items: center;
}
.title{
  text-align: center;
  width: 70%;
  line-height: 30px;
  font-size: 20px;

}
.problem{
  display: flex;
  width: 80%;
  height: 80%;
  flex-direction: column;
  align-items: center;
}

.container{
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("https://cdn.jsdelivr.net/gh/pppotato/CDN@master/container.jpg");
  display: flex;
  justify-content: space-around;
  align-items: center
}
.animal{
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 300px;
  height: 300px;
  background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1991637885227_.pic_hd.jpg');
}

@keyframes gif {
  0% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1931637885222_.pic_hd.jpg');
  }
  50% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1991637885227_.pic_hd.jpg');
  }
  100% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1981637885227_.pic_hd.jpg');
  }
}
</style>
