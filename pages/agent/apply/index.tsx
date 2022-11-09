import { Steps } from 'antd';
import { useState } from 'react';
import CooperationInfo from '@/components/pages/agent/apply/components/CooperationInfo';
import styles from './index.module.less';
const items = [
  {
    title: '合作信息',
  },
  {
    title: '基础资料',
  },
  {
    title: '财务信息',
  },
  {
    title: '确认资料',
  },
  {
    title: '完成',
  },
];
const AgentApply = () => {
  const [curStep, setCurStep] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.stepsContainer}>
        <Steps current={curStep} items={items} />
      </div>
      <div className={styles.infoInputContainer}>{curStep === 0 ? <CooperationInfo /> : null}</div>
    </div>
  );
};
export default AgentApply;
