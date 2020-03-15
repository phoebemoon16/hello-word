<template>
<div>
   <!-- <input class="input" 
    :value="value" 
    @input="handleInput"
   > -->
    <input class="input" 
      v-bind="$attrs"
    @input="handleInput"
   >
   </input>
   <span>{{ textLength }}</span>
</div>
</template>

<script>
export default {
   props:['value'],
   data() {
       return {
           showText: '',
       }
   },
   computed: {
        textLength() {
            if (typeof this.value === 'number') {
                return String(this.value).length;
            }

            return (this.value || '').length;
      },
   },
   methods: {
       handleInput(event) {
           this.$emit('input', event.target.value)
       }
   }

}
</script>

<style>
.input {
    background-color: antiquewhite;
}
</style>
