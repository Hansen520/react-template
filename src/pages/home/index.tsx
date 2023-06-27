
import { useEffect, useRef } from 'react';
import { Button } from 'antd';
import * as echarts from 'echarts';
import { pieOption, gattOption, barOption, hengOption } from './option';

import styles from './index.module.less';

export default function Home() {

  const peiRef: any = useRef(null);
  const ganttRef: any = useRef(null);
  const barRef: any = useRef(null);
  const hengBarRef: any = useRef(null);

  useEffect(() => {
    echarts.init(peiRef.current).setOption(pieOption(), true);
    echarts.init(ganttRef.current).setOption(gattOption(), true);
    echarts.init(barRef.current).setOption(barOption(), true);
    echarts.init(hengBarRef.current).setOption(hengOption(), true);
  }, []);

  return (
    <div className={styles.container}>
      <section>
        <h2>仪表图</h2>
        <div className={styles.chartWrap} ref={peiRef}>
        </div>
      </section>
      <section>
        <h2>甘特图</h2>
        <div ref={ganttRef} className={styles.chartWrap} />
      </section>
      <section>
        <h2>柱状图</h2>
        <div ref={barRef} className={styles.chartWrap} />
      </section>
      <section>
        <h2>横向柱状图</h2>
        <div ref={hengBarRef} className={styles.chartWrap} />
      </section>
      <br />
    </div>
  );
}
