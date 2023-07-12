<script setup>

    import { ref } from 'vue';

    let message = ref('');

    const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        default: 'Este post no tiene contenido',
    },
    });

    const emit = defineEmits(['sayHi']);

    const handleClick = () => {
        emit('sayHi', message.value);
    };

</script>

<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <input type="text" v-model="message">
        <button @click="handleClick">Say Hi</button>
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