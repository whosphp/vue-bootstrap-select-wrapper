# vue-bootstrap-select

> 使用 vue 对 bootstrap-select 的简单包装

## 安装

``` bash
$ npm install vue-bootstrap-select -S
```
或者
```bash
$ yarn add vue-bootstrap-select
```

## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
import BootstrapSelect from 'vue-bootstrap-select'
Vue.use(BootstrapSelect)
```

在项目中使用 vue-bootstrap-select

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
