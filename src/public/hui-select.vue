<template>
  <div class="i-area-select">
      <el-row :gutter="gutter">
          <el-col :span="rows">
            <el-form-item class="more mt-0" :prop="districtProp">
              <i-select 
                :readonly="readonly"
                :label="districtLabel"
                v-model="districtValue"
                :options="districtOptionsData"
                @change="handleDistrictChange"
                v-if="districtOptinsData && districtOptionsData.length"
              />
              <i-select 
                v-else
                :readonly="readonly"
                :label="districtLabel"
                v-model="districtValue"
                :options="districtOptions"
                @change="handleDistrictChange"
              >
              </i-select>
            </el-form-item>
          </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  props:{
    district:[String,Number],
    // region:[String,Number],
    // area:[String,Number],
    districtOptions:Array,
    districtLabel:String,
    readOnly:{type:Boolean},
    districtProp:String
  },
  data(){
    return {
      districtValue: this.district,
      districtOptionsData:[],
      districtOptions
    }
  },
  methods: {
    handleDistrictChange(val){

    }
  }
}
</script>
>