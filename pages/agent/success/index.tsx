import { Button } from 'antd';
import Router from 'next/router';
import styles from './index.module.less';
const AgentApplySuccess = () => {
  const backHome = () => Router.push('/home');
  return (
    <div className={styles.container}>
      <div className={styles.successBg}></div>
      <div>提交申请成功</div>
      <div className={styles.btnContainer}>
        <Button type={'primary'} style={{ width: '150px' }} onClick={backHome}>
          返回首页
        </Button>
      </div>
    </div>
  );
};

export default AgentApplySuccess;
