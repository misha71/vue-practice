<template>
  <div class="post">
    <div className="detail">
      <div className="detail__title">Название: {{data.title}}</div>
      <div className="detail__title">Описание: {{data.description}}</div>
      <div></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  methods: {
    ...mapActions({
      fetchItem: "query/fetchItem"
    })
  },
  computed: {
    ...mapState({
      data: (state) => state.query.data
    })
  },
  mounted() {
    const id = this.$route.params.id;
    this.fetchItem(id);
  }
}
</script>

<style lang="scss" scoped>

</style>