<template>
  <a
    href="https://crosby.solutions"
    target="_blank"
    rel="wps-bp-kpi"
    class="logo-cs"
  >Created with 💚 by
    <object
      id="logo"
      :data="require('@/assets/cs-logo-white-one-line.svg')"
      type="image/svg+xml"
      alt="crosby solutions"
      height="16px"
      width="127px"
    />
  </a>
</template>

<style scoped>
.logo-cs {
  position: absolute;
  display: inline-block;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
  font-size: 12px;
}
#logo {
  pointer-events: none;
  vertical-align: text-bottom;
  display: inline-block;
}
a,
a:hover,
a:visited,
a:active {
  color: inherit;
  text-decoration: none;
}
</style>
