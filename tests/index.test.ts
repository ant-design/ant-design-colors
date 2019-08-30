import { generate, isLight, isDark, yellow, purple, presetPalettes } from '../src';

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

test('Generate palettes from a given color', () => {
  expect(generate('#1890ff')).toEqual(blueColors);
});

test('Determine the lightness of a color', () => {
  expect(isLight(yellow[5])).toEqual(true);
  expect(isLight(purple[5])).toEqual(false);
});

test('Determine the darkness of a color', () => {
  expect(isDark(yellow[5])).toEqual(false);
  expect(isDark(purple[5])).toEqual(true);
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
