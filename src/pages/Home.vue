<template>
  <div className="home inner">
    <h1>Главная</h1>
    <Items/>
    <custom-button class = "button__add" @click="showAction"> Добавить</custom-button>
  </div>
  <modal>
    <custom-form />
  </modal>
</template>

<script>


import Items from "@/components/Items.vue";
import {mapMutations} from "vuex";
import CustomForm from "@/components/CustomForm.vue";

export default {
  components: {CustomForm, Items},
  methods: {
    ...mapMutations({
      show: "modal/showModal",
      setTitle: "form/setTitle",
      setDescription: "form/setDescription"
    }),
    showAction(){
      this.setTitle('');
      this.setDescription('');
      this.show();
    }
  }
}
</script>
