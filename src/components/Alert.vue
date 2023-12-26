<template>
  <div :class="classType" class="notice page__alert" v-if="show" @click="hide">
    <notice
        v-for="value in data"
        key="value"
        :message="value"
    />
  </div>
</template>

<script>

import Notice from "@/components/Notice.vue";
import {mapActions, mapGetters, mapState} from "vuex";
export default {
  components: {Notice},
  computed: {
    ...mapState({
      show: state => state.alert.show,
      data: state => {
        let message = state.alert.message;
        if(!Array.isArray(message)){
         message = [message]
        }
        return message;
      }
    }),
    ...mapGetters({
      classType: 'alert/classType'
    })
  },
  methods: {
    ...mapActions({
      hide: 'alert/hideAlert'
    })
  }
}
</script>
