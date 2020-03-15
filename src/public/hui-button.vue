<template>
   <button class="button" @click="showTips">
       <!-- <p>{{context}}</p> -->
       <!-- 加上click就是后备插槽 -->
       <span><slot>click</slot></span>
    </button>

</template>

<script>
export default {
   props:['context'],
   data() {
       return {

       }
   },
   methods: {
       showTips(event) {
           console.log(event, 'test evet')
           this.$emit('click', event)
       }
   }

}
</script>

<style>
.button {
    background-color: #CCC;
}
</style>
