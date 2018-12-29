<template>
  <ad-form>
    <template slot-scope="sdf">
      <slot></slot>
    </template>
  </ad-form>
</template>

<script>
  import adForm from './adForm'
    export default {
        name: "adDanlog",
      data () {
        return {
          form: this.$form.createForm(this)
        }
      },
      components:{
        adForm
      }
    }
</script>

<style scoped>

</style>
