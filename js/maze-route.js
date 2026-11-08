function distance(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function traceFollowsRoute(points, route, deadEnds = [], options = {}) {
  const waypointRadius = options.waypointRadius ?? 9;
  const deadRadius = options.deadRadius ?? 6;
  if (!Array.isArray(points) || !Array.isArray(route) || route.length === 0) return false;

  let step = 0;
  for (const point of points) {
    for (const dead of deadEnds) {
      if (distance(point, dead) <= deadRadius) return false;
    }
    if (step < route.length && distance(point, route[step]) <= waypointRadius) {
      step += 1;
    }
  }
  return step === route.length;
}
