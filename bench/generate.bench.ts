import { bench, describe } from 'vitest';
import generate from '../src/generate';
import generateOld from './generate-old';

describe('generate from hex string', () => {
  bench('@ctrl/tinycolor', () => {
    generateOld('#66ccff');
  });

  bench('@ant-design/fast-color', () => {
    generate('#66ccff');
  });
});

describe('generate from rgb object', () => {
  bench('@ctrl/tinycolor', () => {
    generateOld({ r: 102, g: 204, b: 255 });
  });

  bench('@ant-design/fast-color', () => {
    generate({ r: 102, g: 204, b: 255 });
  });
});
