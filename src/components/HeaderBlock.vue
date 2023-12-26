<template>
  <header class="header">
    <div class="header__row container">
      <div className="header__logo">
        <router-link to="/" class="header__link"  data-testid="main">
          <img src="@/assets/images/logo.png" />
        </router-link>
      </div>
      <div :class="['header__burger', 'burger', {active: showBurger}]" @click="toggleBurger">
      <span class="burger__line"></span>
    </div>
    <navbar :show="showBurger"/>
    </div>
  </header>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {Navbar},
  data(){
    return {
      showBurger: false
    }
  },
  methods: {
    toggleBurger(){
      this.showBurger = !this.showBurger;
    }
  }

}
</script>

<style lang="scss" scoped>

</style>