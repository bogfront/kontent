import React, {FunctionComponent, useState} from 'react';
import type { MenuProps } from 'antd';
import styles from './Layout.module.css';

import {Layout, LayoutProps, Menu} from 'antd';
const { Content, Sider } = Layout;

import Chart from '@/icons/chart.svg';
import Headphones from '@/icons/headphones.svg';
import Music from '@/icons/music.svg';
import Promotion from '@/icons/promotion.svg';
import Newspaper from '@/icons/newspaper.svg';
import {useRouter} from "next/router";
import {MenuItemType} from "antd/es/menu/hooks/useItems";



type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Аналитика', 'analytics', <Chart />),
    getItem('Моя музыка', 'music', <Headphones />),
    getItem('Тексты треков', 'texts', <Music />),
    getItem('Маркетинг', 'marketing', <Promotion />,
        [
            getItem('Чарты', 'charts'),
            getItem('Промо-ссылки', 'promo')
        ]
    ),
    getItem('Новости', 'news', <Newspaper />),
];


const AppLayout = ({ children }: LayoutProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter();

    const onMenuItemClick = (e: MenuItemType) => {
        router.push({
            pathname: `/${e.key}`,
        });
    };

    return (<>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsedWidth={70}
                collapsed={collapsed}
                width={228}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className={styles.logo}>
                    <span className={styles.logoIcon} />
                    {!collapsed && <span className={styles.logoName}>Music Manage</span>}
                </div>

                <Menu
                    theme="dark"
                    defaultSelectedKeys={['music']}
                    mode="inline"
                    items={items}
                    onClick={onMenuItemClick}
                />
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 50px' }}>
                    { children }
                </Content>
            </Layout>
        </Layout>
    </>);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppLayout>
                <Component {...props} />
            </AppLayout>
        );
    };
};
