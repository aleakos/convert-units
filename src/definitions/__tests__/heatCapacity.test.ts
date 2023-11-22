import configureMeasurements from '../..';
import heatCapacity, {
  HeatCapacitySystems,
  HeatCapacityUnits,
} from '../heatCapacity';

test('J/kg/K to J/kg/K', () => {
  const convert = configureMeasurements<
    'heatCapacity',
    HeatCapacitySystems,
    HeatCapacityUnits
  >({
    heatCapacity,
  });
  expect(convert(1).from('J/kg/K').to('J/kg/K')).toBe(1);
});

test('J/kg/K to kJ/kg/K', () => {
  const convert = configureMeasurements<
    'heatCapacity',
    HeatCapacitySystems,
    HeatCapacityUnits
  >({
    heatCapacity,
  });
  expect(convert(1).from('J/kg/K').to('kJ/kg/K')).toBeCloseTo(0.001);
});

test('J/kg/K to BTU/lb/F', () => {
  const convert = configureMeasurements<
    'heatCapacity',
    HeatCapacitySystems,
    HeatCapacityUnits
  >({
    heatCapacity,
  });
  expect(convert(1).from('J/kg/K').to('BTU/lb/F')).toBeCloseTo(
    1 * 0.000238845896627495
  );
});

test('kJ/kg/K to J/kg/K', () => {
  const convert = configureMeasurements<
    'heatCapacity',
    HeatCapacitySystems,
    HeatCapacityUnits
  >({
    heatCapacity,
  });
  expect(convert(1).from('kJ/kg/K').to('J/kg/K')).toBe(1000);
});

test('kJ/kg/K to BTU/lb/F', () => {
  const convert = configureMeasurements<
    'heatCapacity',
    HeatCapacitySystems,
    HeatCapacityUnits
  >({
    heatCapacity,
  });
  expect(convert(1).from('kJ/kg/K').to('BTU/lb/F')).toBeCloseTo(
    1000 * 0.000238845896627495
  );
});

test('BTU/lb/F to J/kg/K', () => {
  const convert = configureMeasurements<
    'heatCapacity',
    HeatCapacitySystems,
    HeatCapacityUnits
  >({
    heatCapacity,
  });
  expect(convert(1).from('BTU/lb/F').to('J/kg/K')).toBeCloseTo(
    1 / 0.000238845896627495
  );
});

test('BTU/lb/F to kJ/kg/K', () => {
  const convert = configureMeasurements<
    'heatCapacity',
    HeatCapacitySystems,
    HeatCapacityUnits
  >({
    heatCapacity,
  });
  expect(convert(1).from('BTU/lb/F').to('kJ/kg/K')).toBeCloseTo(
    1 / 0.000238845896627495 / 1000
  );
});
