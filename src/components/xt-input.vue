<template>
  <div class="xt-inpt">
    <template v-if="type === 'text'">
      <input
        type="text" :placeholder="placeholder" :value="value" :class="{'error': error}" @blur="onBlur($event.target.value)" @focus="onFocus($event.target.value)" @input="onInput($event.target.value)">
    </template>
    <template v-else-if="type === 'textarea'">
      <textarea name="textarea" id="textarea" cols="60" rows="20" :placeholder="placeholder" :value="value"
                :class="{'error': error}"></textarea>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'xt-input',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      required: {
        type: Boolean,
        default: false
      },
      rule: String,
      value: String,
      placeholder: String
    },
    data() {
      return {}
    },
    methods: {
      onBlur(value) {
        this.$emit('blur', value)
      },
      onFocus(value) {
        this.$emit('focus', value)
      },
      onInput(value) {
        this.$emit('input', value)
      }
    }
  }
</script>
