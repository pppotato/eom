<template>
<el-container>
  <div class="title">
    <h1>第一关</h1>
    <p>请将五脏对应的五神兽放入召唤阵
      下方有五只小神兽，分别是代表肝的青龙，代表肺的白虎，代表心的朱雀，代表肾的玄武，代表脾的勾陈。
      上方的召唤阵有五个方位：东、西、南、北、中</p>
  </div>
  <div class="problem">
    <div class="roll">
      <draggable v-model="blank" animation="300" @add="add"  group="people" class="animal top">

      </draggable>
      <draggable v-model="blank" animation="300" @add="add" group="people" class="animal left">

      </draggable>
      <draggable v-model="blank" animation="300" @add="add" group="people" class="animal center">
      </draggable>
      <draggable v-model="blank" animation="300" @add="add"  group="people" class="animal right">
      </draggable>
      <draggable v-model="blank" animation="300" @add="add"  group="people" class="animal bottom">
      </draggable>
    </div>
    <draggable v-model="animals" animation="300" group="people" class="animals" >
      <div v-for="(element) in animals" :class="'animal '+element.class" :key="element.id">
        <el-tag type="danger">{{element.name}}</el-tag>
      </div>
    </draggable>

  </div>
</el-container>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: "FirstLevel",
  components: {
    draggable
  },
  data:function (){
    return {
      animals:[
        {id:1,class:"tiger",name:'肺'},
        {id:2,class:"finch",name: '心'},
        {id:3,class:"dragon",name: '肝'},
        {id:4,class:"turtle",name:'肾'},
        {id:5,class:"kylin",name: '脾'}
      ],
      animals_clone:[
        {id:1,class:"tiger",name:'肺'},
        {id:2,class:"finch",name: '心'},
        {id:3,class:"dragon",name: '肝'},
        {id:4,class:"turtle",name:'肾'},
        {id:5,class:"kylin",name: '脾'}
      ],
      blank:[],
      success: true

    }
  },
  methods:{
    add:function (evt){
      console.log(evt)
      var to=evt.to,from=evt.item,q=from.className.split(' ')[1],a=to.className.split(' ')[1]
      to.className=to.className+' '+from.className.split(' ')[1]
      if(this.success){
        if(q==='dragon'&&a!=='left'){
          this.success=false;
        }
        if(q==='turtle'&&a!=='bottom'){
          this.success=false;
        }
        if(q==='tiger'&&a!=='right'){
          this.success=false;
        }
        if(q==='finch'&&a!=='top'){
          this.success=false;
        }
        if(q==='kylin'&&a!=='center'){
          this.success=false;
        }
      }
      if(this.blank.length===5){
        if(this.success){
          this.valid()
        }else{
          this.unvalid()
        }
      }
    },
    valid: function (){
      this.$alert('恭喜你，成功召唤啦！', '提示', {
        confirmButtonText: '下一关',
        callback: action => {
          console.log(action)
          this.$router.push("/secondLevel")
        }
      });
    },
    unvalid:function (){
      this.$alert('召唤失败/(ㄒoㄒ)/~~', '提示', {
        confirmButtonText: '确定',
        callback:action => {
          console.log(action)
          this.animals=this.animals_clone
          this.blank=[]
          var roll=document.getElementsByClassName('roll')[0]
          var animal=roll.getElementsByTagName("div");
          for(let i=0;i<animal.length;i++){
            var cn=animal[i].className.split(' ')
            animal[i].className=cn[0]+' '+cn[1]
          }
          this.success=true
        }
      });
    }
  }
}
</script>

<style scoped>
.el-container {
  width: 100%;
  height: 100%;
  background: url("https://cdn.jsdelivr.net/gh/pppotato/CDN@master/bgp/1.jpg") no-repeat;
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
.top{
  position: absolute;
  top: 13%;
  left: 45%;
}
.left{
  position: absolute;
  left: 30%;
  top: 35%;
}
.right{
  position: absolute;
  left: 59%;
  top: 35%;
}
.bottom{
  position: absolute;
  left: 45%;
  top: 57%;
}
.center{
  position: absolute;
  left: 45%;
  top: 35%;
}
.problem{
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
.roll{
  width:80%;
  height: 80%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("https://cdn.jsdelivr.net/gh/pppotato/CDN@master/7bc03801963015b7c101ca2481b0b3b7.png");
}
.animals{
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.animal{
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 150px;
  height: 150px;
  text-align: center;
}
.animal .el-tag{
  font-size: 20px;
  font-weight: bolder;
}
.tiger{
  animation: tigerGif 2s linear infinite;
}
.finch{
  animation: finchGif 2s linear infinite;
}
.turtle{
  animation: turtleGif 2s linear infinite;
}
.kylin{
  animation: kylinGif 2s linear infinite;
}
.dragon{
  animation: dragonGif 2s linear infinite;
}
@keyframes kylinGif {
  0% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1981637885227_.pic_hd.jpg');
  }
  50% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1991637885227_.pic_hd.jpg');
  }
  100% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1981637885227_.pic_hd.jpg');
  }
}
@keyframes tigerGif {
  0% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1661637856334_.pic_hd.png');
  }
  50% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1671637856335_.pic_hd.png');
  }
  100% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1661637856334_.pic_hd.png');
  }
}
@keyframes finchGif {
  0% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1921637885221_.pic_hd.jpg');
  }
  50% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1931637885222_.pic_hd.jpg');
  }
  100% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1921637885221_.pic_hd.jpg');
  }
}
@keyframes dragonGif {
  0% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1941637885223_.pic_hd.jpg');
  }
  50% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1951637885224_.pic_hd.jpg');
  }
  100% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1941637885223_.pic_hd.jpg');
  }
}
@keyframes turtleGif {
  0% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1961637885225_.pic_hd.jpg');
  }
  50% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1971637885226_.pic_hd.jpg');
  }
  100% {
    background-image: url('https://cdn.jsdelivr.net/gh/pppotato/CDN@master/animals/1961637885225_.pic_hd.jpg');
  }
}
</style>