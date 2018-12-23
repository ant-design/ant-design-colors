<h1 align="center">Ant Design Palettes</h1>

<div align="center">

:art: Color palettes calculator of [Ant Design](https://ant.design/docs/spec/colors).

[![CircleCI branch](https://img.shields.io/circleci/project/github/ant-design/ant-design-palettes/master.svg?style=flat-square)](https://circleci.com/gh/ant-design/ant-design-palettes)
[![Codecov](https://img.shields.io/codecov/c/github/ant-design/ant-design-palettes/master.svg?style=flat-square)](https://codecov.io/gh/ant-design/ant-design-palettes/branch/master)
[![npm package](https://img.shields.io/npm/v/@ant-design/palettes.svg?style=flat-square)](https://www.npmjs.org/package/@ant-design/palettes)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/palettes.svg?style=flat-square)](http://npmjs.com/@ant-design/palettes)

[![Dependencies](https://img.shields.io/david/ant-design/ant-design-palettes.svg?style=flat-square)](https://david-dm.org/ant-design/ant-design-palettes)
[![DevDependencies](https://img.shields.io/david/dev/ant-design/ant-design-palettes.svg?style=flat-square)](https://david-dm.org/ant-design/ant-design-palettes?type=dev)
</div>

![](https://gw.alipayobjects.com/zos/rmsportal/cYDwIQtKOZRavAqKqfNq.png)

## Usage

```bash
$ npm install @ant-design/palettes --save
```

```js
import { generate, presetPalettes } from '@ant-design/palettes';

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
