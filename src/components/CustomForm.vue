<template>
  <div className="form">
    <form-field
    :title="fieldTitle.title"
    >
      <custom-input :type="fieldTitle.type" :model-value="fieldTitle.value" @update:model-value="setTitle"/>
    </form-field>
    <form-field
        :title="fieldDescription.title"
    >
      <custom-input :type="fieldDescription.type" :model-value="fieldDescription.value" @update:model-value="setDescription"/>
    </form-field>
  </div>
</template>

<script>
import FormField from "@/components/FormField.vue";
import {mapMutations, mapState} from "vuex";

export default {
  components: {FormField},
  computed: {
    ...mapState({
      fieldTitle: state => state.form.fieldTitle,
      fieldDescription: state => state.form.fieldDescription
    })
  },
  methods: {
    ...mapMutations({
      setTitle: 'form/setTitle',
      setDescription: 'form/setDescription',
    })
  }
}
</script>
