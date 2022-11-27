import { INPUT_TEXT_MAX_LENGTH, PASSWORD_MIN_LENGTH, Regex } from '@/common/constants';
import yup from '@/plugins/yup';
import { ElLoading } from 'element-plus';
import { useField, useForm } from 'vee-validate';
import { authService } from '../services/auth.service';

const loginFormSchema = yup.object({
    email: yup.string().trim().max(INPUT_TEXT_MAX_LENGTH).matches(Regex.EMAIL).required(),
    password: yup
        .string()
        .trim()
        .min(PASSWORD_MIN_LENGTH)
        .max(INPUT_TEXT_MAX_LENGTH)
        .matches(Regex.PASSWORD)
        .required(),
});

export const setupLoginForm = () => {
    const initValues = {
        email: undefined,
        password: undefined,
    };

    const { handleSubmit, errors } = useForm({
        initialValues: initValues,
        validationSchema: loginFormSchema,
    });

    const onSubmit = handleSubmit(async (values) => {
        const loading = ElLoading.service({});
        const response = await authService.login({
            email: values.email || '',
            password: values.password || '',
        });
        loading.close();

        console.log(response);
    });

    const { value: email } = useField('email');
    const { value: password } = useField('password');

    return {
        onSubmit,
        errors,
        email,
        password,
    };
};
