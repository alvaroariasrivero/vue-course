<script setup>
    import { ref } from 'vue';
    let bg = ref('red');
    let letterColor = ref('green');
    const backgroundColor = () =>{
        if(bg.value === 'red'){
            bg.value = 'blue';
            letterColor.value = 'yellow';
        }else{
            bg.value = 'red';
            letterColor.value = 'green';
        }
    };
</script>

<template>
    <p v-bind:style="{
        backgroundColor : bg,
        color : letterColor
    }">El mensaje se ha enviado correctamente</p>
    <button v-on:click="backgroundColor">Click</button>
</template>


<style scoped>

</style>