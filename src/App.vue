<template>
    <ElConfigProvider :locale="locale">
        <router-view />
    </ElConfigProvider>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ElConfigProvider } from 'element-plus';
import vi from './plugins/element-plus/locale/vi';

@Options({
    components: {
        ElConfigProvider,
    },
})
export default class App extends Vue {
    get locale(): Record<string, unknown> {
        return vi;
    }
}
</script>
