import axios from "axios";
const url = import.meta.env.VITE_APP_DB_URL;
export const queryModule = {
    state: () => ({
        data: [],
        idUpdate: null,
        isLoading: false,
        isError: false
    }),
    mutations: {
        getData(state, payload) {
            console.log('вызывали', payload)
            state.data = payload;
            state.isLoading = false;
        },
        addData(state, payload) {
            state.data.push(payload);
        },
        setIdUpdate(state, payload){
          state.idUpdate = payload;
        },
        updateData(state, payload) {
            const {id, body} = payload;
            state.data = state.data.map((item) => {
                if(item.id === id){
                    item.title = body.title;
                    item.description = body.description;
                }
                return item;
            });
        },
        deleteData(state, payload) {
            state.data = state.data.filter((item) => item.id !== payload);
        },
    },
    getters: {
    },
    actions: {
        async fetchItems({commit}) {
            try {
                const res = await axios.get(`${url}/items.json`);
                const payload = Object.keys(res.data).map((key) => {
                    return {...res.data[key], id: key};
                });
                commit("getData", payload);
            } catch (e) {
                throw new Error(e.message);
            }
        },
        async fetchItem({commit}, payload) {
            try {
                const res = await axios.get(`${url}/items/${payload}.json`);
                commit("getData", res.data);
            } catch (e) {
                throw new Error(e.message);
            }
        },
        async addItem({commit, dispatch}, payload) {
            try {
                const res = await axios.post(`${url}/items.json`, payload);
                if (res.data) {
                    const result = {...payload, id: res.data.name}
                    commit("addData", result);
                    dispatch("alert/showAlert", {message: 'Запись создана', type: "success"}, { root:true });
                }
            } catch (e) {
                throw new Error(e.message);
            }
        },
        async updateItem({commit, dispatch}, payload) {
            try {
                const {id, body} = payload;
                const res = await axios.put(`${url}/items/${id}.json`, body);
                if (res.data) {
                    commit("updateData", payload);
                    dispatch("alert/showAlert", {message: 'Запись обновлена', type: "success"}, { root:true });
                }
            } catch (e) {
                throw new Error(e.message);
            }
        },
        async deleteItem({commit, dispatch}, payload) {
            try {
                await axios.delete(`${url}/items/${payload}.json`);
                commit("deleteData", payload);
                dispatch("alert/showAlert", {message: 'Запись успешно удалена', type: "success"}, { root:true });
            } catch (e) {
                dispatch("alert/showAlert", {message: e.message, type: "danger"});
                throw Error(e.message);
            }
        }

    },
    namespaced: true
}
