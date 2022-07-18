<template>
  <header>
    <div class="container">
      <div class="header">
        <div class="left">
          <NuxtLink to="/">
            <div class="logo">
              <img src="~/assets/img/logo.png" alt="">
              massCode
            </div>
          </NuxtLink>
        </div>
        <div class="right">
          <div class="links">
            <a
              href="https://github.com/massCodeIO/snippet-collection#contribute"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppButton type="primary" class="add-new">
                <UniconsPlus /> Contribute
              </AppButton>
            </a>
            <a href="http://masscode.io" rel="noopener noreferrer">
              <AppButton>Get massCode</AppButton>
            </a>
            <div class="socials">
              <a
                href="https://github.com/massCodeIO/snippet-collection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppButton>
                  <UniconsGithub />
                </AppButton>
              </a>
              <a
                href="https://twitter.com/anton_reshetov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppButton>
                  <UniconsTwitter />
                </AppButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import UniconsPlus from '~icons/unicons/plus'
import UniconsTwitter from '~icons/unicons/twitter'
import UniconsGithub from '~icons/unicons/github'

export default {
  name: 'TheHeader',

  components: {
    UniconsPlus,
    UniconsTwitter,
    UniconsGithub
  },

  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  background: #fff;
  width: 100%;
  border-bottom: 1px solid var(--color-border);
  z-index: 1010;
  a {
    text-decoration: none;
    color: inherit;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--header-height);
  }
  .logo {
    display: flex;
    align-items: center;
    font-size: 14px;
    img {
      width: 36px;
      margin-right: var(--spacing-xs);
    }
  }
  .links {
    color: var(--color-contrast-medium);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    a {
      font-size: 0;
    }
    svg {
      transition: all 0.2s;
      fill: var(--color-contrast-medium);
      &:hover {
        fill: var(--color-contrast-high);
      }
    }
    .socials {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
    }
    .add-new {
      padding-left: 4px;
      :deep(svg) {
        width: 18px;
      }
    }
  }
}
</style>
