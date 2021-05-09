---
title: Button
---

# 按钮
<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<template>
  <c-button>{{button}}</c-button>
  <c-button type="primary">主色</c-button>
  <c-button type="success">成功</c-button>
  <c-button type="info">提示</c-button>
</template>


### 使用
```html
<c-button>默认</c-button>
<c-button type="primary">主色</c-button>
<c-button type="success">成功</c-button>
<c-button type="info">提示</c-button>
```