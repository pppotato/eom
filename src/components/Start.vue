<template>
<el-container>
  <div class="mirror">
    <div class="title">
      <span>青囊医路</span>
    </div>
    <div class="list">
      <ul>
        <li><el-button type="primary" @click="click"><strong><i>神兽大闯关</i></strong></el-button></li>
      </ul>
    </div>
  </div>
</el-container>
</template>

<script>
export default {
  name: "Start",
  methods:{
    click:function (){
      this.$router.push("/firstLevel")
    }
  }
}
</script>

<style scoped>
.el-container {
  width: 100%;
  height: 100%;
  background-image: url("http://rd21tlsiq.hn-bkt.clouddn.com/1.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  overflow: hidden;
}

.mirror {
  display: flex;
  position: relative;
  width: 30vw;
  height: 40vh;
  background: inherit;
  margin: auto auto;
  padding: 5vmin;
  border-radius: 5px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.mirror div {
  position: relative;
  color: #fff;
  z-index: 10;
  /*font-size: 24px;*/
  line-height: 1.5;
}
.mirror::after {
  position: absolute;
  content: "";
  background: inherit;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: blur(10px);
  z-index: 0;
}
ul,li{
  list-style: none;
  padding-left: 0;
}
.list{
  margin-top: 30px;
}
.title {
  font-family: "Reggae One", cursive;
  font-size: 50px;
  font-weight: bolder;
  color: #000 !important;
  mask: radial-gradient(
      circle at 0 50%,
      #000,
      transparent 10%,
      transparent 0
  );
  mask-size: 100%;
  animation: scale 5s forwards;
}
@keyframes scale {
  50%,
  100% {
    mask-size: 2000%;
  }
}
@keyframes scale2 {
  50%,
  100% {
    mask-size: 100% 2000%;
  }
}

</style>
