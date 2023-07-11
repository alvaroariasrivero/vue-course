<script setup>
    let age = 20;
</script>

<template>
    <h1 v-if="age < 18">Eres menor de edad</h1>
    <h1 v-else>Eres mayor de edad</h1>
    <!-- <h1 v-show="age < 18">Eres menor de edad</h1>
    <h1 v-show="age >= 18">Eres mayor de edad</h1> -->
    <!-- la diferencia entre v-show y v-else, es que con v-show le aplica por estilos display: none y con vi-if no aparece en el DOM -->
    <!-- v-if mejor usarlo si el renderizado no va a cambiar de manera muy frecuente, si no v-show -->
</template>

<style scoped>

</style>