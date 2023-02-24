import React from 'react';
import {withLayout} from "@/layout/Layout";
import {ReleaseList} from "@/components/ReleaseList/ReleaseList";
import {Breadcrumb, Button, Tabs, TabsProps} from "antd";

import styles from '@/styles/Main.module.css';

const tabStyle = {
    color: '#A0A0A0',
    'font-size': '18px'
};

function Music() {
    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: 'active',
            label: `Активные 1578`,
            children: <ReleaseList />,
        },
        {
            key: 'moderation',
            label: `На модерации 1578`,
            children: 'Список на модерации',
        },
        {
            key: 'rejected',
            label: `Отклоненные 15`,
            children: 'Список отклоненных',
        },
        {
            key: 'draft',
            label: `Черновики 10`,
            children: 'Список черновиков',
        },
        {
            key: 'archive',
            label: `Архив 2`,
            children: 'Список архивных',
        },
    ];

  return (
      <>
          <Breadcrumb className={styles.breadcrumb}>
              <Breadcrumb.Item>Главная</Breadcrumb.Item>
          </Breadcrumb>

          <div className={styles.titleRow}>
              <h1>Моя музыка</h1>

              <Button type="primary" shape="round" size="large">
                  Создать релиз
              </Button>
          </div>

          <Tabs
              defaultActiveKey="1"
              items={items}
              tabBarStyle={tabStyle}
              onChange={onChange}
          />
      </>
  );
}

export default withLayout(Music);
