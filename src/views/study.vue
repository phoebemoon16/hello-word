<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
  <SoltTemp> 
    <template #header> 
      <div>do you want about my study?<tip context="XJ is a beautiful place,XJ university too" direction="rightTop" icon="
el-icon-orange"></tip></div>
    </template>
    <template v-slot:default>
      <p>XJ university ----test</p>
      {{this.$store.state.userName}}{{this.$store.state.age}}
    </template>
    <template v-slot:scoped = "slotProps">
        {{slotProps.user}}
    </template>
    <!-- <h-button @click="show" context="test emit"></h-button> -->
    <h-button @click="linktoOther">slotTest</h-button>
    <h-input v-model="testModel"></h-input> {{testModel}}
  </SoltTemp>
  
</template>
<script>
import SoltTemp from "./SoltTemp.vue"
import tip from "../public/Tip.vue"
import hButton from "../public/hui-button.vue"
import hInput from "../public/hui-input.vue"
// import store from "../store/vuex"
import axios from "axios"
import { mapState, mapActions,mapMutations} from 'vuex'
export default {
  // provide:{testProvide: '0000000000000'},
  data() {
  return{
      test: '',
      testModel: 'testmodel',
      slotProps: {}
      // userName:store.state.userName
    }
  },
  components: {
    SoltTemp,tip,hButton,hInput
    // SoltTemp: require("./SoltTemp.vue"),
    // tip: require("../public/Tip.vue")
  },
  computed: {
    // 使用 mapState 辅助函数帮助我们生成计算属性,可以获取多个属性值
    ...mapState(['habit','age','userName']) // MS1
  },
  methods: {
    //mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用,方便快捷
    // ...mapMutations(['getUserName']), // MM1
    //
    ...mapActions(['getUserName']), // MA1
    initList() {
      this.getUserName('change phoebe by MA') // MM2
      console.log(this.userName, 'test mutations') // MM3
      console.log(this.habit, this.age) // MS2
      // 想调用本地就要先看好配置文件 vue.config.js
      // axios({
      //   method: "get",
      //   url: "../../apiSrc/testAPI.json",
      //   data: this.test
      // }).then((data) => {
      //   console.log('axios', test)
      // })
    },
    linktoOther(){
      console.log(' l can get a button')
      //编程式导航
      // this.$router.push(`/life?type=processing`)
      // 带params
      this.$router.push({name: 'life',params:'123'});
      // 带query
      //  this.$router.push({path: '/life',query: {id: '123'}});

      // this.$router.push("/life",);
    },
    initList2() {
      axios({
        method:'post',
        url: "../../apiSrc/testAPI.json",
        // data: param
      }).then(data => {
        console.log('http request')
      })
    },
  },
  mounted() {
    // 得到state的userName属性
    console.log(this.$store.state.userName, 'test')
    this.initList2()
    // commit 提交改变state的事件 修改userName，此次修改将会影响其他组件所用的userName
    // test123 就是mutation的载荷。大多数的情况下这个载荷应该是一个对象4
    // this.$store.commit('getUserName','test123')
    // this.$store.dispatch('getUserName', 'change name by action')
    console.log(this.$store.state.userName, 'test22')
  }
}
</script>
