<script>
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
</script>

<template>
    <h3>{{ counter }}</h3>
    <button @click="lessCounter">Decrease</button>
</template>