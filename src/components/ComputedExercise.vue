<script setup>
    import { ref, computed } from 'vue';

    const vat = 21;
    let subTotal = ref(0);
    const totalVat = computed(() => (vat*subTotal.value)/100);
</script>

<template>
    <div>
        <label v-font-size>Subtotal</label>
        <input type="number" v-model="subTotal">
        <h3 v-custom-size="40">Total impuesto a pagar: {{ totalVat }}({{ vat }}%)</h3>
        <p v-argument-size:xxl>Probando directiva custom con argumentos</p>
        <p v-custom-font.xxl.red>Directiva custom con modificadores</p>
    </div>
</template>

<style scoped>

</style>