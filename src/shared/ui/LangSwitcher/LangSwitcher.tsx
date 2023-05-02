import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButtonTheme, Button } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface LangSwitcherProps {
  className?: string;
  short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then();
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={AppButtonTheme.CLEAR}
            onClick={toggleLang}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
