import { configMeasurements } from '../..';
import thermalResistance, {
  ThermalResistanceSystems,
  ThermalResistanceUnits,
} from '../thermalResistance';

test('mK/W to mK/W', () => {
  const convert = configMeasurements<
    'thermalResistance',
    ThermalResistanceSystems,
    ThermalResistanceUnits
  >({
    thermalResistance,
  });
  expect(convert(1).from('mK/W').to('mK/W')).toBe(1);
});

test('mK/W to cmK/W', () => {
  const convert = configMeasurements<
    'thermalResistance',
    ThermalResistanceSystems,
    ThermalResistanceUnits
  >({
    thermalResistance,
  });
  expect(convert(1).from('mK/W').to('cmK/W')).toBeCloseTo(100);
});

test('mK/W to hftF/BTU', () => {
  const convert = configMeasurements<
    'thermalResistance',
    ThermalResistanceSystems,
    ThermalResistanceUnits
  >({
    thermalResistance,
  });
  expect(convert(1).from('mK/W').to('hftF/BTU')).toBeCloseTo(
    1 * 1.72957720562693
  );
});

test('cmK/W to mK/W', () => {
  const convert = configMeasurements<
    'thermalResistance',
    ThermalResistanceSystems,
    ThermalResistanceUnits
  >({
    thermalResistance,
  });
  expect(convert(1).from('cmK/W').to('mK/W')).toBe(0.01);
});

test('cmK/W to hftF/BTU', () => {
  const convert = configMeasurements<
    'thermalResistance',
    ThermalResistanceSystems,
    ThermalResistanceUnits
  >({
    thermalResistance,
  });
  expect(convert(1).from('cmK/W').to('hftF/BTU')).toBeCloseTo(
    0.01 * 1.72957720562693
  );
});

test('hftF/BTU to mK/W', () => {
  const convert = configMeasurements<
    'thermalResistance',
    ThermalResistanceSystems,
    ThermalResistanceUnits
  >({
    thermalResistance,
  });
  expect(convert(1).from('hftF/BTU').to('mK/W')).toBeCloseTo(
    1 / 1.72957720562693
  );
});

test('hftF/BTU to cmK/W', () => {
  const convert = configMeasurements<
    'thermalResistance',
    ThermalResistanceSystems,
    ThermalResistanceUnits
  >({
    thermalResistance,
  });
  expect(convert(1).from('hftF/BTU').to('cmK/W')).toBeCloseTo(
    100 / 1.72957720562693
  );
});
