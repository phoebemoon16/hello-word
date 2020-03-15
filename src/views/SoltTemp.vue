<template>
  <div class="container">
      <!-- 具名插槽 -->
      <!-- <header>
          <slot name="header">{{this.testProvide}}</slot>
      </header> -->
      <main>
          <slot></slot>
      </main>
      <footer>
          <slot name="footer"></slot>
      </footer>
      <!-- 作用域插槽 -->
      <span>
        <slot :user = "user" name="scoped">
          {{user}}
        </slot>
      </span>
  </div>
</template>
<script>
export default {
  // inject:['testProvide'],
  data(){
    return {
      user: 'phoebe',
    }
  }
}
</script>
>
<style lang="scss">
.container {
  header {
    background: none;
    color: white;
    font-size: 12px;
  }
  footer {
    margin-top: 200px;
    color: black

  }
}
</style>
