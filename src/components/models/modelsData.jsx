
export const modelsData = [
    // Corn
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
                    
                ]
            }
        ],
        details: {
            scientificName: "Zea mays",
            family: "Poaceae (grass family)",
            type: "Cereal grain, but often classified as a vegetable when eaten fresh",
            colorVarieties: ["Yellow", "White", "Red", "Blue", "Purple", "Multicolored"],
            taste: "Sweet and starchy",
            nutritionalValue: "High in carbohydrates, fiber, and some B vitamins",
            healthBenefits: [
                "Supports digestion",
                "Provides antioxidants",
                "Is a good energy source"
            ],
            storage: "Store whole ears in the refrigerator; dried kernels should be kept in an airtight container",
            funFact: "Corn is one of the vegetables that can NOT grow on Mars"
        }
    },
    // Lettuce
    {   name: 'Lettuce',
        category: 'lettuce',
        cover: '/assets/covers/lettuce.webp',
        model3d: "/assets/models/Lettuce.glb",
        children: [
            {
                id: "lettuce",
                name: "Lettuce",
                category: "lettuce",
                model3d: "/assets/models/Lettuce.glb",
                characteristics: [

                ]
            }
        ],
        details: {
            scientificName: "Lactuca sativa",
            family: "Asteraceae (daisy family)",
            type: "Leafy green vegetable",
            colorVarieties: ["Green", "Red", "Purple"],
            taste: "Mild and slightly bitter (depending on variety)",
            nutritionalValue: "Low in calories, contains vitamin K, folate, and fiber",
            healthBenefits: [
                "Supports digestion",
                "Helps with hydration",
                "Provides antioxidants"
            ],
            storage: "Store in the refrigerator in a plastic bag or container with paper towels to absorb moisture",
            funFact: "Lettuce was first cultivated by the ancient Egyptians over 4,000 years ago"
        }
    },
    // Sweet Potatoes
    {
        name: 'Sweet Potatoes',
        category: 'sweet potatoes',
        cover: '/assets/covers/sweet_potato.webp',
        model3d: "/assets/models/SweetPotatoes.glb",
        children: [
            {
                id: "sweet potatoes",
                name: "Sweet Potatoes",
                category: "sweet potatoes",
                model3d: "/assets/models/SweetPotatoes.glb",
                characteristics: [

                ]
            }
        ],
    },
    // Carrots
    {
        name: 'Carrots',
        category: 'carrots',
        cover: '/assets/covers/carrot.webp',
        model3d: "/assets/models/Carrot.glb",
        children: [
            {
                id: "carrots",
                name: "Carrots",
                category: "carrots",
                model3d: "/assets/models/Carrot.glb",
                characteristics: [

                ]
            }
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
        ],
        details: {
            scientificName: "Allium cepa",
            family: "Amaryllidaceae",
            type: "Bulb vegetable",
            colorVarieties: ["Yellow", "Red", "White", "Green (scallions)"],
            taste: "Ranges from sweet to pungent",
            nutritionalValue: "Low in calories, high in vitamin C, fiber, and antioxidants",
            healthBenefits: [
                "Supports heart health",
                "Boosts immunity",
                "Has anti-inflammatory properties"
            ],
            storage: "Store whole onions in a cool, dry, well-ventilated place; cut onions should be refrigerated",
            funFact: "Onions can make you cry due to sulfur compounds released when cut"
        }
    }

]
