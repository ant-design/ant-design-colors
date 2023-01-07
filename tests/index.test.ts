import { generate, presetPalettes } from '../src';

export const presetBlueColors = [
  '#e6f4ff',
  '#bae0ff',
  '#91caff',
  '#69b1ff',
  '#4096ff',
  '#1677ff',
  '#0958d9',
  '#003eb3',
  '#002c8c',
  '#001d66',
].map((color) => color.toLowerCase());

export const presetBlueDarkColors = [
  '#111a2c',
  '#112545',
  '#15325b',
  '#15417e',
  '#1554ad',
  '#1668dc',
  '#3c89e8',
  '#65a9f3',
  '#8dc5f8',
  '#b7dcfa',
];

test('Generate palettes from a given color', () => {
  expect(generate('#1890ff')).toEqual([
    '#e6f7ff',
    '#bae7ff',
    '#91d5ff',
    '#69c0ff',
    '#40a9ff',
    '#1890ff',
    '#096dd9',
    '#0050b3',
    '#003a8c',
    '#002766',
  ]);
});

test('Generate dark palettes from a given color', () => {
  expect(
    generate('#1890ff', {
      theme: 'dark',
      backgroundColor: '#141414',
    }),
  ).toEqual([
    '#111d2c',
    '#112a45',
    '#15395b',
    '#164c7e',
    '#1765ad',
    '#177ddc',
    '#3c9ae8',
    '#65b7f3',
    '#8dcff8',
    '#b7e3fa',
  ]);
});

test('Generate primary color', () => {
  expect(presetPalettes.blue.primary).toEqual('#1677ff');
});

test('should contain preseted palettes', () => {
  expect(Object.keys(presetPalettes)).toEqual([
    'red',
    'volcano',
    'orange',
    'gold',
    'yellow',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
    'magenta',
    'grey',
  ]);
  expect([...presetPalettes.blue]).toEqual(presetBlueColors);
});
