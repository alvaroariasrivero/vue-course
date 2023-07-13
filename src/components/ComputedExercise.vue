<script setup>
    import { ref, computed } from 'vue';

    const vat = 21;
    let subTotal = ref(0);
    const totalVat = computed(() => (vat*subTotal.value)/100);
</script>

<template>
    <div>
        <label>Subtotla</label>
        <input type="number" v-model="subTotal">
        <h3>Total impuesto a pagar: {{ totalVat }}({{ vat }}%)</h3>
    </div>
</template>

<style scoped>

</style>