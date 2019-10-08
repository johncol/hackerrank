const route = (fowardId, fowardDistance, returnId, returnDistance) => ({
  foward: { id: fowardId, distance: fowardDistance },
  return: { id: returnId, distance: returnDistance },
  distance: () => fowardDistance + returnDistance,
  ids: () => [fowardId, returnId]
});

function optimalUtilization(maxTravelDist, forwardRoutes, returnRoutes) {
  let bestRoutes = [];

  const doesNotExceedMax = distance => distance <= maxTravelDist;

  const noRoutes = () => bestRoutes.length === 0;

  const appendBest = (fowardId, fowardDistance, returnId, returnDistance) => {
    bestRoutes.push(route(fowardId, fowardDistance, returnId, returnDistance));
  };

  const newBest = (fowardId, fowardDistance, returnId, returnDistance) => {
    bestRoutes = [route(fowardId, fowardDistance, returnId, returnDistance)];
  };

  forwardRoutes.forEach(([fowardId, fowardDistance]) => {
    returnRoutes.forEach(([returnId, returnDistance]) => {
      const routeDistance = fowardDistance + returnDistance;
      if (doesNotExceedMax(routeDistance)) {
        if (noRoutes()) {
          appendBest(fowardId, fowardDistance, returnId, returnDistance);
        } else {
          const bestDistance = bestRoutes[0].distance();
          if (bestDistance === routeDistance) {
            appendBest(fowardId, fowardDistance, returnId, returnDistance);
          } else if (routeDistance > bestDistance) {
            newBest(fowardId, fowardDistance, returnId, returnDistance);
          }
        }
      }
    });
  });

  return bestRoutes.map(route => route.ids());
}
