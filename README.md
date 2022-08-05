# Mechoga

This tool is used to calculate distance between points on Earth, known as
great circle distance.

Usage:

```js
const { greatCircleDistance } = require('mechoga');

const point1 = { latitude: 51.5, longitude: -0.1 };
const point2 = { latitude: 51.5, longitude: -0.2 };

console.log(greatCircleDistance(lat, lng));
```
