import React from 'react';
import { Modal, Form, Select } from 'antd';

export default ({ modalIsOpen, closeModal }) => (
  <Modal
    visible={modalIsOpen}
    centered
    width="300px"
    title="The Modal Form"
    onCancel={closeModal}
    onOk={closeModal}
  >
    <Form colon={false}>
      <Form.Item label="One or two?" htmlFor="one">
        <Select id="one" placeholder="Please select a number">
          <Select.Option value="One">
            One
          </Select.Option>
          <Select.Option value="Two">
            Two
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Three or four?" htmlFor="three">
        <Select id="three" placeholder="Please select a number">
          <Select.Option value="Three">
            Three
          </Select.Option>
          <Select.Option value="Four">
            Four
          </Select.Option>
        </Select>
      </Form.Item>
    </Form>
  </Modal>
);
