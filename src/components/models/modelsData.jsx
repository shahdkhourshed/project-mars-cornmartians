
export const modelsData = [
    {
        name: "Corn",
        category: "corn",
        cover: "/assets/covers/corn.webp",
        model3d: "/assets/models/Corn.glb",
        children: [
            {
                id: "corn",
                name: "Corn",
                category: "corn",
                model3d: "/assets/models/Corn.glb",
                characteristics: [
                    {
                        "Orbital Characteristics": {
                            "Aphelion": {
                                "km": "249261000 km",
                                "mi": "154884000 mi",
                                "AU": "1.66621 AU"
                            },
                            "Perihelion": {
                                "km": "206650000 km",
                                "mi": "128410000",
                                "AU": "1.3814 AU"
                            },
                            "Semi-major Axis": {
                                "km": "227939366 km",
                                "mi": "141634956 mi",
                                "AU": "1.52368055 AU"
                            },
                            "Eccentricity": 0.0934,
                            "Orbital Period (Sidereal)": {
                                "Days": "686.980 days",
                                "Years": "1.88085 years",
                                "Sols": "668.5991 sols"
                            },
                            "Orbital Period (Synodic)": {
                                "Days": "779.94 days",
                                "Years": "2.1354 years"
                            },
                            "Average Orbital Speed": {
                                "kmPerSec": "24.07 km/s",
                                "kmPerHour": "86700 km/h",
                                "mph": "53800 mph"
                            },
                            "Mean Anomaly": "19.412°",
                            "Inclination": {
                                "To Ecliptic": "1.850°",
                                "To Sun Equator": "5.65°",
                                "To Invariable Plane": "1.63°"
                            },
                            "Longitude of Ascending Node": "49.57854°",
                            "Time of Perihelion": "2022-Jun-21",
                            "Argument of Perihelion": "286.5°",
                            "Satellites": 2
                        },
                        "Physical Characteristics": {
                            "Mean Radius": {
                                "km": "3389.5 ± 0.2 km",
                                "mi": "2106.1 ± 0.1 mi"
                            },
                            "Equatorial Radius": {
                                "km": "3396.2 ± 0.1 km",
                                "mi": "2110.3 ± 0.1 mi",
                                "Earths": "0.533 Earths"
                            },
                            "Polar Radius": {
                                "km": "3376.2 ± 0.1 km",
                                "mi": "2097.9 ± 0.1 mi",
                                "Earths": "0.531 Earths"
                            },
                            "Flattening": 0.00589,
                            "Surface Area": {
                                "km2": "144.37×106 km2",
                                "sqMi": "5.574×107 sq mi",
                                "Earths": "0.284 Earths"
                            },
                            "Volume": {
                                "km3": "1.63118×1011 km3",
                                "Earths": "0.151 Earths"
                            },
                            "Mass": {
                                "kg": "6.4171×1023 kg",
                                "Earths": "0.107 Earths"
                            },
                            "Mean Density": {
                                "gPerCm3": "3.9335 g/cm3",
                                "lbPerCuIn": "0.1421 lb/cu in"
                            },
                            "Surface Gravity": {
                                "mPerS2": "3.72076 m/s2",
                                "ftPerS2": "12.2072 ft/s2",
                                "g": "0.3794 g"
                            },
                            "Moment of Inertia Factor": 0.3644,
                            "Escape Velocity": {
                                "kmPerS": "5.027 km/s",
                                "kmPerH": "18100 km/h",
                                "mph": "11250 mph"
                            },
                            "Synodic Rotation Period": {
                                "Days": "1.02749125 d",
                                "Time": "24h 39m 36s"
                            },
                            "Sidereal Rotation Period": {
                                "Days": "1.025957 d",
                                "Time": "24h 37m 22.7s"
                            },
                            "Equatorial Rotation Velocity": {
                                "mPerS": "241 m/s",
                                "kmPerH": "870 km/h",
                                "mph": "540 mph"
                            },
                            
                            "Axial Tilt": {
                                "Degrees": "25.19° to its orbital plane"
                            },
                            "North Pole Right Ascension": {
                                "Degrees": "317.68143°",
                                "Time": "21h 10m 44s"
                            },
                            "North Pole Declination": "52.88650°",
                            "Albedo": {
                                "Geometric": 0.170,
                                "Bond": 0.25
                            },
                            "Temperature": {
                                "Blackbody": "−64°C",
                                "Surface": {
                                    "Min": "−110°C",
                                    "Mean": "−60°C",
                                    "Max": "35°C"
                                }
                            },
                            "Surface Absorbed Dose Rate": "8.8 μGy/h",
                            "Surface Equivalent Dose Rate": "27 μSv/h",
                            "Apparent Magnitude": "−2.94 to +1.86",
                            "Absolute Magnitude": "−1.5",
                            "Angular Diameter": "3.5–25.1″"
                        },
                        "Atmosphere": {
                            "Surface Pressure": {
                                "kPa": "0.636 kPa",
                                "atm": "0.00628 atm"
                            },
                            "Composition by Volume": {
                                "Carbon Dioxide": "95.97%",
                                "Argon": "1.93%",
                                "Nitrogen": "1.89%",
                                "Oxygen": "0.146%",
                                "Carbon Monoxide": "0.0557%",
                                "Water Vapor": "0.0210%"
                            }
                        }
                    }
                ]
            }
        ]
    },
    //Moons
    {   name: 'Lettuce',
        category: 'lettuce',
        cover: '/assets/covers/lettuce.webp',
        model3d: "/assets/models/Lettuce.glb",
        children: [
            {
                id: "lettuce",
                name: "Lettuce",
                category: "lettuce",
                model3d: "/assets/models/Corn.glb",
                characteristics: [

                ]
            }
        ],
    },
    // Sweet Potatoes
    {
        name: 'Sweet Potatoes',
        category: 'sweet potatoes',
        cover: '/assets/covers/sweet_potato.webp',
        children: [
        ],
    },
    // Satellites
    {
        name: 'Carrots',
        category: 'carrots',
        cover: '/assets/covers/carrot.webp',
        children: [
            
        ]
    },
    // Onions
    {
        id: 'onions',
        name: 'Onions',
        category: 'onions',
        cover:'/assets/covers/onion.webp',
        description: 'This is a list of the 50 spacecraft missions (including unsuccessful ones) relating to the planet Mars, such as orbiters and rovers.',
        launches_by_decade: [
            { decade: "1960s", launches: 12 },
            { decade: "1970s", launches: 11 },
            { decade: "1980s", launches: 2 },
            { decade: "1990s", launches: 6 },
            { decade: "2000s", launches: 8 },
            { decade: "2010s", launches: 6 },
            { decade: "2020s", launches: 3 }
        ],
        onions: [
        ]
    }

]
