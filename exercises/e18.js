/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const discoveryCountByYear = {};

  data.asteroids.forEach((asteroid) => {
    const discoveryYear = asteroid.discoveryYear;

    if (!discoveryCountByYear[discoveryYear]) {
      discoveryCountByYear[discoveryYear] = 0;
    }

    discoveryCountByYear[discoveryYear]++;
  });

  let maxDiscoveryYear = [];
  let maxCount = 0;

  for (const year in discoveryCountByYear) {
    if (discoveryCountByYear[year] > maxCount) {
      maxCount = discoveryCountByYear[year];
      maxDiscoveryYear = parseInt(year);
    }
  }

  return maxDiscoveryYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
