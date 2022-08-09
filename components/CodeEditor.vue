<template>
  <div class="wrapper">
    <div ref="editor" class="code-editor" />
    <div class="footer">
      <div class="copy" @click="onCopy">
        Copy
      </div>
      <div class="lang">
        {{ mode }}
      </div>
    </div>
  </div>
</template>

<script>
import { basicSetup, EditorView } from 'codemirror'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { oneDark } from '@codemirror/theme-one-dark'
import { autocompletion } from '@codemirror/autocomplete'
import { abbreviationTracker } from '@emmetio/codemirror6-plugin'

export default {
  name: 'CodeEditor',

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: String,
      default: () => ''
    },
    mode: {
      type: String,
      default: () => 'html' // css
    }
  },

  data () {
    return {
      editor: null
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.editor = new EditorView({
        doc: this.value,
        parent: this.$refs.editor,
        extensions: [
          this.mode === 'html' ? html() : css(),
          oneDark,
          basicSetup,
          autocompletion(),
          abbreviationTracker(),
          EditorView.updateListener.of((e) => {
            this.$emit('change', e.state.doc.toString())
          })
        ]
      })
    },
    async onCopy () {
      await navigator.clipboard.writeText(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.code-editor {
  width: 100%;
  height: 300px;
  overflow: auto;
  border-radius: 10px;
}
:deep(.cm-editor) {
  min-height: 300px;
}
.wrapper {
  position: relative;
  display: grid;
}
.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
}
.lang {
  background-color: var(--color-primary);
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 2px var(--spacing-xs);
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  z-index: 10;
}
.copy {
  background-color: var(--color-success);
  padding: 2px var(--spacing-xs);
  color: #fff;
  font-size: 12px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: var(--color-success-hover);
    &::after {
      background-color: var(--color-success-hover);
    }
  }
  &::after {
    content: '';
    position: absolute;
    background-color: var(--color-success);
    height: 100%;
    width: 30px;
    top: 0;
    transition: all 0.2s;
  }
}
</style>
