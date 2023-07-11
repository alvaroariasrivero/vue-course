<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ClassBind',
        setup(){
            let hasError = false;
            return {hasError};
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
</template>


<style scoped>
    .danger{
        color: red;
    }
</style>