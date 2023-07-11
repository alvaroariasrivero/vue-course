<!-- <script>
    // Composition API
    // Si no pongo setup en la etiqueta html
import { defineComponent, ref } from 'vue';
    export default defineComponent({
        name: 'CounterComposition',
        setup(){
            let counter = ref(0);
            const lessCounter = () => {
                counter.value--
            }
            return {counter, lessCounter}
        }
    });
</script> -->

<script setup>
// Si pongo setup en la etiqueta html
import { ref } from 'vue';
let counter = ref(0);
const lessCounter = () => {
    counter.value--
}
</script>

<template>
    <h3>{{ counter }}</h3>
    <button @click="lessCounter">Decrease</button>
</template>