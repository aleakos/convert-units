import { configMeasurements } from '..';
import acceleration, {
  AccelerationSystems,
  AccelerationUnits,
} from '../definitions/acceleration';
import allMeasures, {
  AllMeasures,
  AllMeasuresSystems,
  AllMeasuresUnits,
} from '../definitions/all';
import angle, { AngleSystems, AngleUnits } from '../definitions/angle';
import apparentPower, {
  ApparentPowerSystems,
  ApparentPowerUnits,
} from '../definitions/apparentPower';
import charge, { ChargeSystems, ChargeUnits } from '../definitions/charge';
import current, { CurrentSystems, CurrentUnits } from '../definitions/current';
import density, { DensitySystems, DensityUnits } from '../definitions/density';
import digital, { DigitalSystems, DigitalUnits } from '../definitions/digital';
import each, { EachSystems, EachUnits } from '../definitions/each';
import energy, { EnergySystems, EnergyUnits } from '../definitions/energy';
import force, { ForceSystems, ForceUnits } from '../definitions/force';
import frequency, {
  FrequencySystems,
  FrequencyUnits,
} from '../definitions/frequency';
import heatCapacity, {
  HeatCapacitySystems,
  HeatCapacityUnits,
} from '../definitions/heatCapacity';
import illuminance, {
  IlluminanceSystems,
  IlluminanceUnits,
} from '../definitions/illuminance';
import inverseEnergy, {
  InverseEnergySystems,
  InverseEnergyUnits,
} from '../definitions/inverseEnergy';
import inverseLength, {
  InverseLengthSystems,
  InverseLengthUnits,
} from '../definitions/inverseLength';
import inverseTime, {
  InverseTimeSystems,
  InverseTimeUnits,
} from '../definitions/inverseTime';
import length, { LengthSystems, LengthUnits } from '../definitions/length';
import mass, { MassSystems, MassUnits } from '../definitions/mass';
import massFlowRate, {
  MassFlowRateSystems,
  MassFlowRateUnits,
} from '../definitions/massFlowRate';
import pace, { PaceSystems, PaceUnits } from '../definitions/pace';
import partsPer, {
  PartsPerSystems,
  PartsPerUnits,
} from '../definitions/partsPer';
import pieces, { PiecesSystems, PiecesUnits } from '../definitions/pieces';
import power, { PowerSystems, PowerUnits } from '../definitions/power';
import pressure, {
  PressureSystems,
  PressureUnits,
} from '../definitions/pressure';
import reactiveEnergy, {
  ReactiveEnergySystems,
  ReactiveEnergyUnits,
} from '../definitions/reactiveEnergy';
import reactivePower, {
  ReactivePowerSystems,
  ReactivePowerUnits,
} from '../definitions/reactivePower';
import speed, { SpeedSystems, SpeedUnits } from '../definitions/speed';
import temperature, {
  TemperatureSystems,
  TemperatureUnits,
} from '../definitions/temperature';
import temperatureGradient, {
  TemperatureGradientSystems,
  TemperatureGradientUnits,
} from '../definitions/temperatureGradient';
import thermalConductivity, {
  ThermalConductivitySystems,
  ThermalConductivityUnits,
} from '../definitions/thermalConductivity';
import thermalResistance, {
  ThermalResistanceSystems,
  ThermalResistanceUnits,
} from '../definitions/thermalResistance';
import time, { TimeSystems, TimeUnits } from '../definitions/time';
import torque, { TorqueSystems, TorqueUnits } from '../definitions/torque';
import voltage, { VoltageSystems, VoltageUnits } from '../definitions/voltage';
import volume, { VolumeSystems, VolumeUnits } from '../definitions/volume';
import volumeFlowRate, {
  VolumeFlowRateSystems,
  VolumeFlowRateUnits,
} from '../definitions/volumeFlowRate';

