import { Measure, Unit } from '../index';

export type ThermalConductivityMetricUnits = 'W/m/K' | 'W/cm/K';
export type ThermalConductivityImperialUnits = 'BTU/h/ft/F';

export type ThermalConductivityUnits =
  | ThermalConductivityMetricUnits
  | ThermalConductivityImperialUnits;
export type ThermalConductivitySystems = 'metric' | 'imperial';

const metric: Record<ThermalConductivityMetricUnits, Unit> = {
  'W/m/K': {
    name: {
      singular: 'Watt per metre Kelvin',
      plural: 'Watts per metre Kelvin',
    },
    to_anchor: 1,
  },
  'W/cm/K': {
    name: {
      singular: 'Watt per centimetre Kelvin',
      plural: 'Watts per centimetre Kelvin',
    },
    to_anchor: 100,
  },
};

const imperial: Record<ThermalConductivityImperialUnits, Unit> = {
  'BTU/h/ft/F': {
    name: {
      singular: 'British thermal unit per hour foot Fahrenheit',
      plural: 'British thermal units per hour foot Fahrenheit',
    },
    to_anchor: 1,
  },
};

const measure: Measure<ThermalConductivitySystems, ThermalConductivityUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.578175982,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 0.578175982,
      },
    },
  },
};

export default measure;
