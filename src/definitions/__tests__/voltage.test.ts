import { configMeasurements } from '../..';
import voltage, { VoltageSystems, VoltageUnits } from '../voltage';

test('V to V', () => {
  const convert = configMeasurements<'voltage', VoltageSystems, VoltageUnits>({
    voltage,
  });
  expect(convert(1).from('V').to('V')).toBe(1);
});

test('mV to mV', () => {
  const convert = configMeasurements<'voltage', VoltageSystems, VoltageUnits>({
    voltage,
  });
  expect(convert(1).from('mV').to('mV')).toBe(1);
});

test('kV to kV', () => {
  const convert = configMeasurements<'voltage', VoltageSystems, VoltageUnits>({
    voltage,
  });
  expect(convert(1).from('kV').to('kV')).toBe(1);
});

test('V to mV', () => {
  const convert = configMeasurements<'voltage', VoltageSystems, VoltageUnits>({
    voltage,
  });
  expect(convert(1).from('V').to('mV')).toBe(1000);
});

test('V to kV', () => {
  const convert = configMeasurements<'voltage', VoltageSystems, VoltageUnits>({
    voltage,
  });
  expect(convert(1).from('V').to('kV')).toBe(0.001);
});

test('kV to mV', () => {
  const convert = configMeasurements<'voltage', VoltageSystems, VoltageUnits>({
    voltage,
  });
  expect(convert(1).from('kV').to('mV')).toBe(1000000);
});

test('mV to kV', () => {
  const convert = configMeasurements<'voltage', VoltageSystems, VoltageUnits>({
    voltage,
  });
  expect(convert(1).from('mV').to('kV')).toBe(0.000001);
});

test('mV to V', () => {
  const convert = configMeasurements<'voltage', VoltageSystems, VoltageUnits>({
    voltage,
  });
  expect(convert(1).from('mV').to('V')).toBe(0.001);
});

test('kV to V', () => {
  const convert = configMeasurements<'voltage', VoltageSystems, VoltageUnits>({
    voltage,
  });
  expect(convert(1).from('kV').to('V')).toBe(1000);
});
