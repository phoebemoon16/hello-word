<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
  <SoltTemp> 
    <!-- <template v-slot:header> 
      <p>do you want about my honor?v{{this.$store.state.userName}}</p>
    </template> -->
    <!-- <template v-slot:footer>
      <i class="el-icon-s-grid"></i><p>YX,Yqr</p>
    </template> -->
    <h-upload :readonly="testRead"></h-upload>
  </SoltTemp>
  <!-- <h-upload></h-upload> -->
</template>
<script>
import SoltTemp from "./SoltTemp.vue"
import axios from "axios"
// import store from "../store/vuex"
import hUpload from "../public/hui-upload.vue"
export default {
  data() {
  return{
      test: '',
      testRead: false
    }
  },
  components: {
    SoltTemp,hUpload
  },
  methods: {
    // initList() {
    //   axios({
    //     method: "post",
    //     url: "/fileRecord/queryCleaningProgress",
    //     data: this.test
    //   }).then((data) => {
    //     console.log('axios', test)
    //   })
    // },
    initList2(param) {
      // this.$http({
      //   url: "/fileRecord/listStorageFile",
      //   data: param
      // }).then(data => {
      //   console.log('http request')
      // })
    },
  },
  mounted() {
    // this.initList()
    // console.log(this.$store.state.userName, 'honor')
    // this.initList2()
  }
}
</script>