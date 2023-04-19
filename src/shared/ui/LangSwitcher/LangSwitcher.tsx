import { classNames } from "shared/lib/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { AppButtonTheme, Button } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru").then();
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={AppButtonTheme.CLEAR}
      onClick={toggleLang}
    >
      {t("Язык")}
    </Button>
  );
};
