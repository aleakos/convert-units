import { configMeasurements } from '../..';
import thermalConductivity, {
  ThermalConductivitySystems,
  ThermalConductivityUnits,
} from '../thermalConductivity';

test('W/m/K to W/m/K', () => {
  const convert = configMeasurements<
    'thermalConductivity',
    ThermalConductivitySystems,
    ThermalConductivityUnits
  >({
    thermalConductivity,
  });
  expect(convert(1).from('W/m/K').to('W/m/K')).toBe(1);
});

test('W/m/K to W/cm/K', () => {
  const convert = configMeasurements<
    'thermalConductivity',
    ThermalConductivitySystems,
    ThermalConductivityUnits
  >({
    thermalConductivity,
  });
  expect(convert(1).from('W/m/K').to('W/cm/K')).toBeCloseTo(0.01);
});

test('W/m/K to BTU/h/ft/F', () => {
  const convert = configMeasurements<
    'thermalConductivity',
    ThermalConductivitySystems,
    ThermalConductivityUnits
  >({
    thermalConductivity,
  });
  expect(convert(1).from('W/m/K').to('BTU/h/ft/F')).toBeCloseTo(
    1 * 0.578175982
  );
});

test('W/cm/K to W/m/K', () => {
  const convert = configMeasurements<
    'thermalConductivity',
    ThermalConductivitySystems,
    ThermalConductivityUnits
  >({
    thermalConductivity,
  });
  expect(convert(1).from('W/cm/K').to('W/m/K')).toBe(100);
});

test('W/cm/K to BTU/h/ft/F', () => {
  const convert = configMeasurements<
    'thermalConductivity',
    ThermalConductivitySystems,
    ThermalConductivityUnits
  >({
    thermalConductivity,
  });
  expect(convert(1).from('W/cm/K').to('BTU/h/ft/F')).toBeCloseTo(
    100 * 0.578175982
  );
});

test('BTU/h/ft/F to W/m/K', () => {
  const convert = configMeasurements<
    'thermalConductivity',
    ThermalConductivitySystems,
    ThermalConductivityUnits
  >({
    thermalConductivity,
  });
  expect(convert(1).from('BTU/h/ft/F').to('W/m/K')).toBeCloseTo(
    1 / 0.578175982
  );
});

test('BTU/h/ft/F to W/cm/K', () => {
  const convert = configMeasurements<
    'thermalConductivity',
    ThermalConductivitySystems,
    ThermalConductivityUnits
  >({
    thermalConductivity,
  });
  expect(convert(1).from('BTU/h/ft/F').to('W/cm/K')).toBeCloseTo(
    1 / 0.578175982 / 100
  );
});
