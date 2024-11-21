import React from 'react';

export default function WorldMapValidators() {
  // Each array represents coordinates for a continent shape with proper spacing
  const worldMapData = {
    northAmerica: [
      // Alaska & Canada
      [12,12], [15,12], [18,12],
      [10,15], [13,15], [16,15], [19,15],
      [12,18], [15,18], [18,18],
      // USA
      [11,21], [14,21], [17,21], [20,21],
      [13,24], [16,24], [19,24],
      // Mexico
      [15,27], [18,27]
    ],
    southAmerica: [
      // Upper South America
      [20,35], [23,35],
      [19,38], [22,38],
      [21,41], [24,41],
      // Brazil & Lower South America
      [22,44], [25,44],
      [21,47], [24,47],
      [23,50]
    ],
    europe: [
      // Northern Europe
      [45,15], [48,15],
      [44,18], [47,18], [50,18],
      // Central & Southern Europe
      [43,21], [46,21], [49,21],
      [45,24], [48,24]
    ],
    africa: [
      // North Africa
      [43,27], [46,27], [49,27],
      [42,30], [45,30], [48,30],
      // Central Africa
      [44,33], [47,33],
      // Southern Africa
      [43,36], [46,36],
      [45,39]
    ],
    asia: [
      // Russia & Northern Asia
      [55,15], [58,15], [61,15], [64,15],
      [54,18], [57,18], [60,18], [63,18],
      // Central Asia
      [56,21], [59,21], [62,21],
      // East Asia
      [58,24], [61,24], [64,24],
      [60,27], [63,27],
      // Southeast Asia
      [65,30], [68,30],
      [67,33]
    ],
    oceania: [
      // Indonesia & Pacific
      [70,33], [73,33],
      // Australia
      [75,36], [78,36],
      [74,39], [77,39],
      [76,42]
    ]
  };

  // Flatten and scale coordinates
  const worldMapCoordinates = Object.values(worldMapData)
    .flat()
    .map(([x, y]) => ({
      x: x,
      y: y
    }));

  // Sample validator data with adjusted positions
  const validatorData = [
    { x: 15, y: 21, value: '99', type: 'active' },    // North America
    { x: 18, y: 24, value: '45', type: 'active' },
    { x: 13, y: 18, value: '1', type: 'inactive' },
    { x: 46, y: 18, value: '49', type: 'active' },    // Europe
    { x: 49, y: 21, value: '30', type: 'active' },
    { x: 52, y: 18, value: '8', type: 'inactive' },
    { x: 61, y: 24, value: '56', type: 'inactive' },  // Asia
    { x: 76, y: 39, value: '15', type: 'inactive' }   // Australia
  ];

  const getValidator = (coord) => {
    return validatorData.find(v => 
      Math.abs(v.x - coord.x) < 2 && Math.abs(v.y - coord.y) < 2
    );
  };

  return (
    <div className="relative w-full h-[400px] bg-[#111111] rounded-lg overflow-hidden">
      {worldMapCoordinates.map((coord, index) => {
        const validator = getValidator(coord);
        
        return (
          <div
            key={`dot-${index}`}
            className={`absolute flex items-center justify-center w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200`}
            style={{
              left: `${coord.x}%`,
              top: `${coord.y}%`,
              backgroundColor: validator 
                ? validator.type === 'active'
                  ? 'rgba(52, 211, 153, 0.1)'
                  : 'rgba(148, 163, 184, 0.1)'
                : 'rgba(75, 85, 99, 0.15)',
              border: validator 
                ? `1px solid ${validator.type === 'active' 
                    ? 'rgba(52, 211, 153, 0.5)' 
                    : 'rgba(148, 163, 184, 0.5)'}`
                : 'none',
              boxShadow: validator 
                ? `0 0 10px ${validator.type === 'active'
                    ? 'rgba(52, 211, 153, 0.2)'
                    : 'rgba(148, 163, 184, 0.2)'}`
                : 'none',
            }}
          >
            {validator && (
              <span 
                className="text-xs font-medium"
                style={{ 
                  color: validator.type === 'active' 
                    ? 'rgb(52, 211, 153)' 
                    : 'rgb(148, 163, 184)'
                }}
              >
                {validator.value}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}