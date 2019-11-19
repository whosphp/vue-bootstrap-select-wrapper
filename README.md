# vue-bootstrap-select-wrapper

> 使用 vue 对 bootstrap-select 的简单包装

## 安装
依赖 [jQuery](https://github.com/jquery/jquery), [bootstrap](https://github.com/twbs/bootstrap) 和 [bootstrap-select](https://github.com/snapappointments/bootstrap-select)

``` bash
$ npm install vue-bootstrap-select-wrapper -S
```
或者
```bash
$ yarn add vue-bootstrap-select-wrapper
```

## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
// 先引入 jquery bootstrap 和 bootstrap-select
window.$ = window.jQuery = require('jquery')
require('bootstrap')
require('bootstrap-select')

// 然后引入组件
import BootstrapSelect from 'vue-bootstrap-select-wrapper'
Vue.use(BootstrapSelect)
```

在项目中使用 vue-bootstrap-select-wrapper

```js
<template>
  Single Select:
  <bootstrap-select :options="options" v-model="value"></bootstrap-select>
  Multi Select:
  <bootstrap-select :options="options" v-model="value1" multiple></bootstrap-select>
</template>
<script>
  export default {
    data () {
      return {
        options: [
            1, 2, 3
          ],
          value: null,
          value1: []
        }
    }
  }
</script>
```
