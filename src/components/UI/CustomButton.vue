<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'custom-button'
}
</script>

<style>
.button {
  padding: 10px;
  display: inline-block;
  text-decoration: none;
  border-radius: 10px;
  white-space: nowrap;
  cursor: pointer;
  color: #ffffff;
}
.button__delete {
  background-color: rgb(185, 46, 46);
}

.button__update {
  background-color: rgb(50, 149, 50);
}

.button__link {
  background-color: rgb(122, 126, 122);
}

.button__add {
  background-color: rgb(50, 149, 50);
  width: 20%;
}
.button__close{
  background-color: rgb(122, 126, 122);
}
</style>