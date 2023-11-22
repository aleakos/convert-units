import configureMeasurements from '../..';
import inverseEnergy, {
  InverseEnergySystems,
  InverseEnergyUnits,
} from '../inverseEnergy';

test('/Ws to /Ws', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Ws').to('/Ws')).toBeCloseTo(1 / 1);
});

test('/Ws to /Wm', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Ws').to('/Wm')).toBeCloseTo(1 / 0.016_667);
});

test('/Ws to /Wh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Ws').to('/Wh')).toBeCloseTo(1 / 0.000_277_778);
});

test('/Ws to /mWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Ws').to('/mWh')).toBeCloseTo(1 / 0.277_778);
});

test('/Ws to /kWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Ws').to('/kWh')).toBeCloseTo(3.6e6);
});

test('/Ws to /MWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Ws').to('/MWh')).toBe(3600000000);
});

test('/Ws to /GWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Ws').to('/GWh')).toBe(3600000000000);
});

test('/Ws to /J', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Ws').to('/J')).toBeCloseTo(1 / 1);
});

test('/Ws to /kJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Ws').to('/kJ')).toBeCloseTo(1 / 0.001);
});

test('/Ws to /MJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Ws').to('/MJ')).toBeCloseTo(1 / 0.000_001);
});

test('/Ws to /GJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Ws').to('/GJ')).toBeCloseTo(1 / 0.000_000_001);
});

test('/Wm to /Wm', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wm').to('/Wm')).toBeCloseTo(1 / 1);
});

test('/Wm to /Ws', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wm').to('/Ws')).toBeCloseTo(1 / 60);
});

test('/Wm to /Wh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wm').to('/Wh')).toBeCloseTo(1 / 0.016667);
});

test('/Wm to /mWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wm').to('/mWh')).toBeCloseTo(1 / 16.666_67);
});

test('/Wm to /kWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wm').to('/kWh')).toBeCloseTo(60000);
});

test('/Wm to /MWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wm').to('/MWh')).toBe(60000000);
});

test('/Wm to /GWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wm').to('/GWh')).toBeCloseTo(60_000_000_000);
});

test('/Wm to /J', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wm').to('/J')).toBeCloseTo(1 / 60);
});

test('/Wm to /kJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wm').to('/kJ')).toBeCloseTo(1 / 0.06);
});

test('/Wm to /MJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wm').to('/MJ')).toBeCloseTo(1 / 0.000_06);
});

test('/Wm to /GJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wm').to('/GJ')).toBeCloseTo(1 / 0.000_000_06);
});

test('/Wh to /Wh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wh').to('/Wh')).toBeCloseTo(1 / 1);
});

test('/mWh to /mWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/mWh').to('/mWh')).toBeCloseTo(1 / 1);
});

test('/kWh to /kWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/kWh').to('/kWh')).toBeCloseTo(1 / 1);
});

test('/MWh to /MWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/MWh').to('/MWh')).toBeCloseTo(1 / 1);
});

test('/GWh to /GWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/GWh').to('/GWh')).toBeCloseTo(1 / 1);
});

test('/J to /J', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/J').to('/J')).toBeCloseTo(1 / 1);
});

test('/kJ to /kJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/kJ').to('/kJ')).toBeCloseTo(1 / 1);
});

test('/MJ to /MJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/MJ').to('/MJ')).toBeCloseTo(1 / 1);
});

test('/GJ to /GJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/GJ').to('/GJ')).toBeCloseTo(1 / 1);
});

test('/Wh to /J', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wh').to('/J')).toBeCloseTo(1 / 3600);
});

test('/Wh to /mWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wh').to('/mWh')).toBeCloseTo(1 / 1000);
});

test('/Wh to /kWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wh').to('/kWh')).toBeCloseTo(1 / 0.001);
});

test('/Wh to /MWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wh').to('/MWh')).toBeCloseTo(1 / 0.000001);
});

test('/Wh to /GWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/Wh').to('/GWh')).toBeCloseTo(1 / 0.000000001);
});

test('/GWh to /mWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/GWh').to('/mWh')).toBeCloseTo(1 / 1000000000000);
});

test('/GWh to /J', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/GWh').to('/J')).toBeCloseTo(1 / 3600000000000);
});

test('/MWh to /mWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/MWh').to('/mWh')).toBeCloseTo(1 / 1000000000);
});

test('/kWh to /mWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/kWh').to('/mWh')).toBeCloseTo(1 / 1000000);
});

test('/mWh to /kWh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/mWh').to('/kWh')).toBeCloseTo(1 / 0.000001);
});

test('/mWh to /Wh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/mWh').to('/Wh')).toBeCloseTo(1 / 0.001);
});

test('/kWh to /Wh', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/kWh').to('/Wh')).toBeCloseTo(1 / 1000);
});

test('/kWh to /kJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/kWh').to('/kJ')).toBeCloseTo(1 / 3600);
});

test('/MJ to /J', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/MJ').to('/J')).toBeCloseTo(1 / 1_000_000);
});

test('/GJ to /J', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/GJ').to('/J')).toBeCloseTo(1 / 1_000_000_000);
});

test('/GJ to /MJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/GJ').to('/MJ')).toBeCloseTo(1 / 1_000);
});

test('/MJ to /kJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/MJ').to('/kJ')).toBeCloseTo(1 / 1_000);
});

test('/MWh to /MJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/MWh').to('/MJ')).toBeCloseTo(1 / 3_600);
});

test('/MWh to /GJ', () => {
  const convert = configureMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  expect(convert(1).from('/MWh').to('/GJ')).toBeCloseTo(1 / 3.6);
});
