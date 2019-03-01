import { Metric } from './constants';
import tinycolor from 'tinycolor2';

/**
 * Wrap value to string using metric specified
 */
const createMetricString = (value: number, metric: Metric): string => `${value}${metric} `;

/**
 * Wrap value to rem string
 */
const rem = (value: number, base: number = 16): string => createMetricString(value / base, Metric.REM);

/**
 * Wrap value to px string
 */
const px = (value: number): string => createMetricString(value, Metric.PX);

/**
 * Wrap value to em string
 */
const em = (value: number): string => createMetricString(value, Metric.EM);

/**
 * Wrap value to % string
 */
const percent = (value: number): string => createMetricString(value, Metric.PERCENTS);

/**
 * Convert color and wrap to rgba string
 */
const rgba = (color: tinycolor.ColorInput, opacity: number): string => {
  const { r, g, b } = tinycolor(color).toRgb();

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export { rem, px, percent, em, createMetricString, rgba };
