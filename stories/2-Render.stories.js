import * as React from 'react';
import PropTypes from 'prop-types';
import { render as renderKemis } from '@ke/kemis';
import '@ke/kemis/lib/themes/skin000-kemis.css';
import '@ke/kemis/lib/themes/default.css';

export default {
  title: 'Page',
  discription: '这里是描述',
  Props: {
    'title': '标题'
  },
  parameters: {
    componentSubtitle: 'page页面',
  },
  component: PageDemo,
};

/**
 * page 描述
 */
export const PageDemo = () => (
  renderKemis({
    type: 'page',
    title: '这是标题部分',
    subTitle: '这是子标题',
    remark: '这是小提示信息',
    aside: '这是侧边栏部分',
    body: '这是内容区',
    toolbar: '这是工具栏部分'
  })
);

PageDemo.propTypes = {
  status: PropTypes.oneOf(['positive', 'negative', 'neutral', 'error', 'warning']),
};
PageDemo.defaultProps = {
  status: 'neutral',
};