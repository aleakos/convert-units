import { Measure, Unit } from '../index';

export type InverseEnergyUnits = InverseEnergySIUnits;
export type InverseEnergySystems = 'SI';

export type InverseEnergySIUnits =
  | '/Ws'
  | '/Wm'
  | '/Wh'
  | '/mWh'
  | '/kWh'
  | '/MWh'
  | '/GWh'
  | '/J'
  | '/kJ'
  | '/MJ'
  | '/GJ';

const SI: Record<InverseEnergySIUnits, Unit> = {
  '/Ws': {
    name: {
      singular: 'Inverse Watt-second',
      plural: 'Inverse Watt-seconds',
    },
    to_anchor: 1,
  },
  '/Wm': {
    name: {
      singular: 'Inverse Watt-minute',
      plural: 'Inverse Watt-minutes',
    },
    to_anchor: 1 / 60,
  },
  '/Wh': {
    name: {
      singular: 'Inverse Watt-hour',
      plural: 'Inverse Watt-hours',
    },
    to_anchor: 1 / 3600,
  },
  '/mWh': {
    name: {
      singular: 'Inverse Milliwatt-hour',
      plural: 'Inverse Milliwatt-hours',
    },
    to_anchor: 1 / 3.6,
  },
  '/kWh': {
    name: {
      singular: 'Inverse Kilowatt-hour',
      plural: 'Inverse Kilowatt-hours',
    },
    to_anchor: 1 / 3600000,
  },
  '/MWh': {
    name: {
      singular: 'Inverse Megawatt-hour',
      plural: 'Inverse Megawatt-hours',
    },
    to_anchor: 1 / 3600000000,
  },
  '/GWh': {
    name: {
      singular: 'Inverse Gigawatt-hour',
      plural: 'Inverse Gigawatt-hours',
    },
    to_anchor: 1 / 3600000000000,
  },
  '/J': {
    name: {
      singular: 'Inverse Joule',
      plural: 'Inverse Joules',
    },
    to_anchor: 1,
  },
  '/kJ': {
    name: {
      singular: 'Inverse Kilojoule',
      plural: 'Inverse Kilojoules',
    },
    to_anchor: 1 / 1000,
  },
  '/MJ': {
    name: {
      singular: 'Inverse Megajoule',
      plural: 'Inverse Megajoules',
    },
    to_anchor: 1 / 1_000_000,
  },
  '/GJ': {
    name: {
      singular: 'Inverse Gigajoule',
      plural: 'Inverse Gigajoules',
    },
    to_anchor: 1 / 1_000_000_000,
  },
};

const measure: Measure<InverseEnergySystems, InverseEnergyUnits> = {
  systems: {
    SI,
  },
};

export default measure;
