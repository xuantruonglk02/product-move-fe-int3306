<template>
    <ElConfigProvider>
        <router-view />
    </ElConfigProvider>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ElConfigProvider } from 'element-plus';

@Options({
    components: {
        ElConfigProvider,
    },
})
export default class App extends Vue {}
</script>
