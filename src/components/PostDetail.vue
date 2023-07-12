<script setup>

    const props = defineProps({
        title : {
            type : String,
            required : true
        },
        content : {
            type : String,
            required : false,
            default : 'Este post no tiene contenido'
        }
    });

</script>

<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
    </div>
</template>

<style scoped>
    .post{
        width: 300px;
        height: 250px;
        border-radius: 25px;
        background-color: antiquewhite;
        margin: 10px;
        padding: 10px;
    }
</style>