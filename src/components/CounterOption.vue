<script>
    // Optional API
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'CounterOption',
        data() {
            let counter = 0;
            return {counter}
        },
        methods: {
            addCounter(){
                this.counter++
            }
        }
    });
</script>

<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter" >Increase</button>
</template>

<style scoped>

</style>