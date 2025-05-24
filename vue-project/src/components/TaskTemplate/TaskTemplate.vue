<script setup lang="ts">
import type { TemplateArray } from './types/template-array'
import { Ref, ref } from 'vue'

const list: TemplateArray = [
    { id: 1, name: 'Name_1', age: 15 },
    { id: 2, name: 'Name_2', age: 17 },
    { id: 3, name: 'Name_3', age: 12 },
];

const showAge: Ref<boolean> = ref(true);
const isHovered: Ref<boolean> = ref(false);
const listShow: Ref<boolean> = ref(true);

const clickAgeButton = () => {
    showAge.value = !showAge.value;
}

const clickListShowButton = () => {
    listShow.value = !listShow.value
}

</script>

<template>
    <div class="task-template">
        <div>
            <h1>Задача по теме шаблоны</h1>
        </div>
        <div v-if="listShow" @mouseenter="isHovered = true" @mouseleave="isHovered = false"
            :class="isHovered ? 'isHover' : 'nonHover'">
            <p>1) Вывести список пользователей (например, имена) с помощью v-for.</p>
            <p v-for="(item) in list" :key="item.id">
                <span>Имя {{ item.name }}</span>
                <span v-if="showAge"> , возраст {{ item.age }}</span>
            </p>
        </div>
        <div>
            <p>2) Реализовать переключение отображения дополнительной информации (например, возраста) через v-if или
                v-show</p>
            <button @click="clickAgeButton">
                <span v-if="showAge">Скрыть возраст</span>
                <span v-else>Оторазить возраст</span>
            </button>
        </div>
        <div>
            <p>4) Добавить кнопку, которая при клике (v-on) скрывает или показывает весь список</p>
            <button v-on:click="clickListShowButton">
                <span v-if="listShow">Скрыть список</span>
                <span v-else>Оторазить список</span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.isHover {
    color: red;
    cursor: pointer;
}

.nonHover {
    color: black
}
</style>