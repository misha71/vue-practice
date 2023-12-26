import {createStore} from "vuex";
import {alertModule} from "@/store/alertModule";
import {modalModule} from "@/store/modalMudule";
import {queryModule} from "@/store/queryModule";
import {formModule} from "@/store/formModule";

export default createStore({
    modules: {
        alert: alertModule,
        form: formModule,
        modal: modalModule,
        query: queryModule
    }
})