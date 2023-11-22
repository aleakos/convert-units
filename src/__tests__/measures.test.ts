import configureMeasurements from '..';
import allMeasures, {
  AllMeasures,
  AllMeasuresSystems,
  AllMeasuresUnits,
} from '../definitions/all';

test('measures', () => {
  const convert = configureMeasurements<
    AllMeasures,
    AllMeasuresSystems,
    AllMeasuresUnits
  >(allMeasures);
  const actual = convert().measures(),
    expected = [
      'acceleration',
      'angle',
      'apparentPower',
      'area',
      'charge',
      'current',
      'density',
      'digital',
      'thermalConductivity',
      'each',
      'energy',
      'force',
      'frequency',
      'heatCapacity',
      'illuminance',
      'inverseEnergy',
      'inverseLength',
      'inverseTime',
      'length',
      'mass',
      'massFlowRate',
      'pace',
      'partsPer',
      'pieces',
      'power',
      'pressure',
      'reactiveEnergy',
      'reactivePower',
      'thermalResistance',
      'speed',
      'torque',
      'temperature',
      'temperatureGradient',
      'time',
      'voltage',
      'volume',
      'volumeFlowRate',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});
