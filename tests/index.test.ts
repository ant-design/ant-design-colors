import { generate, presetPalettes } from '../src';

export const blueColors = [
  '#E6F7FF',
  '#BAE7FF',
  '#91D5FF',
  '#69C0FF',
  '#40A9FF',
  '#1890FF',
  '#096DD9',
  '#0050B3',
  '#003A8C',
  '#002766',
].map(color => color.toLowerCase());

export const blueDarkColors = [
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
];

test('Generate palettes from a given color', () => {
  expect(generate('#1890ff')).toEqual(blueColors);
});

test('Generate dark palettes from a given color', () => {
  expect(
    generate('#1890ff', {
      theme: 'dark',
      backgroundColor: '#141414',
    }),
  ).toEqual(blueDarkColors);
});

test('Generate primary color', () => {
  expect(presetPalettes.blue.primary).toEqual('#1890ff');
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
  expect([...presetPalettes.blue]).toEqual(blueColors);
});
