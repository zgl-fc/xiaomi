<template>
  <div class="detail">
    <product-param :title="product.name">
      <template v-slot:buy>
        <button
          class="btn"
          @click="buy"
        >立即购买</button>
      </template>
    </product-param>
  </div>

</template>


<script>
import ProductParam from "../components/ProductParam";
export default {


}
</script>


<style lang="scss" scoped>


</style>