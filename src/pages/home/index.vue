<template>
  <div class="homePage">
    <div class="leftContainer">
      <el-avatar
        :size="200"
        src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1075582836,1925692375&fm=26&gp=0.jpg"
      />
      <h2>if-false</h2>
    </div>
    <div class="rightContainer">
      <el-card>
        <el-row v-for="(item, index) in navCardData" :key="index">
          <el-col :offset="item.offset" :span="16">
            <transition
              appear
              :appear-class="item.enterType ? 'VueEnterLeft' : 'VueEnterRight'"
              appear-to-class="VueEnterTo"
              appear-active-class="VueEnterActive"
            >
              <NavCard
                :title="item.title"
                :url="item.url"
                :details="item.details"
                :routerUrl="item.routerUrl"
              />
            </transition>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavCard from "@components/navCard";
import "./style/index.less";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      navCardData:state => state.home.navCardData
    }),
  },
  components: {
    NavCard,
  },
};
</script>

<style lang="less" scoped>
.homePage {
  background: rgb(170, 155, 218);

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .VueEnterLeft {
    transform: translateX(30%);
    opacity: 0;
  }

  .VueEnterRight {
    transform: translateX(-30%);
    opacity: 0;
  }

  .VueEnterActive {
    transition: all 3s;
  }
}
</style>>