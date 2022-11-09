import { Button, Steps } from 'antd';
import classnames from 'classnames';
import Router from 'next/router';
import { useCallback, useState } from 'react';
import styles from './index.module.less';
import { PRODUCT_LIST } from '@/components/pages/agent/index/type';

const Title = (props) => {
  return <div>{props.title}</div>;
};
const SubTitle = (props) => {
  return (
    <div>
      <div>{props?.subTitle || ''}</div>
      {props.linkText && <a href={props.link}>{props.linkText}</a>}
    </div>
  );
};
const AgentIndex = () => {
  const [checkProdId, setCheckProdId] = useState<string>();
  const productClickHandle = useCallback(
    (item, checkProdId) => () => {
      if (!!item.disable) return;
      if (item.value !== checkProdId) {
        setCheckProdId(item.value);
      } else {
        setCheckProdId(undefined);
      }
    },
    [],
  );
  const goToAgentApply = () => {
    Router.push({
      pathname: '/agent/apply',
      query: {
        type: checkProdId,
      },
    });
  };
  const goToContactAdd = () => {
    Router.push('/contact/add/#contact-info');
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>欢迎成为嘉联支付服务商</div>
      <div className={styles.cardItem}>
        <div className={styles.cardTitle}>申请指南：</div>
        <div className={styles.stepsContainer}>
          <Steps
            current={-1}
            items={[
              {
                title: <Title title={'选择展业产品'} />,
                subTitle: <SubTitle subTitle={'选择你想要展业的产品'} />,
              },
              {
                title: <Title title={'入驻签约'} />,
                subTitle: (
                  <SubTitle
                    subTitle={'需准备营业执照等'}
                    linkText={'查看全部所需材料'}
                    link={'/home'}
                  />
                ),
              },
              {
                title: <Title title={'使用服务'} />,
                subTitle: <SubTitle subTitle={'入驻完成可以使用合伙云相关服务'} />,
              },
            ]}
          />
        </div>
      </div>
      <div className={styles.cardItem}>
        <div className={styles.cardTitle}>选择展业产品：</div>
        <div className={styles.productContainer}>
          {PRODUCT_LIST.map((item) => (
            <div
              className={classnames({
                [styles.productItem]: true,
                [styles.isCheck]: checkProdId === item.value,
                [styles.isDisable]: !!item?.disable,
              })}
              key={item.value}
              onClick={productClickHandle(item, checkProdId)}
            >
              <div className={styles.productName}>{item.label}</div>
              {!!item?.disable && <div className={styles.desc}>(敬请期待)</div>}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <Button type="primary" disabled={checkProdId === undefined} onClick={goToAgentApply}>
          即刻入驻
        </Button>
        <div className={styles.service} onClick={goToContactAdd}>
          还没有专人服务？
        </div>
      </div>
    </div>
  );
};
export default AgentIndex;
