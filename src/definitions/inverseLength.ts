import { Measure, Unit } from '../index';
export type InverseLengthUnits =
  | InverseLengthMetricUnits
  | InverseLengthImperialUnits;
export type InverseLengthSystems = 'metric' | 'imperial';

export type InverseLengthMetricUnits = '/mm' | '/cm' | '/m' | '/km';
export type InverseLengthImperialUnits = '/in' | '/ft' | '/mi';

const metric: Record<InverseLengthMetricUnits, Unit> = {
  '/mm': {
    name: {
      singular: 'Inverse-Millimeter',
      plural: 'Inverse-Millimeters',
    },
    to_anchor: 1000,
  },
  '/cm': {
    name: {
      singular: 'Inverse-Centimeter',
      plural: 'Inverse-Centimeters',
    },
    to_anchor: 100,
  },
  '/m': {
    name: {
      singular: 'Inverse-Meter',
      plural: 'Inverse-Meters',
    },
    to_anchor: 1,
  },
  '/km': {
    name: {
      singular: 'Inverse-Kilometer',
      plural: 'Inverse-Kilometers',
    },
    to_anchor: 0.001,
  },
};

const imperial: Record<InverseLengthImperialUnits, Unit> = {
  '/in': {
    name: {
      singular: 'Inverse-Inch',
      plural: 'Inverse-Inches',
    },
    to_anchor: 12,
  },
  '/ft': {
    name: {
      singular: 'Inverse-Foot',
      plural: 'Inverse-Feet',
    },
    to_anchor: 1,
  },
  '/mi': {
    name: {
      singular: 'Inverse-Mile',
      plural: 'Inverse-Miles',
    },
    to_anchor: 1 / 5280,
  },
};

const measure: Measure<InverseLengthSystems, InverseLengthUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 1 / 3.28084,
      },
    },
    imperial: {
      metric: {
        ratio: 3.28084,
      },
    },
  },
};

export default measure;
