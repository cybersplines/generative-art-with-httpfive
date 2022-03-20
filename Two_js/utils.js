const fullRotation = Math.PI * 2;
const halfRotation = Math.PI;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

function clamp(input, min, max) {
  return Math.max(min, Math.min(input, max));
}

function map(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

function mapAndClamp(value, low1, high1, low2, high2) {
  return clamp(
    map(value, low1, high1, low2, high2),
    Math.min(low2, high2),
    Math.max(low2, high2)
  );
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function randomRoundNumber(min, max) {
  return Math.round(randomNumber(min, max));
}

export {fullRotation, halfRotation, easeInOutCubic, map, mapAndClamp, randomNumber, randomRoundNumber}