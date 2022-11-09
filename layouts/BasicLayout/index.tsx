import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { motion } from 'framer-motion';
import Router from 'next/router';
import styles from './index.module.less';
const { Header, Content, Footer } = Layout;
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -200 },
};
const BasicLayout = ({ children }) => {
  const goToAgentIndex = () => {
    Router.push('/agent/index');
  };
  const goToHomePage = () => {
    Router.push('/home');
  };
  return (
    <Layout className={styles.layoutContainer}>
      <Header className={styles.header}>
        <div className={styles.left} onClick={goToHomePage}>
          <div className={styles.logo}></div>
          <div className={styles.platform}>嘉联支付 | 服务商平台</div>
        </div>
        <div className={styles.right} onClick={goToAgentIndex}>
          成为服务商
        </div>
      </Header>
      <Content className={styles.content}>
        <motion.section
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear' }}
        >
          {children}
        </motion.section>
      </Content>
      <Footer className={styles.footer}>
        <div className={styles.copyRight}>嘉联支付有限公司版权所有 ©JLPAY All Right Reserved</div>
        <div className={styles.address}>深圳市南山区深圳湾生态园10栋B座22楼</div>
        <div className={styles.beian}>
          <div className={styles.icon}></div>
          <div className={styles.beianNo}>粤公网安备 44030502003701号粤ICP备10024901号</div>
        </div>
      </Footer>
    </Layout>
  );
};

export default BasicLayout;
