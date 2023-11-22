import configureMeasurements from '../..';
import inverseTime, {
  InverseTimeSystems,
  InverseTimeUnits,
} from '../inverseTime';

test('/ns to /s', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(1).from('/ns').to('/s')).toBeCloseTo(1e9);
});

test('/mu to /s', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(1).from('/mu').to('/s')).toBe(1000000);
});

test('/ms to /s', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(1).from('/s').to('/ms')).toBe(1 / 1000);
});

test('/min to /s', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(60).from('/min').to('/s')).toBe(1);
});

test('/s to /s', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(1).from('/s').to('/s')).toBe(1);
});

test('/h to /s', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(3600).from('/h').to('/s')).toBe(1);
});

test('/d to /s', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(86400).from('/d').to('/s')).toBe(1);
});

test('/week to /d', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(7).from('/week').to('/d')).toBeCloseTo(1);
});

test('/month to /d', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(30.4375).from('/month').to('/d')).toBe(1);
});

test('/d to /year', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(365.25).from('/year').to('/d')).toBe(1);
});

test('/month to /week', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(4.34821).from('/month').to('/week')).toBeCloseTo(1);
});

test('/year to /week', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(52.17857).from('/year').to('/week')).toBeCloseTo(1);
});

test('/year to /month', () => {
  const convert = configureMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  expect(convert(12).from('/year').to('/month')).toBeCloseTo(1);
});
