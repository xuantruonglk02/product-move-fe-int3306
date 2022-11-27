<template>
    <div class="container">
        <div class="content">
            <h1 class="form-title">{{ $t('auth.titles.login') }}</h1>
            <div class="form-container">
                <div class="input-container">
                    <BaseInputText
                        v-model:value="form.email"
                        :label="$t('auth.labels.email')"
                        :placeholder="$t('auth.placeholders.email')"
                        :required="true"
                        :error="translateYupError(form.errors.email as string)"
                    />
                    <BaseInputPassword
                        v-model:value="form.password"
                        :label="$t('auth.labels.password')"
                        :placeholder="$t('auth.placeholders.password')"
                        :required="true"
                        :error="translateYupError(form.errors.password as string)"
                    />
                </div>
                <div class="d-flex flex-column">
                    <el-checkbox
                        v-model="rememberLogin"
                        class="remember-login"
                        :label="$t('auth.labels.rememberLogin')"
                        size="large"
                    />
                    <el-button class="login-button" @click="handleSubmit">{{
                        $t('auth.buttons.login')
                    }}</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { mixins, Options, setup } from 'vue-class-component';
import BaseInputText from '@/components/base/InputText.vue';
import { setupLoginForm } from '../compositions/loginForm';
import BaseInputPassword from '@/components/base/InputPassword.vue';
import { UtilMixins } from '@/mixins/utilMixins';

@Options({ components: { BaseInputText, BaseInputPassword } })
export default class LoginPage extends mixins(UtilMixins) {
    form = setup(() => setupLoginForm());

    rememberLogin = false;

    async handleSubmit() {
        await this.form.onSubmit();
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    padding: 50px 100px;
    max-width: 720px;
    background-color: $color-white;
    border: 1px solid $color-border-base;
    border-radius: 5px;
    box-shadow: none;
}

.content {
    max-width: 560px;
    text-align: center;
}

.form-title {
    font-size: 36px;
    line-height: 48px;
    font-weight: 700;
}

.remember-login {
    align-self: flex-start;
    font-size: 13px;
    font-weight: 600;
    line-height: 24px;
}

.login-button {
    margin-top: 8px;
    padding: 12px 18px;
    width: 100%;
    height: auto;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: $color-white;
    background-color: $color-blue-01;
}
</style>
