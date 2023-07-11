<script>
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
        name: 'ClassBind',
        setup(){
            let hasError = ref(false);
            const setError = () => {
                if(hasError.value === false){
                    hasError.value = true;
                }else{
                    hasError.value = false;
                }
            };
            return {hasError, setError};
        }
    })
</script>

<template>
    <p v-bind:class="{
        'danger' : hasError
        // 'clase' : condicion
    }">El mensaje se ha enviado correctamente</p>
    <!-- los dos puntos previos a un atributo son el equivalente a v-bind -->
    <!-- <p :class="{'danger' : hasError}">El mensaje se ha enviado correctamente</p> -->
    <button v-on:click="setError">SetError</button>
</template>


<style scoped>
    .danger{
        color: red;
    }
</style>