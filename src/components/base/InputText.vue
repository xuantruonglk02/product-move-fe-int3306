<template>
    <div
        class="d-flex"
        :class="{ 'flex-column': !isHorizontal, [className]: !!className }"
    >
        <label
            v-if="label"
            class="fw-bold text-start mb-2 d-flex align-items-center"
            :class="{ 'w-100': !isHorizontal, 'label mt-1': isHorizontal }"
        >
            {{ label }}
            <span v-if="required" class="mark-required">*</span>
        </label>
        <div
            class="position-relative"
            :class="{ 'w-100': !isHorizontal, input: isHorizontal }"
        >
            <el-input
                v-model="inputData"
                :placeholder="placeholder"
                type="text"
                :readonly="readonly"
                :disabled="disabled"
                :error="true"
                :size="size"
                :maxlength="maxLength"
                :clearable="clearable"
                @blur="onBlur"
                @keyup="onKeyup"
                @clear="onClear"
            />
            <div v-if="!isHorizontal" class="validation-error text-start mb-3">
                {{ error }}&nbsp;
            </div>
        </div>
    </div>
    <div class="d-flex mb-3" v-if="isHorizontal">
        <div class="w-25"></div>
        <div class="w-75 validation-error text-start">{{ error }}&nbsp;</div>
    </div>
</template>

<script lang="ts">
import { INPUT_TEXT_MAX_LENGTH } from '@/common/constants';
import { Vue } from 'vue-class-component';
import { Model, Prop } from 'vue-property-decorator';

export default class BaseInputText extends Vue {
    @Prop({ default: '' }) readonly label!: string;
    @Prop({ default: '' }) readonly placeholder!: string;
    @Prop({ default: 'default' }) readonly size!: string;
    @Prop({ default: '' }) readonly error!: string;
    @Prop({ default: INPUT_TEXT_MAX_LENGTH }) readonly maxLength!: number;
    @Prop({ default: '' }) readonly className!: string;
    @Prop({ default: false }) readonly required!: boolean;
    @Prop({ default: false }) readonly readonly!: boolean;
    @Prop({ default: false }) readonly disabled!: boolean;
    @Prop({ default: false }) readonly clearable!: boolean;
    @Prop({ default: false }) readonly isHorizontal!: boolean;

    @Model('value', { type: [String] })
    readonly inputData!: string;

    onBlur() {
        this.$emit('blur');
    }

    onKeyup(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.$emit('onEnter');
        }
        this.$emit('keyup');
    }

    onClear() {
        this.$emit('clear');
    }
}
</script>

<style lang="scss" scoped>
:deep(.el-input__inner::-webkit-outer-spin-button),
:deep(.el-input__inner::-webkit-inner-spin-button) {
    -webkit-appearance: none;
    margin: 0;
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

.mark-required {
    color: red;
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

.validation-error {
    line-height: 1.3;
}
</style>
