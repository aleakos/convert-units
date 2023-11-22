import { Measure, Unit } from '../index';

export type HeatCapacityMetricUnits = 'J/kg/K' | 'kJ/kg/K';
export type HeatCapacityImperialUnits = 'BTU/lb/F';

export type HeatCapacityUnits =
  | HeatCapacityMetricUnits
  | HeatCapacityImperialUnits;
export type HeatCapacitySystems = 'metric' | 'imperial';

const metric: Record<HeatCapacityMetricUnits, Unit> = {
  'J/kg/K': {
    name: {
      singular: 'Joule per kilogram Kelvin',
      plural: 'Joules per kilogram Kelvin',
    },
    to_anchor: 1,
  },
  'kJ/kg/K': {
    name: {
      singular: 'Kilojoule per kilogram Kelvin',
      plural: 'Kilojoules per kilogram Kelvin',
    },
    to_anchor: 1000,
  },
};

const imperial: Record<HeatCapacityImperialUnits, Unit> = {
  'BTU/lb/F': {
    name: {
      singular: 'British thermal unit per pound Fahrenheit',
      plural: 'British thermal units per pound Fahrenheit',
    },
    to_anchor: 1,
  },
};

const measure: Measure<HeatCapacitySystems, HeatCapacityUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.000238845896627495,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 0.000238845896627495,
      },
    },
  },
};

export default measure;
