<template>
  <div className="form__field">
    <label className="form__label">
      <div className="form__title">{{title}}</div>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    title:{
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>