<template>
  <FixedTopNavbarComponent></FixedTopNavbarComponent>
  <RouterView></RouterView>
</template>
<script>
import FixedTopNavbarComponent from '@/components/layout/FixedTopNavbarComponent.vue';
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    FixedTopNavbarComponent
  }
};
</script>
<style scoped></style>
