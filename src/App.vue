<template>
  <div className="wrapper">
    <header-block />
    <div className="page">
      <div className="container">
        <alert/>
        <router-view></router-view>
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script>
import Alert from "@/components/Alert.vue";
import HeaderBlock from "@/components/HeaderBlock.vue";
import FooterBlock from "@/components/FooterBlock.vue";

export default {
  components: {FooterBlock, HeaderBlock, Alert},
}
</script>
