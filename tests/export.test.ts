import { red, volcano, orange, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey } from '../src';
import { blueColors } from './index.test';

test(`import { blue } from '@ant-design/colors'`, () => {
  expect(blue.primary).toEqual(blueColors[5]);
  expect([...blue]).toEqual(blueColors);
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
});
