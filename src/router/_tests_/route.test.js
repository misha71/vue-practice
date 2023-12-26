import {describe, it, expect} from "vitest";
import {flushPromises, mount} from "@vue/test-utils";
import router from "@/router";
import App from "@/App.vue";
import store from "@/store";
import Navbar from "@/components/Navbar.vue";

describe("routes", () => {
    it("Main", async ()=> {
        router.push("/")
        await router.isReady();
        const wrapper = mount(App, {
            global: {
                plugins: [router, store]
            }
        });
        // ищет элемент с указанным аотбутом и выполняет клик по нему
        wrapper.find('[data-testid="main"]').trigger("click");
        await flushPromises();
        // проверяет содержимое на стнанице после перехода
        expect(wrapper.html()).toContain("Главная");
    })
    it("About", async()=> {
        router.push("/")
        await router.isReady();
        const wrapper= mount(Navbar, {
            global: {
                plugins: [router, store]
            }
        });
        // ищет элемент с указанным аотбутом и выполняет клик по нему
        wrapper.find('[data-testid="about"]').trigger("click");
        await flushPromises();
        // проверяет содержимое на стнанице после перехода
        expect(wrapper.html()).toContain("О компании");
    })
})