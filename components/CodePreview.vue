<template>
  <div
    class="code-preview"
    :class="{
      'is-dark': isDark,
      'is-gray': isGray,
    }"
  >
    <iframe :srcDoc="srcDoc" frameborder="0" height="100%" width="100%" />
  </div>
</template>

<script>
export default {
  name: 'CodePreview',

  props: {
    html: {
      type: String,
      default: () => ''
    },
    css: {
      type: String,
      default: () => ''
    },
    isGray: {
      type: Boolean,
      default: false
    },
    isDark: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      srcDoc: ''
    }
  },

  created () {
    this.$watch(
      (vm) => [vm.html, vm.css].join(),
      (v) => {
        this.setSrcDoc()
      },
      { immediate: true }
    )
  },

  methods: {
    setSrcDoc () {
      const htmlDefault =
        '<div>Add fragments with HTML & CSS languages to view result.</div>'

      const cssDefault = `
        body {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
        }`

      const importCss = this.css.match(/^@import.*/gm)

      this.srcDoc = `
        <html>
          <body>${this.html || htmlDefault}<body>
          <style>${importCss ? importCss.join() : ''}${
        cssDefault + this.css
      }<style>
        </html>`
    }
  }
}
</script>

<style lang="scss" scoped>
.code-preview {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  &.is-dark {
    background-color: #282c34 !important;
  }
  &.is-gray {
    background-color: #f4f4f4;
  }
}
</style>
