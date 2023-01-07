import {
  blue,
  cyan,
  geekblue,
  gold,
  gray,
  green,
  grey,
  lime,
  magenta,
  orange,
  presetDarkPalettes,
  purple,
  red,
  volcano,
  yellow,
} from '../src';
import { presetBlueColors, presetBlueDarkColors } from './index.test';

test(`import { blue } from '@ant-design/colors'`, () => {
  expect(blue.primary).toEqual(presetBlueColors[5]);
  expect([...blue]).toEqual(presetBlueColors);
});

test(`import { presetDarkPalettes } from '@ant-design/colors'`, () => {
  const darkBlue = presetDarkPalettes.blue;
  expect([...darkBlue]).toEqual(presetBlueDarkColors);
});

test(`other colors'`, () => {
  expect(red.length).toEqual(10);
  expect(volcano.length).toEqual(10);
  expect(orange.length).toEqual(10);
  expect(gold.length).toEqual(10);
  expect(yellow.length).toEqual(10);
  expect(lime.length).toEqual(10);
  expect(green.length).toEqual(10);
  expect(cyan.length).toEqual(10);
  expect(blue.length).toEqual(10);
  expect(geekblue.length).toEqual(10);
  expect(purple.length).toEqual(10);
  expect(magenta.length).toEqual(10);
  expect(grey.length).toEqual(10);
  expect(gray.length).toEqual(10);

  expect(presetDarkPalettes.red.length).toEqual(10);
  expect(presetDarkPalettes.volcano.length).toEqual(10);
  expect(presetDarkPalettes.orange.length).toEqual(10);
  expect(presetDarkPalettes.gold.length).toEqual(10);
  expect(presetDarkPalettes.yellow.length).toEqual(10);
  expect(presetDarkPalettes.lime.length).toEqual(10);
  expect(presetDarkPalettes.green.length).toEqual(10);
  expect(presetDarkPalettes.cyan.length).toEqual(10);
  expect(presetDarkPalettes.blue.length).toEqual(10);
  expect(presetDarkPalettes.geekblue.length).toEqual(10);
  expect(presetDarkPalettes.purple.length).toEqual(10);
  expect(presetDarkPalettes.magenta.length).toEqual(10);
  expect(presetDarkPalettes.grey.length).toEqual(10);
});
