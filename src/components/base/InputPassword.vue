<template>
    <div class="form-group d-flex" :class="{ 'flex-column': !isHorizontal }">
        <label
            v-if="label"
            class="fw-bold text-start mb-2"
            :class="{ 'w-100': !isHorizontal, 'label mt-1': isHorizontal }"
        >
            {{ label }}
            <span v-if="required" class="mark-required">*</span></label
        >
        <div
            class="position-relative"
            :class="{ 'w-100': !isHorizontal, input: isHorizontal }"
        >
            <el-input
                v-model="inputData"
                :placeholder="placeholder"
                :type="isShowPassword ? 'text' : 'password'"
                :readonly="readonly"
                :disabled="disabled"
                :error="true"
                :size="size"
                :maxlength="maxLength"
                @blur="onBlur"
                @keyup="onKeyup"
            >
                <template #suffix>
                    <div
                        class="input-password-icon mr-3"
                        @click="isShowPassword = !isShowPassword"
                    >
                        <i v-if="isShowPassword" class="fa fa-eye fa-2" />
                        <i v-else class="fa fa-eye-slash fa-2" />
                    </div>
                </template>
            </el-input>
            <div class="validation-error text-start d-block">
                {{ error }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { INPUT_TEXT_MAX_LENGTH } from '@/common/constants';
import { Vue } from 'vue-class-component';
import { Model, Prop } from 'vue-property-decorator';

export default class BaseInputPassword extends Vue {
    @Prop({ default: '' }) readonly label!: string;
    @Prop({ default: '' }) readonly placeholder!: string;
    @Prop({ default: 'default' }) readonly size!: string;
    @Prop({ default: '' }) readonly error!: string;
    @Prop({ default: INPUT_TEXT_MAX_LENGTH }) readonly maxLength!: number;
    @Prop({ default: '' }) readonly className!: string;
    @Prop({ default: false }) readonly required!: boolean;
    @Prop({ default: false }) readonly readonly!: boolean;
    @Prop({ default: false }) readonly disabled!: boolean;
    @Prop({ default: false }) readonly isHorizontal!: boolean;

    @Model('value', { type: [String] })
    readonly inputData!: string;

    isShowPassword = false;

    onBlur() {
        this.$emit('blur');
    }

    onKeyup(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.$emit('onEnter');
        }
        this.$emit('keyup');
    }
}
</script>

<style lang="scss" scoped>
.input-password-icon {
    cursor: pointer;
}

.fa {
    font-size: 16px;
}

.mark-required {
    color: red;
}

:deep(.el-input__wrapper) {
    height: 40px;
    border-radius: 4px;
    transition: box-shadow 0.15s ease, border-color 0.15s ease;
    --el-input-hover-border-color: var(--el-border-color);
}
:deep(.el-input__wrapper.is-focus) {
    border-color: var(--el-color-primary);
    outline: 0;
    box-shadow: 0 0 0 2px var(--el-color-primary);
}

.label {
    word-break: break-word;
    width: 25%;
}

.input {
    width: 75%;
}

label {
    font-size: 15px;
}
</style>
