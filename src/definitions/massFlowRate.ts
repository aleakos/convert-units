import { Measure, Unit } from './../index';

export type MassFlowRateUnits =
  | MassFlowRateMetricUnits
  | MassFlowRateImperialUnits;

export type MassFlowRateSystems = 'metric' | 'imperial';

export type MassFlowRateMetricUnits =
  | 'kg/s'
  | 'kg/h'
  | 'mt/h'
  | 'kg/s'
  | 'kg/h'
  | 'mt/h'
  | 'kg/min'
  | 'm3(cwe)/h'
  | 'l(cwe)/s'
  | 'l(cwe)/min'
  | 'gal(cwe)/s'
  | 'gal(cwe)/min'
  | 'gal(cwe)/h'
  | 'ft3(cwe)/s'
  | 'ft3(cwe)/min'
  | 'ft3(cwe)/h';
export type MassFlowRateImperialUnits = 'lb/s' | 'lb/h';

const metric: Record<MassFlowRateMetricUnits, Unit> = {
  'kg/s': {
    name: {
      singular: 'Kilogram per second',
      plural: 'Kilograms per second',
    },
    to_anchor: 1,
  },
  'kg/h': {
    name: {
      singular: 'Kilogram per hour',
      plural: 'Kilograms per hour',
    },
    to_anchor: 1 / 3600,
  },
  'mt/h': {
    name: {
      singular: 'Ton per hour',
      plural: 'Tons per hour',
    },
    to_anchor: 1 / 3.6,
  },
  'kg/min': {
    name: {
      singular: 'Kilogram per minute',
      plural: 'Kilograms per minute',
    },
    to_anchor: 1 / 60,
  },
  'm3(cwe)/h': {
    name: {
      singular: 'Metre cubed per hour (Cold Water Equivalent)',
      plural: 'Metres cubed per hour (Cold Water Equivalent)',
    },
    to_anchor: 1 / 3.6,
  },
  'l(cwe)/s': {
    name: {
      singular: 'Litre per second (Cold Water Equivalent)',
      plural: 'Litres per second (Cold Water Equivalent)',
    },
    to_anchor: 1,
  },
  'l(cwe)/min': {
    name: {
      singular: 'Litre per minute (Cold Water Equivalent)',
      plural: 'Litres per minute (Cold Water Equivalent)',
    },
    to_anchor: 1 / 60,
  },
  //
  'gal(cwe)/s': {
    name: {
      singular: 'Gallon per second (Cold Water Equivalent)',
      plural: 'Gallons per second (Cold Water Equivalent)',
    },
    to_anchor: 1 / 0.264172052,
  },
  'gal(cwe)/min': {
    name: {
      singular: 'Gallon per minute (Cold Water Equivalent)',
      plural: 'Gallons per minute (Cold Water Equivalent)',
    },
    to_anchor: 1 / 15.85032314,
  },
  'gal(cwe)/h': {
    name: {
      singular: 'Gallon per hour (Cold Water Equivalent)',
      plural: 'Gallons per hour (Cold Water Equivalent)',
    },
    to_anchor: 1 / 951.0193885,
  },
  'ft3(cwe)/s': {
    name: {
      singular: 'Cubic foot per second (Cold Water Equivalent)',
      plural: 'Cubic feet per second (Cold Water Equivalent)',
    },
    to_anchor: 1 / 0.035314667,
  },
  'ft3(cwe)/min': {
    name: {
      singular: 'Cubic foot per minute (Cold Water Equivalent)',
      plural: 'Cubic feet per minute (Cold Water Equivalent)',
    },
    to_anchor: 1 / 2.118880003,
  },
  'ft3(cwe)/h': {
    name: {
      singular: 'Cubic foot per hour (Cold Water Equivalent)',
      plural: 'Cubic feet per hour (Cold Water Equivalent)',
    },
    to_anchor: 1 / 127.1328002,
  },
};

const imperial: Record<MassFlowRateImperialUnits, Unit> = {
  'lb/s': {
    name: {
      singular: 'Pound per second',
      plural: 'Pounds per second',
    },
    to_anchor: 1,
  },
  'lb/h': {
    name: {
      singular: 'Pound per hour',
      plural: 'Pounds per hour',
    },
    to_anchor: 1 / 3600,
  },
};

const measure: Measure<MassFlowRateSystems, MassFlowRateUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 1 / 0.453592,
      },
    },
    imperial: {
      metric: {
        ratio: 0.453592,
      },
    },
  },
};

export default measure;
