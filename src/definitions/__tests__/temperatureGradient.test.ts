import { configMeasurements } from '../..';
import temperatureGradient, {
  TemperatureGradientSystems,
  TemperatureGradientUnits,
} from '../temperatureGradient';

test('C/km to C/km', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('C/km').to('C/km')).toBe(1);
});

test('C/km to C/100m', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('C/km').to('C/100m')).toBeCloseTo(0.1);
});

test('C/km to C/m', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('C/km').to('C/m')).toBeCloseTo(0.001);
});

test('C/km to F/ft', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('C/km').to('F/ft')).toBeCloseTo(0.001 * 0.54864);
});

test('C/100m to C/km', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('C/100m').to('C/km')).toBe(10);
});

test('C/100m to C/m', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('C/100m').to('C/m')).toBeCloseTo(0.01);
});

test('C/100m to F/ft', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('C/100m').to('F/ft')).toBeCloseTo(0.01 * 0.54864);
});

test('C/m to C/km', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('C/m').to('C/km')).toBe(1000);
});

test('C/m to C/100m', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('C/m').to('C/100m')).toBe(100);
});

test('C/m to F/ft', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('C/m').to('F/ft')).toBeCloseTo(1 * 0.54864);
});

test('F/ft to C/km', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('F/ft').to('C/km')).toBeCloseTo(1 / 0.54864 / 0.001);
});

test('F/ft to C/100m', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('F/ft').to('C/100m')).toBeCloseTo(1 / 0.54864 / 0.01);
});

test('F/ft to C/m', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('F/ft').to('C/m')).toBeCloseTo(1 / 0.54864);
});

test('F/100ft to C/km', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('F/100ft').to('C/km')).toBeCloseTo(
    0.01 / 0.54864 / 0.001
  );
});

test('F/100ft to C/100m', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('F/100ft').to('C/100m')).toBeCloseTo(
    0.01 / 0.54864 / 0.01
  );
});

test('F/100ft to C/m', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  expect(convert(1).from('F/100ft').to('C/m')).toBeCloseTo(0.01 / 0.54864);
});
