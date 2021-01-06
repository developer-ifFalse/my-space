<template>
  <el-card :body-style="{ border: '1px solid rgba(0,0,0,0.1)' }" shadow="hover" class="navLi">
    <el-image
      style="height: 150px; width:150px;"
      :src="url"
      fit="contain"
    />
    <div class="details">
      <h2>{{title}}</h2>
      <p>{{details}}</p>
      <el-button size="small" @click="handleTo" >详情</el-button>
    </div>
  </el-card>
</template>

<script>
import './style/index.less'

export default {
  data(){
    return{

    }
  },
  methods:{
    handleTo() {
      this.$router.history.push(`${this.routerUrl}`)
    }
  },
  props:['id','title','url','details','routerUrl']
};
</script>

<style lang="less" scoped>
  
</style>
