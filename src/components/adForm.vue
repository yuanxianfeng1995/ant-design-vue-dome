<template>
  <a-form @submit="handleSubmit" :form="form" class="form" style="width: 500px;margin: 0 auto">
    <slot></slot>
  </a-form>
</template>

<script>
  export default {
    name: 'addForm',
    data () {
      return {
        form: this.$form.createForm(this)
      }
    },
    methods: {
      handleSubmit (e) {
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log(values)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
