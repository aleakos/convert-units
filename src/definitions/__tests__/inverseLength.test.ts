import { configMeasurements } from '../..';
import inverseLength, {
  InverseLengthSystems,
  InverseLengthUnits,
} from '../inverseLength';

test('/ft to /ft', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(1).from('/ft').to('/ft')).toBe(1 / 1);
});

test('/in to /in', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(7).from('/in').to('/in')).toBe(7);
});

test('/ft to /in', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(1).from('/ft').to('/in')).toBe(1 / 12);
});

test('/in to /ft', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(1).from('/in').to('/ft')).toBe(12);
});

test('/ft to /mi', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(1).from('/ft').to('/mi')).toBe(5280);
});

test('/mi to /ft', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(1).from('/mi').to('/ft')).toBe(1 / 5280);
});

test('/m to /m', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(1).from('/m').to('/m')).toBe(1 / 1);
});

test('/m to /cm', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(1).from('/m').to('/cm')).toBe(1 / 1e2);
});

test('/cm to /m', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(1).from('/cm').to('/m')).toBe(1 / 1e-2);
});

test('/m to /mm', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(1).from('/m').to('/mm')).toBe(1 / 1e3);
});

test('/km to /m', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(1).from('/km').to('/m')).toBe(1 / 1e3);
});

test('/m to /ft', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(1).from('/m').to('/ft')).toBeCloseTo(1 / 3.28084);
});

test('/mm to /ft', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  expect(convert(1).from('/mm').to('/ft')).toBeCloseTo(304.8);
});
