import {describe, it, expect} from "vitest";
import {mount} from "@vue/test-utils";
import FormField from "@/components/FormField.vue";

describe("component FormField", () => {
    it("prop contain in component", ()=> {
        const wrapper = mount(FormField, {props: {title: "название"}});
        expect(wrapper.text()).toContain("название");
    })
})
