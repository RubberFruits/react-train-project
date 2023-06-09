import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { t } = useTranslation();

    const {
        item,
        collapsed,
    } = props;

    return (
        <AppLink
            to={item.path}
            theme={AppLinkTheme.SECONDARY}
            className={
                classNames(
                    cls.item,
                    { [cls.collapsed]: collapsed },
                    [],
                )
            }
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
};
