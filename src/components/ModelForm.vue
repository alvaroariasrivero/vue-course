<script setup>
    import { ref } from 'vue';
    let inputText = ref('');
    let agree = ref(true);
    let country = ref('Spain')
</script>

<template>
    <form>
        <input type="text" name="input-text" v-model="inputText">
        <input type="checkbox" v-model="agree"> Acepto términos y condiciones
        <select v-model="country">
            <option value="Spain">Spain</option>
            <option value="France">France</option>
            <option value="Italy">Italy</option>
            <option value="UK">UK</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
</template>

<style scoped>

</style>