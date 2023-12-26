<template>
  <input :type="type" class="input" :value="modelValue" @input="updateInput"/>
</template>

<script>
export default {
  name: "custom-input",
  props: {
    type: {
      type: String
    },
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>
  .input{
    border: 1px solid black;
    padding: 10px;
  }
</style>