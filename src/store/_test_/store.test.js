import {describe, it, expect} from "vitest";
import {mount} from "@vue/test-utils";
import store from '../../store'
import App from "@/App.vue";
import Alert from "@/components/Alert.vue";

describe("store vuex", () => {
    it("alert isolation/showAlert", () => {
        store.dispatch("alert/showAlert", {text: ['error'], type: 'danger'});
        expect(store.state.alert.type).toBe('danger');
    });
    it("alert with component", async () => {
        const wrapper = mount(Alert, {
            global: {
                plugins: [store]
            }
        });
        await store.dispatch("alert/showAlert", {text: ['Неверное поле'], type: 'danger'});
        expect(wrapper.html()).toContain("Неверное поле")
    });
})