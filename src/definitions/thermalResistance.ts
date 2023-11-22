import { Measure, Unit } from '../index';

export type ThermalResistanceMetricUnits = 'mK/W' | 'cmK/W';
export type ThermalResistanceImperialUnits = 'hftF/BTU';

export type ThermalResistanceUnits =
  | ThermalResistanceMetricUnits
  | ThermalResistanceImperialUnits;
export type ThermalResistanceSystems = 'metric' | 'imperial';

const metric: Record<ThermalResistanceMetricUnits, Unit> = {
  'mK/W': {
    name: {
      singular: 'Metre Kelvin per Watt',
      plural: 'Metres Kelvin per Watt',
    },
    to_anchor: 1,
  },
  'cmK/W': {
    name: {
      singular: 'Centimetre Kelvin per Watt',
      plural: 'Centimetres Kelvin per Watt',
    },
    to_anchor: 0.01,
  },
};

const imperial: Record<ThermalResistanceImperialUnits, Unit> = {
  'hftF/BTU': {
    name: {
      singular: 'hour foot Fahrenheit per British thermal unit',
      plural: 'hours foot Fahrenheit per British thermal unit',
    },
    to_anchor: 1,
  },
};

const measure: Measure<ThermalResistanceSystems, ThermalResistanceUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 1.72957720562693,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 1.72957720562693,
      },
    },
  },
};

export default measure;
