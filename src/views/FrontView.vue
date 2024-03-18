<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
</template>
<script>
import NavBar from '@/components/layout/NavBar.vue';
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components:{
    NavBar
  }
};
</script>
<style scoped>
</style>
