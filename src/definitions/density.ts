import { Measure, Unit } from './../index';

export type DensityMetricUnits = 'kg/m3' | 'g/cm3' | 'sg';
export type DensityImperialUnits = 'lb/ft3';

export type DensityUnits = DensityMetricUnits | DensityImperialUnits;
export type DensitySystems = 'metric' | 'imperial';

const metric: Record<DensityMetricUnits, Unit> = {
  'kg/m3': {
    name: {
      singular: 'Kilogram per metre cubed',
      plural: 'Kilograms per metre cubed',
    },
    to_anchor: 1,
  },
  'g/cm3': {
    name: {
      singular: 'Gram per centimetre cubed',
      plural: 'Grams per centimetre cubed',
    },
    to_anchor: 1000,
  },
  sg: {
    name: {
      singular: 'Specific Gravity',
      plural: 'Specific Gravity',
    },
    to_anchor: 1000,
  },
};

const imperial: Record<DensityImperialUnits, Unit> = {
  'lb/ft3': {
    name: {
      singular: 'Pound per foot cubed',
      plural: 'Pounds per foot cubed',
    },
    to_anchor: 1,
  },
};

const measure: Measure<DensitySystems, DensityUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.062427961,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 0.062427961,
      },
    },
  },
};

export default measure;
