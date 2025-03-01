
export const modelsData = [
    {
        name: "Corn",
        category: "corn",
        cover: "/assets/covers/mars.webp",
        model3d: "/assets/models/mars_compressed.glb",
        children: [
            {
                id: "corn",
                name: "Corn",
                category: "corn",
                model3d: "/assets/models/mars_compressed.glb",
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
    {
        name: 'Lettuce',
        category: 'lettuce',
        cover: '/assets/covers/moons.webp',
        children: [
            {
                id: 'phobos',
                category: 'moons',
                name: 'Phobos',
                cover: '/assets/covers/phobos.webp',
                model3d: "/assets/models/phobos_compressed.glb",
                description: 'Phobos is the innermost and larger of the two natural satellites of Mars.It is named after Phobos, the Greek god of fear and panic, who is the son of Ares (Mars) and twin brother of Deimos.',
                characteristics: [
                    {
                        "Discovery": {
                            "Discovered by": "Asaph Hall",
                            "Discovery date": "18 August 1877"
                        },
                        "Designations": {
                            "Designation": "Mars I",
                            "Pronunciation": "/ˈfoʊbɒs/or /ˈfoʊbəs/",
                            "Named after": "Φόβος",
                            "Adjectives": "Phobian /ˈfoʊbiən/"
                        },
                        "Orbital characteristics": {
                            "Periapsis": "9234.42 km",
                            "Apoapsis": "9517.58 km",
                            "Semi-major axis": "9376 km (2.76 Mars radii/1.472 Earth radii)",
                            "Eccentricity": 0.0151,
                            "Orbital period (sidereal)": "0.31891023 d (7 h 39 m 12 s)",
                            "Average orbital speed": "2.138 km/s",
                            "Inclination": "1.093° (to Mars's equator)",
                        },
                        "Physical characteristics": {
                            "Dimensions": "27 × 22 × 18 km",
                            "Mean radius": "11.2667 km (1.76941 mEarths)",
                            "Surface area": "1548.3 km2 (3.03545 µEarths)",
                            "Volume": "5783.61 km3 (5.33933 nEarths)",
                            "Mass": "1.0659×1016 kg (1.78477 nEarths)",
                            "Mean density": "1.876 g/cm3",
                            "Surface gravity": "0.0057 m/s2 (581.4 µ g)",
                            "Escape velocity": "11.39 m/s (41 km/h)",
                            "Synodic rotation period": "Synchronous",
                            "Equatorial rotation velocity": "11.0 km/h (6.8 mph) (at longest axis)",
                            "Axial tilt": "0°",
                            "Albedo": "0.071 ± 0.012 at 0.54 μm",
                            "Temperature": "≈ 233 K",
                            "Apparent magnitude": "11.8"
                        }
                    }
                ]
            },
            {
                id: 'deimos',
                category: 'moons',
                name: 'Deimos',
                cover: '/assets/covers/deimos.webp',
                model3d: "/assets/models/deimos_compressed.glb",
                description: `Deimos is the smaller and outermost of the two natural satellites of Mars. The moon is named after Deimos, a figure representing dread in Greek mythology. The name was suggested by academic Henry Madan, who drew from Book XV of the Iliad, where Ares (the Roman god Mars) summons Dread (Deimos) and Fear (Phobos).`,
                characteristics: [
                    {
                        "Discovery": {
                            "Discovered by": "Asaph Hall",
                            "Discovery date": "12 August 1877"
                        },
                        "Designations": {
                            "Designation": "Mars II",
                            "Pronunciation": "/ˈdaɪməs/to /ˈdiːməs/ or as Greek Δεῖμος (approximated /ˈdeɪmɒs/)",
                            "Named after": "Δεῖμος",
                            "Adjectives": "Deimian /ˈdaɪmiən/"
                        },
                        "Orbital characteristics": {
                            "Periapsis": "23455.5 km",
                            "Apoapsis": "23470.9 km",
                            "Semi-major axis": "23463.2 km (6.92 Mars radii)",
                            "Eccentricity": 0.00033,
                            "Orbital period (sidereal)": "1.263 d (30.312 h)",
                            "Average orbital speed": "1.3513 km/s",
                            "Inclination": {
                                "to Mars's equator": "0.93°",
                                "to the local Laplace plane": "1.791°",
                                "to the ecliptic": "27.58°"
                            },
                        },
                        "Physical characteristics": {
                            "Dimensions": "15 km × 12.2 km × 11 km",
                            "Mean radius": "6.2±0.18 km (0.97316 mEarths)",
                            "Surface area": "495.1548 km2 (0.970755 µEarths)",
                            "Volume": "999.78 km3 (0.922979 nEarths)",
                            "Mass": "1.4762×1015 kg (0.247179 nEarths)",
                            "Mean density": "1.471±0.166 g/cm3",
                            "Surface gravity": "0.003 m/s2 (306 µg)",
                            "Escape velocity": "5.556 m/s (20 km/h)",
                            "Synodic rotation period": "Synchronous",
                            "Albedo": "0.068±0.007",
                            "Temperature": "≈ 233 K",
                            "Apparent magnitude": "12.89"
                        }
                    }
                ]
            }
        ],
    },
    // Rovers
    {
        name: 'Sweet Potatoes',
        category: 'sweet potatoes',
        cover: '/assets/covers/rovers.webp',
        children: [
            {
                name: 'Active Rovers',
                category: 'rovers',
                subcategory: 'active',
                cover: '/assets/covers/active_rovers.webp',
                children: [
                    {
                        id: 'curiosity',
                        category: 'rovers',
                        subcategory: 'active',
                        name: 'Curiosity',
                        cover: '/assets/rovers/curiosity.webp',
                        model3d: "/assets/models/curiosity_compressed.glb",
                        description: 'Curiosity is a car-sized Mars rover exploring Gale crater and Mount Sharp on Mars as part of NASA\'s Mars Science Laboratory (MSL) mission. Curiosity was launched from Cape Canaveral (CCAFS) on November 26, 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on August 6, 2012, 05:17:57 UTC. The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover\'s touchdown target after a 560 million km (350 million mi) journey.Adjusted for inflation, Curiosity has a life-cycle cost of US$3.2 billion in 2020 dollars.',
                        characteristics: [
                            {
                                "Owner": "NASA",
                                "Manufacturer": "Jet Propulsion Laboratory",
                                "Specifications": {
                                    "Dimensions": "2.9 m × 2.7 m × 2.2 m (9 ft 6 in × 8 ft 10 in × 7 ft 3 in)",
                                    "Dry mass": "899 kilograms (1,982 lb)"
                                },
                                "Objectives": {
                                    "Biological": [
                                        "Determine the nature and inventory of organic carbon compounds",
                                        "Investigate the chemical building blocks of life (carbon, hydrogen, nitrogen, oxygen, phosphorus, and sulfur)",
                                        "Identify features that may represent the effects of biological processes (biosignatures and biomolecules)"
                                    ],
                                    "Geological and geochemical": [
                                        "Investigate the chemical, isotopic, and mineralogical composition of the Martian surface and near-surface geological materials",
                                        "Interpret the processes that have formed and modified rocks and soils"
                                    ],
                                    "Planetary process": [
                                        "Assess long-timescale (i.e., 4-billion-year) Martian atmospheric evolution processes",
                                        "Determine present state, distribution, and cycling of water and carbon dioxide"
                                    ],
                                    "Surface radiation": [
                                        "Characterize the broad spectrum of surface radiation, including galactic and cosmic radiation, solar proton events and secondary neutrons.",
                                        "Measure radiation exposure in the interior of the spacecraft during travel to Mars and on the surface, valuable for future crewed missions."
                                    ]
                                },
                                "Communication": {
                                    "UHF": "~400 MHz, 2 Mbit/s",
                                    "X band": "7–8 GHz, 800 bit/s"
                                },
                                "Power": "MMRTG: ~100 W (0.13 hp)",
                                "Rocket": "Atlas V 541",
                                "Instruments": [
                                    "APXS",
                                    "ChemCam",
                                    "CheMin",
                                    "DAN",
                                    "Hazcam",
                                    "MAHLI",
                                    "MARDI",
                                    "MastCam",
                                    "Navcam",
                                    "RAD",
                                    "REMS",
                                    "SAM"
                                ],
                                "History": {
                                    "Launched": "November 26, 2011, 15:02 UTC from Cape Canaveral SLC-41",
                                    "Deployed": "August 6, 2012, 05:17 UTC from the MSL EDLS",
                                    "Location": "Gale crater, Mars",
                                    "Travelled": "30.00 km (18.64 mi) on Mars as of 30 May 2023"
                                }
                            }

                        ]
                    },
                    {
                        id: 'perseverance',
                        category: 'rovers',
                        subcategory: 'active',
                        name: 'Perseverance',
                        cover: '/assets/rovers/perseverance.webp',
                        model3d: "/assets/models/perseverance_compressed.glb",
                        description: 'Perseverance, nicknamed Percy, is a car-sized Mars rover designed to explore the Jezero crater on Mars as part of NASA\'s Mars 2020 mission. It was manufactured by the Jet Propulsion Laboratory and launched on July 30, 2020, at 11:50 UTC.Confirmation that the rover successfully landed on Mars was received on February 18, 2021, at 20:55 UTC. As of 2 September 2023, Perseverance has been active on Mars for 901 sols (926 Earth days, or 2 years, 6 months and 15 days) since its landing. Following the rover\'s arrival, NASA named the landing site Octavia E. Butler Landing.Perseverance has a similar design to its predecessor rover, Curiosity, although it was moderately upgraded. It carries seven primary payload instruments, nineteen cameras, and two microphones.The rover also carried the mini-helicopter Ingenuity to Mars, an experimental aircraft and technology testbed that made the first powered flight on another planet on April 19, 2021. As of May 26, 2023, it has made 52 successful flights and continues to break its own records for speed, distance and altitude.',
                        characteristics: [
                            {
                                "Owner": "NASA",
                                "Manufacturer": "Jet Propulsion Laboratory",
                                "Specifications": {
                                    "Dimensions": "2.9 m × 2.7 m × 2.2 m (9 ft 6 in × 8 ft 10 in × 7 ft 3 in)",
                                    "Dry mass": "1,025 kilograms (2,260 lb)"
                                },
                                "Objectives": {
                                    "Looking for habitability": [
                                        "Identify past environments that were capable of supporting microbial life."
                                    ],
                                    "Seeking biosignatures": [
                                        "Seek signs of possible past microbial life in those habitable environments, particularly in specific rock types known to preserve signs over time."
                                    ],
                                    "Caching samples": [
                                        "Collect core rock and regolith ('soil') samples and store them within the rover and on the Martian surface (as a backup) for delivery to a future sample return rocket."
                                    ],
                                    "Preparing for humans": [
                                        "Test oxygen production from the Martian atmosphere."
                                    ]
                                },
                                "Communication": {
                                    "UHF": "~400 MHz, 2 Mbit/s",
                                    "X band": "7–8 GHz, 800-bit/s"
                                },
                                "Power": "MMRTG; 110 watt",
                                "Rocket": "Atlas V 541",
                                "Instruments": [
                                    "Cachecam",
                                    "EDLC × 2",
                                    "Hazcam × 8",
                                    "Mastcam-Z",
                                    "MEDA",
                                    "Microphones",
                                    "MOXIE",
                                    "Navcam × 2",
                                    "PIXL",
                                    "RIMFAX",
                                    "SHERLOC",
                                    "SuperCam"
                                ],
                                "History": {
                                    "Launched": "July 30, 2020, 11:50 UTC from Cape Canaveral SLC-41",
                                    "Deployed": "February 18, 2021, 20:55 UTC from the Mars 2020 EDLS",
                                    "Location": "18.447°N 77.402°E, Jezero crater, Mars",
                                    "Travelled": "19.97 km (12.41 mi) as of 31 August 2023"
                                }
                            }

                        ]
                    },
                ],
            },
            {
                name: 'Inactive Rovers',
                category: 'rovers',
                subcategory: 'inactive',
                cover: '/assets/covers/inactive_rovers.webp',
                children: [
                    {
                        id: 'sojourner',
                        category: 'rovers',
                        subcategory: 'inactive',
                        name: 'Sojourner',
                        cover: '/assets/rovers/sojourner.webp',
                        description: 'Sojourner is a robotic Mars rover that landed in the Ares Vallis channel in the Chryse Planitia region of the Oxia Palus quadrangle on July 4, 1997. Sojourner was operational on Mars for 92 sols (95 Earth days). It was the first wheeled vehicle to rove on a planet other than Earth and formed part of the Mars Pathfinder mission.',
                        characteristics: [
                            {
                                "Mission duration": {
                                    "Planned": "7 sols (7 days)",
                                    "Mission end": "83 sols (85 days) from arrival on Mars"
                                }
                            },
                            {
                                "Spacecraft properties": {
                                    "Dry mass": "11.5 kilograms (25 lb) (rover only)"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "December 4, 1996, 06:58:07 UTC",
                                    "Rocket": "Delta II 7925 D240",
                                    "Launch site": "Cape Canaveral LC-17B",
                                    "Contractor": "McDonnell Douglas"
                                }
                            },
                            {
                                "Deployed from": "Mars Pathfinder",
                                "Deployment date": "July 5, 1997"
                            },
                            {
                                "End of mission": {
                                    "Last contact": "September 27, 1997"
                                }
                            },
                            {

                                "Landing date": "July 4, 1997 16:56:55 UTC",
                                "Landing site": "Ares Vallis, Chryse Planitia, Mars",
                                "Coordinates": "19°7′48″N 33°13′12″W",
                                "Distance driven": "100 metres (330 ft)"

                            }
                        ],
                    },
                    {
                        id: 'spirit',
                        category: 'rovers',
                        subcategory: 'inactive',
                        name: 'Spirit',
                        cover: '/assets/rovers/spirit.webp',
                        description: 'Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a Mars robotic rover, active from 2004 to 2010. Spirit was operational on Mars for 2208 sols or 3.3 Martian years (6 years, 77 days). It was one of two rovers of NASA\'s Mars Exploration Rover Mission managed by the Jet Propulsion Laboratory (JPL). Spirit landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet. Its name was chosen through a NASA-sponsored student essay competition. The rover got stuck in a "sand trap" in late 2009 at an angle that hampered recharging of its batteries; its last communication with Earth was on March 22, 2010.',
                        characteristics: [
                            {
                                "Mission duration": {
                                    "Planned": "90 Martian solar days (~92 Earth days)",
                                    "Operational": "2269 days from landing to last contact (2208 sols)",
                                    "Mobile": "1944 Earth days landing to final embedding (1892 sols)",
                                    "Total": "2695 days from landing to mission end (2623 sols)",
                                    "Launch to last contact": "6 years, 9 months, 12 days"
                                }
                            },
                            {
                                "Objectives": [
                                    "Search for and characterize rocks and soils with clues to past water activity.",
                                    "Determine the distribution and composition of minerals, rocks, and soils at landing sites.",
                                    "Study geologic processes that shaped the terrain and influenced chemistry.",
                                    "Calibrate and validate observations made by Mars Reconnaissance Orbiter (MRO) instruments.",
                                    "Search for iron-containing minerals and identify water-related mineral types.",
                                    "Characterize mineralogy and textures of rocks and soils to understand their formation processes.",
                                    "Look for geological clues about past environmental conditions when liquid water was present.",
                                    "Assess whether those environments were conducive to life."
                                ]
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "June 10, 2003, 17:58:47 UTC",
                                    "Rocket": "Delta II 7925-9.5",
                                    "Launch site": "Cape Canaveral SLC-17A"
                                }
                            },
                            {
                                "End of mission": {
                                    "Declared": "May 25, 2011",
                                    "Last contact": "March 22, 2010"
                                }
                            },
                            {
                                "Spacecraft properties": {
                                    "Launch mass": {
                                        "Total": "1,063 kg",
                                        "Rover": "185 kg",
                                        "Lander": "348 kg",
                                        "Backshell/parachute": "209 kg",
                                        "Heat shield": "78 kg",
                                        "Cruise stage": "193 kg",
                                        "Propellant": "50 kg"
                                    },
                                    "Dry mass (Rover only)": "185 kilograms (408 lb)",
                                    "Power": "140 watts"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Heliocentric (transfer)",
                                    "Spacecraft component": "Rover"
                                }
                            },
                            {
                                "Landing date": "January 4, 2004, 04:35 UTC SCET",
                                "Landing site": "14.5684°S 175.472636°E",
                                "Distance driven": "7.73 km (4.8 mi)"
                            }
                        ],
                    },
                    {
                        id: 'opportunity',
                        category: 'rovers',
                        subcategory: 'inactive',
                        name: 'Opportunity',
                        cover: '/assets/rovers/opportunity.webp',
                        model3d: '/assets/models/opportunity_compressed.glb',
                        description: 'Opportunity, also known as MER-B (Mars Exploration Rover – B) or MER-1, is a robotic rover that was active on Mars from 2004 until 2018. Opportunity was operational on Mars for 5111 sols (14 years, 138 days on Earth). Launched on July 7, 2003, as part of NASA\'s Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin, Spirit (MER-A), touched down on the other side of the planet.With a planned 90-sol duration of activity (slightly less than 92.5 Earth days), Spirit functioned until it got stuck in 2009 and ceased communications in 2010, while Opportunity was able to stay operational for 5111 sols after landing, maintaining its power and key systems through continual recharging of its batteries using solar power, and hibernating during events such as dust storms to save power. This careful operation allowed Opportunity to operate for 57 times its designed lifespan, exceeding the initial plan by 14 years, 47 days (in Earth time). By June 10, 2018, when it last contacted NASA, the rover had traveled a distance of 45.16 kilometers (28.06 miles).',
                        characteristics: [
                            {
                                "Mission duration": {
                                    "Planned": "90 sols (92.5 Earth days)",
                                    "Actual": "5,352 sols (8 Mars years), 5,498 days (15 Earth years)"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "July 8, 2003, 03:18 UTC; 20 years ago",
                                    "Rocket": "Delta II Heavy",
                                    "Launch site": "Cape Canaveral SLC-17B",
                                    "Contractor": "Boeing"
                                }
                            },
                            {
                                "End of mission": {
                                    "Declared": "February 13, 2019",
                                    "Last contact": "June 10, 2018"
                                }
                            },
                            {
                                "Objectives": [
                                    "Search for and characterize rocks and soils with clues to past water activity.",
                                    "Determine the distribution and composition of minerals, rocks, and soils at landing sites.",
                                    "Study geologic processes that shaped the terrain and influenced the chemistry.",
                                    "Calibrate and validate observations made by Mars Reconnaissance Orbiter (MRO) instruments.",
                                    "Search for iron-containing minerals and identify water-related mineral types.",
                                    "Characterize the mineralogy and textures of rocks and soils to understand their formation processes.",
                                    "Look for geological clues about past environmental conditions when liquid water was present.",
                                    "Assess whether those environments were conducive to life."
                                ]
                            },
                            {
                                "Spacecraft properties": {
                                    "Launch mass": {
                                        "Total": "1,063 kg",
                                        "Rover": "185 kg",
                                        "Lander": "348 kg",
                                        "Backshell and parachute": "209 kg",
                                        "Heat shield": "78 kg",
                                        "Cruise stage": "193 kg",
                                        "Propellant": "50 kg"
                                    },
                                    "Landing date": "January 25, 2004, 05:05 UTC SCET",
                                    "Landing site": "1.9462°S 354.4734°E, Eagle, Meridiani Planum",
                                    "Distance driven": "45.16 km (28.06 mi)"
                                }
                            }
                        ],
                    },
                    {
                        id: 'zhurong',
                        category: 'rovers',
                        subcategory: 'inactive',
                        name: 'Zhurong',
                        cover: '/assets/rovers/zhurong_2.webp',
                        description: 'Zhurong is a Chinese rover on Mars, the country\'s first to land on another planet after it previously landed two rovers on the Moon. The rover is part of the Tianwen-1 mission to Mars conducted by the China National Space Administration (CNSA).Designed for a lifespan of 90 sols (93 Earth days), Zhurong was active for 347 sols (356.5 days) after its deployment on Mars\'s surface. The rover became inactive on 20 May 2022 due to approaching sandstorms and Martian winter, pending its self-awakening with appropriate temperature and sunlight conditions. Zhurong never woke up from its hibernation. The rover was expected to wake in December 2022 as winter in the Martian northern hemisphere drew to a close and sunlight increased, but did not. NASA images showed the rover in the same position where it had entered its hibernation period, almost a year earlier. Zhurong is named after a Chinese mytho-historical figure usually associated with fire and light, as Mars is called "the Planet of Fire" in China and some other countries in East Asia. It was selected by a public online vote held between 20 January 2021 and 28 February 2021, with Zhurong ranking first with 504,466 votes. The name was chosen with the meanings of "igniting the fire of interstellar exploration in China" and "to symbolize the Chinese people\'s determination to explore the stars and to uncover unknowns in the universe".',
                        characteristics: [
                            {
                                "Owner": "CNSA",
                                "Manufacturer": "China Academy of Space Technology",
                                "Specifications": {
                                    "Dimensions": "2.6 m × 3 m × 1.85 m (8 ft 6 in × 9 ft 10 in × 6 ft 1 in)",
                                    "Launch mass": "240 kilograms (530 lb)",
                                    "Power": "Solar arrays",
                                    "Rocket": "Long March 5"
                                },
                                "Instruments": [
                                    "MarSCoDe",
                                    "MCS",
                                    "MSCam",
                                    "NaTeCam",
                                    "RoMAG",
                                    "RoPeR"
                                ],
                                "History": {
                                    "Launched": "23 July 2020, 23:18 UTC from Wenchang LC-101",
                                    "Deployed": "22 May 2021, 02:40 UTC from Tianwen-1 lander",
                                    "Location": "25.102°N 109.914°E, Utopia Planitia, Mars",
                                    "Travelled": "1.921 km (1.194 mi) on Mars as of 5 May 2022"
                                }
                            }
                        ],
                    },
                ],
            },
        ],
    },
    // Satellites
    {
        name: 'Carrots',
        category: 'carrots',
        cover: '/assets/covers/satellites.webp',
        children: [
            {
                name: 'Functional Satellites',
                category: 'satellites',
                subcategory: 'functional',
                cover: '/assets/covers/functional_satellites.webp',
                children: [
                    {
                        id: 'mars-odyssey',
                        category: 'satellites',
                        subcategory: 'functional',
                        name: '2001 Mars Odyssey',
                        cover: '/assets/satellites/mars_odyssey.webp',
                        model3d: '/assets/models/odyssey_compressed.glb',
                        description: '2001 Mars Odyssey is a robotic spacecraft orbiting the planet Mars. The project was developed by NASA, and contracted out to Lockheed Martin, with an expected cost for the entire mission of US$297 million. Its mission is to use spectrometers and a thermal imager to detect evidence of past or present water and ice, as well as study the planet\'s geology and radiation environment. It also acts as a relay for communications between the Curiosity rover, and previously the Mars Exploration Rovers and Phoenix lander, to Earth. The mission was named as a tribute to Arthur C. Clarke, evoking the name of his and Stanley Kubrick\'s 1968 film 2001: A Space Odyssey.',
                        characteristics: [
                            {
                                "Mission type": "Mars orbiter",
                                "Operator": "NASA / JPL",
                                "COSPAR ID": "2001-013A",
                                "SATCAT no.": "26734"
                            },
                            {
                                "Mission duration": {
                                    "Elapsed": "22 years, 4 months and 28 days from launch",
                                    "En route": "6 months, 17 days",
                                    "Primary mission": "32 months (1007 sols)",
                                    "Extended mission": "19 years and 10 days (6763 sols) elapsed"
                                }
                            },
                            {
                                "Mission objectives": [
                                    "Mapping the levels of elements across the entire Martian surface.",
                                    "Determine how much hydrogen exists within the 'shallow subsurface'.",
                                    "Develop a library of high-resolution images and spectroscopy for the mineral composition of the Martian surface.",
                                    "Provide information on the morphology of the Martian surface.",
                                    "Identify the 'radiation-induced risk to human explorers' through a characterization of the 'near-space radiation environment' on the Martian surface."
                                ]
                            },
                            {
                                "Spacecraft properties": {
                                    "Manufacturer": "Lockheed Martin",
                                    "Launch mass": "725 kg",
                                    "Dry mass": "376.3 kilograms (830 lb)",
                                    "Power": "750 W"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "April 7, 2001, 15:02:22 UTC",
                                    "Rocket": "Delta II 7925-9.5",
                                    "Launch site": "Cape Canaveral SLC-17A",
                                    "Contractor": "Boeing"
                                }
                            },
                            {
                                "End of mission": {
                                    "Last contact": "Q4 2025 (planned)"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric",
                                    "Regime": "Sun-synchronous",
                                    "Semi-major axis": "3,793.4 km (2,357.1 mi)",
                                    "Eccentricity": "0.0",
                                    "Altitude": "400 km (250 mi)",
                                    "Inclination": "93.064°",
                                    "Period": "2 hours",
                                    "RAAN": "34.98°",
                                    "Argument of periareion": "0°",
                                    "Mean anomaly": "0°",
                                    "Orbital insertion": "October 24, 2001"
                                }
                            }
                        ],
                    },
                    {
                        id: 'mars-express',
                        category: 'satellites',
                        subcategory: 'functional',
                        name: 'Mars Express',
                        cover: '/assets/satellites/mars_express.webp',
                        description: 'Mars Express is a space exploration mission being conducted by the European Space Agency (ESA). The Mars Express mission is exploring the planet Mars, and is the first planetary mission attempted by the agency."Express" originally referred to the speed and efficiency with which the spacecraft was designed and built. However, "Express" also describes the spacecraft\'s relatively short interplanetary voyage, a result of being launched when the orbits of Earth and Mars brought them closer than they had been in about 60,000 years.',
                        characteristics: [
                            {
                                "Mission type": "Mars orbiter",
                                "Operator": "ESA",
                                "COSPAR ID": "2003-022A",
                                "SATCAT no.": "27816"
                            },
                            {
                                "Mission duration": "Elapsed: 20 years and 3 months since launch"
                            },
                            {
                                "Spacecraft properties": {
                                    "Launch mass": "1,123 kg",
                                    "Dry mass": "666 kg (1,468 lb)",
                                    "Power": "460 watts"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "June 2, 2003, 17:45 UTC",
                                    "Rocket": "Soyuz-FG/Fregat",
                                    "Launch site": "Baikonur 31/6",
                                    "Contractor": "Starsem"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric",
                                    "Eccentricity": "0.571",
                                    "Periareion altitude": "298 km (185 mi)",
                                    "Apoareion altitude": "10,107 km (6,280 mi)",
                                    "Inclination": "86.3 degrees",
                                    "Period": "7.5 hours",
                                    "Spacecraft component": "Mars Express",
                                    "Orbital insertion": "December 25, 2003, 03:00 UTC"
                                }
                            }
                        ],
                    },
                    {
                        id: 'mro',
                        category: 'satellites',
                        subcategory: 'functional',
                        name: 'Mars Reconnaissance Orbiter',
                        cover: '/assets/satellites/mro.webp',
                        model3d: '/assets/models/mro_compressed.glb',
                        description: 'The Mars Reconnaissance Orbiter (MRO) is a spacecraft designed to search for the existence of water on Mars and provide support for missions to Mars, as part of NASA\'s Mars Exploration Program. It was launched from Cape Canaveral on August 12, 2005, at 11:43 UTC and reached Mars on March 10, 2006, at 21:24 UTC. In November 2006, after six months of aerobraking, it entered its final science orbit and began its primary science phase. MRO played a key role in choosing safe landing sites for the Phoenix lander in 2008, Mars Science Laboratory / Curiosity rover in 2012, InSight lander in 2018, and the Mars 2020 / Perseverance rover in 2021.',
                        characteristics: [
                            {
                                "Mission type": "Mars orbiter",
                                "Operator": "NASA / Jet Propulsion Laboratory",
                                "COSPAR ID": "2005-029A",
                                "SATCAT no.": "28788"
                            },
                            {
                                "Mission duration": "18 years and 21 days from launch"
                            },
                            {
                                "Mission objectives": [
                                    "Observe the present climate, particularly its atmospheric circulation and seasonal variations",
                                    "Search for signs of water, both past and present",
                                    "Understand how it altered the planet's surface",
                                    "Map and characterize the geological forces that shaped the surface"
                                ]
                            },
                            {
                                "Spacecraft properties": {
                                    "Manufacturer": "Lockheed Martin / University of Arizona / Applied Physics Laboratory / Italian Space Agency / Malin Space Science Systems",
                                    "Launch mass": "2,180 kg (4,810 lb)",
                                    "Dry mass": "1,031 kg (2,273 lb)",
                                    "Payload mass": "139 kg (306 lb)",
                                    "Power": "600–2000 watts"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "August 12, 2005, 11:43:00 UTC",
                                    "Rocket": "Atlas V 401",
                                    "Launch site": "Cape Canaveral SLC-41",
                                    "Contractor": "Lockheed Martin"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric",
                                    "Regime": "Sun-synchronous",
                                    "Inclination": "93 degrees",
                                    "Period": "111 minutes",
                                    "Orbital insertion": "March 10, 2006, 21:24:00 UTC"
                                }
                            }
                        ]
                    },
                    {
                        id: 'maven',
                        category: 'satellites',
                        subcategory: 'functional',
                        name: "MAVEN",
                        cover: '/assets/satellites/maven.webp',
                        model3d: '/assets/models/maven_compressed.glb',
                        description: 'MAVEN (Mars Atmosphere and Volatile Evolution) is a NASA spacecraft orbiting Mars to study the loss of that planet\'s atmospheric gases to space, providing insight into the history of the planet\'s climate and water.The name is an acronym for "Mars Atmosphere and Volatile Evolution" while the word maven also denotes "a person who has special knowledge or experience, an expert".',
                        characteristics: [
                            {
                                "Mission type": "Mars atmospheric research",
                                "Operator": "NASA",
                                "COSPAR ID": "2013-063A",
                                "SATCAT no.": "39378"
                            },
                            {
                                "Mission duration": {
                                    "Planned": "2 years",
                                    "Elapsed": "8 years, 11 months, 12 days (in progress with science phase extended indefinitely)"
                                }
                            },
                            {
                                "Mission objectives": [
                                    "Measure the composition and structure of the upper atmosphere and ionosphere and determine the processes responsible for controlling them",
                                    "Measure the rate of loss of gas from the top of the atmosphere to space, and determine the processes responsible for controlling them",
                                    "Determine properties and characteristics that will allow us to extrapolate backwards in time to determine the integrated loss to space over the four-billion-year history recorded in the geological record"
                                ]
                            },
                            {
                                "Spacecraft properties": {
                                    "Manufacturer": "Lockheed Martin Space Systems",
                                    "Launch mass": "2,454 kg (5,410 lb)",
                                    "Dry mass": "809 kg (1,784 lb)",
                                    "Payload mass": "65 kg (143 lb)",
                                    "Dimensions": "2.3 m × 2.3 m × 2 m",
                                    "Power": "1135 watts"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "18 November 2013, 18:28:00 UTC",
                                    "Rocket": "Atlas V 401 (AV-038)",
                                    "Launch site": "Cape Canaveral, SLC-41",
                                    "Contractor": "United Launch Alliance"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric orbit",
                                    "Regime": "Elliptic orbit",
                                    "Periareon altitude": "150 km (93 mi)",
                                    "Apoareon altitude": "6,200 km (3,900 mi)",
                                    "Inclination": "75°",
                                    "Period": "4.5 hours",
                                    "Orbital insertion": "22 September 2014, 02:24 UTC"
                                }
                            }
                        ]
                    },
                    {
                        id: 'exomars',
                        category: 'satellites',
                        subcategory: 'functional',
                        name: 'ExoMars',
                        cover: '/assets/satellites/exo_mars.webp',
                        description: 'The ExoMars Trace Gas Orbiter (TGO or ExoMars Orbiter) is a collaborative project between the European Space Agency (ESA) and the Russian Roscosmos agency that sent an atmospheric research orbiter and the Schiaparelli demonstration lander to Mars in 2016 as part of the European-led ExoMars programme.',
                        characteristics: [
                            {
                                "Mission type": "Mars orbiter",
                                "Operator": "ESA · Roscosmos",
                                "COSPAR ID": "2016-017A",
                                "SATCAT no.": "41388"
                            },
                            {
                                "Mission duration": {
                                    "Planned": "7 years",
                                    "Elapsed": "7 years, 5 months, 19 days"
                                }
                            },
                            {
                                "Spacecraft properties": {
                                    "Manufacturer": "Thales Alenia Space",
                                    "Launch mass": "4,332 kg",
                                    "Payload mass": {
                                        "Instruments": "113.8 kg (251 lb)",
                                        "Schiaparelli": "577 kg (1,272 lb)"
                                    },
                                    "Dimensions": "3.2 × 2 × 2 m (10.5 × 6.6 × 6.6 ft)",
                                    "Power": "~2000 W"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "14 March 2016, 09:31 UTC",
                                    "Rocket": "Proton-M/Briz-M",
                                    "Launch site": "Baikonur 200/39",
                                    "Contractor": "Khrunichev"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric",
                                    "Regime": "Circular",
                                    "Eccentricity": "0",
                                    "Periareion altitude": "400 km (250 mi)",
                                    "Apoareion altitude": "400 km (250 mi)",
                                    "Inclination": "74 degrees",
                                    "Period": "2 hours",
                                    "Orbital insertion": "19 October 2016, 15:24 UTC"
                                }
                            },
                            {
                                "Transponders": {
                                    "Band": "X band & UHF band",
                                    "Frequency": "390–450 MHz",
                                    "TWTA power": "65 W"
                                }
                            }
                        ]
                    },
                    {
                        id: 'hope',
                        category: 'satellites',
                        subcategory: 'functional',
                        name: 'Emirates Mars Mission',
                        cover: '/assets/satellites/hope.webp',
                        description: 'The Emirates Mars Mission (Hope Probe) is a United Arab Emirates Space Agency uncrewed space exploration mission to Mars.The mission design, development, and operations are led by the Mohammed bin Rashid Space Centre(MBRSC).The spacecraft was assembled in the United States at the University of Colorado Boulder\'s Laboratory for Atmospheric and Space Physics (LASP) by the Emirati engineers, assisted by their American counterparts, with support from Arizona State University (ASU) and the University of California, Berkeley. The project was led by MBRSC at every stage.',
                        characteristics: [
                            {
                                "Operator": "Mohammed bin Rashid Space Centre",
                                "COSPAR ID": "2020-047A",
                                "SATCAT no.": "45918"
                            },
                            {
                                "Mission duration": {
                                    "Planned": "2 years",
                                    "Elapsed": "935 days"
                                }
                            },
                            {
                                "Spacecraft properties": {
                                    "Spacecraft": "Hope (Arabic: الأمل, Al-Amal)",
                                    "Manufacturer": "MBRSC",
                                    "Partners": ["LASP (CU Boulder)", "UC Berkeley", "ASU"],
                                    "Launch mass": "1350 kg, including 800 kg hydrazine fuel",
                                    "Dry mass": "550 kg",
                                    "Dimensions": "2.37 m × 2.90 m",
                                    "Power": "1800 watts from two solar panels"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "19 July 2020, 21:58:14 UTC",
                                    "Rocket": "H-IIA",
                                    "Launch site": "Tanegashima, LP-1",
                                    "Contractor": "Mitsubishi Heavy Industries"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Periareon altitude": "20,000 km (12,000 mi)",
                                    "Apoareon altitude": "43,000 km (27,000 mi)",
                                    "Inclination": "Supersynchronous orbit",
                                    "Period": "55 hours",
                                    "Orbital insertion": "9 February 2021, 15:30 UTC"
                                }
                            },
                            {
                                "Instruments": ["EXI (Emirates eXploration Imager)", "EMIRS (Emirates Mars InfraRed Spectrometer)", "EMUS (Emirates Mars Ultraviolet Spectrometer)"]
                            }
                        ]
                    },
                    {
                        id: 'tianwen-1',
                        category: 'satellites',
                        subcategory: 'functional',
                        name: 'Tianwen-1',
                        cover: '/assets/satellites/tianwen_1.webp',
                        description: 'Tianwen-1 is an interplanetary mission by the China National Space Administration (CNSA) which sent a robotic spacecraft to Mars, consisting of 6 spacecraft: an orbiter, two deployable cameras, lander, remote camera, and the Zhurong rover. The spacecraft, with a total mass of nearly five tons, is one of the heaviest probes launched to Mars and carries 14 scientific instruments. It is the first in a series of planned missions undertaken by CNSA as part of its Planetary Exploration of China program.',
                        characteristics: [
                            {
                                "Mission type": "Mars exploration",
                                "Operator": "CNSA",
                                "COSPAR ID": "2020-049A",
                                "SATCAT no.": "45935"
                            },
                            {
                                "Mission duration": {
                                    "Elapsed": "1138 days",
                                    "Orbiter": {
                                        "Planned": "2 Earth years",
                                        "Since orbit insertion": "935 days"
                                    },
                                    "Zhurong": {
                                        "Planned": "90 sols (93 earth days)",
                                        "Since deployment": "835 days"
                                    }
                                }
                            },
                            {
                                "Spacecraft properties": {
                                    "Manufacturer": "CNSA",
                                    "Launch mass": {
                                        "Total": "5,000 kg (11,000 lb)",
                                        "Orbiter": "3,715 kg (8,190 lb)",
                                        "Zhurong": "240 kg (530 lb)"
                                    },
                                    "Dimensions": "Zhurong: 2.6 m × 3 m × 1.85 m (8 ft 6 in × 9 ft 10 in × 6 ft 1 in)"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "23 July 2020, 04:41:15 UTC",
                                    "Rocket": "Long March 5 (Y4)",
                                    "Launch site": "Wenchang LC-101",
                                    "Contractor": "China Aerospace Science and Technology Corporation",
                                    "Spacecraft component": "Tianwen-1 Orbiter",
                                    "Orbital insertion": "10 February 2021, 11:52 UTC"
                                }
                            },
                            {
                                "Components": [
                                    {
                                         
                                            "Name":"Flyby of Mars",
                                            "Spacecraft component": "Tianwen-1,Deployable Camera 1 (TDC-1)",
                                            "Closest approach": "~10 February 2021 (deployed from Tianwen-1 Orbiter in September 2020)"
                                        
                                    },
                                    {
                                 
                                            "Name": "Mars lander",
                                            "Spacecraft component": "Tianwen-1 Lander",
                                            "Landing date": "14 May 2021, 23:18 UTC",
                                            "Landing site": "Utopia Planitia",
                                            "Coordinates": "25.066°N 109.925°E"
                                        
                                    },
                                    {
                                    
                                            "Name": "Mars rover",
                                            "Spacecraft component": "Zhurong Rover",
                                            "Landing date": "14 May 2021, 23:18 UTC (deployed from Tianwen-1 lander on 22 May 2021, 02:40 UTC)",
                                            "Landing site": "Utopia Planitia",
                                            "Coordinates": "25.066°N 109.925°E",
                                            "Distance driven": "1.921 km (1.194 mi) as of 5 May 2022"
                                    
                                    },
                                    {

                                            "Name": "Mars lander",
                                            "Spacecraft component": "Tianwen-1 Remote Camera (TRC)",
                                            "Landing date": "14 May 2021, 23:18 UTC (deployed from Zhurong rover on 1 June 2021 which itself was deployed from Tianwen-1 lander on 22 May 2021, 02:40 UTC)",
                                            "Landing site": "Utopia Planitia",
                                            "Coordinates": "25.066°N 109.925°E"
                                    },
                                    {

                                            "Name": "Mars orbiter",
                                            "Spacecraft component": "Tianwen-1 Deployable Camera 2 (TDC-2)",
                                            "Orbital insertion": "10 February 2021, 11:52 UTC (entered orbit with the orbiter but was released from Tianwen-1 Orbiter on 31 December 2021)"

                                    }
                                ]
                            },
                        ],
                    },
                ]
            },
            {
                name: 'Non-Functional Satellites',
                category: 'satellites',
                subcategory: 'non-functional',
                cover: '/assets/covers/non_functional_satellites.webp',
                children: [
                    {
                        id: 'viking-1',
                        category: 'satellites',
                        subcategory: 'non-functional',
                        name: 'Viking 1',
                        cover: '/assets/satellites/viking.webp',
                        description: 'Viking 1 was the first of two spacecraft, along with Viking 2, each consisting of an orbiter and a lander, sent to Mars as part of NASA\'s Viking program. The lander touched down on Mars on July 20, 1976, the first successful Mars lander in history. Viking 1 operated on Mars for 2,307 days or 2245 Martian solar days, the longest Mars surface mission until the record was broken by the Opportunity rover on May 19, 2010.',
                        characteristics: [
                            {
                                "Mission type": "Orbiter and lander",
                                "Operator": "NASA",
                                "COSPAR ID": {
                                    "Orbiter": "1975-075A",
                                    "Lander": "1975-075C"
                                },
                                "SATCAT no.": {
                                    "Orbiter": "8108",
                                    "Lander": "9024"
                                }
                            },
                            {
                                "Mission duration": {
                                    "Orbiter": "1,846 days (1797 sols)",
                                    "Lander": "2,306 days (2,245 sols)",
                                    "Launch to last contact": "2,642 days"
                                }
                            },
                            {
                                "Spacecraft properties": {
                                    "Manufacturer": {
                                        "Orbiter": "NASA JPL",
                                        "Lander": "Martin Marietta"
                                    },
                                    "Launch mass": "3,530 kg",
                                    "Dry mass": {
                                        "Orbiter": "883 kg (1,947 lb)",
                                        "Lander": "572 kg (1,261 lb)"
                                    },
                                    "Power": {
                                        "Orbiter": "620 W",
                                        "Lander": "70 W"
                                    }
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "21:22, August 20, 1975 (UTC)",
                                    "Rocket": "Titan IIIE/Centaur",
                                    "Launch site": "LC-41, Cape Canaveral"
                                }
                            },
                            {
                                "End of mission": {
                                    "Last contact": "November 11, 1982"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric",
                                    "Spacecraft component": {
                                        "Viking 1 Orbiter": {
                                            "Orbital insertion": "June 19, 1976",
                                            "Periareion altitude": "320 km (200 mi)",
                                            "Apoareion altitude": "56,000 km (35,000 mi)",
                                            "Inclination": "39.3°"
                                        }
                                    },
                                    "Viking 1 Lander": {
                                        "Landing date": "July 20, 1976, 11:53:06 UTC"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        id: 'viking-2',
                        category: 'satellites',
                        subcategory: 'non-functional',
                        name: 'Viking 2',
                        cover: '/assets/satellites/viking.webp',
                        description: 'The Viking 2 mission was part of the American Viking program to Mars, and consisted of an orbiter and a lander essentially identical to that of the Viking 1 mission. Viking 2 was operational on Mars for 1281 sols (3 years, 221 days). The Viking 2 lander operated on the surface for 1,316 days, or 1281 sols, and was turned off on April 12, 1980, when its batteries failed. The orbiter worked until July 25, 1978, returning almost 16,000 images in 706 orbits around Mars.',
                        characteristics: [
                            {
                                "Mission type": "Orbiter and Lander",
                                "Operator": "NASA",
                                "COSPAR ID": {
                                    "Orbiter": "1975-083A",
                                    "Lander": "1975-083C"
                                },
                                "SATCAT no.": {
                                    "Orbiter": "8199",
                                    "Lander": "9408"
                                }
                            },
                            {
                                "Mission duration": {
                                    "Orbiter": "1050 days (1022 sol)",
                                    "Lander": "1316 days (1281 sol)",
                                    "Launch to last contact": "1,676 days"
                                }
                            },
                            {
                                "Spacecraft properties": {
                                    "Manufacturer": {
                                        "Orbiter": "JPL",
                                        "Lander": "Martin Marietta"
                                    },
                                    "Launch mass": "3,530 kg",
                                    "Dry mass": {
                                        "Orbiter": "883 kg (1,947 lb)",
                                        "Lander": "572 kg (1,261 lb)"
                                    },
                                    "Power": {
                                        "Orbiter": "620 W",
                                        "Lander": "70 W"
                                    }
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "18:39, September 9, 1975 (UTC)",
                                    "Rocket": "Titan IIIE with Centaur upper stage",
                                    "Launch site": "LC-41, Cape Canaveral"
                                }
                            },
                            {
                                "End of mission": {
                                    "Last contact": "April 12, 1980"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric",
                                    "Spacecraft component": {
                                        "Viking 2 Orbiter": {
                                            "Orbital insertion": "August 7, 1976",
                                            "Periareion altitude": "302 km (188 mi)",
                                            "Apoareion altitude": "33,176 km (20,615 mi)",
                                            "Inclination": "80.5°"
                                        }
                                    },
                                    "Viking 2 Lander": {
                                        "Landing date": "September 3, 1976, 22:37:50 UTC"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        id: 'mariner-9',
                        category: 'satellites',
                        subcategory: 'non-functional',
                        name: 'Mariner 9',
                        cover: '/assets/satellites/mariner_9.webp',
                        description: 'Mariner 9 was a robotic spacecraft that contributed greatly to the exploration of Mars and was part of the NASA Mariner program. Mariner 9 was launched toward Mars on May 30, 1971, from LC-36B at Cape Canaveral Air Force Station, Florida, and reached the planet on November 14 of the same year, becoming the first spacecraft to orbit another planet – only narrowly beating the Soviet probes Mars 2 (launched May 19) and Mars 3 (launched May 28), which both arrived at Mars only weeks later. After the occurrence of dust storms on the planet for several months following its arrival, the orbiter managed to send back clear pictures of the surface.Mariner 9 successfully returned 7, 329 images over the course of its mission, which concluded in October 1972.',
                        characteristics: [
                            {
                                "Mission type": "Mars orbiter",
                                "Operator": "NASA / JPL",
                                "COSPAR ID": "1971-051A",
                                "SATCAT no.": "5261"
                            },
                            {
                                "Mission duration": "51 years and 5 months"
                            },
                            {
                                "Spacecraft properties": {
                                    "Manufacturer": "Jet Propulsion Laboratory",
                                    "Launch mass": "997.9 kilograms (2,200 lb)",
                                    "Dry mass": "558.8 kilograms (1,232 lb)",
                                    "Power": "500 watts"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "May 30, 1971, 22:23:04 UTC",
                                    "Rocket": "Atlas SLV-3C Centaur-D",
                                    "Launch site": "Cape Canaveral"
                                }
                            },
                            {
                                "End of mission": {
                                    "Disposal": "Decommissioned",
                                    "Deactivated": "October 27, 1972",
                                    "Decay date": "Around October 2022"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric",
                                    "Eccentricity": "0.6014",
                                    "Periareion altitude": "1,650 km (1,030 mi)",
                                    "Apoareion altitude": "16,860 km (10,480 mi)",
                                    "Inclination": "64.4 degrees",
                                    "Period": "11.9 hours / 719.47 minutes",
                                    "Orbital insertion": "November 14, 1971, 00:42:00 UTC"
                                }
                            },
                            {
                                "Instruments": [
                                    "Ultraviolet Spectrometer (UVS)",
                                    "Infrared Interferometer Spectrometer (IRIS)",
                                    "Celestial Mechanics (not a separate instrument; relied upon tracking measurements)",
                                    "S-Band Occultation (not a separate instrument; observed attenuation of communication signal)",
                                    "Infrared Radiometer (IRR)",
                                    "Visual Imaging System (achieved a resolution of 98 meters per pixel)"
                                ]
                            }
                        ]
                    },
                    {
                        id: 'mgs',
                        category: 'satellites',
                        subcategory: 'non-functional',
                        name: 'Mars Global Surveyor',
                        cover: '/assets/satellites/mgs.webp',
                        description: 'MGS (Mars Global Surveyor) was an American robotic space probe developed by NASA\'s Jet Propulsion Laboratory and launched November 1996. MGS was a global mapping mission that examined the entire planet, from the ionosphere down through the atmosphere to the surface. As part of the larger Mars Exploration Program, Mars Global Surveyor performed atmospheric monitoring for sister orbiters during aerobraking, and helped Mars rovers and lander missions by identifying potential landing sites and relaying surface telemetry.',
                        characteristics: [
                            {
                                "Mission type": "Mars orbiter",
                                "Operator": "NASA / JPL",
                                "COSPAR ID": "1996-062A",
                                "SATCAT no.": "24648"
                            },
                            {
                                "Mission duration": "10 years, 2 months, and 20 days"
                            },
                            {
                                "Mission objectives": {
                                    "Primary mission": [
                                        "Characterize the surface features and geological processes on Mars.",
                                        "Determine the composition, distribution, and physical properties of surface minerals, rocks, and ice.",
                                        "Determine the global topography, planet shape, and gravitational field.",
                                        "Establish the nature of the magnetic field and map the crustal remnant field.",
                                        "Monitor global weather and the thermal structure of the atmosphere.",
                                        "Study interactions between Mars' surface and the atmosphere by monitoring surface features, polar caps, the polar energy balance, and dust and clouds over a seasonal cycle."
                                    ],
                                    "Extended mission": [
                                        "Continued weather monitoring in collaboration with NASA's Mars Reconnaissance Orbiter.",
                                        "Imaging of possible landing sites for the 2007 Phoenix spacecraft and the 2011 Curiosity rover.",
                                        "Observation and analysis of key sites of scientific interest, such as sedimentary-rock outcrop sites.",
                                        "Continued monitoring of surface changes due to wind and ice."
                                    ]
                                }
                            },
                            {
                                "End of mission": {
                                    "Disposal": "Decommissioned",
                                    "Last contact": "2 November 2006",
                                    "Decay date": "2050 (estimated)"
                                }
                            },
                            {
                                "Spacecraft properties": {
                                    "Launch mass": "1,030.5 kg (2,272 lb)",
                                    "Power": "980 watts"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "7 November 1996, 17:00 UTC",
                                    "Rocket": "Delta II 7925",
                                    "Launch site": "Cape Canaveral LC-17A",
                                    "Contractor": "Boeing IDS"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric",
                                    "Regime": "Sun-synchronous",
                                    "Semi-major axis": "3,769 km (2,342 mi)",
                                    "Eccentricity": "0.008",
                                    "Periareion altitude": "372.8 km (231.6 mi)",
                                    "Apoareion altitude": "436.5 km (271.2 mi)",
                                    "Inclination": "92.9 degrees",
                                    "Period": "1.95 hours",
                                    "Orbital insertion": "11 September 1997, 01:17 UTC"
                                }
                            }
                        ]
                    },
                    {
                        id: 'mars-2',
                        category: 'satellites',
                        subcategory: 'non-functional',
                        name: 'Mars 2',
                        cover: '/assets/satellites/mars_235.webp',
                        description: 'The Mars 2 was an uncrewed space probe of the Mars program, a series of uncrewed Mars landers and orbiters launched by the Soviet Union beginning 19 May 1971. The Mars 2 and Mars 3 missions consisted of identical spacecraft, each with an orbiter and an attached lander. The orbiter is identical to the Venera 9 bus. The type of bus/orbiter is the 4MV. They were launched by a Proton-K heavy launch vehicle with a Blok D upper stage. The lander of Mars 2 became the first human-made object to reach the surface of Mars, although the landing system failed and the lander was lost.',
                        characteristics: [
                            {
                                "Mission type": "Orbiter and lander",
                                "Operator": "Soviet Union",
                                "COSPAR ID": {
                                    "Orbiter": "1971-045A",
                                    "Lander": "1971-045D"
                                },
                                "SATCAT no.": {
                                    "Orbiter": "5234",
                                    "Lander": "5739"
                                }
                            },
                            {
                                "Mission duration": "461 days"
                            },
                            {
                                "Spacecraft properties": {
                                    "Manufacturer": "OKB-1",
                                    "Launch mass": {
                                        "Combined": "4,650 kg (10,250 lb)",
                                        "Orbiter": "3,440 kg (7,580 lb)",
                                        "Lander": "1,210 kg (2,670 lb)"
                                    }
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "16:22:44, May 19, 1971 (UTC)",
                                    "Rocket": "Proton K with Blok D upper stage"
                                }
                            },
                            {
                                "End of mission": {
                                    "Disposal": "Decommissioned",
                                    "Deactivated": "August 22, 1972",
                                    "Last contact": "Last data transmission July 1972"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric",
                                    "Orbital insertion": "27 November 1971",
                                    "Orbits": "362",
                                    "Periareion altitude": "1,380 km (860 mi)",
                                    "Apoareion altitude": "24,940 km (15,500 mi)",
                                    "Inclination": "48.9°"
                                }
                            },
                            {
                                "Spacecraft component": {
                                    "Mars 2 Lander": {
                                        "Landing date": "27 November 1971"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        id: 'mars-3',
                        category: 'satellites',
                        subcategory: 'non-functional',
                        name: 'Mars 3',
                        cover: '/assets/satellites/mars_235.webp',
                        description: 'Mars 3 was a robotic space probe of the Soviet Mars program, launched May 28, 1971, nine days after its twin spacecraft Mars 2. The probes were identical robotic spacecraft launched by Proton-K rockets with a Blok D upper stage, each consisting of an orbiter and an attached lander. After the Mars 2 lander crashed on the Martian surface, the Mars 3 lander became the first spacecraft to attain a soft landing on Mars, on December 2, 1971. It failed 110 seconds after landing, having transmitted only a gray image with no details. The Mars 2 orbiter and Mars 3 orbiter continued to circle Mars and transmit images back to Earth for another eight months.',
                        characteristics: [
                            {
                                "Mission type": "Orbiter and lander",
                                "Operator": "Soviet Union",
                                "COSPAR ID": {
                                    "Orbiter": "1971-049A",
                                    "Lander": "1971-049C"
                                },
                                "SATCAT no.": {
                                    "Orbiter": "5252",
                                    "Lander": "5667"
                                }
                            },
                            {
                                "Mission duration": {
                                    "Orbiter": "452 days"
                                }
                            },
                            {
                                "Spacecraft properties": {
                                    "Launch mass": {
                                        "Combined": "4,650 kg (10,250 lb)",
                                        "Orbiter": "3,440 kg (7,580 lb)",
                                        "Lander": "1,210 kg (2,670 lb)"
                                    }
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "15:26:30, May 28, 1971 (UTC)",
                                    "Rocket": "Proton-K with Blok D upper stage"
                                }
                            },
                            {
                                "End of mission": {
                                    "Disposal": "Decommissioned",
                                    "Deactivated": "August 22, 1972 (orbiter)",
                                    "Last contact": "Last data transmission July 1972"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric",
                                    "Mars orbiter": {
                                        "Orbital insertion": "December 2, 1971",
                                        "Periareion altitude": "1,500 km (930 mi)",
                                        "Apoareion altitude": "211,400 km (131,400 mi)",
                                        "Inclination": "60°"
                                    }
                                }
                            },
                            {
                                "Spacecraft component": {
                                    "Mars 3 Lander": {
                                        "Landing date": "December 2, 1971 (11 Libra 192 Darian)",
                                        "Time of Landing": "13:52 UTC SCET (MSD 34809 03:06 AMT)"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        id: 'mars-5',
                        category: 'satellites',
                        subcategory: 'non-functional',
                        name: 'Mars 5',
                        cover: '/assets/satellites/mars_235.webp',
                        description: 'Mars 5 also known as 3MS No.53S was a Soviet spacecraft launched to explore Mars.A 3MS spacecraft launched as part of the Mars programme, it successfully entered orbit around Mars in 1974. However, it failed a few weeks later.',
                        characteristics: [
                            {
                                "Mission type": "Mars orbiter",
                                "Operator": "Lavochkin",
                                "COSPAR ID": "1973-049A",
                                "SATCAT no.": "6754"
                            },
                            {
                                "Mission duration": "In Mars Orbit: 49 years, 6 months and 20 days"
                            },
                            {
                                "Spacecraft properties": {
                                    "Spacecraft": "3MS No.53S",
                                    "Manufacturer": "Lavochkin",
                                    "Launch mass": "3,440 kilograms (7,580 lb)"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "25 July 1973, 18:55:48 UTC",
                                    "Rocket": "Proton-K/D",
                                    "Launch site": "Baikonur 81/24"
                                }
                            },
                            {
                                "End of mission": {
                                    "Last contact": "28 February 1974"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric",
                                    "Periareon altitude": "1,760 kilometres (1,090 mi)",
                                    "Apoareon altitude": "35,300 kilometres (21,900 mi)",
                                    "Inclination": "35.3 degrees",
                                    "Orbital insertion": "12 February 1974, 15:45 UTC"
                                }
                            }
                        ]
                    },
                    {
                        id: 'phobos-2',
                        category: 'satellites',
                        subcategory: 'non-functional',
                        name: 'Phobos 2',
                        cover: '/assets/satellites/phobos_2.webp',
                        description: 'Phobos 2 was the last space probe designed by the Soviet Union. It was designed to explore the moons of Mars, Phobos and Deimos. It was launched on 12 July 1988, and entered orbit on 29 January 1989. Phobos 2 operated nominally throughout its cruise and Mars orbital insertion phase on 29 January 1989, gathering data on the Sun, interplanetary medium, Mars, and Phobos. Phobos 2 investigated the Mars surface and atmosphere and returned 37 images of Phobos with a resolution of up to 40 meters.',
                        characteristics: [
                            {
                                "Mission type": "Orbiter",
                                "Operator": "Soviet Union",
                                "COSPAR ID": "1988-059A",
                                "SATCAT no.": "19287"
                            },
                            {
                                "Mission duration": "8 months, 15 days (launch until comm failure)"
                            },
                            {
                                "Spacecraft properties": {
                                    "Launch mass": "6,220 kg (with orbital insertion hardware)"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "17:01:43, 12 July 1988 (UTC)",
                                    "Rocket": "Proton-K rocket"
                                }
                            },
                            {
                                "End of mission": {
                                    "Last contact": "27 March 1989 (spacecraft signal failed to be reacquired)"
                                }
                            },
                            {
                                "Orbital parameters": {
                                    "Reference system": "Areocentric",
                                    "Orbital insertion": "29 January 1989"
                                }
                            }
                        ]
                    },
                    {
                        id: 'mangalyaan',
                        category: 'satellites',
                        subcategory: 'non-functional',
                        name: 'The Mars Orbiter Mission',
                        cover: '/assets/logos/mom_logo.webp',
                        description: 'The Mars Orbiter Mission, unofficially known as Mangalyaan, was a space probe orbiting Mars since 24 September 2014. It was launched on 5 November 2013 by the Indian Space Research Organisation (ISRO).  It was India\'s first interplanetary mission and it made ISRO the fourth space agency to achieve Mars orbit, after Roscosmos, NASA, and the European Space Agency.It made India the first Asian nation to reach the Martian orbit and the first nation in the world to do so on its maiden attempt.',
                        characteristics: [
                            {
                                "Mission type": "Mars orbiter",
                                "Operator": "ISRO",
                                "COSPAR ID": "2013-060A",
                                "SATCAT no.": "39370"
                            },
                            {
                                "Mission duration": {
                                    "Planned": "6 months",
                                    "Elapsed": "7 years, 6 months, 8 days"
                                }
                            },
                            {
                                "Spacecraft properties": {
                                    "Bus": "I-1K",
                                    "Manufacturer": "U R Rao Satellite Centre",
                                    "Launch mass": "1,337.2 kg (2,948 lb)",
                                    "BOL mass": "≈550 kg (1,210 lb)",
                                    "Dry mass": "482.5 kg (1,064 lb)",
                                    "Payload mass": "13.4 kg (30 lb)",
                                    "Dimensions": "1.5 m (4.9 ft) cube",
                                    "Power": "840 watts"
                                }
                            },
                            {
                                "Start of mission": {
                                    "Launch date": "5 November 2013, 09:08 UTC",
                                    "Rocket": "PSLV-XL C25",
                                    "Launch site": "Satish Dhawan Space Centre, FLP",
                                    "Contractor": "ISRO"
                                }
                            },
                            {
                                "End of mission": {
                                    "Last contact": "April 2022",
                                    "Orbital insertion": "24 September 2014, 02:10 UTC (7:40 IST)",
                                    "Periareon altitude": "421.7 km (262.0 mi)",
                                    "Apoareon altitude": "76,993.6 km (47,841.6 mi)",
                                    "Inclination": "150.0°"
                                }
                            }
                        ]
                    },
                ],
            },
        ]
    },
    // Onions
    {
        id: 'onions',
        name: 'Onions',
        category: 'onions',
        cover:'/assets/covers/missions.webp',
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
        missions: [
            {
                "Mission": "1M No.1",
                "Spacecraft": "1M No.1",
                "Launch Date": "10 October 1960",
                "Operator": "OKB-1 Soviet Union",
                "Mission Type": "Flyby",
                "Outcome": "Launch failure",
                "Remarks": "Failed to achieve Earth orbit",
                "Carrier rocket": "Molniya",
                logo: '/assets/logos/okb_1_logo.webp'
            },
            {
                "Mission": "1M No.2",
                "Spacecraft": "1M No.2",
                "Launch Date": "14 October 1960",
                "Operator": "OKB-1 Soviet Union",
                "Mission Type": "Flyby",
                "Outcome": "Launch failure",
                "Remarks": "Failed to achieve Earth orbit",
                "Carrier rocket": "Molniya",
                logo: '/assets/logos/okb_1_logo.webp'
            },
            {
                "Mission": "2MV-4 No.1",
                "Spacecraft": "2MV-4 No.1",
                "Launch Date": "24 October 1962",
                "Operator": "Soviet Union",
                "Mission Type": "Flyby",
                "Outcome": "Launch failure",
                "Remarks": "Booster stage (\"Block L\") disintegrated in LEO",
                "Carrier rocket": "Molniya",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Mars 1",
                "Spacecraft": "Mars 1 (2MV-4 No.2)",
                "Launch Date": "1 November 1962",
                "Operator": "Soviet Union",
                "Mission Type": "Flyby",
                "Outcome": "Spacecraft failure",
                "Remarks": "Communications lost before first flyby",
                "Carrier rocket": "Molniya",
                logo: '/assets/logos/mars_1_logo.webp'
            },
            {
                "Mission": "2MV-3 No.1",
                "Spacecraft": "2MV-3 No.1",
                "Launch Date": "4 November 1962",
                "Operator": "Soviet Union",
                "Mission Type": "Lander",
                "Outcome": "Launch failure",
                "Remarks": "Never left LEO",
                "Carrier rocket": "Molniya",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Mariner 3",
                "Spacecraft": "Mariner 3",
                "Launch Date": "5 November 1964",
                "Operator": "NASA United States",
                "Mission Type": "Flyby",
                "Outcome": "Launch failure",
                "Remarks": "Payload fairing failed to separate",
                "Carrier rocket": "Atlas LV-3 Agena-D",
                logo: '/assets/logos/nasa_logo.svg'
            },
            {
                "Mission": "Mariner 4",
                "Spacecraft": "Mariner 4",
                "Launch Date": "28 November 1964",
                "Operator": "NASA United States",
                "Mission Type": "Flyby",
                "Outcome": "Successful",
                "Remarks": "First successful flyby of Mars on 15 July 1965",
                "Carrier rocket": "Atlas LV-3 Agena-D",
                logo: '/assets/logos/nasa_logo.svg'
            },
            {
                "Mission": "Zond 2",
                "Spacecraft": "Zond 2 (3MV-4A No.2)",
                "Launch Date": "30 November 1964",
                "Operator": "Soviet Union",
                "Mission Type": "Flyby",
                "Outcome": "Spacecraft failure",
                "Remarks": "Communications lost before flyby",
                "Carrier rocket": "Molniya",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Mariner 6",
                "Spacecraft": "Mariner 6",
                "Launch Date": "25 February 1969",
                "Operator": "NASA United States",
                "Mission Type": "Flyby",
                "Outcome": "Successful",
                "Carrier rocket": "Atlas SLV-3C Centaur-D",
                logo: '/assets/logos/nasa_logo.svg'
            },
            {
                "Mission": "2M No.521 (1969A)",
                "Spacecraft": "2M No.521 (1969A)",
                "Launch Date": "27 March 1969",
                "Operator": "Soviet Union",
                "Mission Type": "Orbiter",
                "Outcome": "Launch failure",
                "Remarks": "Failed to achieve Earth orbit",
                "Carrier rocket": "Proton-K/D",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Mariner 7",
                "Spacecraft": "Mariner 7",
                "Launch Date": "27 March 1969",
                "Operator": "NASA United States",
                "Mission Type": "Flyby",
                "Outcome": "Successful",
                "Carrier rocket": "Atlas SLV-3C Centaur-D",
                logo: '/assets/logos/nasa_logo.svg'
            },
            {
                "Mission": "2M No.522 (1969B)",
                "Spacecraft": "2M No.522 (1969B)",
                "Launch Date": "2 April 1969",
                "Operator": "Soviet Union",
                "Mission Type": "Orbiter",
                "Outcome": "Launch failure",
                "Remarks": "Failed to achieve Earth orbit",
                "Carrier rocket": "Proton-K/D",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Mariner 8",
                "Spacecraft": "Mariner 8",
                "Launch Date": "9 May 1971",
                "Operator": "NASA United States",
                "Mission Type": "Orbiter",
                "Outcome": "Launch failure",
                "Remarks": "Failed to achieve Earth orbit",
                "Carrier rocket": "Atlas SLV-3C Centaur-D",
                logo: '/assets/logos/nasa_logo.svg'
            },
            {
                "Mission": "Kosmos 419 (3MS No.170)",
                "Spacecraft": "Kosmos 419 (3MS No.170)",
                "Launch Date": "10 May 1971",
                "Operator": "Soviet Union",
                "Mission Type": "Orbiter",
                "Outcome": "Launch failure",
                "Remarks": "Never left LEO; booster stage burn timer set incorrectly",
                "Carrier rocket": "Proton-K/D",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Mars 2 (4M No.171)",
                "Spacecraft": "Mars 2 (4M No.171)",
                "Launch Date": "19 May 1971",
                "Operator": "Soviet Union",
                "Mission Type": "Orbiter",
                "Outcome": "Successful",
                "Remarks": "Operated for 362 orbits",
                "Carrier rocket": "Proton-K/D",
                logo: '/assets/logos/mars2_3_logo.webp'
            },
            {
                "Mission": "Mars 2 lander (SA 4M No.171)",
                "Spacecraft": "Mars 2 lander (SA 4M No.171)",
                "Launch Date": "19 May 1971",
                "Operator": "Soviet Union",
                "Mission Type": "Lander",
                "Outcome": "Spacecraft failure",
                "Remarks": "First lander to impact Mars. Deployed from Mars 2, failed to land during attempt",
                logo: '/assets/logos/mars2_3_logo.webp'
            },
            {
                "Mission": "Mars 4 (3MS No.52S)",
                "Spacecraft": "Mars 4 (3MS No.52S)",
                "Launch Date": "21 July 1973",
                "Operator": "Soviet Union",
                "Mission Type": "Orbiter",
                "Outcome": "Partial success",
                "Remarks": "Failed to perform orbital insertion burn. Returned photographs of Mars during flyby.",
                "Carrier rocket": "Proton-K/D",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Mars 5 (3MS No.53S)",
                "Spacecraft": "Mars 5 (3MS No.53S)",
                "Launch Date": "25 July 1973",
                "Operator": "Soviet Union",
                "Mission Type": "Orbiter",
                "Outcome": "Successful",
                "Remarks": "Contact lost after 9 days in Mars orbit. Returned 180 frames",
                "Carrier rocket": "Proton-K/D",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Mars 6 (3MP No.50P)",
                "Spacecraft": "Mars 6 (3MP No.50P)",
                "Launch Date": "5 August 1973",
                "Operator": "Soviet Union",
                "Mission Type": "Flyby",
                "Outcome": "Successful",
                "Remarks": "Flyby bus collected data.",
                "Carrier rocket": "Proton-K/D",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Mars 6 lander",
                "Spacecraft": "Mars 6 lander",
                "Launch Date": "5 August 1973",
                "Operator": "Soviet Union",
                "Mission Type": "Lander",
                "Outcome": "Spacecraft failure",
                "Remarks": "Contact lost upon landing, atmospheric data mostly unusable.",
                "Carrier rocket": "Proton-K/D",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Mars 7 (3MP No.51P)",
                "Spacecraft": "Mars 7 (3MP No.51P)",
                "Launch Date": "9 August 1973",
                "Operator": "Soviet Union",
                "Mission Type": "Flyby",
                "Outcome": "Successful",
                "Remarks": "Flyby bus collected data.",
                "Carrier rocket": "Proton-K/D",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Mars 7 lander",
                "Spacecraft": "Mars 7 lander",
                "Launch Date": "9 August 1973",
                "Operator": "Soviet Union",
                "Mission Type": "Lander",
                "Outcome": "Spacecraft failure",
                "Remarks": "Separated from coast stage prematurely, failed to enter Martian atmosphere.",
                "Carrier rocket": "Proton-K/D",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Viking 1 orbiter",
                "Spacecraft": "Viking 1 orbiter",
                "Launch Date": "20 August 1975",
                "Operator": "NASA United States",
                "Mission Type": "Orbiter",
                "Outcome": "Successful",
                "Remarks": "Operated for 1385 orbits. Entered Mars orbit on 19 June 1976.",
                "Carrier rocket": "Titan IIIE Centaur-D1T",
                logo: '/assets/logos/nasa_worm_logo.svg'
            },
            {
                "Mission": "Viking 1 lander",
                "Spacecraft": "Viking 1 lander",
                "Launch Date": "20 August 1975",
                "Operator": "NASA United States",
                "Mission Type": "Lander",
                "Outcome": "Successful",
                "Remarks": "First successful Mars lander. Deployed from Viking 1 orbiter. Landed on Mars on 20 July 1976. Operated for 2245 sols.",
                "Carrier rocket": "Titan IIIE Centaur-D1T",
                logo: '/assets/logos/nasa_worm_logo.svg'
            },
            {
                "Mission": "Viking 2 orbiter",
                "Spacecraft": "Viking 2 orbiter",
                "Launch Date": "9 September 1975",
                "Operator": "NASA United States",
                "Mission Type": "Orbiter",
                "Outcome": "Successful",
                "Remarks": "Operated for 700 orbits. Entered Mars orbit on 7 August 1976.",
                "Carrier rocket": "Titan IIIE Centaur-D1T",
                logo: '/assets/logos/nasa_worm_logo.svg'
            },
            {
                "Mission": "Viking 2 lander",
                "Spacecraft": "Viking 2 lander",
                "Launch Date": "9 September 1975",
                "Operator": "NASA United States",
                "Mission Type": "Lander",
                "Outcome": "Successful",
                "Remarks": "Deployed from Viking 2 orbiter. Landed on Mars on September 1976. Operated for 1281 sols (11 April 1980).",
                "Carrier rocket": "Titan IIIE Centaur-D1T",
                logo: '/assets/logos/nasa_worm_logo.svg'
            },
            {
                "Mission": "Phobos 1 (1F No.101)",
                "Spacecraft": "Phobos 1 (1F No.101)",
                "Launch Date": "7 July 1988",
                "Operator": "Soviet Union",
                "Mission Type": "Orbiter",
                "Outcome": "Spacecraft failure",
                "Remarks": "Communications lost before reaching Mars; failed to enter orbit",
                "Carrier rocket": "Proton-K/D-2",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Phobos 1 DAS",
                "Spacecraft": "Phobos 1 DAS",
                "Launch Date": "7 July 1988",
                "Operator": "Soviet Union",
                "Mission Type": "Phobos lander",
                "Outcome": "Failure",
                "Remarks": "Lost with Phobos 1. To have been deployed by Phobos 1",
                "Carrier rocket": "Proton-K/D-2",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Phobos 2 (1F No.102)",
                "Spacecraft": "Phobos 2 (1F No.102)",
                "Launch Date": "12 July 1988",
                "Operator": "Soviet Union",
                "Mission Type": "Orbiter",
                "Outcome": "Mostly successful",
                "Remarks": "Orbital observations successful, communications lost before lander deployment.",
                "Carrier rocket": "Proton-K/D-2",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Phobos 2 Prop-F",
                "Spacecraft": "Phobos 2 Prop-F",
                "Launch Date": "12 July 1988",
                "Operator": "Soviet Union",
                "Mission Type": "Phobos rover",
                "Outcome": "Failure",
                "Remarks": "Lost with Phobos 2. To have been deployed by Phobos 2",
                "Carrier rocket": "Proton-K/D-2",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Phobos 2",
                "Spacecraft": "DAS",
                "Launch Date": "12 July 1988",
                "Operator": "Soviet Union",
                "Mission Type": "Phobos lander",
                "Outcome": "Failure",
                "Remarks": "Lost with Phobos 2",
                "Carrier rocket": "Proton-K/D-2",
                logo: '/assets/logos/ussr_logo.svg'
            },
            {
                "Mission": "Mars Observer",
                "Spacecraft": "Mars Observer",
                "Launch Date": "25 September 1992",
                "Operator": "NASA United States",
                "Mission Type": "Orbiter",
                "Outcome": "Spacecraft failure",
                "Remarks": "Lost communications before orbital insertion",
                "Carrier rocket": "Commercial Titan III",
                logo: '/assets/logos/nasa_logo.svg'
            },
            {
                "Mission": "Mars Global Surveyor",
                "Spacecraft": "Mars Global Surveyor",
                "Launch Date": "7 November 1996",
                "Operator": "NASA United States",
                "Mission Type": "Orbiter",
                "Outcome": "Successful",
                "Remarks": "Operated for ten years",
                "Carrier rocket": "Delta II 7925",
                logo: '/assets/logos/mgs_logo.webp'
            },
            {
                "Mission": "Mars 96",
                "Spacecraft": "Mars 96",
                "Launch Date": "16 November 1996",
                "Operator": "Rosaviakosmos Russia",
                "Mission Type": "Orbiter Penetrators",
                "Outcome": "Spacecraft failure",
                "Remarks": "Never left LEO",
                "Carrier rocket": "Proton-K/D-2",
                logo: '/assets/logos/rosaviacosmos_logo.webp'
            },
            {
                "Mission": "Mars 96",
                "Spacecraft": "Mars 96 lander",
                "Launch Date": "16 November 1996",
                "Operator": "Rosaviakosmos Russia",
                "Mission Type": "Lander",
                "Outcome": "Failure",
                "Remarks": "Lost with Mars 96. Two Mars landers to have been deployed by Mars 96.",
                "Carrier rocket": "Proton-K/D-2",
                logo: '/assets/logos/rosaviacosmos_logo.webp'
            },
            {
                "Mission": "Mars 96",
                "Spacecraft": "Mars 96 penetrator",
                "Launch Date": "16 November 1996",
                "Operator": "Rosaviakosmos Russia",
                "Mission Type": "Penetrator",
                "Outcome": "Failure",
                "Remarks": "Lost with Mars 96. Two Mars Penetrators to have been deployed by Mars 96.",
                "Carrier rocket": "Proton-K/D-2",
                logo: '/assets/logos/rosaviacosmos_logo.webp'
            },
            {
                "Mission": "Mars Pathfinder",
                "Spacecraft": "Mars Pathfinder",
                "Launch Date": "4 December 1996",
                "Operator": "NASA United States",
                "Mission Type": "Lander",
                "Outcome": "Successful",
                "Remarks": "Landed at 19.13°N 33.22°W on 4 July 1997. Last contact on 27 September 1997.",
                "Carrier rocket": "Delta II 7925",
                logo: '/assets/logos/mp_logo.webp'
            },
            {
                "Mission": "Mars Pathfinder",
                "Spacecraft": "Sojourner",
                "Launch Date": "4 December 1996",
                "Operator": "NASA United States",
                "Mission Type": "Rover",
                "Outcome": "Successful",
                "Remarks": "First rover to operate on another planet. Operated for 84 days.",
                "Carrier rocket": "Delta II 7925",
                logo: '/assets/logos/mp_logo.webp'
            },
            {
                "Mission": "Nozomi",
                "Spacecraft": "Nozomi",
                "Launch Date": "3 July 1998",
                "Operator": "ISAS Japan",
                "Mission Type": "Orbiter",
                "Outcome": "Spacecraft failure",
                "Remarks": "Performed a Mars flyby. Later contact lost due to loss of fuel.",
                "Carrier rocket": "M-V",
                logo: '/assets/logos/isas_logo.webp'
            },
            {
                "Mission": "Mars Climate Orbiter",
                "Spacecraft": "Mars Climate Orbiter",
                "Launch Date": "11 December 1998",
                "Operator": "NASA United States",
                "Mission Type": "Orbiter",
                "Outcome": "Spacecraft failure",
                "Remarks": "Approached Mars too closely during orbit insertion attempt due to a software interface bug involving different units for impulse and either burned up in the atmosphere or entered solar orbit.",
                "Carrier rocket": "Delta II 7425",
                logo: '/assets/logos/nasa_logo.svg'
            },
            {
                "Mission": "Mars Polar Lander / Deep Space 2",
                "Spacecraft": "Mars Polar Lander",
                "Launch Date": "3 January 1999",
                "Operator": "NASA United States",
                "Mission Type": "Lander",
                "Outcome": "Spacecraft failure",
                "Remarks": "Failed to function after landing.",
                "Carrier rocket": "Delta II 7425",
                logo: '/assets/logos/m98_logo.webp'
            },
            {
                "Mission": "Mars Polar Lander / Deep Space 2",
                "Spacecraft": "Deep Space 2",
                "Launch Date": "3 January 1999",
                "Operator": "NASA United States",
                "Mission Type": "Penetrator",
                "Outcome": "Spacecraft failure",
                "Remarks": "No data transmitted after deployment from MPL.",
                "Carrier rocket": "Delta II 7425",
                logo: '/assets/logos/m98_logo.webp'
            },
            {
                "Mission": "Mars Odyssey",
                "Spacecraft": "Mars Odyssey",
                "Launch Date": "7 April 2001",
                "Operator": "NASA United States",
                "Mission Type": "Orbiter",
                "Outcome": "Operational",
                "Remarks": "Expected to remain operational until 2025.",
                "Carrier rocket": "Delta II 7925",
                logo: '/assets/logos/2001_mars_odyssey_logo.webp'
            },
            {
                "Mission": "Mars Express",
                "Spacecraft": "Mars Express",
                "Launch Date": "2 June 2003",
                "Operator": "ESA",
                "Mission Type": "Orbiter",
                "Outcome": "Operational",
                "Remarks": "Enough fuel to remain operational until 2035.",
                "Carrier rocket": "Soyuz-FG / Fregat",
                logo: '/assets/logos/mars_express_logo.webp'
            },
            {
                "Mission": "Mars Express",
                "Spacecraft": "Beagle 2",
                "Launch Date": "2 June 2003",
                "Operator": "ESA United Kingdom",
                "Mission Type": "Lander",
                "Outcome": "Lander failure",
                "Remarks": "No communications received after release from Mars Express. Orbital images of landing site suggest a successful landing, but two solar panels failed to deploy, obstructing its communications.",
                "Carrier rocket": "Soyuz-FG / Fregat",
                logo: '/assets/logos/mars_express_logo.webp'
            },
            {
                "Mission": "Spirit (MER-A)",
                "Spacecraft": "Spirit (MER-A)",
                "Launch Date": "10 June 2003",
                "Operator": "NASA United States",
                "Mission Type": "Rover",
                "Outcome": "Successful",
                "Remarks": "Landed on 4 January 2004. Operated for 2208 sols",
                "Carrier rocket": "Delta II 7925",
                logo: '/assets/logos/mer_a_logo.webp'
            },
            {
                "Mission": "Opportunity (MER-B)",
                "Spacecraft": "Opportunity (MER-B)",
                "Launch Date": "8 July 2003",
                "Operator": "NASA United States",
                "Mission Type": "Rover",
                "Outcome": "Successful",
                "Remarks": "Landed on 25 January 2004. Operated for 5351 sols",
                "Carrier rocket": "Delta II 7925H",
                logo: '/assets/logos/mer_b_logo.webp'
            },
            {
                "Mission": "Rosetta",
                "Spacecraft": "Rosetta",
                "Launch Date": "2 March 2004",
                "Operator": "ESA",
                "Mission Type": "Flyby (Gravity assist)",
                "Outcome": "Successful",
                "Remarks": "Flyby in February 2007 en route to 67P/Churyumov–Gerasimenko",
                "Carrier rocket": "Ariane 5G+",
                logo: '/assets/logos/rosetta_logo.webp'
            },
            {
                "Mission": "Rosetta Philae",
                "Spacecraft": "Rosetta Philae",
                "Launch Date": "2 March 2004",
                "Operator": "ESA",
                "Mission Type": "Flyby (Gravity assist)",
                "Outcome": "Successful",
                "Remarks": "Flyby in February 2007 en route to 67P/Churyumov–Gerasimenko",
                "Carrier rocket": "Ariane 5G+",
                logo: '/assets/logos/rosetta_logo.webp'
            },
            {
                "Mission": "Mars Reconnaissance Orbiter",
                "Spacecraft": "Mars Reconnaissance Orbiter",
                "Launch Date": "12 August 2005",
                "Operator": "NASA United States",
                "Mission Type": "Orbiter",
                "Outcome": "Operational",
                "Remarks": "Entered orbit on 10 March 2006",
                "Carrier rocket": "Atlas V 401",
                logo: '/assets/logos/mro_logo.webp'
            },
            {
                "Mission": "Phoenix",
                "Spacecraft": "Phoenix",
                "Launch Date": "4 August 2007",
                "Operator": "NASA United States",
                "Mission Type": "Lander",
                "Outcome": "Successful",
                "Remarks": "Landed on 25 May 2008. End of mission 2 November 2008",
                "Carrier rocket": "Delta II 7925",
                logo: '/assets/logos/phoenix_logo.webp'
            },
            {
                "Mission": "Dawn",
                "Spacecraft": "Dawn",
                "Launch Date": "27 September 2007",
                "Operator": "NASA United States",
                "Mission Type": "Flyby (Gravity assist)",
                "Outcome": "Successful",
                "Remarks": "Flyby in February 2009 en route to 4 Vesta and Ceres",
                "Carrier rocket": "Delta II 7925H",
                logo: '/assets/logos/dawn_logo.webp'
            },
            {
                "Mission": "Fobos-Grunt / Yinghuo-1 Fobos-Grunt",
                "Spacecraft": "Fobos-Grunt / Yinghuo-1 Fobos-Grunt",
                "Launch Date": "8 November 2011",
                "Operator": "Roskosmos Russia",
                "Mission Type": "Orbiter Phobos sample return",
                "Outcome": "Spacecraft failure",
                "Remarks": "Never left LEO (intended to depart under own power)",
                "Carrier rocket": "Zenit-2M",
                logo: '/assets/logos/roscosmos_logo.svg'
            },
            {
                "Mission": "Fobos-Grunt / Yinghuo-1 Yinghuo-1",
                "Spacecraft": "Fobos-Grunt / Yinghuo-1 Yinghuo-1",
                "Launch Date": "8 November 2011",
                "Operator": "CNSA China",
                "Mission Type": "Orbiter",
                "Outcome": "Failure",
                "Remarks": "Lost with Fobos-Grunt. To have been deployed by Fobos-Grunt",
                "Carrier rocket": "Zenit-2M",
                logo: '/assets/logos/cnsa_logo.svg'
            },
            {
                "Mission": "Mars Science Laboratory Curiosity (Mars Science Laboratory)",
                "Spacecraft": "Mars Science Laboratory Curiosity (Mars Science Laboratory)",
                "Launch Date": "26 November 2011",
                "Operator": "NASA United States",
                "Mission Type": "Rover",
                "Outcome": "Operational",
                "Remarks": "Landed on 6 August 2012",
                "Carrier rocket": "Atlas V 541",
                logo: '/assets/logos/msl_logo.webp'
            },
            {
                "Mission": "Mars Orbiter Mission",
                "Spacecraft": "Mars Orbiter Mission",
                "Launch Date": "5 November 2013",
                "Operator": "ISRO India",
                "Mission Type": "Orbiter",
                "Outcome": "Successful",
                "Remarks": "Entered orbit on 24 September 2014. Mission extended to 2022, where the mission concluded on September 27, 2022 after contact was lost.[20]",
                "Carrier rocket": "PSLV-XL",
                logo: '/assets/logos/mom_logo.webp'
            },
            {
                "Mission": "MAVEN",
                "Spacecraft": "MAVEN",
                "Launch Date": "18 November 2013",
                "Operator": "NASA United States",
                "Mission Type": "Orbiter",
                "Outcome": "Operational",
                "Remarks": "Orbit insertion on 22 September 2014",
                "Carrier rocket": "Atlas V 401",
                logo: '/assets/logos/maven_logo.webp'
            },
            {
                "Mission": "ExoMars 2016 ExoMars Trace Gas Orbiter",
                "Spacecraft": "ExoMars 2016 ExoMars Trace Gas Orbiter",
                "Launch Date": "14 March 2016",
                "Operator": "ESA/Roscosmos ESA/ Russia",
                "Mission Type": "Orbiter",
                "Outcome": "Operational",
                "Remarks": "Entered orbit on 19 October 2016",
                "Carrier rocket": "Proton-M / Briz-M",
                logo: '/assets/logos/exomars_logo.webp'
            },
            {
                "Mission": "ExoMars 2016 Schiaparelli EDM lander",
                "Spacecraft": "ExoMars 2016 Schiaparelli EDM lander",
                "Launch Date": "14 March 2016",
                "Operator": "ESA",
                "Mission Type": "Lander",
                "Outcome": "Spacecraft failure",
                "Remarks": "Carried by the ExoMars Trace Gas Orbiter. Although the lander crashed, engineering data on the first five minutes of entry was successfully retrieved.",
                "Carrier rocket": "Proton-M / Briz-M",
                logo: '/assets/logos/exomars_logo.webp'
            },
            {
                "Mission": "InSight",
                "Spacecraft": "InSight",
                "Launch Date": "5 May 2018",
                "Operator": "NASA United States",
                "Mission Type": "Lander",
                "Outcome": "Successful",
                "Remarks": "Landed on 26 November 2018. Last contact 15 December 2022.",
                "Carrier rocket": "Atlas V 401",
                logo: '/assets/logos/insight_logo.webp'
            },
            {
                "Mission": "InSight MarCO A",
                "Spacecraft": "InSight MarCO A",
                "Launch Date": "5 May 2018",
                "Operator": "NASA United States",
                "Mission Type": "Flyby",
                "Outcome": "Successful",
                "Remarks": "Flyby 26 November 2018. Last contact 29 December 2018.",
                "Carrier rocket": "Atlas V 401",
                logo: '/assets/logos/insight_logo.webp'
            },
            {
                "Mission": "InSight MarCO B",
                "Spacecraft": "InSight MarCO B",
                "Launch Date": "5 May 2018",
                "Operator": "NASA United States",
                "Mission Type": "Flyby",
                "Outcome": "Successful",
                "Remarks": "Flyby 26 November 2018. Last contact 4 January 2019.",
                "Carrier rocket": "Atlas V 401",
                logo: '/assets/logos/insight_logo.webp'
            },
            {
                "Mission": "Emirates Mars Mission Hope",
                "Spacecraft": "Emirates Mars Mission Hope",
                "Launch Date": "19 July 2020",
                "Operator": "MBRSC United Arab Emirates",
                "Mission Type": "Orbiter",
                "Outcome": "Operational",
                "Remarks": "Entered orbit on 9 February 2021.",
                "Carrier rocket": "H-IIA",
                logo: '/assets/logos/hope_logo.webp'
            },
            {
                "Mission": "Tianwen-1 Tianwen-1 orbiter",
                "Spacecraft": "Tianwen-1 Tianwen-1 orbiter",
                "Launch Date": "23 July 2020",
                "Operator": "CNSA China",
                "Mission Type": "Orbiter",
                "Outcome": "Operational",
                "Remarks": "Entered orbit on 10 February 2021",
                "Carrier rocket": "Long March 5",
                logo: '/assets/logos/tianwen_1_logo.webp'
            },
            {
                "Mission": "Tianwen-1 Tianwen-1 lander",
                "Spacecraft": "Tianwen-1 Tianwen-1 lander",
                "Launch Date": "23 July 2020",
                "Operator": "CNSA China",
                "Mission Type": "Lander",
                "Outcome": "Successful",
                "Remarks": "Landed on 14 May 2021",
                "Carrier rocket": "Long March 5",
                logo: '/assets/logos/tianwen_1_logo.webp'
            },
            {
                "Mission": "Tianwen-1 Zhurong rover",
                "Spacecraft": "Tianwen-1 Zhurong rover",
                "Launch Date": "23 July 2020",
                "Operator": "CNSA China",
                "Mission Type": "Rover",
                "Outcome": "Operational",
                "Remarks": "Landed on 14 May 2021. Deployed by the Tianwen-1 lander on 22 May 2021.",
                "Carrier rocket": "Long March 5",
                logo: '/assets/logos/tianwen_1_logo.webp'
            },
            {
                "Mission": "Tianwen-1 Tianwen-1 Remote Camera",
                "Spacecraft": "Tianwen-1 Tianwen-1 Remote Camera",
                "Launch Date": "23 July 2020",
                "Operator": "CNSA China",
                "Mission Type": "Lander",
                "Outcome": "Successful",
                "Remarks": "Landed on 14 May 2021. Deployed by the Zhurong rover on 1 June 2021.",
                "Carrier rocket": "Long March 5",
                logo: '/assets/logos/tianwen_1_logo.webp'
            },
            {
                "Mission": "Tianwen-1 Tianwen-1 Deployable Camera 2",
                "Spacecraft": "Tianwen-1 Tianwen-1 Deployable Camera 2",
                "Launch Date": "23 July 2020",
                "Operator": "CNSA China",
                "Mission Type": "Orbiter",
                "Outcome": "Successful",
                "Remarks": "Entered orbit on 10 February 2021, deployed 31 December 2021",
                "Carrier rocket": "Long March 5",
                logo: '/assets/logos/tianwen_1_logo.webp'
            },
            {
                "Mission": "Mars 2020 Perseverance",
                "Spacecraft": "Mars 2020 Perseverance",
                "Launch Date": "30 July 2020",
                "Operator": "NASA United States",
                "Mission Type": "Rover",
                "Outcome": "Operational",
                "Remarks": "Landed on 18 February 2021",
                "Carrier rocket": "Atlas V 541",
                logo: '/assets/logos/mars_2020_logo.svg'
            },
            {
                "Mission": "Mars 2020 Ingenuity",
                "Spacecraft": "Mars 2020 Ingenuity",
                "Launch Date": "30 July 2020",
                "Operator": "NASA United States",
                "Mission Type": "Helicopter",
                "Outcome": "Operational",
                "Remarks": "First aerodynamic flight on another planet. Landed with Perseverance rover on 18 February 2021. Deployed from rover on 3 April 2021. First flight achieved on April 19, 2021.",
                "Carrier rocket": "Atlas V 541",
                logo: '/assets/logos/mars_2020_jpl_logo.svg'
            }
        ]
    }

]
