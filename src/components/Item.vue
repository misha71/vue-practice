<template>
  <div class="item">
    <div class="item__inner">
      <div class="item__title title">{{ data.title }}</div>
      <div class="item__buttons buttons">
        <custom-button class="button__delete" @click="deletePost(data.id)">Удалить</custom-button>
        <custom-button class="button__update" @click="actionModal(data)">Обновить</custom-button>
        <custom-button class="button__link" @click="$router.push('/post/'+data.id+'/')">Перейти</custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  props: {
    data: {
      type: Object
    }
  },
  // compositions API
  setup() {
    const store = useStore();
    const actionModal = (item) => {
      const {id, title, description} = item;
      store.commit('form/setTitle', title);
      store.commit('form/setDescription', description);
      store.commit('query/setIdUpdate', id);
      store.commit('modal/showModal', 'update');
    }
    const deletePost = (id) => {
      store.dispatch("query/deleteItem", id);
    }
    return {
      actionModal,
      deletePost
    }
  }
}
</script>
