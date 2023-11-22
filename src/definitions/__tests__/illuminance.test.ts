import { configMeasurements } from '../..';
import illuminance, {
  IlluminanceSystems,
  IlluminanceUnits,
} from '../illuminance';

test('ft-cd to lx', () => {
  const convert = configMeasurements<
    'illuminance',
    IlluminanceSystems,
    IlluminanceUnits
  >({
    illuminance,
  });
  expect(convert(1).from('ft-cd').to('lx')).toBe(10.76391);
});

test('lx to ft-cd', () => {
  const convert = configMeasurements<
    'illuminance',
    IlluminanceSystems,
    IlluminanceUnits
  >({
    illuminance,
  });
  expect(convert(1).from('lx').to('ft-cd')).toBe(0.09290304359661128);
});
