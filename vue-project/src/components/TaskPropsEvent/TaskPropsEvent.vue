<template>
    <h1>
        Задача: Компоненты props и события
    </h1>

    <h2>Загружено товаров: {{ products.length }}</h2>
    <div v-for="product in products" :key="product.id">
        <ProductComponent :product="product" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Product } from './types/Product'
import ProductComponent from './ProductComponent.vue';

const products = ref<Product[]>([]);

const fetchProducts = async () => {

    /*const response = {
        ok: true,
        json: async () => productsMock
     } as Response; */

    const response = await fetch('https://fakestoreapi.com/products');

    try {
        if (!response.ok) {
            throw new Error(`Ошибка выполнния запроса`);
        }

        products.value = await response.json();
    }
    catch (error) {
        console.error('Ошибка загрузки:', error);
    }

};

onMounted(() => {
    fetchProducts();
});



</script>

<style scoped>
.product {
    border: 1px solid #ddd;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
}
</style>