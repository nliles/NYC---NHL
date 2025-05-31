const landmarks = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9838913321291, 40.741412299402526],
    },
    properties: {
      id: 1,
      name: "69th Regiment Armory",
      bullets: [
        { key: 'Built', value: '1904-1906' },
        { key: 'Architect', value: 'Hunt & Hunt (sons of Richard Morris Hunt)' },
        { key: 'Architectural style', value: 'Beaux-Arts' },
        { key: 'Historic Event', value: 'Armory Show (1913)' },
        { key: 'Notable', value: 'First NYC armory not modeled on medieval fortress, introduced America to modern art' }
      ],
      link: "https://sixtyninth.net/",
      image_caption: "69th Regiment, New York National Guard, marching past armory entrance, Library of Congress, 1916",
      image_link: "https://www.loc.gov/item/2016651305/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.865833, 40.892222],
    },
    properties: {
      id: 2,
      name: "Admiral David Glasgow Farragut Gravesite",
      bullets: [
        { key: 'Admiral', value: 'David Glasgow Farragut (1801-1870)' },
        { key: 'Significance', value: 'First rear admiral, vice admiral, and admiral in U.S. Navy history' },
        { key: 'Famous For', value: 'Battle of Mobile Bay (1864) - "Damn the torpedoes, full speed ahead!"' },
        { key: 'Major Victory', value: 'Captured New Orleans (1862), crucial Union Civil War victory' },
        { key: 'Notable', value: 'Only intact known property directly associated with Admiral Farragut' }
      ],
      image_link: "https://en.wikipedia.org/wiki/Admiral_David_Glasgow_Farragut_Gravesite#/media/File:Admiral_David_Farragut_Monument_1024.jpg",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00446645484749, 40.7146503844196],
    },
    properties: {
      id: 3,
      name: "African Burial Ground",
      bullets: [
        { key: 'Used', value: '1690s-1794'},
        { key: 'Rediscovered', value: '1991 during construction'},
        { key: 'Designated', value: 'National Historic Landmark (1993), National Monument (2007)'},
        { key: 'Significance', value: "The nation's largest and earliest African American cemetery. Today, it is a monument honoring the thousands of enslaved Africans who built early NYC." },
      ],
      link: "https://www.nps.gov/afbg/index.htm",
      quote:
        "For all those who were lost, for all those who were stolen, for all those who were left behind, for all those who were not forgotten.",
      quote_author: "Memorial inscription",
      image_caption:
        "Map showing the location of the burial ground outside the northern boundary of the city. A plan of the city of New-York. New York Public Library Digital Collections. 1763.",
      image_link: "https://digitalcollections.nypl.org/items/3949a160-c5ed-012f-fd0b-58d385a7bc34#/?uuid=510d47d9-7ac7-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.002397187950055, 40.70550383599932],
    },
    properties: {
      id: 4,
      name: "Ambrose (lightship)",
      bullets: [
        { key: 'Built', value: '1907' },
        { key: 'Builder', value: 'New York Shipbuilding Company, Camden, New Jersey' },
        { key: 'Type', value: 'Riveted steel lightship (LV-87/WAL-512)' },
        { key: 'Significance', value: 'First lightship to bear "AMBROSE" name, served Ambrose Channel 1908-1932, first radio beacon in US (1921), last steam-powered vessel at station, guided over 6 million immigrants into New York Harbor, National Historic Landmark (1989)' }
      ],
      link: "https://museumships.us/coast-guard/ambrose",
      image_caption: "United States Lightship WLV-613. Wikimedia Commons, U.S. Coast Guard, n.d.",
      image_link: "https://en.wikipedia.org/wiki/Lightship_Ambrose#/media/File:Ambrose_Lightship.jpg",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.01262269175398, 40.70950764894071],
    },
    properties: {
      id: 5,
      name: "American Stock Exchange",
      description: "Former headquarters of the American Stock Exchange",
      image_caption: 'New York Curb Market Building. Library of Congress. 1921.',
      image_link: "https://www.loc.gov/item/00650323/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.86159410500049, 40.754798806256034],
    },
    properties: {
      id: 6,
      name: "Louis Armstrong House",
      description: "Home of jazz legend Louis Armstrong for 28 years",
      link: "https://www.louisarmstronghouse.org/",
      quote:
        "There's so much in 'Wonderful World' that brings me back to my neighborhood where I live in Corona, New York.",
      quote_author: "Louis Armstrong",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98219046669921, 40.742991557490654],
    },
    properties: {
      id: 7,
      name: "Chester A. Arthur House",
      description:
        "Home of President Chester A. Arthur; site of his inaugural oath",
      image_description: "Home of President Chester A. Arthur, 123 Lexington Avenue. Wikimedia Commons.",
      image_link: "https://commons.wikimedia.org/wiki/File:Presidents_Chester_A_Arthur_123_Lexington_Ave.jpg",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.06310373384242, 40.61536311009658],
    },
    properties: {
      id: 8,
      name: "Alice Austen House",
      bullets: [
        { key: 'Residents', value: ' Alice Austen and her partner Gertrude Tate (1866-1952)'},
        { key: 'Significance', value: "One of the first women photographers to work outside the confines of a studio, capturing over 8,000 images of everyday life in Victorian society."},
        { key: 'Current', value: "Now the site of the Alice Austen House Museum, preserving her photographic legacy and serving as a nationally designated site of LGBTQ+ history." },
      ],
      link: "https://aliceausten.org/",
      image_caption: "Clear Comfort, the Austen House, with the photographer's grandfather, photo by Alice Austen. The New York Public Library Digital Collections.",
      image_link: "https://digitalcollections.nypl.org/items/64b4df40-c5ef-012f-3d82-58d385a7bc34#/?uuid=510d47d9-c9ce-a3d9-e040-e00a18064a99",
      quote: "I guess I was too good to get married.",
      quote_author: "Alice Austen, on why she never married",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.80512386424425, 40.87743416052029],
    },
    properties: {
      id: 9,
      name: "Bartow–Pell Mansion",
      description: "19th-century mansion in largest New York City park",
      image_caption: "Bartow-Pell Mansion, Shore Road, Pelham Bay Park, Bronx, Bronx County, NY. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/item/ny0099/",
      link: "https://www.bartowpellmansionmuseum.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99508089602588, 40.72636741908031],
    },
    properties: {
      id: 10,
      name: "Bayard-Condict Building",
      bullets: [
        { key: 'Built', value: '1899' },
        { key: 'Architect', value: 'Louis H. Sullivan' },
        { key: 'Architectural style', value: 'Chicago School' },
        { key: 'Height', value: '167 feet feet (13 floors)' },
        { key: 'Significance', value: "New York's first modern skyscraper, showcasing Sullivan's characteristic ornate terra cotta facade." }
      ],
      image_caption: 'Bayard-Condict Building. Library of Congress. 1933.',
      image_link: "https://www.loc.gov/resource/hhh.ny0350.photos/?sp=1",
      link: "https://hdc.org/buildings/bayard-condict-building/",
      quote: "An architect, to be a true exponent of his time, must possess first, last and always the sympathy, the intuition of a poet.",
      quote_author: "Louis H. Sullivan",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.0097, 40.7367],
    },
    properties: {
      id: 11,
      name: "Bell Laboratories Building",
      bullets: [
        { key: 'Period', value: '1898-1966' },
        { key: 'Significance', value: "Site of one of the world's most prestigious telecommunications research organizations; later became the artists housing project in the United States." },
        { key: 'Current', value: "Home to Westbeth Artists Community since 1970." }
      ],
      image_caption: "Bell Laboratories Building. Wikimedia Commons. 1936",
      image_link: "https://en.wikipedia.org/wiki/Bell_Laboratories_Building#/media/File:Western_Electric_complex_NYC_1936.jpg",
      link: "https://westbeth.org/about/history/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9969, 40.7061],
    },
    properties: {
      id: 12,
      name: "Brooklyn Bridge",
      bullets: [
        { key: 'Built', value: '1869–1883' },
        { key: 'Engineer', value: 'John A. Roebling; completed by Washington Roebling and Emily Warren Roebling.' },
        { key: 'Significance', value: 'The first steel-wire suspension bridge connecting Manhattan and Brooklyn. It was the longest suspension bridge worldwide at completion and a landmark feat of 19th-century engineering.' },
      ],
      image_caption: 'Brooklyn Bridge, Library of Congress. 1915.',
      image_link: 'https://www.loc.gov/resource/cph.3b21874/',
      link: "https://www.history.com/this-day-in-history/may-24/brooklyn-bridge-opens",
      quote: "Man is after all a finite being in capacities and powers of doing actual work. But when it comes to planning, one mind can in a few hours think out enough work to keep a thousand men employed for years.",
      quote_author: "Washington Roebling",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99554538294456, 40.69727809705566],
    },
    properties: {
      id: 13,
      name: "Brooklyn Heights Historic District",
      description:
        "Exemplary collection of 19th-century architectural styles; first historic district in New York City",
      image_caption: "Brooklyn Daily Eagle photographs, Brooklyn Public Library, Center for Brooklyn History, 1939",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99246452364471, 40.696300456659756],
    },
    properties: {
      id: 14,
      name: "Center for Brooklyn History",
      description:
        "One of the few remaining buildings by George B. Post; innovative structural system",
      image_caption: "Irving I. Herzberg photograph collection, Brooklyn Public Library, Center for Brooklyn History, 1963",
      link: "https://www.bklynlibrary.org/center-for-brooklyn-history",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.8360894792926, 40.711835039669324],
    },
    properties: {
      id: 15,
      name: "Ralph Johnson Bunche House",
      bullet: [
        { key: 'Resident', value: 'Ralph Johnson Bunche (1904-1971)' },
        { key: 'Achievement', value: 'First African American to win Nobel Peace Prize (1950)' },
        { key: 'UN Role', value: 'Undersecretary-General for Special Political Affairs' },
        { key: 'Famous For', value: 'Negotiated 1949 Arab-Israeli armistice agreements in Palestine' },
        { key: 'Education', value: 'First African American to earn PhD in Political Science (Harvard, 1934)' },
        { key: 'Notable', value: 'Pioneering diplomat who shaped UN peacekeeping and decolonization efforts worldwide' }
      ],
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.97990774772423, 40.76648679428812],
    },
    properties: {
      id: 16,
      name: "Carnegie Hall",
      quote: "Everywhere in the world, music enhances a hall, with one exception: Carnegie Hall enhances the music.",
      quote_author: "Isaac Stern, violinist",
      bullets: [
        { key: 'Built', value: '1889-1891' },
        { key: 'Architect', value: 'William Burnet Tuthill (with Richard Morris Hunt and Adler & Sullivan)' },
        { key: 'Architectural style', value: 'Neo-Italian Renaissance' },
        { key: 'Benefactor', value: 'Andrew Carnegie, steel industrialist ($2 million investment)' },
        { key: 'Significance', value: 'One of the world\'s most prestigious music venues, known for its stunning acoustics and a rich history of hosting legendary performers' }
      ],
      link: "https://www.carnegiehall.org/",
      image_caption: 'Carnegie Music Hall, The New York Public Library Digital Collections, 1908',
      image_link: "https://digitalcollections.nypl.org/items/99d82cb0-c615-012f-0cf6-58d385a7bc34#/?uuid=510d47de-0fef-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.95768576158865, 40.78678847896561],
    },
    properties: {
      id: 17,
      name: "Andrew Carnegie Mansion",
      bullets: [
        { key: 'Built', value: '1899-1902' },
        { key: 'Architect', value: 'Babb, Cook & Willard' },
        { key: 'Architectural style', value: 'Georgian Revival' },
        { key: 'Significance', value: 'The first private residence in the U.S. with a steel frame and technological innovations like an early Otis elevator, central heating, and air-conditioning, plus one of Manhattan’s rare private gardens.' },
      ],
      image_caption: "Carnegie House, Library of Congress, ca. 1920",
      image_link: "https://www.loc.gov/item/2014703975/",
      quote: "The most modest, plainest, and most roomy house in New York.",
      quote_author: "Andrew Carnegie, directing the construction of his mansion",
      link: "https://www.cooperhewitt.org/about-the-carnegie-mansion-2/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.96554048803918, 40.78276589010319],
    },
    properties: {
      id: 18,
      name: "Central Park",
      bullets: [
        { key: 'Built', value: '1857-1873' },
        { key: 'Designers', value: 'Frederick Law Olmsted and Calvert Vaux' },
        { key: 'Design Plan', value: 'Greensward Plan' },
        { key: 'Size', value: '843 acres' },
        { key: 'Significance', value: 'Created to provide all social classes access to nature amid rapid urbanization. Recognized as the first major landscaped public park in America.' },
      ],
      link: "https://www.centralparknyc.org/",
      image_caption: "Outdoor Life and Sport in Central Park, New York Public Library Digital Collections, 1870",
      image_link: "https://digitalcollections.nypl.org/items/b12f9b80-c559-012f-387e-58d385a7bc34#/?uuid=510d47e1-ae3c-a3d9-e040-e00a18064a99",
      quote: "The Lungs of the City",
      quote_author: "Nickname dubbed in 1858",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.97041535460829, 40.762753972611996],
    },
    properties: {
      id: 19,
      name: "Central Synagogue",
      description:
        "Oldest synagogue continuously in use by a New York City Jewish congregation; built in a Moorish Revival style to recognize importance of that period in Jewish history",
      link: "https://www.centralsynagogue.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00976581315388, 40.70971575480329],
    },
    properties: {
      id: 20,
      name: "Chamber of Commerce Building",
      description:
        "Former home of the Chamber of Commerce of the State of New York, established in 1768; prototype for the chamber of commerce",
      image_caption: "66 Liberty Street (Broadway - Nassau Street). The New York Public Library Digital Collections. 1887 - 1964.",
      image_link: "https://digitalcollections.nypl.org/items/3fe2d080-c5ed-012f-1ce9-58d385a7bc34#/?uuid=510d47e2-ef4b-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.97549771851176, 40.751835172003624],
    },
    properties: {
      id: 21,
      name: "Chrysler Building",
      bullets: [
        { key: 'Built', value: '1928-1930' },
        { key: 'Architect', value: 'William Van Alen' },
        { key: 'Architectural style', value: 'Art Deco' },
        { key: 'Commissioner', value: 'Walter P. Chrysler, automotive magnate' },
        { key: 'Height', value: '1,046 feet (77 floors)' },
        { key: 'Significance', value: 'Celebrated as one of the finest examples of Art Deco architecture; held the title of the world’s tallest building for 11 months (1930–1931).' },
      ],
      link: "https://chryslerbuilding.com/",
      image_caption: 'Stages in the design for the Chrysler building. New York Public Library Digital Collections. 1930',
      image_link: 'https://digitalcollections.nypl.org/items/a6675350-a066-0130-c348-58d385a7b928#/?uuid=b5b54270-a066-0130-466b-58d385a7b928',
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99568628774288, 40.734229796686215],
    },
    properties: {
      id: 22,
      name: "Church of the Ascension",
      bullets: [
        { key: 'Founded', value: '1827' },
        { key: 'Built', value: '1841 (current location)' },
        { key: 'Architect', value: 'Richard Upjohn' },
        { key: 'Architectural style', value: 'Gothic Revival' },
        { key: 'Significance', value: "First church built on Fifth Avenue and an outstanding example of Gothic Revival architecture. Notable for its interior elements including John La Farge\'s altar mural 'The Ascension' and Louis Saint-Gaudens' marble altar." },
      ],
      image_caption: 'Church of the Ascension. New York Public Library Digital Collections. 1858–1925',
      image_link: 'https://digitalcollections.nypl.org/items/cd6f0300-c557-012f-d9e7-58d385a7bc34#/?uuid=510d47e0-1eca-a3d9-e040-e00a18064a99',
      link: "https://ascensionnyc.org/",
      quote: "The Church of the Open Door.",
      quote_author: "Nickname given after the Wall Street Crash of 1929, when the church opened its doors 24 hours a day.",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.005833, 40.712778],
    },
    properties: {
      id: 23,
      name: "City Hall",
      description:
        "Oldest city hall in U.S. still in use as main municipal government building",
      image_caption: "City Hall. N.Y.C. Library of Congress. 1900.",
      image_link: "https://www.loc.gov/resource/ggbain.08578/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.253056, 40.503056],
    },
    properties: {
      id: 24,
      name: "Conference House",
      bullets: [
        { key: 'Built', value: "ca. 1670s" },
        { key: 'Architectural Style', value: "Colonial stone manor house with Dutch and English influences" },
        { key: 'Significance', value: "Site of the failed 1776 peace conference between British Lord Howe and American delegates Benjamin Franklin, John Adams, and Edward Rutledge during the Revolutionary War; one of Staten Island's most historically significant buildings." }
      ],
      link: "https://conferencehouse.org/",
      image_caption: "Conference House. New York Public Library Digital Collections. 1990 - 1999",
      image_link: "https://digitalcollections.nypl.org/items/71e71110-c5ee-012f-176c-58d385a7bc34#/?uuid=510d47d9-cc32-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.943056, 40.818056],
    },
    properties: {
      id: 25,
      name: "Will Marion Cook House",
      description:
        "Home of the leading black composer and musician Will Marion Cook",
      image_caption: "Will Marion Cook House. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/item/ny1334/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.990556, 40.729444],
    },
    properties: {
      id: 26,
      name: "Cooper Union",
      bullets: [
        { key: 'Built', value: '1859' },
        { key: 'Architect', value: 'Frederick A. Petersen' },
        { key: 'Architectural style', value: 'Italianate' },
        { key: 'Significance', value: "First building in New York City to use rolled-iron I-beams and include an elevator shaft. Was the tallest building in NYC in 1859. National Historic Landmark and NYC Landmark. Site of Abraham Lincoln's famous Cooper Union Address in 1860." }
      ],
      image_caption: "Cooper Union. New York Public Library Digital Collections. 1887 - 1964",
      image_link: "https://digitalcollections.nypl.org/items/31a5e160-c5ed-012f-bd93-58d385a7bc34#/?uuid=510d47e2-ef01-a3d9-e040-e00a18064a99",
      link: "https://cooper.edu/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.97338796268983, 40.75176100846712],
    },
    properties: {
      id: 27,
      name: "Daily News Building",
      bullets: [
        { key: 'Built', value: '1930' },
        { key: 'Architect', value: 'Raymond Hood and John Mead Howells' },
        { key: 'Architectural style', value: 'Art Deco' },
        { key: 'Height', value: '476 ft (36 floors)' },
        { key: 'Significance', value: 'First modern free-standing skyscraper and pioneering example of Art Deco architecture.' },
      ],
      image_caption: "Daily News Building. New York Public Library Digital Collections. 1935",
      image_link: 'https://digitalcollections.nypl.org/items/f99a0a60-86cc-013a-7f01-0242ac110003#/?uuid=63a82990-86d0-013a-061c-0242ac110002',
      link: "https://slgreen.com/properties/220-east-42nd-street/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.97607643036788, 40.776761382835126],
    },
    properties: {
      id: 28,
      name: "Dakota Apartments",
      bullets: [
        { key: 'Built', value: '1884' },
        { key: 'Architect', value: 'Henry Janeway Hardenbergh' },
        { key: 'Architectural style', value: 'German Renaissance' },
        { key: 'Significance', value: 'First luxury apartment building in NYC' },
        { key: 'Notable', value: 'Notable as John Lennon\'s former home and site of his 1980 murder. Remains one of NYC\'s most prestigious addresses.' }
      ],
      image_caption: 'Splendid Example of Early Apartment Design. New York Public Library Digital Collections. 1860–1920.',
      image_link: 'https://digitalcollections.nypl.org/items/dceaad70-c617-012f-78a8-58d385a7bc34#/?uuid=510d47d9-b133-a3d9-e040-e00a18064a99',
      link: "https://classicnewyorkhistory.com/the-dakota-building-new-yorks-most-exclusive-address/",
      quote: "One of the most perfect apartment houses in the world.",
      quote_author: "described in The New York Times, 1884"
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.92327429218855, 40.87064008389203],
    },
    properties: {
      id: 29,
      name: "Dyckman House",
      bullets: [
        { key: 'Built', value: 'ca. 1784-1785' },
        { key: 'Builder', value: 'William Dyckman' },
        { key: 'Architectural style', value: 'Dutch Colonial' },
        { key: 'Original Site', value: '250+ acre farm in northern Manhattan' },
        { key: 'Significance', value: "Oldest remaining farmhouse on Manhattan island, a vestige of New York City's rural past" }
      ],
      image_caption: "Dyckman House. The New York Public Library Digital Collections. 1887 - 1986.",
      image_link: "https://digitalcollections.nypl.org/items/f01d7e90-c5cd-012f-0645-58d385a7bc34#/?uuid=510d47e2-0326-a3d9-e040-e00a18064a99",
      link: "https://dyckmanfarmhouse.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99349173013195, 40.71492727730689],
    },
    properties: {
      id: 30,
      name: "Eldridge Street Synagogue",
      description:
        "One of the oldest synagogues in the U.S.; first built by Jews from Eastern Europe",
      link: "https://www.eldridgestreet.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.94113324530916, 40.83288713413452],
    },
    properties: {
      id: 31,
      name: "Duke Ellington House",
      description:
        "Ellington, the legendary jazz composer and bandleader, lived in Apartment 4A from 1939 to 1961",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98571806484425, 40.74861921297347],
    },
    properties: {
      id: 32,
      name: "Empire State Building",
      bullets: [
        { key: 'Built', value: '1930-1931' },
        { key: 'Architect', value: 'Shreve, Lamb & Harmon' },
        { key: 'Architectural Style', value: 'Art Deco' },
        { key: 'Height', value: '1,250 feet (102 floors)' },
        { key: 'Significance', value: "World's tallest building from 1931-1970; iconic symbol of American ambition during the Great Depression." }
      ],
      image_caption: 'The Empire State Building, Library of Congress, 1952.',
      image_link: 'https://www.loc.gov/item/2020635807/',
      quote: "caught at the exact moment of transition—caught between metal and stone, between the idea of 'monumental mass' and that of airy volume.",
      quote_author: "Douglas Haskell",
      link: "https://www.esbnyc.com/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.01073033198543, 40.70865579275487],
    },
    properties: {
      id: 33,
      name: "Equitable Building",
      bullets: [
        { key: 'Built', value: '1913-1915' },
        { key: 'Architect', value: 'Ernest R. Graham with Peirce Anderson' },
        { key: 'Architectural style', value: 'Neoclassical' },
        { key: 'Height', value: '555 feet (38 stories)' },
        { key: 'Significance', value: 'One of the first skyscrapers and first office building with passenger elevators. It cut off direct sunlight from Broadway, leading to NYC\'s 1916 Zoning Resolution regulating building heights and shapes.' }
      ],
      image_caption: "Broadway - Wall Street - Cedar Street. The New York Public Library Digital Collections. 1887 - 1986.",
      image_link: "https://digitalcollections.nypl.org/items/e31f72e0-c5cd-012f-267a-58d385a7bc34#/?uuid=510d47e2-02e2-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98843428595049, 40.73025375702247],
    },
    properties: {
      id: 34,
      name: "Hamilton Fish House",
      description:
        "Home of Hamilton Fish, future Governor and Senator of New York",
      image_caption: "Hamilton Fish House, 21 Stuyvesant Street, New York County, NY. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/item/ny1278/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9897522473287, 40.74127182201542],
    },
    properties: {
      id: 35,
      name: "Flatiron Building",
      bullets: [
        { key: 'Built', value: '1902' },
        { key: 'Architect', value: 'Daniel Burnham (with Frederick P. Dinkelberg)' },
        { key: 'Architectural Style', value: 'Beaux-Arts' },
        { key: 'Significance', value: "Pioneering steel-frame skyscraper renowned for its distinctive triangular design. Built as Fuller Building headquarters and initially dubbed 'Burnham's Folly,' it became an enduring architectural icon." }
      ],
      image_caption: "Flatiron Building, New York Public Library Digital Collections, 1911.",
      image_link: 'https://digitalcollections.nypl.org/items/e250e7e0-c55a-012f-50e6-58d385a7bc34#/?uuid=510d47e0-ce72-a3d9-e040-e00a18064a99',
      link: "https://www.history.com/articles/flatiron-building",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.95523352343463, 40.762988762154954],
    },
    properties: {
      id: 36,
      name: "Founder's Hall, The Rockefeller University",
      bullets: [
        { key: 'Built', value: '1903-1906' },
        { key: 'Architect', value: 'Shepley, Rutan & Coolidge' },
        { key: 'Architectural Style', value: 'Classical Revival' },
        { key: 'Significance', value: "The founding building of Rockefeller University's campus, housing the nation's first major biomedical research laboratory." }
      ],
      image_caption: "Founder's Hall, Digital Commons @ RU, ca. 1916–1930.",
      image_link: 'https://digitalcommons.rockefeller.edu/founders-hall/8/',
      link: "https://www.rockefeller.edu/about/history/",
      quote: "Science for the Benefit of Humanity",
      quote_author: "Mission statement",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.96742903600129, 40.771520295066075],
    },
    properties: {
      id: 37,
      name: "The Frick Collection and Frick Art Reference Library Building",
      bullets: [
        { key: 'Built', value: '1935' },
        { key: 'Architect', value: 'Thomas Hastings of Carrère and Hastings' },
        { key: 'Architectural style', value: 'Beaux-Arts' },
        { key: 'Significance', value: "Preserves and exhibits Henry Clay Frick's high-quality collection of European art—including paintings, sculpture, and decorative arts—from the Renaissance to the early 20th century." },
      ],
      link: "https://www.frick.org/about/history",
      image_caption: 'East 71st Street – Fifth Avenue, The New York Public Library Digital Collections.',
      image_link: 'https://digitalcollections.nypl.org/items/ef75fe30-c5ec-012f-0df7-58d385a7bc34#/?uuid=510d47e2-cfa3-a3d9-e040-e00a18064a99',
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.01678130056479, 40.68963731021006],
    },
    properties: {
      id: 38,
      name: "Governors Island",
      bullets: [
        { key: 'Built', value: '1794-1813 (fortifications), 1900s expansion (McKim plan)' },
        { key: 'Architect', value: 'Various; Charles Follen McKim (Beaux-Arts redesign, early 1900s)' },
        { key: 'Architectural Style', value: 'Beaux-Arts (McKim buildings)' },
        { key: 'Significance', value: 'Historic military fortress protecting New York Harbor for 200+ years (1794-1996); home to Fort Jay and Castle Williams National Monuments and over 50 historic buildings.' }
      ],
      link: "https://www.nps.gov/gois/index.htm",
      image_caption: "Governor's Island, Castle Williams, from hydro-aeroplane, Library of Congress, ca. 1902.",
      image_link: "https://www.loc.gov/item/98505905/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99092609204504, 40.73223104616723],
    },
    properties: {
      id: 39,
      name: "Grace Church",
      bullets: [
        { key: 'Founded', value: '1805' },
        { key: 'Built', value: '1846 (current location)' },
        { key: 'Architect', value: 'James Renwick Jr. (his first major commission at age 23)' },
        { key: 'Architectural style', value: 'Gothic Revival' },
        { key: 'Significance', value: 'One of NYC\'s finest Gothic Revival structures. Once the most fashionable church in the city.' }
      ],
      link: "https://gracechurchnyc.org/",
      image_caption: 'Grace Church. The New York Public Library Digital Collections. 1860–1920.',
      image_link: 'https://digitalcollections.nypl.org/items/f12cea10-c617-012f-dafa-58d385a7bc34#/?uuid=510d47d9-b180-a3d9-e040-e00a18064a99',
      quote: "All Are Welcome to Enter, Rest, Pray.",
      quote_author: "Grace Church",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.97677441594048, 40.75349694576785],
    },
    properties: {
      id: 40,
      name: "Grand Central Terminal",
      bullets: [
        { key: 'Built', value: '1913' },
        { key: 'Architect', value: 'Reed and Stem, Warren and Wetmore' },
        { key: 'Architectural style', value: 'Beaux-Arts' },
        { key: 'Significance', value: 'Historic rail gateway to New York City' },
        { key: 'Notable', value: 'Largest train station in the world by number of platforms' }
      ],
      image_caption: 'Grand Central Terminal. The New York Public Library Digital Collections. 1860–1920.',
      image_link: 'https://digitalcollections.nypl.org/items/9a3d4560-c612-012f-5050-58d385a7bc34#/?uuid=510d47d9-b19e-a3d9-e040-e00a18064a99',
      link: "https://grandcentralterminal.com/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99193153837216, 40.65551284502183],
    },
    properties: {
      id: 41,
      name: "Green-Wood Cemetery",
      bullets: [
        { key: 'Founded', value: '1838' },
        { key: 'Designer', value: 'David Bates Douglass' },
        { key: 'Design Style', value: 'Rural Cemetery Movement' },
        { key: 'Significance', value: 'One of America\'s first rural cemeteries and "Brooklyn\'s first public park by default" before Prospect Park existed. Pioneering naturalistic landscape design that inspired the competition to design Central Park and influenced the American parks movement. Spans 478 acres with over 600,000 graves, featuring Gothic Revival entrance gates by Richard Upjohn (1861) and notable architecture throughout its glacially-formed terrain.' }
      ],
      link: "https://www.green-wood.com/",
      image_caption: 'Entrance Green-Wood Cemetery, The New York Public Library Digital Collections, 1900–1999.',
      image_link: 'https://digitalcollections.nypl.org/items/bf685160-c6be-012f-19bd-58d385a7bc34#/?uuid=a44288b4-9c0c-b31f-e040-e00a18060314',
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.94732069674879, 40.82156901416235],
    },
    properties: {
      id: 42,
      name: "Hamilton Grange National Memorial",
      bullets: [
      { key: 'Built', value: '1802' },
      { key: 'Architect', value: 'John McComb Jr.' },
      { key: 'Architectural Style', value: 'Federal' },
      { key: 'Significance', value: "Alexander Hamilton's only owned home and country retreat where he lived until his death in the 1804 duel with Aaron Burr." },
    ],
      link: "https://www.nps.gov/hagr/index.htm",
      image_caption: "Hamilton Grange, (second location). Library of Congress. 1933.",
      image_link: "https://www.loc.gov/resource/hhh.ny1721.photos/?sp=8",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9586783859235, 40.78530675801299],
    },
    properties: {
      id: 43,
      name: "Solomon R. Guggenheim Museum",
      bullets:[
        { key: 'Built', value: '1943-1959' },
        { key: 'Founder', value: 'Solomon R. Guggenheim' },
        { key: 'Architect', value: 'Frank Lloyd Wright' },
        { key: 'Architectural Style', value: 'Modern/Organic Architecture' },
        { key: 'Collection Focus', value: 'Modern and contemporary art, Impressionist and Post-Impressionist works' },
        { key: 'Significance', value: 'Revolutionary museum design that challenged traditional gallery spaces' }
      ],
      link: "https://www.guggenheim.org/",
      image_caption: "Solomon R. Guggenheim Museum, New York, New York. Interior. View of skylight. Library of Congress, 1955–2007.",
      image_link: "https://www.loc.gov/item/2020714526/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98378743776944, 40.71544536786666],
    },
    properties: {
      id: 44,
      name: "Henry Street Settlement and Neighborhood Playhouse",
      bullets: [
        { key: 'Founded', value: '1893'},
        { key: 'Founder', value: 'Lillian Wald, nurse and humanitarian'},
        { key: 'Significance', value: 'Pioneered community-based social services for Lower East Side immigrants. Still operating today.'},
      ],
      quote: "That morning's experience was a baptism of fire. Deserted were the laboratory and academic work of college. I never returned to them...I rejoiced that I had a training in the care of the sick.",
      quote_author: "Lillian Wald, after helping a hemorrhaging new mother",
      image_caption: "Backyard playground in nurse's settlement, Henry Street. Library of Congress, ca. 1950.",
      image_link: "https://www.loc.gov/item/2002710290/",
      link: "https://www.henrystreet.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.94234223811146, 40.81851397217359],
    },
    properties: {
      id: 45,
      name: "Matthew Henson Residence",
      description:
        "Home of Matthew Henson, African-American polar explorer who may have been the first to reach the North Pole",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.94716562936767, 40.839111786360924],
    },
    properties: {
      id: 46,
      name: "Hispanic Society of America",
      bullets: [
        { key: 'Built', value: '1905-1908' },
        { key: 'Architect', value: 'Charles Pratt Huntington' },
        { key: 'Architectural Style', value: 'Beaux-Arts' },
        { key: 'Significance', value: 'Founded by Archer M. Huntington in 1904, houses world-renowned collection of Hispanic art and literature, National Historic Landmark (2012), located on Audubon Terrace in Washington Heights, features works by Velázquez, Goya, El Greco, and Sorolla murals' }
      ],
      image_caption: "Manhattan: Broadway - 155th Street (West). The New York Public Library Digital Collections, 1929.",
      image_link: "https://digitalcollections.nypl.org/search/index?q=Hispanic%20Society%20of%20America",
      link: "https://hispanicsociety.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.021389, 40.7275],
    },
    properties: {
      id: 47,
      name: "Holland Tunnel",
      bullets: [
        { key: 'Built', value: '1920-1927' },
        { key: 'Chief Engineer', value: 'Clifford Milburn Holland (completed by Ole Singstad after Holland\'s death in 1924)' },
        { key: 'Engineering Type', value: 'Underwater Vehicular Tunnel' },
        { key: 'Significance', value: 'World\'s first mechanically ventilated underwater vehicular tunnel and longest underwater vehicular tunnel at time of completion. Revolutionary ventilation system designed by Norwegian architect Erling Owre became the standard for all subsequent vehicular tunnels. Engineering marvel that solved the problem of carbon monoxide evacuation, replacing tunnel air every 90 seconds with 84 massive fans.' }
      ],
      image_caption:
        "Transportation - Motor vehicles - Holland Tunnel vehicular traffic. The New York Public Library Digital Collections, 1927.",
      image_link: "https://digitalcollections.nypl.org/items/a77a9f50-c562-012f-ce59-58d385a7bc34#/?uuid=510d47dd-a5c7-a3d9-e040-e00a18064a99",
      link: "https://www.panynj.gov/bridges-tunnels/en/holland-tunnel/history.html",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00083333870815, 40.7664228487397],
    },
    properties: {
      id: 48,
      name: "USS Intrepid",
      description:
        "One of the most active U.S. ships during World War II; today the Intrepid Museum moored along the West Side",
      link: "https://intrepidmuseum.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.94226095545702, 40.79667153193912],
    },
    properties: {
      id: 49,
      name: "James Weldon Johnson Residence",
      description:
        "Harlem home of African-American artist-activist James Weldon Johnson",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.80749410001921, 40.71271516439934],
    },
    properties: {
      id: 50,
      name: "King Manor",
      image_caption: "Rufus King House. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/resource/hhh.ny2046.photos/?sp=1&st=image",
      link: "https://www.kingmanor.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.003333, 40.706111],
    },
    properties: {
      id: 51,
      name: "Lettie G. Howard (schooner)",
      bullets: [
        { key: 'Built', value: '1893' },
        { key: 'Builder', value: 'Arthur D. Story shipyard, Essex, Massachusetts' },
        { key: 'Type', value: 'Fredonia-type fishing schooner' },
        { key: 'Significance', value: 'Last surviving example of Georges Bank fishing schooner, National Historic Landmark (1989), built for Captain Fred Howard and named for his daughter Letticia Gould Howard, exemplifies 19th-century offshore fishing vessels' }
      ],
      link: "https://southstreetseaportmuseum.org/about-lettie/",
      image_caption: 'Schooner Lettie G. Howard, South Street Seaport Museum, New York County, NY. Library of Congress.',
      image_link: "https://www.loc.gov/resource/hhh.ny1621.photos/?sp=4"
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.87621004746785, 40.859829701401026],
    },
    properties: {
      id: 52,
      name: "Lorillard Snuff Mill",
      description: "Oldest existing tobacco-manufacturing facility in U.S.",
      image_caption: "Lorillard Snuff Mill, Botanical Gardens, Bronx Park, Bronx, Bronx County, NY. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/resource/hhh.ny0101.photos/?sp=1",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.96185654280083, 40.811407040563495],
    },
    properties: {
      id: 53,
      name: "Low Memorial Library",
      description:
        "First building on Morningside Heights campus; capped by largest freestanding granite dome in U.S.",
      link: "https://www.nps.gov/places/low-memorial-library.htm",
      image_caption:
        "Low Memorial Library of Columbia University. Library of Congress. 1904.",
      image_link: "https://www.loc.gov/item/2017657433/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98909304729705, 40.75105203894551],
    },
    properties: {
      id: 54,
      name: "R. H. Macy and Company Store (Macy's)",
      bullets: [
        { key: 'Built', value: '1902 (with additions 1924, 1928, 1931)' },
        { key: 'Architect', value: 'Theodore de Lemos and A.W. Cordes (original 1902), Robert D. Kohn (additions)' },
        { key: 'Architectural Style', value: 'Palladian (original), Art Deco (later additions)' },
        { key: 'Significance', value: "Flagship store of America's largest department store chain and historic retail landmark, famous for its Thanksgiving Day Parade, holiday windows; spans 2.5 million square feet in Herald Square." }
      ],
      image_caption:
        "R. H. Macy and Company department store during the week before Christmas. Library of Congress.",
      image_link: "https://www.loc.gov/item/2017841498/",
      link: "https://www.macys.com/s/brand-heritage/history/",
      quote: "If you haven't seen Macy's, you haven't seen New York.",
      quote_author: "Macy's advertisement, 1960s",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.991111, 40.757222],
    },
    properties: {
      id: 55,
      name: "McGraw-Hill Building",
      bullets: [
        { key: 'Built', value: '1931' },
        { key: 'Architect', value: 'Raymond Hood (Hood, Godley, and Fouilhoux)' },
        { key: 'Architectural Style', value: 'International Style/Art Deco/Art Moderne' },
        { key: 'Height', value: '485 feet (33 stories)' },
        { key: 'Significance', value: "Transitional skyscraper bridging Art Deco and International Style" }
      ],
      image_caption: "McGraw Hill Building. The New York Public Library Digital Collections. 1936.",
      image_link: "https://digitalcollections.nypl.org/items/689c3020-a48d-013a-8d98-0242ac110003#/?uuid=4f3d4120-a48e-013a-7a4f-0242ac110002,",
      link: "https://archsb.com/projects/mcgraw-hill-building-archstone-builders/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.94309891636958, 40.82081930961414],
    },
    properties: {
      id: 56,
      name: "Claude McKay Residence",
      description:
        "The Harlem YMCA, whose residents included African-American writer Claude McKay",
      link: "https://africanamericanheritagesites.stqry.app/en/story/44226",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98774990079487, 40.74104223853738],
    },
    properties: {
      id: 57,
      name: "Metropolitan Life Insurance Company Tower",
      description:
        "Tallest building in the world 1909-13; still part of the skyline a century later",
      image_caption: "Metropolitan Life Ins. Bldg.. Library of Congress. 1912.",
      image_link: "https://www.loc.gov/item/00650139/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.96326546075547, 40.779647800019205],
    },
    properties: {
      id: 58,
      name: "Metropolitan Museum of Art",
      bullets: [
        { key: 'Founded', value: '1870' },
        { key: 'Architect', value: 'Richard Morris Hunt' },
        { key: 'Architectural style', value: 'Beaux-Arts' },
        { key: 'Significance', value: 'One of the world’s largest art museums. Its collection spans 5,000 years of global culture and includes all art mediums, from painting and sculpture to textiles and decorative arts.' }
      ],
      link: "https://www.metmuseum.org/about-the-met/history",
      image_caption: "Metropolitan Museum of Art. Library of Congress. ca. 1903.",
      image_link: "https://www.loc.gov/item/2016812025/",
      quote:
        "One of the finest in the world, and the only public building in recent years which approaches in dignity and grandeur the museums of the old world.",
      quote_author: "Evening Post, 1902",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98142928965595, 40.74939645675879],
    },
    properties: {
      id: 59,
      name: "J. Pierpont Morgan Library",
      bullets: [
        { key: 'Built', value: '1902-1906' },
        { key: 'Architect', value: 'Charles McKim (McKim, Mead & White)' },
        { key: 'Architectural Style', value: 'American Renaissance/Classical Revival' },
        { key: 'Significance', value: 'Private library of J.P. Morgan, considered McKim\'s masterpiece, National Historic Landmark (1966), Tennessee pink marble construction using classical Greek anathyrosis method, became public institution in 1924' }
      ],
      image_caption: "East 37th Street - Madison Avenue. The New York Public Library Digital Collections. 1887–1964.",
      image_link: "https://digitalcollections.nypl.org/items/bee9e610-c5ec-012f-a476-58d385a7bc34#/?uuid=510d47e2-c30c-a3d9-e040-e00a18064a99",
      link: "https://www.themorgan.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.93863709365453, 40.83485651056482],
    },
    properties: {
      id: 60,
      name: "Morris-Jumel Mansion",
      bullets: [
        { key: 'Built', value: '1765' },
        { key: 'Architectural Style', value: 'Georgian Colonial with Federal period modifications' },
        { key: 'Significance', value: 'Manhattan\'s oldest surviving house; served as George Washington\'s headquarters during the Revolutionary War in 1776; later home to Eliza Jumel, who married Aaron Burr; now a historic house museum in Washington Heights' }
      ],
      link: "https://morrisjumel.org/",
      image_caption: "Morris-Jumel Mansion with people on benches. The New York Public Library Digital Collections. 1890.",
      image_link: "https://digitalcollections.nypl.org/items/110b3f20-af04-0132-eead-58d385a7bbd0#/?uuid=11c25970-af04-0132-a5fa-58d385a7bbd0",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00908405739305, 40.707926681253575],
    },
    properties: {
      id: 61,
      name: "National City Bank Building",
      description:
        "Home to one of the country's largest and most important banks since 1908",
      image_caption: "National City Bank, Wall St. Library of Congress. ca. 1909.",
      image_link: "https://www.loc.gov/item/00650318/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.94309891636964, 40.82055949701559],
    },
    properties: {
      id: 62,
      name: "New York Amsterdam News Building",
      description:
        "Influential black newspaper the New York Amsterdam News was published here 1916-38",
      image_caption: "New York Amsterdam News Building, Seventh Avenue. Library of Congress. 1933",
      image_link: "https://www.loc.gov/resource/hhh.ny0406.photos/?sp=6",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.87691278133622, 40.86782862626632],
    },
    properties: {
      id: 63,
      name: "New York Botanical Garden",
      description:
        "One of the world's leading botanical gardens, with the largest herbarium in the U.S. and second largest in the world after the French National Museum of Natural History and home to many plant laboratories",
      image_caption: "Bronx Park - Central Dome - Botanical Garden. The New York Public Library Digital Collections. 1938.",
      image_link: "https://digitalcollections.nypl.org/items/8456e240-c52f-012f-d9ec-58d385a7bc34#/?uuid=510d47dc-a537-a3d9-e040-e00a18064a99",
      link: "https://www.nybg.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00971074635791, 40.70489846764529],
    },
    properties: {
      id: 64,
      name: "New York Cotton Exchange",
      description: "First commodity market in the U.S.; now 1 Hanover Square",
      image_caption: "1 Hanover Square when it was occupied by the New York Cotton Exchange. Wikimedia Commons. 1900",
      image_link: "https://en.wikipedia.org/wiki/1_Hanover_Square#/media/File:1_Hanover_Square_006.JPG",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.01288018382186, 40.714148749295504],
    },
    properties: {
      id: 65,
      name: "New York Life Building",
      bullets: [
        { key: 'Built', value: '1926-1928' },
        { key: 'Architect', value: 'Cass Gilbert' },
        { key: 'Architectural style', value: 'Gothic Revival' },
        { key: 'Height', value: '615 feet (40 stories)' },
        { key: 'Significance', value: 'Built on the site of Madison Square Garden, features distinctive golden pyramidal roof, represents transition from historic revival to Art Deco period architecture, and serves as a powerful example of corporate architecture symbolizing financial strength.' }
      ],
      image_caption: "West 25th Street - Broadway. The New York Public Library Digital Collections. 1952.",
      image_link: "https://digitalcollections.nypl.org/items/b6763c10-c5ec-012f-5f14-58d385a7bc34#/?uuid=510d47e2-f28e-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98271166392648, 40.754355365216426],
    },
    properties: {
      id: 66,
      name: "New York Public Library",
      bullets: [
        { key: 'Built', value: '1901-1911' },
        { key: 'Architect', value: 'Carrère & Hastings (John Merven Carrère and Thomas Hastings)' },
        { key: 'Architectural Style', value: 'Beaux-Arts' },
        { key: 'Significance', value: 'Flagship research library of NYPL system, National Historic Landmark (1965), one of largest marble buildings in US, features famous lions "Patience and Fortitude," contains Rose Main Reading Room (one of world\'s largest uncolumned interior spaces)' }
      ],
      image_caption: 'Stephen A. Schwarzman Building, interior, Rose Main Reading Room. The New York Public Library Digital Collections. 1999.',
      image_link: 'https://digitalcollections.nypl.org/items/974cb990-c6be-012f-d6bc-3c075448cc4b#/?uuid=b153a765-7dca-f909-e040-e00a18062ff0',
      link: "https://www.nypl.org/locations/schwarzman",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.01115689366821, 40.70798057241238],
    },
    properties: {
      id: 67,
      name: "New York Stock Exchange",
      description:
        "One of the first securities markets in the U.S.; still the world's largest",
      image_caption: "New York Stock Exchange (1903) Trading floor. The New York Public Library Digital Collections. 1903.",
      image_link: "https://digitalcollections.nypl.org/items/18ac7210-9daa-0132-f116-58d385a7b928#/?uuid=1966cf50-9daa-0132-e13e-58d385a7b928",
      link: "https://www.nyse.com/index",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99728308843622, 40.7341148100732],
    },
    properties: {
      id: 68,
      name: "New York Studio School of Drawing, Painting and Sculpture",
      description:
        "Original home of the Whitney Museum, the first devoted to 20th-century American art",
      link: "https://nyss.org/about/history-of-the-school/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98127165117859, 40.756956036902025],
    },
    properties: {
      id: 69,
      name: "New York Yacht Club",
      bullets: [
        { key: 'Built', value: '1901' },
        { key: 'Architect', value: 'Warren and Wetmore (Whitney Warren)' },
        { key: 'Architectural Style', value: 'Beaux-Arts' },
        { key: 'Significance', value: 'Headquarters of NYYC (founded 1844), held America\'s Cup for 132 years, National Historic Landmark (1987), features famous Model Room with yacht collection' }
      ],
      image_caption: "New York Yacht Club: Exterior facade. The New York Public Library Digital Collections. 1901.",
      image_link: "https://www.loc.gov/item/2003662070/",
      link: "https://nyyc.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99231966775397, 40.72924378026664],
    },
    properties: {
      id: 70,
      name: "Old Merchant House",
      bullets: [
        { key: 'Built', value: '1832' },
        { key: 'Architect', value: 'Joseph Brewster (builder/developer)' },
        { key: 'Architectural Style', value: 'Late Federal/Greek Revival' },
        { key: 'Significance', value: " NYC's only fully preserved 19th-century family home; continuously occupied by the Tredwell family for nearly 100 years (1835-1933)." }
      ],
      link: "https://merchantshouse.org/",
      image_caption: "Doorway - Treadwell House (Old Merchants House). The New York Public Library Digital Collections. 1936.",
      image_link: "https://digitalcollections.nypl.org/items/96c36480-998a-013a-a209-0242ac110003#/?uuid=1e14d1a0-9993-013a-51c6-0242ac110003",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.83088985072715, 40.76957619717524],
    },
    properties: {
      id: 71,
      name: "Old Quaker Meeting House",
      bullets: [
        { key: 'Built', value: '1694' },
        { key: 'Architectural style', value: 'Dutch Colonial' },
        { key: 'Historic Document', value: 'Community produced Flushing Remonstrance (1657)' },
        { key: 'Significance', value: 'Reputed to be oldest house of worship in New York State' },
        { key: 'Legacy', value: 'Helped lay groundwork for Bill of Rights religious freedom protection' },
        { key: 'Notable', value: 'Quaker community still gathers here for Sunday services after 330+ years' }
      ],
      link: "https://flushingfriends.org/",
      quote:
        "We desire therefore in this case not to judge least we be judged, neither to condemn least we be condemned, but rather let every man stand and fall to his own Master.",
      quote_author: "Excerpt from the Flushing Remonstrance",
      image_caption: "Society of Friends Meetinghouse. Library of Congress. 1933.",
      image_link: 'https://www.loc.gov/resource/hhh.ny0888.photos/?sp=11',
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.96095577448307, 40.810675903013674],
    },
    properties: {
      id: 72,
      name: "Philosophy Hall",
      description:
        "Edwin Armstrong developed FM radio in this Columbia University building",
      image_caption: "Edwin Armstrong's laboratory in 102 Philosophy, Columbia University. Wikimedia Commons. 1930.",
      image_link: "https://en.wikipedia.org/wiki/Philosophy_Hall#/media/File:102Philosophy.jpg",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98672406636635, 40.73942893544875],
    },
    properties: {
      id: 73,
      name: "Players Club",
      bullets: [
        { key: 'Built', value: '1847 (house), 1888 (clubhouse conversion)' },
        { key: 'Architect', value: 'Stanford White (McKim, Mead & White) - renovation and interior design' },
        { key: 'Architectural Style', value: 'Greek Revival' },
        { key: 'Significance', value: 'Founded by Edwin Booth in 1888, oldest NYC membership club still in original home, National Historic Landmark (1962), repository of American theater history and memorabilia, located at 16 Gramercy Park South' }
      ],
      image_caption: 'The Players Club at No. 17 Gramercy Park. The New York Public Library Digital Collections. 1905–1907.',
      image_link: "https://digitalcollections.nypl.org/items/902e86a0-c55c-012f-c4ca-58d385a7bc34#/?uuid=510d47e0-cc21-a3d9-e040-e00a18064a99",
      link: "https://theplayersnyc.org/web/pages/history",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.97434656096412, 40.76481460617099],
    },
    properties: {
      id: 74,
      name: "Plaza Hotel",
      bullets: [
        { key: 'Built', value: '1907' },
        { key: 'Architect', value: 'Henry Janeway Hardenbergh' },
        { key: 'Architectural Style', value: 'French Renaissance château style with white brick and limestone facade' },
        { key: 'Significance', value: 'Iconic luxury hotel at Fifth Avenue and Central Park South; designated New York City landmark in 1969; cultural landmark featured in numerous films, books, and as symbol of New York elegance and high society' }
      ],
      link: "https://www.theplazany.com/",
      image_caption: "Plaza Hotel, New York, N.Y. Library of Congress. [Between 1910 and 1920].",
      image_link: "https://www.loc.gov/item/2016815530/"
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99322795432722, 40.700495250857045],
    },
    properties: {
      id: 75,
      name: "Plymouth Church of the Pilgrims",
      description:
        "Important station on Underground Railroad when Henry Ward Beecher was pastor",
      image_caption: "Plymouth Church. The New York Public Library Digital Collections. 1905–1907.",
      image_link: 'https://digitalcollections.nypl.org/items/e2c37db0-c559-012f-d02f-58d385a7bc34#/?uuid=510d47e1-0ef3-a3d9-e040-e00a18064a99',
      link: "https://www.plymouthchurch.org/#main",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.96158518519576, 40.81578886136246],
    },
    properties: {
      id: 76,
      name: "Pupin Physics Laboratory, Columbia University",
      description: "Columbia University building; site of first splitting of uranium atom in U.S. and other milestones in development of atomic bomb",
      link: 'https://quantum.columbia.edu/videos/tour-columbia-physics-design-laboratory',
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.97164095440718, 40.69971427632216],
    },
    properties: {
      id: 77,
      name: "Quarters A, Brooklyn Navy Yard",
      description: "Home to Matthew Perry at the time of his opening of Japan",
      image_caption: "Quarters A, 1935 (Brooklyn Public Library Digital Collection)",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.93886022285386, 40.83377895351661],
    },
    properties: {
      id: 78,
      name: "Paul Robeson Home",
      description:
        "Home of legendary African-American actor and activist Paul Robeson",
      link: "https://www.nps.gov/places/new-york-paul-robeson-home.htm",
      quote: "To be free . . . to walk the good American earth as equal citizens, to live without fear, to enjoy the fruits of our toil, to give our children every opportunity in life–that dream which we have held so long in our hearts is today the destiny that we hold in our hands.",
      quote_author: 'Paul Robeson, "Here I Stand"',
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.92708078397834, 40.651075049688934],
    },
    properties: {
      id: 79,
      name: "Jackie Robinson House",
      description: "Home of baseball great Jackie Robinson",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9786233989848, 40.76028797735893],
    },
    properties: {
      id: 80,
      name: "Rockefeller Center",
      bullets: [
        { key: 'Built', value: '1930-1939' },
        { key: 'Architect', value: 'Raymond Hood, Harvey Wiley Corbett, Wallace Harrison (Associated Architects)' },
        { key: 'Architectural Style', value: 'Art Deco' },
        { key: 'Height', value: '850 feet (70 stories)' },
        { key: 'Significance', value: 'Iconic commercial complex featuring NBC studios, Radio City Music Hall, and renowned public spaces including the famous Christmas tree and ice rink' }
      ],
      image_caption: '30 Rockefeller Center Plaza, The New York Public Library Digital Collections, 1887–1964',
      image_link: "https://digitalcollections.nypl.org/items/5b8a1e00-c5ed-012f-a5ae-58d385a7bc34#/?uuid=510d47e2-f267-a3d9-e040-e00a18064a99",
      link: 'https://www.rockefellercenter.com/'
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.1047291206947, 40.644927029007455],
    },
    properties: {
      id: 81,
      name: "Sailors' Snug Harbor",
      bullets: [
        { key: 'Founded', value: '1801' },
        { key: 'Founder', value: 'Robert Richard Randall, wealthy merchant who left his fortune to establish the institution' },
        { key: 'Architect', value: '	Martin E. Thompson; Minard Lafever' },
        { key: 'Architectural style', value: 'Greek Revival, Late Victorian' },
        { key: 'Significance', value: "A pioneering philanthropic institution that served thousands of retired merchant sailors and established America's first model for occupational retirement care." }
      ],
      link: "https://snug-harbor.org/",
      image_caption: "Sailors' Snug Harbor, Richmond Terrace, Staten Island, New Brighton, Richmond County, NY. Library of Congress. 1933",
      image_link: "https://www.loc.gov/resource/hhh.ny1086.photos/?sp=1",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99263618502333, 40.69597508184234],
    },
    properties: {
      id: 82,
      name: "St. Ann and the Holy Trinity Church",
      description: "Site of first figural stained-glass windows in U.S.",
      link: "https://www.stannholytrinity.org/",
      image_caption: "St. Ann's Church, Brooklyn. The New York Public Library Digital Collections. 1850 - 1930.",
      image_link: 'https://digitalcollections.nypl.org/items/74ab40c0-c555-012f-748d-58d385a7bc34#/?uuid=510d47e1-e2a4-a3d9-e040-e00a18064a99',
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98477828062018, 40.734254862868085],
    },
    properties: {
      id: 83,
      name: "St. George's Episcopal Church",
      bullets: [
        { key: 'Founded', value: '1749 as St. George\'s Chapel of Trinity Church' },
        { key: 'Built', value: '1846–1856 (current building)' },
        { key: 'Architects', value: 'Charles Otto Blesch and Leopold Eidlitz' },
        { key: 'Architectural style', value: 'Romanesque Revival' },
        { key: 'Significance', value: 'Among the earliest Romanesque Revival churches in the United States, known for its long-standing commitment to serving the urban poor through outreach and community programs.' },
      ],
      link: "https://www.calvarystgeorges.org/full-parish-history",
      image_caption: "St. George's Church. The New York Public Library. 1911–1921",
      image_link: "https://digitalcollections.nypl.org/items/6597dae0-c55c-012f-4d68-58d385a7bc34#/?uuid=510d47e2-8bb9-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.97604368128681, 40.76132405923972],
    },
    properties: {
      id: 84,
      name: "St. Patrick's Cathedral",
      bullets: [
        { key: 'Built', value: '1858-1878 (dedicated 1879)' },
        { key: 'Architect', value: 'James Renwick Jr.' },
        { key: 'Architectural style', value: 'Gothic Revival' },
        { key: 'Purpose', value: 'Built to replace Old St. Patrick\'s Cathedral and accommodate growing Catholic population' },
        { key: 'Notable', value: 'First large-scale medieval-style church built in U.S., largest Gothic Revival Catholic cathedral in North America' }
      ],
      image_caption: "St. Patrick's Cathedral, N.Y., Library of Congress, ca. 1890",
      image_link: "https://www.loc.gov/item/91784416/",
      link: "https://saintpatrickscathedral.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00918891126764, 40.711358761723424],
    },
    properties: {
      id: 85,
      name: "St. Paul's Chapel",
      bullets: [
        { key: 'Built', value: '1766' },
        { key: 'Architect', value: 'Thomas McBean' },
        { key: 'Architectural style', value: 'Georgian' },
        { key: 'Significance', value: "Manhattan's oldest surviving church building" },
        { key: 'Notable', value: "Served as refuge for Ground Zero recovery workers after 9/11" },
      ],
      image_caption: "St. Paul's Chapel (front). The New York Public Library Digital Collections. 1905",
      image_link: "https://digitalcollections.nypl.org/items/643e3df0-8ad6-0132-17a4-58d385a7bbd0#/?uuid=650b0e30-8ad6-0132-8653-58d385a7bbd0",
      link: "https://trinitychurchnyc.org/visit-history/places/st-pauls-chapel",
      quote: "The Little Chapel That Stood",
      quote_author: "Dubbed nickname after 9/11",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99396467260372, 40.73828632536973],
    },
    properties: {
      id: 86,
      name: "Margaret Sanger Clinic",
      bullets: [
        { key: 'Founded', value: '1916 in Brooklyn, moved to Manhattan location 1930' },
        { key: 'Founder', value: 'Margaret Sanger' },
        { key: 'Operated', value: '1930-1973' },
        { key: 'Significance', value: 'Pioneering center for reproductive rights and family planning research that reshaped attitudes toward reproductive health and sexuality.' },
      ],
      quote:
        "No woman can call herself free who does not own and control her body. No woman can call herself free until she can choose consciously whether she will or will not be a mother.",
      quote_author: "Margaret Sanger",
      image_caption:
        "Outside The Sanger Brownsville clinic in Brooklyn (Library of Congress)",
      image_link: "https://www.loc.gov/item/2010645731/",
      link: "https://www.pbs.org/wgbh/americanexperience/features/pill-margaret-sanger-1879-1966/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.94138230258297, 40.82159874130362],
    },
    properties: {
      id: 87,
      name: "Schomburg Center for Research in Black Culture",
      description:
        "Research library of the New York Public Library (NYPL) and an archive repository for information on people of African descent worldwide.",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99581075758525, 40.735343209954536],
    },
    properties: {
      id: 88,
      name: "Winfield Scott House",
      description:
        "Home of Winfield Scott, heroic general in the U.S.-Mexican War and later presidential candidate",
      image_caption: "Manhattan: 12th Street (West). The New York Public Library Digital Collections. 1870 - 1980.",
      image_link: "https://digitalcollections.nypl.org/items/d7f72c70-c53f-012f-db8d-58d385a7bc34#/?uuid=510d47dc-f796-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.96553661712986, 40.770145884521895],
    },
    properties: {
      id: 89,
      name: "Seventh Regiment Armory",
      bullets: [
        { key: 'Built', value: '1877-1880' },
        { key: 'Architect', value: 'Charles W. Clinton' },
        { key: 'Architectural Style', value: 'Gothic Revival' },
        { key: 'Significance', value: "First true armory built in Manhattan, home to the elite 'Silk Stocking' Regiment whose members included prominent Gilded Age families like the Vanderbilts and Roosevelts. Features exceptional interior spaces designed by Louis Comfort Tiffany, Stanford White, and other leading artists of the American Aesthetic Movement." },
      ],
      image_caption: "Seventh Regiment Armory. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/resource/hhh.ny1581.photos/?sp=18",
      link: "https://www.armoryonpark.org/about_us/history",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.96353624541244, 40.77705914955267],
    },
    properties: {
      id: 90,
      name: "Harry F. Sinclair House",
      bullets: [
        { key: 'Built', value: '1897-1899' },
        { key: 'Architect', value: 'C.P.H. Gilbert' },
        { key: 'Architectural Style', value: 'French Gothic' },
        { key: 'Significance', value: 'Gilded Age mansion that housed prominent figures including oil magnate Harry F. Sinclair (involved in the Teapot Dome scandal) and descendants of Peter Stuyvesant. Now serves as the Ukrainian Institute of America, promoting Ukrainian culture and arts since 1955.' }
      ],
      image_caption: "Harry F. Sinclair House, 2 East Seventy-ninth Street, New York County, NY. Library of Congress. 1930s",
      image_link: "https://www.loc.gov/item/ny1276/",
      link: "https://ukrainianinstitute.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99788823396004, 40.7139586251084],
    },
    properties: {
      id: 91,
      name: "Alfred E. Smith House",
      description:
        "Home of four-time New York State governor Alfred E. Smith (and later presidential candidate) from 1907 to 1923",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00004582946308, 40.72549470153905],
    },
    properties: {
      id: 92,
      name: "SoHo-Cast Iron Historic District",
      bullets: [
        { key: 'Original Purpose', value: 'Manufacturing district for textiles and light industrial goods (1800s)' },
        { key: 'Cast-Iron Benefits', value: 'Cheaper than stone, fire-resistant, allowed large windows and open floor plans' },
        { key: 'Architectural Styles', value: 'Italianate and Second Empire cast-iron facades' },
        { key: 'Significance', value: 'World\'s largest collection of cast-iron architecture with 250+ buildings' },
      ],
      image_caption:"E. V. Haughwout & Company Building, 488-492 Broadway, New York County, NY. Library of Congress. 1930s",
      image_link: "https://www.loc.gov/resource/hhh.ny0379.photos/?sp=3",
      link: "https://www.nypap.org/preservation-history/soho-cast-iron-historic-district/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00565543416522, 40.71452937605111],
    },
    properties: {
      id: 93,
      name: "A. T. Stewart Company Store",
      bullets: [
        { key: 'Built', value: '1845-1846' },
        { key: 'Architects', value: 'Joseph Trench and John B. Snook' },
        { key: 'Architectural style', value: 'Italian Renaissance' },
        { key: 'Nickname', value: '"Marble Palace"' },
        { key: 'Owner', value: 'Alexander Turney Stewart, Irish immigrant and business legend' },
        { key: 'Significance', value: "America's first department store; introduced Italian Renaissance architectural style to the United States" },
        { key: 'Notable', value: 'Now known as Sun Building, former headquarters of The Sun newspaper' }
      ],
      image_caption: "Grace Church and Stewart's Store. The New York Public Library Digital Collections. 1858 - 1925.",
      image_link: "https://digitalcollections.nypl.org/items/d3487520-c557-012f-0c37-58d385a7bc34#/?uuid=510d47e0-1eee-a3d9-e040-e00a18064a99",
      quote: "The Sun... It Shines for All.",
      quote_author:
        "Inscription on a non-working clock from the building's Sun newspaper era",
      link: "https://www.villagepreservation.org/2020/09/21/beyond-the-village-and-back-the-marble-palace-a-t-stewart-store-at-280-broadway/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00236497737959, 40.73508661659227],
    },
    properties: {
      id: 94,
      name: "Stonewall",
      bullets: [
        { key: 'Date', value: 'June 28, 1969' },
        { key: 'Event', value: 'Police raid turned into six days of protests and demonstrations' },
        { key: 'Significance', value: 'Sparked the modern LGBTQ+ rights movement' },
        { key: 'Notable', value: 'Led to the first Gay Pride marches and formation of LGBTQ+ advocacy groups' }
      ],
      description: "This Greenwich Village bar became a symbol of resistance when patrons and community members fought back against routine police harassment, transforming a local confrontation into a watershed moment for civil rights in America.",
      quote: "Gay power! Isn't that great! It's about time we did something to assert ourselves.",
      quote_author: "Allen Ginsberg, poet and Greenwich Village resident",
      link: "https://www.nps.gov/ston/index.htm",
      image_caption: "Stonewall Inn. The New York Public Library Digital Collections. 1969",
      image_link: "https://digitalcollections.nypl.org/items/29ebdc90-c5b1-012f-08e3-58d385a7bc34#/?uuid=510d47e3-57e3-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.97354438336424, 40.76041389553095],
    },
    properties: {
      id: 95,
      name: "St. Bartholomew's Church and Community House",
      bullets: [
        { key: 'Built', value: '1918-1930' },
        { key: 'Architect', value: 'Bertram Goodhue (with later additions by Mayers, Murray & Phillip)' },
        { key: 'Architectural Style', value: 'Byzantine Revival with Romanesque influences, featuring salmon-colored brick and limestone trim' },
        { key: 'Significance', value: 'Landmark Manhattan church known for its distinctive dome and architectural beauty; famous for its music program and as a cultural venue; survived a major redevelopment controversy in the 1980s that helped strengthen historic preservation laws' }
      ],
      image_caption: "St. Bartholomew's on Park Avenue. The New York Public Library Digital Collections. 1931",
      image_link: "https://digitalcollections.nypl.org/items/2186af80-980e-013a-2ba1-0242ac110003#/?uuid=7ace51b0-9810-013a-e254-0242ac110003",
      link: "https://stbarts.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.0043648299379, 40.71370368081325],
    },
    properties: {
      id: 96,
      name: "Surrogate's Court",
      description: "Probate Courthouse across from City Hall",
      link: "https://ww2.nycourts.gov/courts/1jd/surrogates/historical.shtml",
      image_caption: "31 Chambers Street - Centre Street. The New York Public Library Digital Collections. 1887 - 1964.",
      image_link: "https://digitalcollections.nypl.org/items/2e6caaa0-c5ed-012f-1470-58d385a7bc34#/?uuid=510d47e2-eef9-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99008030767298, 40.71904370680578],
    },
    properties: {
      id: 97,
      name: "Tenement Building at 97 Orchard Street",
      bullets: [
        { key: 'Built', value: '1863 (active 1863-1935)' },
        { key: 'Residents', value: '7,000 people from 20+ nations' },
        { key: 'Significance', value: 'Located on Orchard Street, the epicenter of immigrant life in NYC. Today, it serves as a museum dedicated to preserving and interpreting the history of immigration in America.' },
      ],
      quote: "I walked toward the Lower East Side - where you walked 50 years ago, little girl - from Russia, eating the first poisonous tomatoes of America - frightened on the dock - then struggling in the crowds of Orchard Street toward what?",
      quote_author: "Allen Ginsberg, 'Kaddish'",
      link: "https://www.tenement.org/",
      image_caption: "Orchard Street Scene. The New York Public Library Digital Collections. 1902–1914.",
      image_link: "https://digitalcollections.nypl.org/items/17d33910-c6e9-012f-7616-58d385a7bc34#/?uuid=510d47e3-4c92-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99891966463146, 40.736518218606015],
    },
    properties: {
      id: 98,
      name: "Third Judicial District Courthouse",
      description:
        "Originally built as the Third Judicial District Courthouse; faced with demolition, public outcry led to its reuse as a branch of the New York Public Library",
      image_caption: "Third Judicial District Courthouse. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/item/ny0431/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98296160308524, 40.750140782637565],
    },
    properties: {
      id: 99,
      name: "Tiffany and Company Building",
      bullets: [
        { key: 'Built', value: '1903-1905' },
        { key: 'Architect', value: 'Stanford White of McKim, Mead & White' },
        { key: 'Architectural Style', value: 'Renaissance Revival' },
        { key: 'Significance', value: 'Magnificent white marble "palace" based on Venice\'s Palazzo Grimani that helped establish Fifth Avenue as America\'s premier luxury shopping thoroughfare. Served as Tiffany\'s flagship store until 1940 and remains one of Stanford White\'s most celebrated designs.' }
      ],
      image_caption: "Tiffany Building, New York, N.Y., Library of Congress, 1900–1906.",
      image_link: "https://www.loc.gov/item/2016805833/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98652652429836, 40.73936390275819],
    },
    properties: {
      id: 100,
      name: "Samuel J. Tilden House",
      description:
        "Home of Samuel J. Tilden, former New York State governor and loser of the bitter 1876 presidential election",
      image_caption: "Samuel J. Tilden Residence. Wikimedia Commons. 1872",
      image_link: "https://en.wikipedia.org/wiki/Samuel_J._Tilden_House#/media/File:C.Vaux_-_Samuel_J.Tilden_residence_-_NY_-_Albert_Levy.jpg"
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98443606841184, 40.75760618892735],
    },
    properties: {
      id: 101,
      name: "The Town Hall",
      bullets: [
        { key: 'Built', value: '1919-1921' },
        { key: 'Architect', value: 'McKim, Mead & White' },
        { key: 'Architectural Style', value: 'Georgian Revival' },
        { key: 'Significance', value: 'Built for the League for Political Education by suffragists as a venue for free speech and civic discourse. Historic performance space with exceptional acoustics that has hosted over a century of landmark cultural and political events, including the pioneering radio program "America\'s Town Meeting of the Air" (1935-1956). Designated National Historic Landmark in 2012.' }
      ],
      link: "https://www.thetownhall.org/",
      image_caption: "Exterior view of The Town Hall. The New York Public Library Digital Collections, 1840–2020.",
      image_link: "https://digitalcollections.nypl.org/items/59a524e0-3849-0131-5911-58d385a7bbd0#/?uuid=a7a79de0-3849-0131-e876-58d385a7bbd0",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99548896096587, 40.730189231632515],
    },
    properties: {
      id: 102,
      name: "Triangle Shirtwaist Factory",
      bullets: [
        { key: 'Date', value: 'March 25, 1911' },
        { key: 'Event', value: 'Site of factory fire that killed 146 workers (mostly young, immigrant women)' },
        { key: 'Significance', value: 'Led to landmark workplace safety laws and labor reforms' },
      ],
      quote:
        "There was a stricken conscience of public guilt and we all felt that we had been wrong, that something was wrong with that building which we had accepted or the tragedy never would have happened. Moved by this sense of stricken guilt, we banded ourselves together to find a way by law to prevent this kind of disaster.",
      quote_author: "Frances Perkins, Secretary of Labor",
      image_caption: 'Trade Parade in Memory of Fire Victims, Library of Congress, April or May 1911',
      image_link: "https://www.loc.gov/item/2002709196/",
      link: "https://www.history.com/articles/triangle-shirtwaist-fire",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.012216, 40.708041],
    },
    properties: {
      id: 103,
      name: "Trinity Church",
      bullets: [
        { key: 'Founded', value: '1697' },
        { key: 'Built', value: '1846 (current building)' },
        { key: 'Architect', value: 'Richard Upjohn' },
        { key: 'Architectural style', value: 'Neo-Gothic' },
        { key: 'Significance', value: 'One of the earliest and finest examples of Neo-Gothic architecture in the U.S. Resting place of Alexander Hamilton and other notable figures.' },
      ],
      image_caption: 'Wall Street, N.Y., The New York Public Library Digital Collections, 1895',
      image_link: 'https://digitalcollections.nypl.org/items/9fa0b400-c55b-012f-e7f0-58d385a7bc34#/?uuid=510d47e1-06da-a3d9-e040-e00a18064a99',
      link: "https://trinitychurchnyc.org/visit-history",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.0054841093619, 40.714259827923584],
    },
    properties: {
      id: 104,
      name: "Old New York County Courthouse",
      description:
        "Historic courthouse, more commonly known as the Tweed Courthouse, connected to Tammany Hall, now used by NYC's Department of Education",
      image_caption: "New York County Courthouse, 52 Chambers Street, New York County, NY. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/item/ny0926/"
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99030335932528, 40.735972304113076],
    },
    properties: {
      id: 105,
      name: "Union Square",
      bullets: [
        { key: 'Established', value: '1833 (opened 1839)' },
        { key: 'Designer', value: 'Frederick Law Olmsted and Calvert Vaux (1872 redesign)' },
        { key: 'Significance', value: "Site of America's first Labor Day parade in 1882, establishing its significance in labor history. Redesigned as an open forum for public gatherings, political rallies, and civic engagement." }
      ],
      image_caption: "Union Square Looking North, Library of Congress, 1919",
      image_link: "https://www.loc.gov/item/2021644846/",
      link: "https://www.nps.gov/places/union-square.htm",
      quote: "This is Labor Day in earnest, Uncle Dick.",
      quote_author: "Robert Price to the General Worthy Foreman of the Knights of Labor"
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98646147445683, 40.73967064979796],
    },
    properties: {
      id: 106,
      name: "United Charities Building",
      bullets: [
        { key: 'Built', value: '1893' },
        { key: 'Architect', value: 'Robert H. Robertson (assisted by Rowe & Baker)' },
        { key: 'Architectural style', value: 'Renaissance Revival' },
        { key: 'Patron', value: 'John Stewart Kennedy, wealthy banker and philanthropist' },
        { key: 'Purpose', value: 'House the Charity Organization Society and multiple charitable organizations' },
        { key: 'Significance', value: 'Pioneer headquarters for nonprofit organizations providing social services' }
      ],
      image_caption: "The New building for the United Charities of New York City, corner Twenty-Second Street and Fourth Avenue / drawn by Hughson Hawley .The New York Public Library Digital Collections, 1895",
      image_link: "https://www.loc.gov/item/93509656/"
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.86999817621367, 40.871982542092695],
    },
    properties: {
      id: 107,
      name: "United Workers Cooperatives",
      bullets: [
        { key: 'Built', value: '1926-1929' },
        { key: 'Architect', value: 'Springsteen & Goldhammer (1926-1927), Herman Jessor (1927-1929)' },
        { key: 'Architectural Style', value: 'Tudor Revival' },
        { key: 'Significance', value: 'Pioneering example of cooperative housing for working-class people, built by the United Workers\' Association (part of the Industrial Workers of the World). Known as "The Coops" or "Allerton Coops," it housed primarily secular Jewish Communist workers from the needle trades. Featured innovative amenities including classrooms, library, and non-eviction policies, representing early 20th-century experiments in socialist cooperative living and workers\' housing.' }
      ],
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.01356682936074, 40.70467473567295],
    },
    properties: {
      id: 108,
      name: "U.S. Customhouse",
      description:
        "Cass Gilbert designed Customhouse for New York Harbor; now part of the Smithsonian Institution",
      image_caption: "U.S. Custom House, New York, N.Y. The New York Public Library Digital Collections. 1908.",
      image_link: "https://digitalcollections.nypl.org/items/d46f7870-c55c-012f-dd3c-58d385a7bc34#/?uuid=510d47e0-ccce-a3d9-e040-e00a18064a99",
      link: "https://americanindian.si.edu/visit/ny",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.91379176998373, 40.864618874950175],
    },
    properties: {
      id: 109,
      name: "University Heights Campus (Bronx Community College of the City University of New York)",
      description:
        "Bronx - University Heights Campus. The New York Public Library Digital Collections. 1887 - 1964.",
      image_link: "https://digitalcollections.nypl.org/items/609c3240-c5ec-012f-5204-58d385a7bc34#/?uuid=510d47e2-c3e5-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.89502051718058, 40.89655049433883],
    },
    properties: {
      id: 110,
      name: "Van Cortlandt House",
      bullets: [
        { key: 'Built', value: '1748-1749' },
        { key: 'Builder', value: 'Frederick Van Cortlandt' },
        { key: 'Architectural Style', value: 'Georgian' },
        { key: 'Significance', value: "Oldest surviving house in the Bronx, this home served as George Washington's headquarters during the Revolutionary War and represents 140 years of Van Cortlandt family heritage." }
      ],
      image_caption: "The Van Cortlandt Mansion, New York. The New York Public Library Digital Collections. 1860 - 1920.",
      image_url: "https://digitalcollections.nypl.org/items/607674e0-c617-012f-f6e4-58d385a7bc34#/?uuid=510d47d9-adf4-a3d9-e040-e00a18064a99",
      link: "https://www.vchm.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.1475, 40.571389],
    },
    properties: {
      id: 111,
      name: "Voorlezer's House",
      bullets: [
        { key: 'Built', value: "ca. 1695" },
        { key: 'Architectural Style', value: "Dutch Colonial vernacular with steep-pitched roof, stone construction, and simple rectangular form" },
        { key: 'Significance', value: "Oldest known elementary school building in the United States and one of the most important surviving relics of 17th-century Dutch settlement in New York." },
      ],
      image_caption: "Voorlezer's House. The New York Public Library Digital Collections. 1990 - 1999.",
      image_link: "https://digitalcollections.nypl.org/items/7253fe10-c5ee-012f-c56a-58d385a7bc34#/?uuid=510d47d9-cc33-a3d9-e040-e00a18064a99",
      link: "https://www.historicrichmondtown.org/historic-houses/2018/7/26/voorlezer",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.25462752145414, 40.50763942250119],
    },
    properties: {
      id: 112,
      name: "Wards Point Archeological Site",
      description:
        "Archaeological site in Conference House Park containing prehistoric remains.",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.87179963622965, 40.890836356657815],
    },
    properties: {
      id: 113,
      name: "Woodlawn Cemetery",
      bullets: [
        { key: 'Founded', value: '1863' },
        { key: 'Designer', value: 'James C. Sidney (original layout), with later contributions by McKim, Mead & White, John Russell Pope, Cass Gilbert, Carrère & Hastings, and Olmsted Brothers' },
        { key: 'Architectural Style', value: 'Rural Cemetery Movement, later transitioning to Lawn Cemetery style' },
        { key: 'Significance', value: 'National Historic Landmark showcasing the evolution from 19th-century rural cemetery design to modern cemetery planning. Final resting place of over 300,000 people including numerous notable Americans, featuring the nation\'s finest collection of memorial architecture and funerary art across 400 acres of rolling landscape.' }
      ],
      link: "https://www.woodlawn.org/",
      image_caption: "Map of the Woodlawn Cemetery. The New York Public Library Digital Collections. 1870.",
      image_link: "https://digitalcollections.nypl.org/items/9a98d280-f948-0130-fd87-58d385a7b928#/?uuid=a6a42f20-f94a-0130-073e-58d385a7bbd0",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00839725969281, 40.71329704082626],
    },
    properties: {
      id: 114,
      name: "Woolworth Building",
      bullets: [
        { key: 'Built', value: '1913' },
        { key: 'Architect', value: 'Cass Gilbert' },
        { key: 'Architectural Style', value: 'Neo-Gothic' },
        { key: 'Significance', value: 'World\'s tallest building from 1913-1930 at 792 feet, dubbed the "Cathedral of Commerce." Revolutionary steel-frame skyscraper with Gothic Revival styling that became the model for early 20th-century tower design. Commissioned by five-and-dime magnate Frank W. Woolworth as both corporate headquarters and monument to American commercial success.' }
      ],
      image_caption: 'Woolworth Building. New York City. Library of Congress. 1912.',
      image_link: 'https://www.loc.gov/resource/ppmsca.54245/',
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9212462132942, 40.65103285175784],
    },
    properties: {
      id: 115,
      name: "Wyckoff House",
      description: "Oldest surviving Dutch saltbox frame house in America",
      image_caption: "Wyckoff home. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/item/ny0257/",
      link: "https://wyckoffmuseum.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.951389, 40.610833],
    },
    properties: {
      id: 116,
      name: "Wyckoff-Bennett Homestead",
      description: "Housed Hessian soldiers during the American Revolution",
      image_caption: "Wyckoff-Bennett House. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/item/ny0256/",
      link: "https://hdc.org/buildings/wyckoff-bennett-homestead/",
    },
  },
];

export default landmarks;
