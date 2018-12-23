"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("./src");
var blueColors = [
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
].map(function (color) { return color.toLowerCase(); });
test('Generate palettes from a given color', function () {
    expect(src_1.generate('#1890ff')).toEqual(blueColors);
});
test('should contain preseted palettes', function () {
    expect(Object.keys(src_1.presetPalettes)).toEqual([
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
    expect(src_1.presetPalettes.blue).toEqual(blueColors);
});
