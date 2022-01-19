import generate, { generateGrayscale } from './generate';

export interface PalettesProps {
  [key: string]: readonly string[] & { primary?: string };
}

const presetPrimaryColors: {
  [key: string]: string;
} = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
};

const presetPalettes: PalettesProps = {};
const presetDarkPalettes: PalettesProps = {};

Object.keys(presetPrimaryColors).forEach((key): void => {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];

  // dark presetPalettes
  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414',
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

// Per antd@4.18 neutral colors use a separate pattern
const grayscaleGradient: number[] = [1, 0.98, 0.96, 0.94, 0.85, 0.75, 0.55, 0.35, 0.263, 0.15, 0.12, 0.08, 0];

const grayColors = grayscaleGradient.map((percent) => `#${generateGrayscale(percent).toHex()}`);

presetPalettes.grey = presetDarkPalettes.grey = grayColors;
presetDarkPalettes.grey.primary = presetDarkPalettes.grey.primary = '#BFBFBF';

const red = presetPalettes.red;
const volcano = presetPalettes.volcano;
const gold = presetPalettes.gold;
const orange = presetPalettes.orange;
const yellow = presetPalettes.yellow;
const lime = presetPalettes.lime;
const green = presetPalettes.green;
const cyan = presetPalettes.cyan;
const blue = presetPalettes.blue;
const geekblue = presetPalettes.geekblue;
const purple = presetPalettes.purple;
const magenta = presetPalettes.magenta;
const grey = presetPalettes.grey;

export {
  generate,
  presetPalettes,
  presetDarkPalettes,
  presetPrimaryColors,
  red,
  volcano,
  orange,
  gold,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  grey,
};
