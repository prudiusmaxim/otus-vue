<template>
    <div class="product">
        <h3> {{ props.product.id }}. {{ props.product.title }}</h3>
        <p>Цена: ${{ props.product.price }}</p>
    </div>
</template>

<script setup lang="ts">
import { Product } from './types/Product';

const props = defineProps<{
    product: Product
}>();

</script>

<style lang="css" scoped>
.product {
    background: white;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);    
    border: 1px solid #eaeaea;
    margin: 2px;
}
</style>
