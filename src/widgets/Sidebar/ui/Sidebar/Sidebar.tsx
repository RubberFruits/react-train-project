import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { AppButtonTheme, Button, ButtonSize } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(
    ({ className }: SidebarProps) => {
        const [collapsed, setCollapsed] = useState(false);
        const { t } = useTranslation();

        const onToggle = () => {
            setCollapsed((prev) => !prev);
        };

        const itemsList = useMemo(() => SidebarItemsList.map((item) => (
            <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
            />
        )), [collapsed]);

        return (
            <div
                data-testid="sidebar"
                className={
                    classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )
                }
            >
                <Button
                    data-testid="sidebar-toggle"
                    type="button"
                    onClick={onToggle}
                    className={cls.collapsedBtn}
                    square
                    size={ButtonSize.L}
                    theme={AppButtonTheme.BACKGROUND_INVERTED}
                >
                    {collapsed ? '>' : '<'}
                </Button>
                <div className={cls.items}>
                    { itemsList }
                </div>
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher className={cls.lang} short={collapsed} />
                </div>
            </div>
        );
    },
);
