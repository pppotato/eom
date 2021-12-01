<template>
  <el-container>
    <div class="title">
      <h1>请将属于脾藏象系统的脏器拖入方框中</h1>
    </div>
    <div class="problem">
      <draggable v-model="answers" animation="300" group="people" :filter="filter" class="choose" @add="add1">
        <el-tag class="active" type="warning" v-for="(element) in answers"
                :key="element.name">{{element.name}}</el-tag>
      </draggable>
      <div class="answer">
        <draggable class="blank" animation="300" v-model="blank" group="people" @add="add2">
          <el-tag type="warning" v-for="(element) in blank"
                  :key="element.name">{{element.name}}</el-tag>
        </draggable>
        <div class="animal"></div>
      </div>
    </div>
  </el-container>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "SecondLevel",
  components:{
    draggable
  },
  data() {
    return {
      answers:[
        {name:"脾",id:1},
        {name:"胃",id:2},
        {name:"小肠",id:3},
        {name:"三焦",id:4},
        {name:"肝",id:5},
        {name:"胆",id:6},
        {name:"肾",id:7},
        {name:"肺",id:8},
      ],
      blank:[],
      filter:"",
      success:false
    }
  },
  methods:{
    add1:function (){
      if(this.answers.length>4){
        this.filter=""
      }
    },
    add2:function (){
      if (this.blank.length>=4){
        this.filter=".active"
        this.check();
      }
    },
    check: function (){
      this.blank.sort((a,b)=>{
        return a.id-b.id;
      });
      const answer=[1,2,3,4];
      for(var i=0;i<this.blank.length;i++){
        if (this.blank[i].id!==answer[i]){
          this.unvalid()
          return;
        }
      }
      this.valid()
      console.log(this.blank)
    },
    valid: function (){
      this.$alert('恭喜你，答对啦！', '提示', {
        confirmButtonText: '下一关',
        callback: action => {
          console.log(action)
          this.$router.push("/thirdLevel")
        }
      });
    },
    unvalid:function (){
      this.$alert('答错了/(ㄒoㄒ)/~~', '提示', {
        confirmButtonText: '确定'
      });
    }
  },
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
.problem{
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
.answer{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 80%;
  margin-top: 10px;
}

.animal{
  animation: gif 2s linear infinite;
}
.el-tag{
  display: block;
  width: 40%;
  margin: 10px;
  font-size: 20px;
  text-align: center;
  background-color: blueviolet;
  color: white;
}
.choose{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

}
.animal{
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 300px;
  height: 300px;
}
.blank{
  border-radius: 2px;
  width: 50%;
  height: 50%;
  border: 5px dashed black;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
@keyframes gif {
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

</style>