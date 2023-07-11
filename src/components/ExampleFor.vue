<script setup>
    import { ref } from 'vue';
    let countries = ref([
        { 
            code: 'es',
            name: 'Spain'
        },
        { 
            code: 'uk',
            name: 'United Kingdom'
        },
        { 
            code: 'it',
            name: 'Italy'
        },
        { 
            code: 'pt',
            name: 'Portugal'
        }
    ])
</script>

<template>
    <ul>
        <!-- Ponemos el index si no hay clave única para cada elemento, en este caso sí son únicos -->
        <!-- <li v-for="(country, index) in countries" v-bind:key="index">{{ country }}</li> -->
        <li v-for="country in countries" v-bind:key="country.code">{{ country.name }}</li>
    </ul>
</template>

<style  scoped>
</style>