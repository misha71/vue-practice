export const modalModule = {
    state: () => ({
        visible: false,
        type: ""
    }),
    mutations: {
        showModal(state, payload = "add"){
            state.visible = true;
            state.type = payload;
        },
        hideModal(state){
            state.visible = false;
        }
    },
    getters: {
        title(state){
            return state.type === "update" ? 'Обновить посты': 'Добавить посты'
        }
    },
    actions: {},
    namespaced: true
}
