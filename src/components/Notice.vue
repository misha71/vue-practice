<template>
  <p class="alert__notice">
    {{message}}
  </p>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    }
  }
}
</script>
