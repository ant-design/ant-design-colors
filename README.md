# Ant Design Palettes

[![](https://img.shields.io/travis/ant-design/ant-design-palettes/master.svg?style=flat-square)](https://travis-ci.org/ant-design/ant-design-palettes)  [![Gitter](https://badges.gitter.im/ant-design/ant-design-palettes.svg)](https://gitter.im/ant-design/ant-design-palettes?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Color palettes calculator of [Ant Design](https://ant.design/docs/spec/colors).

![](https://gw.alipayobjects.com/zos/rmsportal/cYDwIQtKOZRavAqKqfNq.png)

## Usage

```bash
$ npm install ant-design-palettes --save
```

```js
import { generate, presetPalettes } from 'ant-design-palettes';

const colors = generate('#1890ff');
console.log(colors);
// ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
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
