export const alertModule = {
    state: () => ({
        type: "",
        classStatic: "page__alert__",
        message: null,
        show: false
    }),
    mutations: {
        show(state, payload){
            state.show = true;
            state.message = payload.message;
            state.type = payload.type;
        },
        hide(state, payload){
            state.show = false;
        }
    },
    getters: {
        classType(state){
            const {classStatic} = state;
            return classStatic + state.type;
        }
    },
    actions: {
        showAlert({state, commit}, payload){
            commit("show", payload);
        },
        hideAlert({state, commit}){
            commit("hide");
        }
    },
    namespaced: true
}
