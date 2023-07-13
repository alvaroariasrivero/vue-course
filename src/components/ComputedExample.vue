<!-- Option API -->
<!-- <script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ComputedExample',
        data(){
            return{
                message : ''
            }
        },
        computed: {
            reverse(){
                return this.message.split('').reverse().join('');
            }
        }
    })

</script> -->

<!-- Composition API -->

<script>
    import { defineComponent, ref, computed } from 'vue';

    export default defineComponent({
        name: 'ComputedExample',
        setup(){
            let message = ref('');
            const reverse = computed(() => message.value.split('').reverse().join(''));
            return {message, reverse};
        }
    });
</script>

<template>
    <div>
        <input type="text" v-model="message">
        <h3>{{ message }}</h3>
        <h3>{{ reverse }}</h3>
    </div>
</template>

<style scoped>

</style>