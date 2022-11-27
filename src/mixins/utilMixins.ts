import { translateYupErrorHelper } from '@/common/helpers';
import { Vue } from 'vue-class-component';

export class UtilMixins extends Vue {
    translateYupError(
        yupError:
            | {
                  i18nKey: string;
                  params?: Record<string, string>;
              }
            | string,
    ): string {
        return translateYupErrorHelper(yupError);
    }
}
