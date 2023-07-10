<script setup>
    import PostButton from './PostButton.vue';
</script>

<template>
    <div class="post-card">
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit non, ducimus culpa esse pariatur exercitationem quae nobis vero, atque adipisci placeat eveniet officiis laboriosam debitis tempore repellat iste delectus.</p>
        <PostButton />
    </div>
</template>

<style scoped>
    .post-card{
        border-radius: 25px;
        padding: 10px;
        margin: 5px;
        border: 1px solid seagreen;
    }
</style>