import generate from './generate';

const presetPrimaryColors: Record<string, string> = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1677FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666',
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
const gray = presetPalettes.grey;

export type PalettesProps = Record<string, string[] & { primary?: string }>;

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
  gray,
};
