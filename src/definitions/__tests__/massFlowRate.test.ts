import configureMeasurements from '../..';

import massFlowRate, {
  MassFlowRateSystems,
  MassFlowRateUnits,
} from '../massFlowRate';

test('kg/s to kg/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('kg/s').to('kg/h')).toBe(3600);
});

test('lb/s to lb/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('lb/s').to('lb/h')).toBe(3600);
});

test('kg/s to lb/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('kg/s').to('lb/s')).toBeCloseTo(2.204623);
});

test('lb/s to kg/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('lb/s').to('kg/s')).toBeCloseTo(0.453592);
});

test('kg/h to lb/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('kg/h').to('lb/h')).toBeCloseTo(2.204623);
});

test('lb/h to kg/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('lb/h').to('kg/h')).toBeCloseTo(0.453592);
});

test('kg/h to t/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('kg/h').to('mt/h')).toBe(0.001);
});

test('mt/h to kg/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('mt/h').to('kg/h')).toBe(1000);
});

test('lb/h to t/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('lb/h').to('mt/h')).toBeCloseTo(0.0004535924);
});

test('mt/h to lb/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('mt/h').to('lb/h')).toBeCloseTo(2204.622622);
});

test('kg/min to kg/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('kg/min').to('kg/s')).toBeCloseTo(1 / 60);
});

test('kg/min to lb/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('kg/min').to('lb/s')).toBeCloseTo(1 / 60 / 0.453592);
});

test('m3(cwe)/h to kg/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('m3(cwe)/h').to('kg/s')).toBeCloseTo(1 / 3.6);
});

test('m3(cwe)/h to lb/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('m3(cwe)/h').to('lb/s')).toBeCloseTo(
    1 / 3.6 / 0.453592
  );
});

test('l(cwe)/s to kg/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('l(cwe)/s').to('kg/s')).toBeCloseTo(1);
});

test('l(cwe)/s to lb/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('l(cwe)/s').to('lb/s')).toBeCloseTo(1 / 0.453592);
});

test('l(cwe)/min to kg/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('l(cwe)/min').to('kg/s')).toBeCloseTo(1 / 60);
});

test('l(cwe)/min to lb/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('l(cwe)/min').to('lb/s')).toBeCloseTo(
    1 / 60 / 0.453592
  );
});

test('gal(cwe)/s to kg/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('gal(cwe)/s').to('kg/s')).toBeCloseTo(1 / 0.264172052);
});

test('gal(cwe)/s to lb/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('gal(cwe)/s').to('lb/s')).toBeCloseTo(
    1 / 0.264172052 / 0.453592
  );
});

test('gal(cwe)/min to kg/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('gal(cwe)/min').to('kg/s')).toBeCloseTo(
    1 / 15.85032314
  );
});

test('gal(cwe)/min to lb/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('gal(cwe)/min').to('lb/s')).toBeCloseTo(
    1 / 15.85032314 / 0.453592
  );
});

test('gal(cwe)/h to kg/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('gal(cwe)/h').to('kg/s')).toBeCloseTo(1 / 951.0193885);
});

test('gal(cwe)/h to lb/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('gal(cwe)/h').to('lb/s')).toBeCloseTo(
    1 / 951.0193885 / 0.453592
  );
});

test('ft3(cwe)/s to kg/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('ft3(cwe)/s').to('kg/s')).toBeCloseTo(1 / 0.035314667);
});

test('ft3(cwe)/s to lb/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('ft3(cwe)/s').to('lb/s')).toBeCloseTo(
    1 / 0.035314667 / 0.453592
  );
});

test('ft3(cwe)/min to kg/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('ft3(cwe)/min').to('kg/s')).toBeCloseTo(
    1 / 2.118880003
  );
});

test('ft3(cwe)/min to lb/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('ft3(cwe)/min').to('lb/s')).toBeCloseTo(
    1 / 2.118880003 / 0.453592
  );
});

test('ft3(cwe)/h to kg/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('ft3(cwe)/h').to('kg/s')).toBeCloseTo(1 / 127.1328002);
});

test('ft3(cwe)/h to lb/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('ft3(cwe)/h').to('lb/s')).toBeCloseTo(
    1 / 127.1328002 / 0.453592
  );
});
