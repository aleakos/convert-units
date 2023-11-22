import { Measure, Unit } from '../index';
export type InverseTimeUnits = InverseTimeSIUnits;
export type InverseTimeSystems = 'SI';

export type InverseTimeSIUnits =
  | '/ns'
  | '/mu'
  | '/ms'
  | '/s'
  | '/min'
  | '/h'
  | '/d'
  | '/week'
  | '/month'
  | '/year';

const daysInYear = 365.25;

const SI: Record<InverseTimeSIUnits, Unit> = {
  '/ns': {
    name: {
      singular: 'Inverse Nanosecond',
      plural: 'Inverse Nanoseconds',
    },
    to_anchor: 1000000000,
  },
  '/mu': {
    name: {
      singular: 'Inverse Microsecond',
      plural: 'Inverse Microseconds',
    },
    to_anchor: 1000000,
  },
  '/ms': {
    name: {
      singular: 'Inverse Millisecond',
      plural: 'Inverse Milliseconds',
    },
    to_anchor: 1000,
  },
  '/s': {
    name: {
      singular: 'Inverse Second',
      plural: 'Inverse Seconds',
    },
    to_anchor: 1,
  },
  '/min': {
    name: {
      singular: 'Inverse Minute',
      plural: 'Inverse Minutes',
    },
    to_anchor: 1 / 60,
  },
  '/h': {
    name: {
      singular: 'Inverse Hour',
      plural: 'Inverse Hours',
    },
    to_anchor: 1 / (60 * 60),
  },
  '/d': {
    name: {
      singular: 'Inverse Day',
      plural: 'Inverse Days',
    },
    to_anchor: 1 / (60 * 60 * 24),
  },
  '/week': {
    name: {
      singular: 'Inverse Week',
      plural: 'Inverse Weeks',
    },
    to_anchor: 1 / (60 * 60 * 24 * 7),
  },
  '/month': {
    name: {
      singular: 'Month',
      plural: 'Months',
    },
    to_anchor: 1 / ((60 * 60 * 24 * daysInYear) / 12),
  },
  '/year': {
    name: {
      singular: 'Inverse Year',
      plural: 'Inverse Years',
    },
    to_anchor: 1 / (60 * 60 * 24 * daysInYear),
  },
};

const measure: Measure<InverseTimeSystems, InverseTimeUnits> = {
  systems: {
    SI,
  },
};

export default measure;
