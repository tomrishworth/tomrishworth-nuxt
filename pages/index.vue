<template>
  <div>
    <div class="container-lg px-2 px-sm-5 py-3 border-bottom bg-light">
      <h2 class="text-lg mb-0 font-weight-bold">Recent Work</h2>
    </div>
    <section class="container-lg px-2 px-sm-5 py-3">
      <asset-one />
    </section>
    <hr />
    <section class="container-lg px-2 px-sm-5 py-3">
      <cook-islands />
    </section>
    <hr />
    <section class="container-lg px-2 px-sm-5 py-3">
      <link-agm />
    </section>
  </div>
</template>

<script>
import AssetOne from "@/components/AssetOne.vue"
import CookIslands from "@/components/CookIslands.vue"
import LinkAgm from "@/components/LinkAgm.vue"

export default {
  components: {
    AssetOne,
    CookIslands,
    LinkAgm
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>


