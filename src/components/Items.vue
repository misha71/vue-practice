<template>
  <div v-if="false">
    {{JSON.stringify(data)}}
  </div>
    <Item
        v-for="item in data"
        :key = "item.id"
        :data = "item"
    />
</template>

<script>
import Item from "@/components/Item.vue";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  components: {Item},
  methods: {
    ...mapActions({
      fetchItems: 'query/fetchItems',
    })
  },
  computed: {
    ...mapState({
      data: state => state.query.data
    }),
  },
  mounted() {
    this.fetchItems();
  }
}
</script>
