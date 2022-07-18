<template>
  <div
    class="app-button"
    :class="{ 'is-primary': type === 'primary' }"
    v-on="$listeners"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    type: String,
    default: () => ''
  },

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.app-button {
  display: flex;
  align-items: center;
  border-radius: 3px;
  transition: all 0.2s;
  padding: 0 4px;
  line-height: 24px;
  cursor: pointer;
  font-size: 14px;
  &.is-primary {
    background-color: var(--color-primary);
    padding: 4px 8px;
    color: #fff;
    :deep(svg) {
      fill: #fff;
    }

    &:hover {
      color: #fff;
      background-color: var(--color-primary-hover);

      :deep(svg) {
        fill: #fff;
      }
    }
  }
  &:hover {
    color: var(--color-contrast-low-alt);
    fill: var(--color-contrast-low-alt);
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
}
</style>
