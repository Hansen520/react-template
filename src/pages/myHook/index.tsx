/*
 * @Date: 2024-02-21 15:42:23
 * @Description: description
 */
import { useState, Suspense, lazy } from 'react';
import Ref from './Ref'
import State from './State'
import Memo from './Memo'
import useInterval from './useInterval';
import styles from './index.module.less'

function MyHook() {
  const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    };

    useInterval(updateCount, 1000);
  return (
    <div className={styles.container}>
      测试forwardRef
      <Ref />
      ----------------------------------<br />
      测试immer
      <State />
      ----------------------------------<br />
      测试memo + useMemo + useCallback
      <Memo />
      ----------------------------------<br />
      测试定时器
      <div>{count}</div>
    </div>
  );
}

export default MyHook;
