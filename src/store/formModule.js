export const formModule = {
    state: () => ({
            fieldTitle: {name: "title", title: "Название", value: "", type: "text", required: true},
            fieldDescription: {name: "description", title: "Описание", value: "", type: "text", required: true}
    }),
    mutations: {
        setTitle(state, payload){
            state.fieldTitle.value = payload;

        },
        setDescription(state, payload){
            state.fieldDescription.value = payload;
        }
    },
    getters: {},
    actions: {},
    namespaced: true
}
