import { createMetricString, rem, px, percent, em, deg, vh, vw, rgba } from './utils';
import { Metric } from './constants';

describe('Generate metric strings', () => {
  it('Should return correct metric string', () => {
    const value = 5;

    const result = createMetricString(value, Metric.EM);

    expect(result).toEqual(`${value}${Metric.EM} `);
  });

  it('Should return EM string', () => {
    const value = 5;

    const result = em(value);

    expect(result).toEqual(`${value}${Metric.EM} `);
  });

  it('Should return correct PX string', () => {
    const value = 5;

    const result = px(value);

    expect(result).toEqual(`${value}${Metric.PX} `);
  });

  it('Should return correct % string', () => {
    const value = 5;

    const result = percent(value);

    expect(result).toEqual(`${value}${Metric.PERCENTS} `);
  });

  it('Should return correct REM string', () => {
    const value = 16;
    const base = 16;

    const result = rem(value, base);

    expect(result).toEqual(`${value / base}${Metric.REM} `);
  });

  it('Should return correct REM string with default base', () => {
    const value = 16;

    const result = rem(value);

    expect(result).toMatchSnapshot();
  });

  it('Should return correct deg string', () => {
    const value = 90;

    const result = deg(value);

    expect(result).toEqual(`${value}${Metric.DEG} `);
  });

  it('Should return correct vh string', () => {
    const value = 45;

    const result = vh(value);

    expect(result).toEqual(`${value}${Metric.VH} `);
  });

  it('Should return correct vw string', () => {
    const value = 50;

    const result = vw(value);

    expect(result).toEqual(`${value}${Metric.VW} `);
  });

  it('Should return correct RGBA string for hex color', () => {
    const result = rgba('#ABCDEF', 1);

    expect(result).toMatchSnapshot();
  });

  it('Should return correct RGBA string for HSV color', () => {
    const result = rgba({ h: 0.5, s: 0.3, v: 0.7 }, 1);

    expect(result).toMatchSnapshot();
  });
});
