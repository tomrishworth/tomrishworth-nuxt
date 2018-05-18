<template>
  <div>
    <Sidebar />
    <div class="main-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>


<style lang="scss" scoped>

.main-content {
  @include media-breakpoint-up(sm) {
    margin-left: 330px;
  }
}

</style>
