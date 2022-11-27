import { DEFAULT_LANGUAGE } from '@/common/constants';
import { createI18n } from 'vue-i18n';
import messages from './messages';

const i18n = createI18n({
    locale: DEFAULT_LANGUAGE,
    fallbackLocale: DEFAULT_LANGUAGE,
    messages,
    globalInjection: true,
});

export default i18n;
