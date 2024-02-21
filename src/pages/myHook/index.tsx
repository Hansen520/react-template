/*
 * @Date: 2024-02-21 15:42:23
 * @Description: description
 */
import React from 'react';
import Ref from './Ref'
import State from './State'
import Memo from './Memo'

function MyHook() {
  return (
    <div>
      测试forwardRef
      <Ref />
      ----------------------------------<br />
      测试immer
      <State />
      ----------------------------------<br />
      测试memo + useMemo + useCallback
      <Memo />
    </div>
  );
}

export default MyHook;
