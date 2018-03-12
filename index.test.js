import { generate, presetPalettes } from './src';

const blueColors = [
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

test('Generate palettes from a given color', () => {
  expect(generate('#1890ff')).toEqual(blueColors);
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
  ]);
  expect(presetPalettes.blue).toEqual(blueColors);
});
