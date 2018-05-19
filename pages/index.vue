<template>
  <div>
    <div class="border-bottom">
      <div class="pt-5 pt-lg-3 pl-4 py-3 ">
        <h2 class="text-lg mb-0 font-weight-bold">Recent Work</h2>
      </div>
    </div>
    <section class="py-3">
      <asset-one />
    </section>
    <hr />
    <section class="py-3">
      <cook-islands />
    </section>
    <hr />
    <section class="py-3">
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