test('l possibilities', () => {
  const convert = configMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  const actual = convert().from('l').possibilities(),
    expected = [
      'mm3',
      'cm3',
      'ml',
      'cl',
      'dl',
      'l',
      'kl',
      'Ml',
      'Gl',
      'm3',
      'km3',
      'krm',
      'tsk',
      'msk',
      'kkp',
      'glas',
      'kanna',
      'tsp',
      'Tbs',
      'in3',
      'fl-oz',
      'cup',
      'pnt',
      'qt',
      'gal',
      'ft3',
      'yd3',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('kg possibilities', () => {
  const convert = configMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  const actual = convert().from('kg').possibilities(),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 'st', 't'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('m possibilities', () => {
  const convert = configMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert().from('m').possibilities(),
    expected = [
      'nm',
      'μm',
      'mm',
      'cm',
      'm',
      'km',
      'mil',
      'in',
      'yd',
      'ft-us',
      'ft',
      'fathom',
      'mi',
      'nMi',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('each possibilities', () => {
  const convert = configMeasurements<'each', EachSystems, EachUnits>({
    each,
  });
  const actual = convert().possibilities('each'),
    expected = ['ea', 'dz'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('mass possibilities', () => {
  const convert = configMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  const actual = convert().possibilities('mass'),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 'st', 't'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('mass flow rate possibilities', () => {
  const convert = configMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  const actual = convert().possibilities('massFlowRate'),
    expected = [
      'kg/h',
      'kg/s',
      'lb/h',
      'lb/s',
      'mt/h',
      'ft3(cwe)/h',
      'ft3(cwe)/min',
      'ft3(cwe)/s',
      'gal(cwe)/h',
      'gal(cwe)/min',
      'gal(cwe)/s',
      'kg/min',
      'l(cwe)/min',
      'l(cwe)/s',
      'm3(cwe)/h',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('volume possibilities', () => {
  const convert = configMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  const actual = convert().possibilities('volume'),
    expected = [
      'mm3',
      'cm3',
      'ml',
      'cl',
      'dl',
      'l',
      'kl',
      'Ml',
      'Gl',
      'm3',
      'km3',
      'krm',
      'tsk',
      'msk',
      'kkp',
      'glas',
      'kanna',
      'tsp',
      'Tbs',
      'in3',
      'fl-oz',
      'cup',
      'pnt',
      'qt',
      'gal',
      'ft3',
      'yd3',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('volume flow rate possibilities', () => {
  const convert = configMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  const actual = convert().possibilities('volumeFlowRate'),
    expected = [
      'mm3/s',
      'cm3/s',
      'ml/s',
      'cl/s',
      'dl/s',
      'l/s',
      'l/min',
      'l/h',
      'kl/s',
      'kl/min',
      'kl/h',
      'm3/s',
      'm3/min',
      'm3/h',
      'km3/s',
      'tsp/s',
      'Tbs/s',
      'in3/s',
      'in3/min',
      'in3/h',
      'fl-oz/s',
      'fl-oz/min',
      'fl-oz/h',
      'cup/s',
      'pnt/s',
      'pnt/min',
      'pnt/h',
      'qt/s',
      'gal/s',
      'gal/min',
      'gal/h',
      'ft3/s',
      'ft3/min',
      'ft3/h',
      'yd3/s',
      'yd3/min',
      'yd3/h',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('length possibilities', () => {
  const convert = configMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert().possibilities('length'),
    expected = [
      'nm',
      'μm',
      'mm',
      'cm',
      'm',
      'km',
      'mil',
      'in',
      'yd',
      'ft-us',
      'ft',
      'fathom',
      'mi',
      'nMi',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('temperature possibilities', () => {
  const convert = configMeasurements<
    'temperature',
    TemperatureSystems,
    TemperatureUnits
  >({
    temperature,
  });
  const actual = convert().possibilities('temperature'),
    expected = ['C', 'K', 'F', 'R'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('time possibilities', () => {
  const convert = configMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  const actual = convert().possibilities('time'),
    expected = [
      'ns',
      'mu',
      'ms',
      's',
      'min',
      'h',
      'd',
      'week',
      'month',
      'year',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('digital possibilities', () => {
  const convert = configMeasurements<'digital', DigitalSystems, DigitalUnits>({
    digital,
  });
  const actual = convert().possibilities('digital'),
    expected = ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('density possibilities', () => {
  const convert = configMeasurements<'density', DensitySystems, DensityUnits>({
    density,
  });
  const actual = convert().possibilities('density'),
    expected = ['g/cm3', 'kg/m3', 'lb/ft3', 'sg'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('thermalConductivity possibilities', () => {
  const convert = configMeasurements<
    'thermalConductivity',
    ThermalConductivitySystems,
    ThermalConductivityUnits
  >({
    thermalConductivity,
  });
  const actual = convert().possibilities('thermalConductivity'),
    expected = ['BTU/h/ft/F', 'W/cm/K', 'W/m/K'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('heatCapacity possibilities', () => {
  const convert = configMeasurements<
    'heatCapacity',
    HeatCapacitySystems,
    HeatCapacityUnits
  >({
    heatCapacity,
  });
  const actual = convert().possibilities('heatCapacity'),
    expected = ['BTU/lb/F', 'J/kg/K', 'kJ/kg/K'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('temperatureGradient possibilities', () => {
  const convert = configMeasurements<
    'temperatureGradient',
    TemperatureGradientSystems,
    TemperatureGradientUnits
  >({
    temperatureGradient,
  });
  const actual = convert().possibilities('temperatureGradient'),
    expected = ['C/100m', 'C/km', 'C/m', 'F/100ft', 'F/ft'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('inverseLength possibilities', () => {
  const convert = configMeasurements<
    'inverseLength',
    InverseLengthSystems,
    InverseLengthUnits
  >({
    inverseLength,
  });
  const actual = convert().possibilities('inverseLength'),
    expected = ['/cm', '/ft', '/in', '/km', '/m', '/mi', '/mm'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('inverseTime possibilities', () => {
  const convert = configMeasurements<
    'inverseTime',
    InverseTimeSystems,
    InverseTimeUnits
  >({
    inverseTime,
  });
  const actual = convert().possibilities('inverseTime'),
    expected = [
      '/d',
      '/h',
      '/min',
      '/month',
      '/ms',
      '/mu',
      '/ns',
      '/s',
      '/week',
      '/year',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('inverseEnergy possibilities', () => {
  const convert = configMeasurements<
    'inverseEnergy',
    InverseEnergySystems,
    InverseEnergyUnits
  >({
    inverseEnergy,
  });
  const actual = convert().possibilities('inverseEnergy'),
    expected = [
      '/GJ',
      '/GWh',
      '/J',
      '/MJ',
      '/MWh',
      '/Wh',
      '/Wm',
      '/Ws',
      '/kJ',
      '/kWh',
      '/mWh',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('thermalResistance possibilities', () => {
  const convert = configMeasurements<
    'thermalResistance',
    ThermalResistanceSystems,
    ThermalResistanceUnits
  >({
    thermalResistance,
  });
  const actual = convert().possibilities('thermalResistance'),
    expected = ['cmK/W', 'hftF/BTU', 'mK/W'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('partsPer possibilities', () => {
  const convert = configMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  const actual = convert().possibilities('partsPer'),
    expected = ['ppm', 'ppb', 'ppt', 'ppq'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pressure possibilities', () => {
  const convert = configMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  const actual = convert().possibilities('pressure'),
    expected = [
      'Pa',
      'kPa',
      'MPa',
      'hPa',
      'bar',
      'torr',
      'mH2O',
      'mmHg',
      'psi',
      'ksi',
      'inHg',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('speed possibilities', () => {
  const convert = configMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  const actual = convert().possibilities('speed'),
    expected = [
      'm/s',
      'km/h',
      'mph',
      'knot',
      'ft/s',
      'ft/min',
      'in/h',
      'mm/h',
      'ft/h',
      'm/h',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('torque possibilities', () => {
  const convert = configMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  const actual = convert().possibilities('torque'),
    expected = ['Nm', 'lbf-ft'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pace possibilities', () => {
  const convert = configMeasurements<'pace', PaceSystems, PaceUnits>({
    pace,
  });
  const actual = convert().possibilities('pace'),
    expected = ['min/km', 's/m', 'min/mi', 's/ft'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('current possibilities', () => {
  const convert = configMeasurements<'current', CurrentSystems, CurrentUnits>({
    current,
  });
  const actual = convert().possibilities('current'),
    expected = ['A', 'mA', 'kA'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('voltage possibilities', () => {
  const convert = configMeasurements<'voltage', VoltageSystems, VoltageUnits>({
    voltage,
  });
  const actual = convert().possibilities('voltage'),
    expected = ['V', 'mV', 'kV'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('power possibilities', () => {
  const convert = configMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  const actual = convert().possibilities('power'),
    expected = ['W', 'mW', 'kW', 'MW', 'GW', 'PS', 'Btu/s', 'ft-lb/s', 'hp'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('reactive power possibilities', () => {
  const convert = configMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  const actual = convert().possibilities('reactivePower'),
    expected = ['VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('apparent power possibilities', () => {
  const convert = configMeasurements<
    'apparentPower',
    ApparentPowerSystems,
    ApparentPowerUnits
  >({
    apparentPower,
  });
  const actual = convert().possibilities('apparentPower'),
    expected = ['VA', 'mVA', 'kVA', 'MVA', 'GVA'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('energy possibilities', () => {
  const convert = configMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  const actual = convert().possibilities('energy'),
    expected = [
      'Ws',
      'Wm',
      'Wh',
      'mWh',
      'kWh',
      'MWh',
      'GWh',
      'J',
      'kJ',
      'MJ',
      'GJ',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('reactive energy possibilities', () => {
  const convert = configMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  const actual = convert().possibilities('reactiveEnergy'),
    expected = ['VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('frequency possibilities', () => {
  const convert = configMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  const actual = convert().possibilities('frequency'),
    expected = [
      'mHz',
      'Hz',
      'kHz',
      'MHz',
      'GHz',
      'THz',
      'rpm',
      'deg/s',
      'rad/s',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('illuminance possibilities', () => {
  const convert = configMeasurements<
    'illuminance',
    IlluminanceSystems,
    IlluminanceUnits
  >({
    illuminance,
  });
  const actual = convert().possibilities('illuminance'),
    expected = ['lx', 'ft-cd'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('angle possibilities', () => {
  const convert = configMeasurements<'angle', AngleSystems, AngleUnits>({
    angle,
  });
  const actual = convert().possibilities('angle'),
    expected = ['rad', 'deg', 'grad', 'arcmin', 'arcsec'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('charge possibilities', () => {
  const convert = configMeasurements<'charge', ChargeSystems, ChargeUnits>({
    charge,
  });
  const actual = convert().possibilities('charge'),
    expected = ['c', 'mC', 'μC', 'nC', 'pC'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('force possibilities', () => {
  const convert = configMeasurements<'force', ForceSystems, ForceUnits>({
    force,
  });
  const actual = convert().possibilities('force'),
    expected = ['N', 'kN', 'lbf', 'kgf'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('acceleration possibilities', () => {
  const convert = configMeasurements<
    'acceleration',
    AccelerationSystems,
    AccelerationUnits
  >({
    acceleration,
  });
  const actual = convert().possibilities('acceleration'),
    expected = ['g-force', 'm/s2'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('all possibilities', () => {
  const convert = configMeasurements<
    AllMeasures,
    AllMeasuresSystems,
    AllMeasuresUnits
  >(allMeasures);
  const actual = convert().possibilities(),
    // Please keep these sorted for maintainability
    expected = [
      '/GJ',
      '/GWh',
      '/J',
      '/MJ',
      '/MWh',
      '/Wh',
      '/Wm',
      '/Ws',
      '/cm',
      '/d',
      '/ft',
      '/h',
      '/in',
      '/kJ',
      '/kWh',
      '/km',
      '/m',
      '/mWh',
      '/mi',
      '/min',
      '/mm',
      '/month',
      '/ms',
      '/mu',
      '/ns',
      '/s',
      '/week',
      '/year',
      'A',
      'arcmin',
      'arcsec',
      'B',
      'BTU/h/ft/F',
      'BTU/lb/F',
      'Btu/s',
      'C',
      'C/100m',
      'C/km',
      'C/m',
      'F',
      'F/100ft',
      'F/ft',
      'R',
      'GB',
      'Gb',
      'K',
      'KB',
      'Kb',
      'MB',
      'MPa',
      'Mb',
      'N',
      'Pa',
      'TB',
      'Tb',
      'ac',
      'b',
      'bar',
      'c',
      'cl',
      'cl/s',
      'cm',
      'cm2',
      'cm3',
      'cm3/s',
      'cmK/W',
      'cup',
      'cup/s',
      'd',
      'deg',
      'deg/s',
      'dl',
      'dl/s',
      'ea',
      'dz',
      'fl-oz',
      'fl-oz/h',
      'fl-oz/min',
      'fl-oz/s',
      'ft-us',
      'ft/h',
      'ft',
      'fathom',
      'ft-cd',
      'ft-lb/s',
      'ft/min',
      'ft/s',
      'ft2',
      'ft3',
      'ft3(cwe)/h',
      'ft3(cwe)/min',
      'ft3(cwe)/s',
      'ft3/h',
      'ft3/min',
      'ft3/s',
      'g',
      'g-force',
      'g/cm3',
      'gal',
      'gal(cwe)/h',
      'gal(cwe)/min',
      'gal(cwe)/s',
      'gal/h',
      'gal/min',
      'gal/s',
      'glas',
      'grad',
      'GHz',
      'GVA',
      'GVAR',
      'GVARh',
      'GW',
      'GWh',
      'h',
      'hPa',
      'ha',
      'hp',
      'Hz',
      'in',
      'in/h',
      'in2',
      'in3',
      'in3/h',
      'in3/min',
      'in3/s',
      'inHg',
      'J',
      'J/kg/K',
      'kA',
      'kPa',
      'kanna',
      'kg',
      'kgf',
      'kkp',
      'kJ',
      'kJ/kg/K',
      'lb/h',
      'lb/s',
      'MJ',
      'GJ',
      'kN',
      'kl',
      'Ml',
      'Gl',
      'kg/h',
      'kg/m3',
      'kg/min',
      'kg/s',
      'kl/h',
      'kl/min',
      'kl/s',
      'km',
      'km/h',
      'km2',
      'km3',
      'km3/s',
      'knot',
      'm/h',
      'krm',
      'ksi',
      'kHz',
      'kV',
      'kVA',
      'kVAR',
      'kVARh',
      'kW',
      'kWh',
      'l',
      'lbf-ft',
      'lb/ft3',
      'l/h',
      'l(cwe)/min',
      'l(cwe)/s',
      'l/min',
      'l/s',
      'lb',
      'lbf',
      'lx',
      'm',
      'm/s',
      'm/s2',
      'm2',
      'm3',
      'm3/h',
      'm3(cwe)/h',
      'm3/min',
      'm3/s',
      'mA',
      'mC',
      'mcg',
      'mg',
      'mH2O',
      'mi',
      'mi2',
      'mil',
      'min',
      'min/km',
      'min/mi',
      'ml',
      'ml/s',
      'mm',
      'mm/h',
      'mm2',
      'mm3',
      'mm3/s',
      'mmHg',
      'month',
      'mph',
      'ms',
      'msk',
      'mt',
      'mt/h',
      'mu',
      'nC',
      'nm',
      'Nm',
      'nm2',
      'mHz',
      'mK/W',
      'MHz',
      'mV',
      'mVA',
      'MVA',
      'mVAR',
      'MVAR',
      'mVARh',
      'MVARh',
      'mW',
      'MW',
      'mWh',
      'MWh',
      'nMi',
      'ns',
      'oz',
      'pC',
      'pnt',
      'pnt/h',
      'pnt/min',
      'pnt/s',
      'ppb',
      'ppm',
      'ppq',
      'ppt',
      'psi',
      'PS',
      'qt',
      'qt/s',
      'rad',
      'rad/s',
      'rpm',
      's',
      'sg',
      's/m',
      's/ft',
      't',
      'Tbs',
      'Tbs/s',
      'THz',
      'torr',
      'tsk',
      'tsp',
      'tsp/s',
      'V',
      'VA',
      'VAR',
      'VARh',
      'W',
      'W/cm/K',
      'W/m/K',
      'week',
      'Ws',
      'Wm',
      'Wh',
      'yd',
      'yd2',
      'yd3',
      'yd3/h',
      'yd3/min',
      'yd3/s',
      'year',
      'μm',
      'μm2',
      'μC',
      'pcs',
      'bk-doz',
      'cp',
      'doz-doz',
      'doz',
      'gr-gr',
      'gros',
      'half-dozen',
      'hftF/BTU',
      'long-hundred',
      'ream',
      'scores',
      'sm-gr',
      'st',
      'trio',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pieces possibilities', () => {
  const convert = configMeasurements<'pieces', PiecesSystems, PiecesUnits>({
    pieces,
  });
  const actual = convert().possibilities('pieces'),
    expected = [
      'pcs',
      'bk-doz',
      'cp',
      'doz-doz',
      'doz',
      'gr-gr',
      'gros',
      'half-dozen',
      'long-hundred',
      'ream',
      'scores',
      'sm-gr',
      'trio',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});
