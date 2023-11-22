import { Measure } from '../convert.js';
import acceleration, {
  AccelerationSystems,
  AccelerationUnits,
} from './acceleration.js';
import angle, { AngleSystems, AngleUnits } from './angle.js';
import apparentPower, {
  ApparentPowerSystems,
  ApparentPowerUnits,
} from './apparentPower.js';
import area, { AreaSystems, AreaUnits } from './area.js';
import charge, { ChargeSystems, ChargeUnits } from './charge.js';
import current, { CurrentSystems, CurrentUnits } from './current.js';
import density, { DensitySystems, DensityUnits } from './density.js';
import digital, { DigitalSystems, DigitalUnits } from './digital.js';
import each, { EachSystems, EachUnits } from './each.js';
import energy, { EnergySystems, EnergyUnits } from './energy.js';
import force, { ForceSystems, ForceUnits } from './force.js';
import frequency, { FrequencySystems, FrequencyUnits } from './frequency.js';
import heatCapacity, {
  HeatCapacitySystems,
  HeatCapacityUnits,
} from './heatCapacity.js';
import illuminance, {
  IlluminanceSystems,
  IlluminanceUnits,
} from './illuminance.js';
import inverseEnergy, {
  InverseEnergySystems,
  InverseEnergyUnits,
} from './inverseEnergy.js';
import inverseLength, {
  InverseLengthSystems,
  InverseLengthUnits,
} from './inverseLength.js';
import inverseTime, {
  InverseTimeSystems,
  InverseTimeUnits,
} from './inverseTime.js';
import length, { LengthSystems, LengthUnits } from './length.js';
import mass, { MassSystems, MassUnits } from './mass.js';
import massFlowRate, {
  MassFlowRateSystems,
  MassFlowRateUnits,
} from './massFlowRate.js';
import pace, { PaceSystems, PaceUnits } from './pace.js';
import partsPer, { PartsPerSystems, PartsPerUnits } from './partsPer.js';
import pieces, { PiecesSystems, PiecesUnits } from './pieces.js';
import power, { PowerSystems, PowerUnits } from './power.js';
import pressure, { PressureSystems, PressureUnits } from './pressure.js';
import reactiveEnergy, {
  ReactiveEnergySystems,
  ReactiveEnergyUnits,
} from './reactiveEnergy.js';
import reactivePower, {
  ReactivePowerSystems,
  ReactivePowerUnits,
} from './reactivePower.js';
import speed, { SpeedSystems, SpeedUnits } from './speed.js';
import temperature, {
  TemperatureSystems,
  TemperatureUnits,
} from './temperature.js';
import temperatureGradient, {
  TemperatureGradientSystems,
  TemperatureGradientUnits,
} from './temperatureGradient.js';
import thermalConductivity, {
  ThermalConductivitySystems,
  ThermalConductivityUnits,
} from './thermalConductivity.js';
import thermalResistance, {
  ThermalResistanceSystems,
  ThermalResistanceUnits,
} from './thermalResistance.js';
import time, { TimeSystems, TimeUnits } from './time.js';
import torque, { TorqueSystems, TorqueUnits } from './torque.js';
import voltage, { VoltageSystems, VoltageUnits } from './voltage.js';
import volume, { VolumeSystems, VolumeUnits } from './volume.js';
import volumeFlowRate, {
  VolumeFlowRateSystems,
  VolumeFlowRateUnits,
} from './volumeFlowRate.js';

export type AllMeasuresSystems =
  | AccelerationSystems
  | AngleSystems
  | ApparentPowerSystems
  | AreaSystems
  | ChargeSystems
  | ThermalConductivitySystems
  | CurrentSystems
  | DensitySystems
  | DigitalSystems
  | EachSystems
  | EnergySystems
  | ForceSystems
  | FrequencySystems
  | HeatCapacitySystems
  | IlluminanceSystems
  | InverseEnergySystems
  | InverseLengthSystems
  | InverseTimeSystems
  | LengthSystems
  | MassSystems
  | MassFlowRateSystems
  | PaceSystems
  | PartsPerSystems
  | PiecesSystems
  | PowerSystems
  | PressureSystems
  | ReactiveEnergySystems
  | ReactivePowerSystems
  | ThermalResistanceSystems
  | SpeedSystems
  | TorqueSystems
  | TemperatureSystems
  | TemperatureGradientSystems
  | TimeSystems
  | VoltageSystems
  | VolumeSystems
  | VolumeFlowRateSystems;

export type AllMeasuresUnits =
  | AccelerationUnits
  | AngleUnits
  | ApparentPowerUnits
  | AreaUnits
  | ChargeUnits
  | ThermalConductivityUnits
  | CurrentUnits
  | DensityUnits
  | DigitalUnits
  | EachUnits
  | EnergyUnits
  | ForceUnits
  | FrequencyUnits
  | HeatCapacityUnits
  | IlluminanceUnits
  | InverseEnergyUnits
  | InverseLengthUnits
  | InverseTimeUnits
  | LengthUnits
  | MassUnits
  | MassFlowRateUnits
  | PaceUnits
  | PartsPerUnits
  | PiecesUnits
  | PowerUnits
  | PressureUnits
  | ReactiveEnergyUnits
  | ReactivePowerUnits
  | ThermalResistanceUnits
  | SpeedUnits
  | TorqueUnits
  | TemperatureUnits
  | TemperatureGradientUnits
  | TimeUnits
  | VoltageUnits
  | VolumeUnits
  | VolumeFlowRateUnits;

export type AllMeasures =
  | 'acceleration'
  | 'angle'
  | 'apparentPower'
  | 'area'
  | 'charge'
  | 'thermalConductivity'
  | 'current'
  | 'density'
  | 'digital'
  | 'each'
  | 'energy'
  | 'force'
  | 'frequency'
  | 'heatCapacity'
  | 'illuminance'
  | 'inverseEnergy'
  | 'inverseLength'
  | 'inverseTime'
  | 'length'
  | 'mass'
  | 'massFlowRate'
  | 'pace'
  | 'partsPer'
  | 'pieces'
  | 'power'
  | 'pressure'
  | 'reactiveEnergy'
  | 'reactivePower'
  | 'thermalResistance'
  | 'speed'
  | 'torque'
  | 'temperature'
  | 'temperatureGradient'
  | 'time'
  | 'voltage'
  | 'volume'
  | 'volumeFlowRate';

const allMeasures: Record<
  AllMeasures,
  Measure<AllMeasuresSystems, AllMeasuresUnits>
> = {
  acceleration,
  angle,
  apparentPower,
  area,
  charge,
  thermalConductivity,
  current,
  density,
  digital,
  each,
  energy,
  force,
  frequency,
  heatCapacity,
  illuminance,
  inverseEnergy,
  inverseLength,
  inverseTime,
  length,
  mass,
  massFlowRate,
  pace,
  partsPer,
  pieces,
  power,
  pressure,
  reactiveEnergy,
  reactivePower,
  thermalResistance,
  speed,
  torque,
  temperature,
  temperatureGradient,
  time,
  voltage,
  volume,
  volumeFlowRate,
};

export default allMeasures;
