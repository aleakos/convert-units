import { configMeasurements, Measure, Unit } from '..';
import { allMeasures } from '../definitions/all';
import length, { LengthSystems, LengthUnits } from '../definitions/length';
import mass, { MassSystems, MassUnits } from '../definitions/mass';
import volume, { VolumeSystems, VolumeUnits } from '../definitions/volume';

test('l to kg throws', () => {
  type Measures = 'volume' | 'mass';
  type Systems = VolumeSystems | MassSystems;
  type Units = VolumeUnits | MassUnits;
  const convert = configMeasurements<Measures, Systems, Units>({
    volume,
    mass,
  });
  expect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    convert(2).from('ltr').to('kg');
  }).toThrow();
});

test('fl-oz to oz throws', () => {
  type Measures = 'volume' | 'mass';
  type Systems = VolumeSystems | MassSystems;
  type Units = VolumeUnits | MassUnits;
  const convert = configMeasurements<Measures, Systems, Units>({
    volume,
    mass,
  });
  expect(() => {
    convert(4).from('fl-oz').to('oz');
  }).toThrow();
});

test('kg to fl-oz throws', () => {
  type Measures = 'volume' | 'mass';
  type Systems = VolumeSystems | MassSystems;
  type Units = VolumeUnits | MassUnits;
  const convert = configMeasurements<Measures, Systems, Units>({
    volume,
    mass,
  });
  expect(() => {
    convert(4).from('kg').to('fl-oz');
  }).toThrow();
});

test('kg to ft throws', () => {
  type Measures = 'length' | 'mass';
  type Systems = LengthSystems | MassSystems;
  type Units = LengthUnits | MassUnits;
  const convert = configMeasurements<Measures, Systems, Units>({
    length,
    mass,
  });
  expect(() => {
    convert(4).from('kg').to('ft');
  }).toThrow();
});

test('kg to nonexistant unit throws', () => {
  const convert = configMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    convert(4).from('kg').to('garbage');
  }).toThrow();
});

test('nonexistant unit to kg throws', () => {
  const convert = configMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    convert(4).from('garbage').to('kg');
  }).toThrow();
});

test('.to before .from throws', () => {
  const convert = configMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(() => {
    convert(4).to('kg');
  }).toThrow();
});

test('.toBest before .from throws', () => {
  const convert = configMeasurements({});
  expect(() => {
    convert(4).toBest();
  }).toThrow();
});

test('.describe throws is unit abbr is not found', () => {
  const convert = configMeasurements({});
  expect(() => {
    convert().describe('no-a-unit');
  }).toThrow();
});

test('Missing anchors should throw an error', () => {
  type TestUnits = TestAUnits | TestBUnits;
  type TestSystems = 'A' | 'B';

  type TestAUnits = 'a';
  type TestBUnits = 'b';

  const A: Record<TestAUnits, Unit> = {
    a: {
      name: {
        singular: 'a',
        plural: 'as',
      },
      to_anchor: 1,
    },
  };

  const B: Record<TestBUnits, Unit> = {
    b: {
      name: {
        singular: 'b',
        plural: 'bs',
      },
      to_anchor: 1,
    },
  };

  const measures: Measure<TestSystems, TestUnits> = {
    systems: {
      A,
      B,
    },
  };

  const convert = configMeasurements<'AB', TestSystems, TestUnits>({
    AB: measures,
  });

  expect(() => {
    convert().from('a').to('b');
  }).toThrow();
});

test('Missing system to system anchor should throw an error', () => {
  type TestUnits = TestAUnits | TestBUnits | TestCUnits;
  type TestSystems = 'A' | 'B' | 'C';

  type TestAUnits = 'a';
  type TestBUnits = 'b';
  type TestCUnits = 'c';

  const A: Record<TestAUnits, Unit> = {
    a: {
      name: {
        singular: 'a',
        plural: 'as',
      },
      to_anchor: 1,
    },
  };

  const B: Record<TestBUnits, Unit> = {
    b: {
      name: {
        singular: 'b',
        plural: 'bs',
      },
      to_anchor: 1,
    },
  };

  const C: Record<TestCUnits, Unit> = {
    c: {
      name: {
        singular: 'a',
        plural: 'as',
      },
      to_anchor: 1,
    },
  };

  const measures: Measure<TestSystems, TestUnits> = {
    systems: {
      A,
      B,
      C,
    },
    anchors: {
      // Missing A -> C anchor!
      A: {
        B: {
          ratio: 2,
        },
      },
    },
  };

  const convert = configMeasurements<'AB', TestSystems, TestUnits>({
    AB: measures,
  });

  expect(() => {
    convert().from('a').to('c');
  }).toThrow();
});

test('passing no measures to configMeasurements should cause calling convert to throw an error', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const convert = configMeasurements();
  expect(() => {
    convert();
  }).toThrow();
});

test('Calling from again on the same instance should throw an error', () => {
  // Note: I don't like that it throws an error in this case
  // I would prefer it to clear the previous state so that the same object
  // can be used again
  const convert = configMeasurements(allMeasures);
  const state = convert(4).from('m');
  state.to('cm');
  expect(() => {
    state.from('cm');
  }).toThrow();
});

test('Missing origin anchor should throw an error', () => {
  type TestUnits = TestAUnits | TestBUnits | TestCUnits;
  type TestSystems = 'A' | 'B' | 'C';

  type TestAUnits = 'a';
  type TestBUnits = 'b';
  type TestCUnits = 'c';

  const A: Record<TestAUnits, Unit> = {
    a: {
      name: {
        singular: 'a',
        plural: 'as',
      },
      to_anchor: 1,
    },
  };

  const B: Record<TestBUnits, Unit> = {
    b: {
      name: {
        singular: 'b',
        plural: 'bs',
      },
      to_anchor: 1,
    },
  };

  const C: Record<TestCUnits, Unit> = {
    c: {
      name: {
        singular: 'a',
        plural: 'as',
      },
      to_anchor: 1,
    },
  };

  const measures: Measure<TestSystems, TestUnits> = {
    systems: {
      A,
      B,
      C,
    },
    anchors: {
      // missing A anchor
      B: {
        // unit b -> unit a
        A: {
          ratio: 1 / 2,
        },
        // unit b -> unit c
        C: {
          ratio: 3 / 2,
        },
      },
      C: {
        // unit c -> unit a
        A: {
          ratio: 1 / 3,
        },
        // unit c -> unit b
        B: {
          ratio: 2 / 3,
        },
      },
    },
  };

  const convert = configMeasurements<'AB', TestSystems, TestUnits>({
    AB: measures,
  });

  expect(() => {
    convert().from('a').to('c');
  }).toThrow();
});
