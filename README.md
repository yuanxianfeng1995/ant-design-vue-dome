# my-project

这个dome是精简版

完整版想在form提交事件中根据传递的参数，判断执行那个方法


   if (this.options.operation === 'add') {
              console.log('add')
              this.$http.post(this.options.context.url, this.entity, {params: this.options.queryString}).then((response) => {
                this._submitted(response.body).then(() => resolve())
              })
            } 
           
           else if (this.options.operation === 'edit') {
              let param = this.options.context.param ? '/' + this.options.context.param : ''
              this.$http.put(this.options.context.url + param + '/' + this.entity.f_id, this.entity, {params: this.options.queryString}).then((response) => {
                this._submitted(response.body).then(() => resolve())
              })
            } 
            
            else {
              if (this.options.method === 'POST') {
                this.$http.post(this.options.context.url + '/' + this.entity.f_id + '/' + this.options.operation, this.entity, {params: this.options.queryString}).then((response) => {
                  this._submitted(response.body).then(() => resolve())
                })
              } 
              
              else {
                this.$http.put(this.options.context.url + '/' + this.entity.f_id + '/' + this.options.operation, this.entity, {params: this.options.queryString}).then((response) => {
                  this._submitted(response.body).then(() => resolve())
                })
              }
            }
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
