import data from '../../data/courses.json';

const numitems = data.length;

describe('Number tests', () => {
  test('Number of items should be 12', () => {
    expect(numitems).toBe(12);
  });

  test('Number of items to be greater than or equal to 12', () => {
    expect(numitems).toBeGreaterThanOrEqual(12);
  });
});

const dataTest = data[0].title;

describe('String tests', () => {
  test('There is a JS in the title', () => {
    expect(dataTest).toMatch(/JS/);
  });

  test('The title contains React', () => {
    expect(dataTest).toContain('React');
  });
});

// Arrays
const data2 = ['React Native', 'React'];

describe('Arrays and Objects tests', () => {
  test('The list of courses mentions React Native and React', () => {
    expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(data2));
  });

  // Objects
  test('The first course to have a property of Title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The first course to have a property of Title and value of 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
