import { Measure, Unit } from '../index';
export type TemperatureGradientMetricUnits = 'C/km' | 'C/100m' | 'C/m';
export type TemperatureGradientImperialUnits = 'F/100ft' | 'F/ft';

export type TemperatureGradientUnits =
  | TemperatureGradientMetricUnits
  | TemperatureGradientImperialUnits;
export type TemperatureGradientSystems = 'metric' | 'imperial';

const metric: Record<TemperatureGradientMetricUnits, Unit> = {
  'C/km': {
    name: {
      singular: 'Celsius per kilometre',
      plural: 'Celsius per kilometre',
    },
    to_anchor: 0.001,
  },
  'C/100m': {
    name: {
      singular: 'Celsius per 100 metre',
      plural: 'Celsius per 100 metre',
    },
    to_anchor: 0.01,
  },
  'C/m': {
    name: {
      singular: 'Celsius per metre',
      plural: 'Celsius per metre',
    },
    to_anchor: 1,
  },
};

const imperial: Record<TemperatureGradientImperialUnits, Unit> = {
  'F/ft': {
    name: {
      singular: 'Fahrenheit per foot',
      plural: 'Fahrenheit per feet',
    },
    to_anchor: 1,
  },
  'F/100ft': {
    name: {
      singular: 'Fahrenheit per 100 feet',
      plural: 'Fahrenheit per 100 feet',
    },
    to_anchor: 0.01,
  },
};

const measure: Measure<TemperatureGradientSystems, TemperatureGradientUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.54864,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 0.54864,
      },
    },
  },
};

export default measure;
