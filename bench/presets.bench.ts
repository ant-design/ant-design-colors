/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, bench } from 'vitest';
import type { Palette, PalettesProps } from '../src/types';
import generate from '../src/generate';

describe('presets', () => {
  bench('runtime calculate', () => {
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

    expect(red).toBeTruthy();
    expect(volcano).toBeTruthy();
    expect(gold).toBeTruthy();
    expect(orange).toBeTruthy();
    expect(yellow).toBeTruthy();
    expect(lime).toBeTruthy();
    expect(green).toBeTruthy();
    expect(cyan).toBeTruthy();
    expect(blue).toBeTruthy();
    expect(geekblue).toBeTruthy();
    expect(purple).toBeTruthy();
    expect(magenta).toBeTruthy();
    expect(grey).toBeTruthy();
    expect(gray).toBeTruthy();
  });

  bench('pre-compile', () => {
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

    const red: Palette = [
      '#fff1f0',
      '#ffccc7',
      '#ffa39e',
      '#ff7875',
      '#ff4d4f',
      '#f5222d',
      '#cf1322',
      '#a8071a',
      '#820014',
      '#5c0011',
    ];
    red.primary = red[5];

    const volcano: Palette = [
      '#fff2e8',
      '#ffd8bf',
      '#ffbb96',
      '#ff9c6e',
      '#ff7a45',
      '#fa541c',
      '#d4380d',
      '#ad2102',
      '#871400',
      '#610b00',
    ];
    volcano.primary = volcano[5];

    const orange: Palette = [
      '#fff7e6',
      '#ffe7ba',
      '#ffd591',
      '#ffc069',
      '#ffa940',
      '#fa8c16',
      '#d46b08',
      '#ad4e00',
      '#873800',
      '#612500',
    ];
    orange.primary = orange[5];

    const gold: Palette = [
      '#fffbe6',
      '#fff1b8',
      '#ffe58f',
      '#ffd666',
      '#ffc53d',
      '#faad14',
      '#d48806',
      '#ad6800',
      '#874d00',
      '#613400',
    ];
    gold.primary = gold[5];

    const yellow: Palette = [
      '#feffe6',
      '#ffffb8',
      '#fffb8f',
      '#fff566',
      '#ffec3d',
      '#fadb14',
      '#d4b106',
      '#ad8b00',
      '#876800',
      '#614700',
    ];
    yellow.primary = yellow[5];

    const lime: Palette = [
      '#fcffe6',
      '#f4ffb8',
      '#eaff8f',
      '#d3f261',
      '#bae637',
      '#a0d911',
      '#7cb305',
      '#5b8c00',
      '#3f6600',
      '#254000',
    ];
    lime.primary = lime[5];

    const green: Palette = [
      '#f6ffed',
      '#d9f7be',
      '#b7eb8f',
      '#95de64',
      '#73d13d',
      '#52c41a',
      '#389e0d',
      '#237804',
      '#135200',
      '#092b00',
    ];
    green.primary = green[5];

    const cyan: Palette = [
      '#e6fffb',
      '#b5f5ec',
      '#87e8de',
      '#5cdbd3',
      '#36cfc9',
      '#13c2c2',
      '#08979c',
      '#006d75',
      '#00474f',
      '#002329',
    ];
    cyan.primary = cyan[5];

    const blue: Palette = [
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
    ];
    blue.primary = blue[5];

    const geekblue: Palette = [
      '#f0f5ff',
      '#d6e4ff',
      '#adc6ff',
      '#85a5ff',
      '#597ef7',
      '#2f54eb',
      '#1d39c4',
      '#10239e',
      '#061178',
      '#030852',
    ];
    geekblue.primary = geekblue[5];

    const purple: Palette = [
      '#f9f0ff',
      '#efdbff',
      '#d3adf7',
      '#b37feb',
      '#9254de',
      '#722ed1',
      '#531dab',
      '#391085',
      '#22075e',
      '#120338',
    ];
    purple.primary = purple[5];

    const magenta: Palette = [
      '#fff0f6',
      '#ffd6e7',
      '#ffadd2',
      '#ff85c0',
      '#f759ab',
      '#eb2f96',
      '#c41d7f',
      '#9e1068',
      '#780650',
      '#520339',
    ];
    magenta.primary = magenta[5];

    const grey: Palette = [
      '#a6a6a6',
      '#999999',
      '#8c8c8c',
      '#808080',
      '#737373',
      '#666666',
      '#404040',
      '#1a1a1a',
      '#000000',
      '#000000',
    ];
    grey.primary = grey[5];

    const gray = grey;

    const presetPalettes: PalettesProps = {
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
      gray: grey,
    };

    const redDark: Palette = [
      '#2a1215',
      '#431418',
      '#58181c',
      '#791a1f',
      '#a61d24',
      '#d32029',
      '#e84749',
      '#f37370',
      '#f89f9a',
      '#fac8c3',
    ];
    redDark.primary = redDark[5];

    const volcanoDark: Palette = [
      '#2b1611',
      '#441d12',
      '#592716',
      '#7c3118',
      '#aa3e19',
      '#d84a1b',
      '#e87040',
      '#f3956a',
      '#f8b692',
      '#fad4bc',
    ];
    volcanoDark.primary = volcanoDark[5];

    const orangeDark: Palette = [
      '#2b1d11',
      '#442a11',
      '#593815',
      '#7c4a15',
      '#aa6215',
      '#d87a16',
      '#e89a3c',
      '#f3b765',
      '#f8cf8d',
      '#fae3b7',
    ];
    orangeDark.primary = orangeDark[5];

    const goldDark: Palette = [
      '#2b2111',
      '#443111',
      '#594214',
      '#7c5914',
      '#aa7714',
      '#d89614',
      '#e8b339',
      '#f3cc62',
      '#f8df8b',
      '#faedb5',
    ];
    goldDark.primary = goldDark[5];

    const yellowDark: Palette = [
      '#2b2611',
      '#443b11',
      '#595014',
      '#7c6e14',
      '#aa9514',
      '#d8bd14',
      '#e8d639',
      '#f3ea62',
      '#f8f48b',
      '#fafab5',
    ];
    yellowDark.primary = yellowDark[5];

    const limeDark: Palette = [
      '#1f2611',
      '#2e3c10',
      '#3e4f13',
      '#536d13',
      '#6f9412',
      '#8bbb11',
      '#a9d134',
      '#c9e75d',
      '#e4f88b',
      '#f0fab5',
    ];
    limeDark.primary = limeDark[5];

    const greenDark: Palette = [
      '#162312',
      '#1d3712',
      '#274916',
      '#306317',
      '#3c8618',
      '#49aa19',
      '#6abe39',
      '#8fd460',
      '#b2e58b',
      '#d5f2bb',
    ];
    greenDark.primary = greenDark[5];

    const cyanDark: Palette = [
      '#112123',
      '#113536',
      '#144848',
      '#146262',
      '#138585',
      '#13a8a8',
      '#33bcb7',
      '#58d1c9',
      '#84e2d8',
      '#b2f1e8',
    ];
    cyanDark.primary = cyanDark[5];

    const blueDark: Palette = [
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
    blueDark.primary = blueDark[5];

    const geekblueDark: Palette = [
      '#131629',
      '#161d40',
      '#1c2755',
      '#203175',
      '#263ea0',
      '#2b4acb',
      '#5273e0',
      '#7f9ef3',
      '#a8c1f8',
      '#d2e0fa',
    ];
    geekblueDark.primary = geekblueDark[5];

    const purpleDark: Palette = [
      '#1a1325',
      '#24163a',
      '#301c4d',
      '#3e2069',
      '#51258f',
      '#642ab5',
      '#854eca',
      '#ab7ae0',
      '#cda8f0',
      '#ebd7fa',
    ];
    purpleDark.primary = purpleDark[5];

    const magentaDark: Palette = [
      '#291321',
      '#40162f',
      '#551c3b',
      '#75204f',
      '#a02669',
      '#cb2b83',
      '#e0529c',
      '#f37fb7',
      '#f8a8cc',
      '#fad2e3',
    ];
    magentaDark.primary = magentaDark[5];

    const greyDark: Palette = [
      '#151515',
      '#1f1f1f',
      '#2d2d2d',
      '#393939',
      '#494949',
      '#5a5a5a',
      '#6a6a6a',
      '#7b7b7b',
      '#888888',
      '#969696',
    ];
    greyDark.primary = greyDark[5];

    const grayDark = greyDark;

    const presetDarkPalettes: PalettesProps = {
      red: redDark,
      volcano: volcanoDark,
      orange: orangeDark,
      gold: goldDark,
      yellow: yellowDark,
      lime: limeDark,
      green: greenDark,
      cyan: cyanDark,
      blue: blueDark,
      geekblue: geekblueDark,
      purple: purpleDark,
      magenta: magentaDark,
      grey: greyDark,
      gray: greyDark,
    };

    expect(red).toBeTruthy();
    expect(volcano).toBeTruthy();
    expect(gold).toBeTruthy();
    expect(orange).toBeTruthy();
    expect(yellow).toBeTruthy();
    expect(lime).toBeTruthy();
    expect(green).toBeTruthy();
    expect(cyan).toBeTruthy();
    expect(blue).toBeTruthy();
    expect(geekblue).toBeTruthy();
    expect(purple).toBeTruthy();
    expect(magenta).toBeTruthy();
    expect(grey).toBeTruthy();
    expect(gray).toBeTruthy();
    expect(presetPrimaryColors).toBeTruthy();
    expect(presetPalettes).toBeTruthy();
    expect(grayDark).toBeTruthy();
    expect(presetDarkPalettes).toBeTruthy();
  });
});
