<template>
  <div>
    sss
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components:{},
  created(){
    console.log(this.$router)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
