const { test, expect } = require('@jest/globals');
const { greatCircleDistance } = require('.');

const eiffel = { lat: 48.8584, lng: 2.2945 };
const bigBen = { lat: 51.5007, lng: -0.1246 };
const washington = { lat: 38.8895, lng: 77.0353 };
const zero = { lat: 0, lng: 0 };
const one = { lat: 1, lng: 1 };

test('known distances return correct values', () => {
	expect(greatCircleDistance(eiffel, eiffel)).toBe(0);
	expect(greatCircleDistance(bigBen, bigBen)).toBe(0);
	expect(greatCircleDistance(washington, washington)).toBe(0);
	expect(greatCircleDistance(bigBen, eiffel)).toBe(340918.42506834894);
	expect(greatCircleDistance(eiffel, bigBen)).toBe(340918.42506834894);
	expect(greatCircleDistance(washington, eiffel)).toBe(5853731.1095586745);
	expect(greatCircleDistance(eiffel, washington)).toBe(5853731.1095586745);
	expect(greatCircleDistance(washington, bigBen)).toBe(5922190.069325599);
	expect(greatCircleDistance(bigBen, washington)).toBe(5922190.069325599);
	expect(greatCircleDistance(zero, one)).toBe(157424.6238723255);
});
