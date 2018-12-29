<template>
  <ad-danlog>
    <template slot-scope="{slotProps}">
      <a-row class="form-row" :gutter="16">
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-item
            label="任务名">
            <a-input placeholder="请输入任务名称"
                     v-decorator="[ 'task.name', {rules: [{ required: true, message: '请输入任务名称', whitespace: true}]} ]"/>
          </a-form-item>
        </a-col>
        <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
          <a-form-item
            label="任务描述">
            <a-input placeholder="请输入任务描述"
                     v-decorator="[ 'task.description', {rules: [{ required: true, message: '请输入任务描述', whitespace: true}]} ]"/>
          </a-form-item>
        </a-col>
        <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
          <a-form-item
            label="执行人">
            <a-select
              placeholder="请选择执行人"
              v-decorator="[
              'task.executor',
              {rules: [{ required: true, message: '请选择执行人'}]}
            ]">
              <a-select-option value="黄丽丽">黄丽丽</a-select-option>
              <a-select-option value="李大刀">李大刀</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row class="form-row" :gutter="16">
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-item
            label="责任人">
            <a-select
              placeholder="请选择责任人"
              v-decorator="[
              'task.manager',
              {rules: [{ required: true, message: '请选择责任人'}]}
            ]">
              <a-select-option value="王伟">王伟</a-select-option>
              <a-select-option value="李红军">李红军</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
          <a-form-item
            label="提醒时间">
            <a-time-picker
              style="width: 100%"
              v-decorator="[
              'task.time',
              {rules: [{ required: true, message: '请选择提醒时间'}]}
            ]"/>
          </a-form-item>
        </a-col>
        <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
          <a-form-item
            label="任务类型">
            <a-select
              placeholder="请选择任务类型"
              v-decorator="[ 'task.type', {rules: [{ required: true, message: '请选择任务类型'}]} ]">
              <a-select-option value="定时执行">定时执行</a-select-option>
              <a-select-option value="周期执行">周期执行</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-form-item>
        <a-button htmlType="submit">Submit</a-button>
      </a-form-item>
    </template>
  </ad-danlog>
</template>

<script>
  import adForm from './adForm'
  import AdDanlog from "./adDanlog";

  export default {
    beforeCreate () {
      this.form = this.$form.createForm(this)
    },
    data () {
      return {
        entity: {},
        name: 1,
        currency: 'rmb2'
      }
    },
    components: {
      AdDanlog,
      adForm
    },
    methods: {}
  }
</script>
<style>
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }

  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }

  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
</style>
