import i18n from '@/plugins/vue-i18n';
import { isPlainObject, mapKeys, trim } from 'lodash';

export function translateYupErrorHelper(
    yupError:
        | {
              i18nKey: string;
              params?: Record<string, string>;
          }
        | string,
): string {
    if (typeof yupError === 'string') {
        return i18n.global.t(yupError);
    }
    if (!yupError?.i18nKey) return '';
    return i18n.global.t(yupError?.i18nKey, { ...yupError?.params });
}

export function trimObject(body: any): void {
    const trimValue = (item: any) => {
        mapKeys(item, (value, key) => {
            if (typeof value === 'string') {
                item[key] = value.trim();
            } else if (Array.isArray(value)) {
                value.forEach((subValue, index) => {
                    if (typeof subValue === 'string' && !trim(subValue as string)) {
                        value.splice(index, 1);
                    } else if (isPlainObject(subValue)) {
                        trimValue(subValue);
                    }
                });
            } else if (isPlainObject(value)) {
                trimValue(value);
            }
        });
    };

    trimValue(body);
}
