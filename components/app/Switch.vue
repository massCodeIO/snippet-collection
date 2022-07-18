<template>
  <div class="app-switch">
    <div v-if="labelOff" class="label off">
      {{ labelOff }}
    </div>
    <label class="switch">
      <input
        type="checkbox"
        :value="value"
        :checked="value"
        @change="onChange"
      >
      <span class="slider" />
    </label>
    <div v-if="labelOn" class="label on">
      {{ labelOn }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSwitch',

  props: {
    value: {
      type: Boolean,
      default: () => false
    },
    labelOn: {
      type: String,
      default: () => ''
    },
    labelOff: {
      type: String,
      default: () => ''
    }
  },

  data () {
    return {}
  },

  methods: {
    onChange (e) {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-switch {
  display: flex;
  align-items: center;
}
.label {
  &.off {
    padding-right: var(--spacing-xs);
  }
  &.on {
    padding-left: var(--spacing-xs);
  }
}
.switch input {
  display: none;
}

.switch {
  width: 40px;
  height: 20px;
  position: relative;
  display: block;
}

.slider {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 30px;
  box-shadow: 0 0 0 2px var(--color-contrast-low-alt),
    0 0 4px var(--color-contrast-low-alt);
  cursor: pointer;
  border: 4px solid transparent;
  overflow: hidden;
  transition: 0.2s;
}

.slider:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background-color: var(--color-contrast-low-alt);
  border-radius: 30px;
  transform: translateX(-20px);
  transition: 0.2s;
}

input:checked + .slider:before {
  transform: translateX(20px);
  background-color: var(--color-primary);
}

input:checked + .slider {
  box-shadow: 0 0 0 2px var(--color-primary);
}
</style>
