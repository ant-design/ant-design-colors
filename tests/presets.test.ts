import * as presets from '../src/presets'

test('presets', () => {
    expect(presets).toMatchSnapshot()
})