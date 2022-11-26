<template>
    <div class="main-wrapper">
        <el-container>
            <el-aside><Sidebar /></el-aside>
            <el-container>
                <el-header></el-header>
                <el-main
                    ><!-- Page Wrapper -->
                    <div
                        class="page-wrapper"
                        :style="{
                            overflowX: 'hidden',
                        }"
                    >
                        <!-- Page Content -->
                        <router-view v-slot="{ Component }">
                            <component :is="Component" />
                        </router-view>
                        <!-- /Page Content -->
                    </div>
                    <!-- /Page Wrapper --></el-main
                >
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class MainLayout extends Vue {}
</script>

<style lang="scss" scoped></style>
