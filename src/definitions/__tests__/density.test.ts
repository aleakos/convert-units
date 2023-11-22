import { configMeasurements } from '../..';
import density, { DensitySystems, DensityUnits } from '../density';

test('kg/m3 to kg/m3', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('kg/m3').to('kg/m3')).toBe(1);
});

test('kg/m3 to g/cm3', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('kg/m3').to('g/cm3')).toBeCloseTo(0.001);
});

test('kg/m3 to sg', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('kg/m3').to('sg')).toBeCloseTo(0.001);
});

test('kg/m3 to lb/ft3', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('kg/m3').to('lb/ft3')).toBeCloseTo(1 * 0.062427961);
});

test('g/cm3 to kg/m3', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('g/cm3').to('kg/m3')).toBe(1000);
});

test('g/cm3 to sg', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('g/cm3').to('sg')).toBe(1);
});

test('g/cm3 to lb/ft3', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('g/cm3').to('lb/ft3')).toBeCloseTo(1000 * 0.062427961);
});

test('sg to kg/m3', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('sg').to('kg/m3')).toBe(1000);
});

test('sg to g/cm3', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('sg').to('g/cm3')).toBe(1);
});

test('sg to lb/ft3', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('sg').to('lb/ft3')).toBeCloseTo(1000 * 0.062427961);
});

test('lb/ft3 to kg/m3', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('lb/ft3').to('kg/m3')).toBeCloseTo(1 / 0.062427961);
});

test('lb/ft3 to g/cm3', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('lb/ft3').to('g/cm3')).toBeCloseTo(
    1 / 0.062427961 / 1000
  );
});

test('lb/ft3 to sg', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  expect(convert(1).from('lb/ft3').to('sg')).toBeCloseTo(
    1 / 0.062427961 / 1000
  );
});
