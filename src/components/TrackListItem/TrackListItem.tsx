import React from "react";
import Image from "next/image";
import styles from "./TrackListItem.module.css";
import {InfoCircleOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";

export const TrackListItem = (): JSX.Element => {
    const router = useRouter();

    const goToRelease = (): void => {
        router.push({
            pathname: `/release/1`,
        });
    };

    return (
        <div
            className={styles.card}
            onClick={goToRelease}
        >
            <Image
                src="/test/release-cover.png"
                alt='альбом'
                width={132}
                height={132}
            />

            <div className={styles.content}>
                <div>
                    <h4 className={styles.title}>Первый поцелуй</h4>
                    <div className={styles.author}>Валерия & Полина Гагарина</div>

                    <div className={styles.params}>
                        <div className={styles.paramsItem}>
                            <div className={styles.paramsValue}>Album</div>
                            <div className={styles.paramsKeys}>Тип релиза</div>
                        </div>

                        <div className={styles.paramsItem}>
                            <div className={styles.paramsValue}>1231231231</div>
                            <div className={styles.paramsKeys}>UPC</div>
                        </div>

                        <div className={styles.paramsItem}>
                            <div className={styles.paramsValue}>VSA12332165</div>
                            <div className={styles.paramsKeys}>ISRC</div>
                        </div>

                        <div className={styles.paramsItem}>
                            <div className={styles.paramsValue}>13.08.2025</div>
                            <div className={styles.paramsKeys}>Дата окончания прав</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.verticalParams}>
                        <span className={styles.paramsKeys}>Дата проверки</span>
                        <span className={styles.paramsValue}>8.04.2022</span>
                    </div>
                </div>

                <div className={styles.flex}>
                    <div className={styles.verticalParams}>
                        <span className={styles.paramsKeys}>Дата проверки</span>
                        <span className={styles.paramsValue}>8.04.2022</span>
                    </div>

                    <div className={styles.priority}>
                        <span>Приоритетный релиз</span>
                        <InfoCircleOutlined />
                    </div>

                    <Image
                        src='/test/music-apps.png'
                        alt='Music apps'
                        width={80}
                        height={32}
                    />
                </div>
            </div>
        </div>
    );
};
