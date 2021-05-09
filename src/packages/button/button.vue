<template>
  <button class="c-button" :class="{[`c-button-${type}`]: true}" type="button">
    <slot></slot>
  </button>
</template>

<script>
import { oneOf } from '../../utils/assist';

export default {
  name: 'Button',
  props: {
    type: {
      validator (value) {
          return oneOf(value, ['default', 'primary', 'info', 'success', 'warning', 'error']);
      },
      type: String,
      default: 'default'
    }
  }
}
</script>
