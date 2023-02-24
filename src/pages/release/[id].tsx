import React from 'react';
import {withLayout} from "@/layout/Layout";
import styles from "@/styles/Main.module.css";
import {Breadcrumb} from "antd";
import {TrackList} from "@/components/TrackList/TrackList";

function Release() {

  return (
      <>
          <Breadcrumb className={styles.breadcrumb}>
              <Breadcrumb.Item>
                  <a href="/">Главная</a>
              </Breadcrumb.Item>

              <Breadcrumb.Item>Обезоружена</Breadcrumb.Item>
          </Breadcrumb>

          <div>
              <div className={styles.titleRow}>
                  <h1>Обезоружена</h1>
              </div>

              <TrackList />
          </div>
      </>
  );
}

export default withLayout(Release);
