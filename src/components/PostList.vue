<script setup>
    import PostDetail from './PostDetail.vue';
    let info = [
        {
            title: 'Texto 1',
            content: 'Ramalamadindon 1'
        }, 
        {
            title: 'Texto 2',
            content: 'Ramalamadindon 2'
        }, 
        {
            title: 'Texto 3',
            content: 'Ramalamadindon 3'
        }, 
        {
            title: 'Texto 4',
            content: 'Ramalamadindon 4'
        }, 
        {
            title: 'Texto 5',
            content: 'Ramalamadindon 5'
        }
    ];

    const showAlert = (msg) => {
        alert(msg);
    }; 
</script>

<template>
    <div class="container">
        <PostDetail v-for="elm in info" :key="elm.title" :title="elm.title" :content="elm.content" @sayHi="showAlert" />
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-direction: row;
    }
</style>