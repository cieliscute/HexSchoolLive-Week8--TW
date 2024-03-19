<template>
  <button type="button" class="navbar-toggle" :class="{ 'collapsed': collapsed }">
    <span class="icon-bar top-bar"></span>
    <span class="icon-bar middle-bar"></span>
    <span class="icon-bar bottom-bar"></span>
  </button>
</template>
<script>
export default {
  props: ['collapsed'],
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style scoped lang="scss">
.navbar-toggle {
  width: 44px;
  height: 44px;
  padding:5px 3px;
  background: green;
  position: relative;

  &.collapsed {
    .top-bar {
      top: 10px;
      /* transform: translateY(6px) rotate(45deg); */
    }
    .middle-bar {
      opacity: 0;
    }
    .bottom-bar {
      top: 0;
      transform: rotate(0);
    }
  }
}

.icon-bar {
  position: absolute;
  left: 0px;
  right: 0px;
  height: 5px;
  transition: all .3s;
  background: #fff !important;
  &.top-bar {
    top: 0px
      /* transform: translateY(6px) rotate(45deg); */
  }
  &.middle-bar {
    top: 50%;
    transform: translate(0px, -50%);
    /* opacity: 0; */
  }
  &.bottom-bar {
    /* transform: translateY(-6px) rotate(-45deg); */
    bottom: 0px;
  }
}

.is-active {
  background: transparent;

  &:before {
    top: 0;
    transform: rotate(45deg);
  }

  &:after {
    top: 0;
    transform: rotate(-45deg);
  }
}
</style>
