const RADIUS_OF_EARTH = 6_378_100;

const degreesToRadians = coordinate => {
	if (typeof coordinate === 'number') {
		return (coordinate * Math.PI) / 180;
	} else if (typeof coordinate === 'object') {
		return {
			lat: degreesToRadians(coordinate.lat),
			lng: degreesToRadians(coordinate.lng),
		};
	}
};

const coordinateDelta = (from, to) => {
	return {
		lat: Math.abs(from.lat - to.lat),
		lng: Math.abs(from.lng - to.lng),
	};
};

const square = x => x * x;

/** @typedef {{lat: number, lng: number}} LatLng */

/** @function greatCircleDistance
 * @param {LatLng} from
 * @param {LatLng} to
 * @returns {number}
 * @description Calculates the great circle distance in meters between two
 * points on the surface of the earth.
 */
const greatCircleDistance = (from, to) => {
	const fromR = degreesToRadians(from);
	const toR = degreesToRadians(to);

	const delta = coordinateDelta(fromR, toR);

	const a =
		square(Math.sin(delta.lat / 2)) +
		Math.cos(fromR.lat) * Math.cos(toR.lat) * square(Math.sin(delta.lng / 2));
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return RADIUS_OF_EARTH * c;
};

module.exports = {
	greatCircleDistance,
};
