<template>
  <div class="modal__wrapper" v-if="visible" ref="modalRoot">
    <div class="modal">
      <div class="modal__inner">
        <div class="modal__header">{{title}}</div>
        <div class="modal__body">
          <slot></slot>
        </div>
      </div>
      <div class="modal__footer">
        <custom-button class="button__update" @click="onSave">
          Сохранить
        </custom-button>
        <custom-button class="button__close" @click="hide">
        Отмена
      </custom-button>
    </div>
  </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "modal",
  computed: {
    ...mapState({
      visible: state => state.modal.visible,
      type: state => state.modal.type,
      fields: state => state.form,
      idUpdate: state => state.query.idUpdate
    }),
    ...mapGetters({
      title: 'modal/title'
    })
  },
  methods: {
    ...mapMutations({
      hide: 'modal/hideModal'
    }),
    ...mapActions({
      showAlert: "alert/showAlert",
      hideAlert: "alert/hideAlert",
      addItem: "query/addItem",
      updateItem: "query/updateItem"
    }),
    hideEvent(e){
      const { target } = e;
      if (target === this.$refs.modalRoot || e.key === "Escape") {
        this.hide();
      }
    },
    onSave(){
        const errors = [];
        const body = {};
        const type = this.type;
        const fields = this.fields;
        this.hideAlert();
        Object.keys(fields).forEach(field => {
          const {title, name, required, value} = fields[field];
            if(required === true && value === ""){
              errors.push(`Заполните поле: ${title}`);
            }
            else{
              body[name] = value;
            }
        });
        if(errors.length > 0){
          this.showAlert({message: errors, type: "danger"});
          return false;
        }
        switch(type){
          case 'add':
            this.addItem(body)
            break;
          case 'update':
            this.updateItem({body, id: this.idUpdate})
            break;
        }
      this.hide();
        /*
        this.fields.forEach(field => {
          console.log(field);
          const val = field.value;
          console.log(value);
        })
         */

    }
  },
  mounted() {
    window.addEventListener("click", this.hideEvent);
    window.addEventListener("keydown", this.hideEvent);
  },
  beforeDestroy() {
    // Отписываемся от события перед уничтожением компонента
    this.$off('click', this.hideEvent);
    this.$off('keydown', this.hideEvent);
  }
}
</script>

<style lang="scss" scoped>

</style>