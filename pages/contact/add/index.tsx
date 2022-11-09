import { PROVINCE_LIST } from '@/components/pages/agent/constant';
import { Anchor, Button, Form, Input, Select } from 'antd';
import Router from 'next/router';
import styles from './index.module.less';

const { Link } = Anchor;
const FormItem = Form.Item;
const Option = Select.Option;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
const AddContact = () => {
  const [form] = Form.useForm();
  console.log(PROVINCE_LIST.length);
  const onSubmit = () => {
    console.log(form.getFieldsValue());
    Router.push('/agent/success');
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Form {...layout} form={form}>
            <div className={styles.infoCard} id="cooperation-info">
              <div className={styles.title}>合作信息</div>
              <div className={styles.infoInputContainer}>
                <FormItem name={'companyName'} label="企业名称">
                  <Input />
                </FormItem>
                <FormItem name={'product'} label="意向合作产品">
                  <Input />
                </FormItem>
                <FormItem name={'province'} label="展业所在地">
                  <Select>
                    {PROVINCE_LIST.map((item) => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
              </div>
            </div>
            <div className={styles.infoCard} id="contact-info">
              <div className={styles.title}>联系人信息</div>
              <div className={styles.infoInputContainer}>
                <FormItem name={'contact'} label="业务联系人">
                  <Input />
                </FormItem>
                <FormItem name={'phone'} label="业务联系人电话">
                  <Input />
                </FormItem>
                <FormItem name={'email'} label="业务联系人邮箱">
                  <Input />
                </FormItem>
              </div>
            </div>
          </Form>
        </div>
        <div className={styles.right}>
          <Anchor>
            <Link href="#cooperation-info" title="合作信息" />
            <Link href="#contact-info" title="联系人信息" />
          </Anchor>
        </div>
      </div>
      <div className={styles.bottom}>
        <Button type="primary" style={{ width: '150px' }} onClick={onSubmit}>
          提交
        </Button>
      </div>
    </div>
  );
};
export default AddContact;
