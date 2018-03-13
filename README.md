# Ant Design Palettes

[![](https://img.shields.io/travis/ant-design/ant-design-palettes/master.svg?style=flat-square)](https://travis-ci.org/ant-design/ant-design-palettes)
[![npm package](https://img.shields.io/npm/v/ant-design-palettes.svg?style=flat-square)](https://www.npmjs.org/package/ant-design-palettes)

:art: Color palettes calculator of [Ant Design](https://ant.design/docs/spec/colors).

![](https://gw.alipayobjects.com/zos/rmsportal/cYDwIQtKOZRavAqKqfNq.png)

## Usage

```bash
$ npm install ant-design-palettes --save
```

```js
import { generate, presetPalettes } from 'ant-design-palettes';

// Generate color palettes by a given color
const colors = generate('#1890ff');
console.log(colors); // ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']

console.log(presetPalettes);
/*
{
  red: [...],
  volcano: [...],
  orange: [...],
  gold: [...],
  yellow: [...],
  lime: [...],
  green: [...],
  cyan: [...],
  blue: [...],
  geekblue: [...],
  purple: [...],
  magenta: [...],
}
*/
```

## Articles

- [Ant Design Colors](https://ant.design/docs/spec/colors)
- [Ant Design 色板生成算法演进之路](https://zhuanlan.zhihu.com/p/32422584)
