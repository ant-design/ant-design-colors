import generate from './generate';

const presetPrimaryColors = {
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
  grey: '#666666',
};

const presetPalettes = {};

Object.keys(presetPrimaryColors).forEach(key => {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
});

export { generate, presetPalettes, presetPrimaryColors };
