<template>
  <nav :class="[['header__menu', 'menu', {'active': show}]]">
  <ul class="menu__row">
    <li class="menu__item">
      <router-link
          to="/about/"
          class="menu__link"
          data-testid="about"
      >
        О компании
      </router-link>
    </li>
    <li class="menu__item">
      <router-link to="/catalog/" class="menu__link">
        Каталог
      </router-link>
    </li>
    <li class="menu__item menu__item_submenu">
      <router-link to="/delivery/" class="menu__link">
        Доставка
      </router-link>
    </li>
  </ul>
  </nav>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean
    }
  }
}
</script>
