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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1904-1906" },
        { key: "Architect", value: "Hunt & Hunt" },
        { key: "Architectural style", value: "Beaux-Arts" },
        {
          key: "Significant",
          value:
            "First armory in NYC built without medieval fortress design and site of the historic 1913 Armory Show that introduced modern art to America.",
        },
      ],
      image_caption:
        "69th Regiment, New York National Guard, marching past armory entrance, Library of Congress, 1916",
      image_link: "https://www.loc.gov/item/2016651305/",
      link: "https://sixtyninth.net/",
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
      borough: "The Bronx",
      bullets: [
        { key: "Admiral", value: "David Glasgow Farragut (1801-1870)" },
        {
          key: "Legacy",
          value: "First rear admiral, vice admiral, and admiral in U.S. Navy history, famous for capturing New Orleans (1862)."
        },
        {
          key: "Significance",
          value:
          "Only intact known property directly associated with Admiral Farragut",
        },
      ],
      image_caption: "Admiral David Farragut monument. Wikimedia Commons. 2008.",
      image_link:
        "https://en.wikipedia.org/wiki/Admiral_David_Glasgow_Farragut_Gravesite#/media/File:Admiral_David_Farragut_Monument_1024.jpg",
      link: "https://6tocelebrate.org/site/woodlawn-cemetery-admiral-david-glasgow-farragut-gravesite/",
      quote: "Damn the torpedoes, full speed ahead!",
      quote_author: "Admiral David Glasgow Farragut, Battle of Mobile Bay (1864)"
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00446407977192, 40.714547623459026],
    },
    properties: {
      id: 3,
      name: "African Burial Ground",
      borough: "Manhattan",
      bullets: [
        { key: "Used", value: "1690s-1794" },
        { key: "Rediscovered", value: "1991 during construction" },
        {
          key: "Significance",
          value:
            "The nation's oldest and largest known excavated burial ground for free and enslaved Africans. Today, it serves as a monument honoring the thousands who built early NYC.",
        },
      ],
      link: "https://www.nps.gov/afbg/index.htm",
      quote:
        "For all those who were lost, for all those who were stolen, for all those who were left behind, for all those who were not forgotten.",
      quote_author: "Memorial inscription",
      image_caption:
        "Map showing the location of the burial ground outside the northern boundary of the city. A plan of the city of New-York. New York Public Library Digital Collections. 1763.",
      image_link:
        "https://digitalcollections.nypl.org/items/3949a160-c5ed-012f-fd0b-58d385a7bc34#/?uuid=510d47d9-7ac7-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1907" },
        {
          key: "Period",
          value: "Served the Ambrose Channel from 1908 to 1932",
        },
        { key: "Builder", value: "New York Shipbuilding Company" },
        { key: "Type", value: "Riveted steel lightship (LV-87/WAL-512)" },
        {
          key: "Significance",
          value:
            "The very first lightship to guard Ambrose Channel, the largest shipping channel in and out of the ports of New York and New Jersey; served as a symbol of hope and arrival for over six million immigrants into New York Harbor.",
        },
      ],
      link: "https://museumships.us/coast-guard/ambrose",
      image_caption:
        "United States Lightship WLV-613. Wikimedia Commons, U.S. Coast Guard, n.d.",
      image_link:
        "https://en.wikipedia.org/wiki/Lightship_Ambrose#/media/File:Ambrose_Lightship.jpg",
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
      borough: "Manhattan",
      bullets: [
        {
          key: "Built",
          value: "1921, enlarged 1929-1931",
        },
        { key: "Period", value: "1953-2008" },
        { key: "Architect", value: "Starrett & van Vleck" },
        {
          key: "Architectural style",
          value: "Renaissance Revival (original), Art Deco (expansion)",
        },
        {
          key: "Significance",
          value:
            'Built to elevate the New York Curb Exchange from a curbside market which took place outdoors  "on the curb" to a formal trading floor.',
        },
      ],
      image_caption:
        "New York Curb Market Building. Library of Congress. 1921.",
      image_link: "https://www.loc.gov/item/00650323/",
      link: "https://www.nyse.com/publicdocs/American_Stock_Exchange_Historical_Timeline.pdf",
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
      borough: "Queens",
      bullets: [
        {
          key: "Built",
          value: "1910 by architect Robert W. Johnson, built by Thomas Daly",
        },
        { 
          key: "Residents", 
          value: "Louis Armstrong and his wife Lucille Wilson (1943-1971)" 
        },
        {
          key: "Significance",
          value: "Home to Louis Armstrong (1901-1971) during his most celebrated years, preserved exactly as the couple left it. The house represents Armstrong's choice to live modestly in an integrated working-class neighborhood despite his international fame. It houses the 60,000-piece Louis Armstrong Archive.",
        },
      ],
      image_caption: "Louis Armstrong House. Wikimedia Commons. 2021.",
      image_link: "https://en.wikipedia.org/wiki/Louis_Armstrong_House#/media/File:Louis_Armstrong_House_02_(cropped).jpg",
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
      borough: "Manhattan",
      bullets: [
        {
          key: "Built",
          value: "1855 as part of a row of nine similarly designed brownstone houses",
        },
        { 
          key: "Architectural style", 
          value: "Romanesque Revival" 
        },
        {
          key: "Significance",
          value: "Site of Chester A. Arthur's presidential swearing-in ceremony in 1881—the only private residence outside Washington D.C. where a President took the oath of office. Arthur's lifelong home until his death in 1886, it stands as a rare surviving presidential residence in New York City.",
        },
        { 
          key: "Current", 
          value: "Ground floor houses Kalustyan's grocery store; upper floors are apartments" 
        },
      ],
      image_description:
        "Home of President Chester A. Arthur, 123 Lexington Avenue. Wikimedia Commons.",
      image_link:
        "https://commons.wikimedia.org/wiki/File:Presidents_Chester_A_Arthur_123_Lexington_Ave.jpg",
      link: "https://npgallery.nps.gov/NRHP/GetAsset/NHLS/66000534_text#:~:text=The%20Chester%20A.,brackets%20is%20the%20crowning%20feature.",
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
      borough: "Staten Island",
      bullets: [
        {
          key: "Residents",
          value: " Alice Austen and her partner Gertrude Tate (1866-1952)",
        },
        {
          key: "Significance",
          value:
            "One of the first women photographers to work outside the confines of a studio, capturing over 8,000 images of everyday life in Victorian society.",
        },
        {
          key: "Current",
          value:
            "Now the site of the Alice Austen House Museum, preserving her photographic legacy and serving as a nationally designated site of LGBTQ+ history.",
        },
      ],
      link: "https://aliceausten.org/",
      image_caption:
        "Clear Comfort, the Austen House, with the photographer's grandfather, photo by Alice Austen. The New York Public Library Digital Collections.",
      image_link:
        "https://digitalcollections.nypl.org/items/64b4df40-c5ef-012f-3d82-58d385a7bc34#/?uuid=510d47d9-c9ce-a3d9-e040-e00a18064a99",
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
      borough: "The Bronx",
      bullets: [
      { 
        key: "Built", 
        value: "1836-1842 by Robert and Maria Lorillard Bartow" 
      },
      { 
        key: "Architectural style", 
        value: "Greek Revival",
      },
      {
        key: "Significance",
        value: "One of the last surviving manor houses in the Bronx, it is an excellent example of a 19th-century country estate in NYC, offering social and architectural insights into that era.",
      }],
      image_caption:
        "Bartow-Pell Mansion, Shore Road, Pelham Bay Park, Bronx, Bronx County, NY. Library of Congress. 1933.",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1899" },
        { key: "Architect", value: "Louis H. Sullivan" },
        { key: "Architectural style", value: "Chicago School" },
        { key: "Height", value: "167 ft. ft. (13 floors)" },
        {
          key: "Significance",
          value:
            "New York's first modern skyscraper, showcasing Sullivan's characteristic ornate terra cotta facade.",
        },
      ],
      image_caption: "Bayard-Condict Building. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/resource/hhh.ny0350.photos/?sp=1",
      link: "https://hdc.org/buildings/bayard-condict-building/",
      quote:
        "An architect, to be a true exponent of his time, must possess first, last and always the sympathy, the intuition of a poet.",
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
      borough: "Manhattan",
      bullets: [
        { key: "Period", value: "1898-1966" },
        {
          key: "Significance",
          value:
            "Site of one of the world's most prestigious telecommunications research organizations; later became the artists housing project in the United States.",
        },
        {
          key: "Current",
          value: "Home to Westbeth Artists Community since 1970.",
        },
      ],
      image_caption: "Bell Laboratories Building. Wikimedia Commons. 1936",
      image_link:
        "https://en.wikipedia.org/wiki/Bell_Laboratories_Building#/media/File:Western_Electric_complex_NYC_1936.jpg",
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
      borough: "Brooklyn, Manhattan",
      bullets: [
        { key: "Built", value: "1869–1883" },
        {
          key: "Engineer",
          value:
            "John A. Roebling; completed by Washington Roebling and Emily Warren Roebling.",
        },
        {
          key: "Significance",
          value:
            "The first steel-wire suspension bridge connecting Manhattan and Brooklyn. It was the longest suspension bridge worldwide at completion and a landmark feat of 19th-century engineering.",
        },
      ],
      image_caption: "Brooklyn Bridge, Library of Congress. 1915.",
      image_link: "https://www.loc.gov/resource/cph.3b21874/",
      link: "https://www.history.com/this-day-in-history/may-24/brooklyn-bridge-opens",
      quote:
        "Man is after all a finite being in capacities and powers of doing actual work. But when it comes to planning, one mind can in a few hours think out enough work to keep a thousand men employed for years.",
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
      borough: "Brooklyn",
      description:
        "Exemplary collection of 19th-century architectural styles; first historic district in New York City",
      image_caption:
        "Brooklyn Daily Eagle photographs, Brooklyn Public Library, Center for Brooklyn History, 1939",
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
      borough: "Brooklyn",
      description:
        "One of the few remaining buildings by George B. Post; innovative structural system",
      image_caption:
        "Irving I. Herzberg photograph collection, Brooklyn Public Library, Center for Brooklyn History, 1963",
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
      borough: "Queens",
      bullet: [
        { key: "Resident", value: "Ralph Johnson Bunche (1904-1971)" },
        {
          key: "Achievement",
          value: "First African American to win Nobel Peace Prize (1950)",
        },
        {
          key: "UN Role",
          value: "Undersecretary-General for Special Political Affairs",
        },
        {
          key: "Famous For",
          value:
            "Negotiated 1949 Arab-Israeli armistice agreements in Palestine",
        },
        {
          key: "Education",
          value:
            "First African American to earn PhD in Political Science (Harvard, 1934)",
        },
        {
          key: "Notable",
          value:
            "Pioneering diplomat who shaped UN peacekeeping and decolonization efforts worldwide",
        },
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1889-1891" },
        {
          key: "Architect",
          value:
            "William Burnet Tuthill (with Richard Morris Hunt and Adler & Sullivan)",
        },
        { key: "Architectural style", value: "Neo-Italian Renaissance" },
        {
          key: "Benefactor",
          value: "Andrew Carnegie, steel industrialist ($2 million investment)",
        },
        {
          key: "Significance",
          value:
            "One of the world's most prestigious music venues, known for its stunning acoustics and a rich history of hosting legendary performers",
        },
      ],
      link: "https://www.carnegiehall.org/",
      image_caption:
        "Carnegie Music Hall, The New York Public Library Digital Collections, 1908",
      image_link:
        "https://digitalcollections.nypl.org/items/99d82cb0-c615-012f-0cf6-58d385a7bc34#/?uuid=510d47de-0fef-a3d9-e040-e00a18064a99",
      quote:
        "Everywhere in the world, music enhances a hall, with one exception: Carnegie Hall enhances the music.",
      quote_author: "Isaac Stern, violinist",
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
        { key: "Built", value: "1899-1902" },
        { key: "Architect", value: "Babb, Cook & Willard" },
        { key: "Architectural style", value: "Georgian Revival" },
        {
          key: "Significance",
          value:
            "The first private residence in the U.S. with a steel frame and technological innovations like an early Otis elevator, central heating, and air-conditioning. It also featured one of Manhattan's rare private gardens.",
        },
      ],
      borough: "Manhattan",
      image_caption: "Carnegie House, Library of Congress, ca. 1920",
      image_link: "https://www.loc.gov/item/2014703975/",
      quote: "The most modest, plainest, and most roomy house in New York.",
      quote_author:
        "Andrew Carnegie, directing the construction of his mansion",
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
        { key: "Built", value: "1857-1873" },
        { key: "Designers", value: "Frederick Law Olmsted and Calvert Vaux" },
        { key: "Design Plan", value: "Greensward Plan" },
        { key: "Size", value: "843 acres" },
        {
          key: "Significance",
          value:
            "Created to provide all social classes access to nature amid rapid urbanization. Recognized as the first major landscaped public park in America.",
        },
      ],
      borough: "Manhattan",
      link: "https://www.centralparknyc.org/",
      image_caption:
        "Outdoor Life and Sport in Central Park, New York Public Library Digital Collections, 1870",
      image_link:
        "https://digitalcollections.nypl.org/items/b12f9b80-c559-012f-387e-58d385a7bc34#/?uuid=510d47e1-ae3c-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
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
      borough: "Manhattan",
      description:
        "Former home of the Chamber of Commerce of the State of New York, established in 1768; prototype for the chamber of commerce",
      image_caption:
        "66 Liberty Street (Broadway - Nassau Street). The New York Public Library Digital Collections. 1887 - 1964.",
      image_link:
        "https://digitalcollections.nypl.org/items/3fe2d080-c5ed-012f-1ce9-58d385a7bc34#/?uuid=510d47e2-ef4b-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1928-1930" },
        { key: "Architect", value: "William Van Alen" },
        { key: "Architectural style", value: "Art Deco" },
        {
          key: "Commissioner",
          value: "Walter P. Chrysler, automotive magnate",
        },
        { key: "Height", value: "1,046 ft. (77 floors)" },
        {
          key: "Significance",
          value:
            "Celebrated as one of the finest examples of Art Deco architecture; held the title of the world’s tallest building for 11 months (1930–1931).",
        },
      ],
      link: "https://chryslerbuilding.com/",
      image_caption:
        "Stages in the design for the Chrysler building. New York Public Library Digital Collections. 1930",
      image_link:
        "https://digitalcollections.nypl.org/items/a6675350-a066-0130-c348-58d385a7b928#/?uuid=b5b54270-a066-0130-466b-58d385a7b928",
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
      borough: "Manhattan",
      bullets: [
        { key: "Founded", value: "1827" },
        { key: "Built", value: "1841 (current location)" },
        { key: "Architect", value: "Richard Upjohn" },
        { key: "Architectural style", value: "Gothic Revival" },
        {
          key: "Significance",
          value:
            "First church built on Fifth Avenue and an outstanding example of Gothic Revival architecture. Notable for its interior elements including John La Farge\'s altar mural 'The Ascension' and Louis Saint-Gaudens' marble altar.",
        },
      ],
      image_caption:
        "Church of the Ascension. New York Public Library Digital Collections. 1858–1925",
      image_link:
        "https://digitalcollections.nypl.org/items/cd6f0300-c557-012f-d9e7-58d385a7bc34#/?uuid=510d47e0-1eca-a3d9-e040-e00a18064a99",
      link: "https://ascensionnyc.org/",
      quote: "The Church of the Open Door.",
      quote_author:
        "Nickname given after the Wall Street Crash of 1929, when the church opened its doors 24 hours a day.",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1803-1812" },
        {
          key: "Architect",
          value: "Joseph François Mangin and John McComb Jr.",
        },
        { key: "Architectural style", value: "Federal with French influences" },
        {
          key: "Significance",
          value: "Oldest city hall in continuous use in the country",
        },
      ],
      image_caption: "City Hall. N.Y.C. Library of Congress. 1900.",
      image_link: "https://www.loc.gov/resource/ggbain.08578/",
      link: "https://www.nyc.gov/site/designcommission/tours-events/city-hall-tours/city-hall.page",
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
      borough: "Staten Island",
      bullets: [
        { key: "Built", value: "ca. 1670s" },
        {
          key: "Architectural Style",
          value: "Colonial stone manor house with Dutch and English influences",
        },
        {
          key: "Significance",
          value:
            "Site of the failed September 1776 peace conference between British Admiral Lord Howe and American delegates Benjamin Franklin, John Adams, and Edward Rutledge; one of Staten Island's most historically significant buildings.",
        },
      ],
      link: "https://conferencehouse.org/",
      image_caption:
        "Conference House. New York Public Library Digital Collections. 1990 - 1999",
      image_link:
        "https://digitalcollections.nypl.org/items/71e71110-c5ee-012f-176c-58d385a7bc34#/?uuid=510d47d9-cc32-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1891" },
        { key: "Resident", value: " Will Marion Cook, a leading African-American musician and composer, from 1918-1944" },
        { key: "Architectural Style", value: "Renaissance Revival" },
        {
          key: "Significance",
          value: 'House where Cook created "In Dahomey" (1903), the first full-length Broadway musical written and performed entirely by African Americans; served as a creative hub where Cook mentored and influenced Duke Ellington and other legendary musicians.',
        }
      ],
      image_caption: "Will Marion Cook House. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/item/ny1334/",
      link: "https://npgallery.nps.gov/GetAsset/f01aa608-1c60-4bda-a75d-a3af816553cd#:~:text=The%20Will%20Marion%20Cook%20House,York%20Landmarks%20Commission%20in%201966.",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1859" },
        { key: "Architect", value: "Frederick A. Petersen" },
        { key: "Architectural style", value: "Italianate" },
        {
          key: "Significance",
          value:
            "First building in New York City to use rolled-iron I-beams and include an elevator shaft. Was the tallest building in NYC in 1859. National Historic Landmark and NYC Landmark. Site of Abraham Lincoln's famous Cooper Union Address in 1860.",
        },
      ],
      image_caption:
        "Cooper Union. New York Public Library Digital Collections. 1887 - 1964",
      image_link:
        "https://digitalcollections.nypl.org/items/31a5e160-c5ed-012f-bd93-58d385a7bc34#/?uuid=510d47e2-ef01-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1930" },
        { key: "Architect", value: "Raymond Hood" },
        { key: "Architectural style", value: "Art Deco" },
        { key: "Height", value: "476 ft (36 floors)" },
        {
          key: "Significance",
          value:
            "First modern free-standing skyscraper and pioneering example of Art Deco architecture.",
        },
      ],
      image_caption:
        "Daily News Building. New York Public Library Digital Collections. 1935",
      image_link:
        "https://digitalcollections.nypl.org/items/f99a0a60-86cc-013a-7f01-0242ac110003#/?uuid=63a82990-86d0-013a-061c-0242ac110002",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1884" },
        { key: "Architect", value: "Henry Janeway Hardenbergh" },
        { key: "Architectural style", value: "German Renaissance" },
        {
          key: "Significance",
          value: "First luxury apartment building in NYC",
        },
        {
          key: "Notable",
          value:
            "Notable as John Lennon's former home and site of his 1980 murder. Remains one of NYC's most prestigious addresses.",
        },
      ],
      image_caption:
        "Splendid Example of Early Apartment Design. New York Public Library Digital Collections. 1860–1920.",
      image_link:
        "https://digitalcollections.nypl.org/items/dceaad70-c617-012f-78a8-58d385a7bc34#/?uuid=510d47d9-b133-a3d9-e040-e00a18064a99",
      link: "https://classicnewyorkhistory.com/the-dakota-building-new-yorks-most-exclusive-address/",
      quote: "One of the most perfect apartment houses in the world.",
      quote_author: "described in The New York Times, 1884",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "ca. 1784-1785" },
        { key: "Builder", value: "William Dyckman" },
        { key: "Architectural style", value: "Dutch Colonial" },
        { key: "Original Site", value: "250+ acre farm in northern Manhattan" },
        {
          key: "Significance",
          value:
            "Oldest remaining farmhouse on Manhattan island and a vestige of New York City's rural past",
        },
      ],
      image_caption:
        "Dyckman House. The New York Public Library Digital Collections. 1887 - 1986.",
      image_link:
        "https://digitalcollections.nypl.org/items/f01d7e90-c5cd-012f-0645-58d385a7bc34#/?uuid=510d47e2-0326-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
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
      borough: "Manhattan",
      bullets: [
        {
          key: "Built",
          value: "1915",
        },
        { 
          key: "Resident", 
          value: "Duke Ellington (Apt. A4) from 1939-1961" 
        },
        {
          key: "Significance",
          value: "Home to Duke Ellington during his most prolific creative period. The residence represents Ellington's impact on African-American culture and broader musical trends.",
        },
        { 
          key: "Current", 
          value: "Active apartment building, not open to public" 
        },
      ],
      image_link: "https://commons.wikimedia.org/wiki/File:FOYER_-_935_Saint_Nicholas_Avenue,_Apartment_4-A,_935_Saint_Nicholas_Avenue,_Apartment_4-A,_New_York,_New_York_County,_NY_HABS_NY,31-NEYO,119A-1.tif#/media/File:FOYER_-_935_Saint_Nicholas_Avenue,_Apartment_4-A,_935_Saint_Nicholas_Avenue,_Apartment_4-A,_New_York,_New_York_County,_NY_HABS_NY,31-NEYO,119A-1.tif",
      image_caption: "Duke Ellington House. Wikimedia Commons.",
      link: "https://npgallery.nps.gov/NRHP/GetAsset/NHLS/76001239_text",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1930-1931" },
        { key: "Architect", value: "William F. Lamb" },
        { key: "Architectural Style", value: "Art Deco" },
        { key: "Height", value: "1,250 ft. (102 floors)" },
        {
          key: "Significance",
          value:
            "World's tallest building from 1931-1970; symbol of American resilience during the Great Depression.",
        },
      ],
      image_caption: "The Empire State Building, Library of Congress, 1952.",
      image_link: "https://www.loc.gov/item/2020635807/",
      quote:
        "caught at the exact moment of transition—caught between metal and stone, between the idea of 'monumental mass' and that of airy volume.",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1913-1915" },
        { key: "Architect", value: "Ernest R. Graham" },
        { key: "Architectural style", value: "Neoclassical" },
        { key: "Height", value: "555 ft. (38 stories)" },
        {
          key: "Significance",
          value:
            "One of the first skyscrapers and first office building with passenger elevators. It cut off direct sunlight from Broadway, leading to NYC's 1916 Zoning Resolution regulating building heights and shapes.",
        },
      ],
      image_caption:
        "Broadway - Wall Street - Cedar Street. The New York Public Library Digital Collections. 1887 - 1986.",
      image_link:
        "https://digitalcollections.nypl.org/items/e31f72e0-c5cd-012f-267a-58d385a7bc34#/?uuid=510d47e2-02e2-a3d9-e040-e00a18064a99",
      link: "https://www.nyc.gov/assets/lpc/downloads/pdf/presentation-materials/20230502/120-Broadway.pdf",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "c. 1803-1804; Built by Peter Stuyvesant for his daughter Elizabeth ane her husband Nicholas Fish" },
        { key: "Architectural Style", value: "Federal Style" },
        {
          key: "Significance",
          value: "Birthplace and home of Hamilton Fish (1808-1893), NY Governor, US Senator, and Secretary of State under Grant."
        }
      ],
      image_caption: "Hamilton Fish House, 21 Stuyvesant Street, New York County, NY. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/item/ny1278/",
      link: "https://npgallery.nps.gov/GetAsset/dc84fd2d-09cf-4510-b37c-3ce5e399545f",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1902" },
        {
          key: "Architect",
          value: "Daniel Burnham (with Frederick P. Dinkelberg)",
        },
        { key: "Architectural Style", value: "Beaux-Arts" },
        {
          key: "Significance",
          value:
            "Pioneering steel-frame skyscraper renowned for its distinctive triangular design. Built as Fuller Building headquarters and initially dubbed 'Burnham's Folly,' it became an enduring architectural icon.",
        },
      ],
      image_caption:
        "Flatiron Building, New York Public Library Digital Collections, 1911.",
      image_link:
        "https://digitalcollections.nypl.org/items/e250e7e0-c55a-012f-50e6-58d385a7bc34#/?uuid=510d47e0-ce72-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1903-1906" },
        { key: "Architect", value: "Shepley, Rutan & Coolidge" },
        { key: "Architectural Style", value: "Classical Revival" },
        {
          key: "Significance",
          value:
            "The founding building of Rockefeller University's campus, housing the nation's first major biomedical research laboratory.",
        },
      ],
      image_caption: "Founder's Hall, Digital Commons @ RU, ca. 1916–1930.",
      image_link: "https://digitalcommons.rockefeller.edu/founders-hall/8/",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1935" },
        { key: "Architect", value: "Thomas Hastings of Carrère and Hastings" },
        { key: "Architectural style", value: "Beaux-Arts" },
        {
          key: "Significance",
          value:
            "Preserves and exhibits Henry Clay Frick's high-quality collection of European art—including paintings, sculpture, and decorative arts—from the Renaissance to the early 20th century.",
        },
      ],
      link: "https://www.frick.org/about/history",
      image_caption:
        "East 71st Street – Fifth Avenue, The New York Public Library Digital Collections.",
      image_link:
        "https://digitalcollections.nypl.org/items/ef75fe30-c5ec-012f-0df7-58d385a7bc34#/?uuid=510d47e2-cfa3-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        {
          key: "Built",
          value: "1794-1813 (fortifications), 1900s expansion (McKim plan)",
        },
        {
          key: "Significance",
          value:
            "Historic military fortress protecting New York Harbor for 200+ years (1794-1996); home to Fort Jay and Castle Williams National Monuments and over 50 historic buildings.",
        },
        {
          key: "Current",
          value: "Public park and cultural and historic destination",
        },
      ],
      link: "https://www.nps.gov/gois/index.htm",
      image_caption:
        "Governers Island & The Narrows Library of Congress, ca. 1901.",
      image_link: "https://www.loc.gov/resource/cph.3c35431/",
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
      borough: "Manhattan",
      bullets: [
        { key: "Founded", value: "1805" },
        { key: "Built", value: "1846 (current location)" },
        {
          key: "Architect",
          value: "James Renwick Jr. (first major commission at age 23)",
        },
        { key: "Architectural style", value: "Gothic Revival" },
        {
          key: "Significance",
          value:
            "One of NYC's finest Gothic Revival structures. Once the most fashionable church in the city.",
        },
      ],
      link: "https://gracechurchnyc.org/",
      image_caption:
        "Grace Church. The New York Public Library Digital Collections. 1860–1920.",
      image_link:
        "https://digitalcollections.nypl.org/items/f12cea10-c617-012f-dafa-58d385a7bc34#/?uuid=510d47d9-b180-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1913" },
        { key: "Architect", value: "Reed and Stem, Warren and Wetmore" },
        { key: "Architectural style", value: "Beaux-Arts" },
        { key: "Significance", value: "Major transportation hub and architectural masterpiece that serves as a symbol of the city’s past and present. As part of the City Beautiful movement, it championed the idea that that civic architecture had to be beautiful.",},
      ],
      image_caption:
        "Pershing Square at Grand Central Terminal. Libary of Congress. 1919.",
      image_link: "https://www.loc.gov/resource/stereo.1s07640/",
      link: "https://grandcentralterminal.com/history/",
      quote: "Not only the greatest station in the United States, but the greatest station, of any type, in the world.",
      quote_author: "The New York Times, 1913",
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
      borough: "Brooklyn",
      bullets: [
        { key: "Founded", value: "1838" },
        { key: "Designer", value: "David Bates Douglass" },
        { key: "Design Style", value: "Rural Cemetery Movement" },
        { key: "Size", value: "478 acres" },
        {
          key: "Significance",
          value:
            "One of America's first rural cemeteries, pioneering naturalistic landscape that influenced the American parks movement, with distinctive architecture and Gothic Revival entrance gates by Richard Upjohn.",
        },
      ],
      link: "https://www.green-wood.com/",
      image_caption:
        "Entrance, Greenwood Cemetery. The New York Public Library Digital Collections, 1850–1930.",
      image_link:
        "https://digitalcollections.nypl.org/items/2f072ae0-c556-012f-1774-58d385a7bc34#/?uuid=510d47e1-e618-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1802" },
        { key: "Architect", value: "John McComb Jr." },
        { key: "Architectural Style", value: "Federal" },
        {
          key: "Significance",
          value:
            "Alexander Hamilton's only owned home and country retreat where he lived until his death in the 1804 duel with Aaron Burr.",
        },
      ],
      link: "https://www.nps.gov/hagr/index.htm",
      image_caption:
        "Hamilton Grange, (second location). Library of Congress. 1933.",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1943-1959" },
        { key: "Founder", value: "Solomon R. Guggenheim" },
        { key: "Architect", value: "Frank Lloyd Wright" },
        { key: "Architectural Style", value: "Modern/Organic Architecture" },
        {
          key: "Collection Focus",
          value:
            "Modern and contemporary art, Impressionist and Post-Impressionist works",
        },
        {
          key: "Significance",
          value:
            "Revolutionary museum design that challenged traditional gallery spaces",
        },
      ],
      link: "https://www.guggenheim.org/",
      image_caption:
        "Solomon R. Guggenheim Museum, New York, New York. Interior. View of skylight. Library of Congress, 1955–2007.",
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
      borough: "Manhattan",
      bullets: [
        { key: "Founded", value: "1893" },
        { key: "Founder", value: "Lillian Wald, nurse and humanitarian" },
        {
          key: "Significance",
          value:
            "Pioneered community-based social services for Lower East Side immigrants. Still operating today.",
        },
      ],
      quote:
        "That morning's experience was a baptism of fire. Deserted were the laboratory and academic work of college. I never returned to them...I rejoiced that I had a training in the care of the sick.",
      quote_author: "Lillian Wald, after helping a hemorrhaging new mother",
      image_caption:
        "Backyard playground in nurse's settlement, Henry Street. Library of Congress, ca. 1950.",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1926-1928 (Dunbar Apartments complex)" },
        { key: "Architect", value: "Andrew J. Thomas (designed by)" },
        {
          key: "Architectural style",
          value:
            "U-shaped residential complex designed to maximize air flow and sunlight, part of the landmark Dunbar Apartments",
        },
        {
          key: "Significance",
          value:
            "Apartment 3F was home to Matthew Henson (1866-1955), African American polar explorer who was arguably the first person to reach the North Pole with Robert Peary in 1909. Henson lived here from 1929 until his death in 1955. Designated National Historic Landmark in 1975.",
        },
        {
          key: "Current",
          value: "Part of the Dunbar Apartments residential complex",
        },
      ],
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1905-1908" },
        { key: "Architect", value: "Charles Pratt Huntington" },
        { key: "Architectural Style", value: "Beaux-Arts" },
        {
          key: "Significance",
          value:
            "Founded by Archer M. Huntington in 1904, houses world-renowned collection of Hispanic art and literature, located on Audubon Terrace in Washington Heights, features works by Velázquez, Goya, El Greco, and Sorolla murals",
        },
      ],
      image_caption:
        "Hispanic Society of America building. Wikimedia Commons. 1909.",
      image_link:
        "https://commons.wikimedia.org/wiki/File:Hispanic_Society_of_America_building_in_1909.webp",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1920-1927" },
        {
          key: "Engineer",
          value:
            "Clifford Milburn Holland",
        },
        { key: "Engineering Type", value: "Underwater Vehicular Tunnel" },
        {
          key: "Significance",
          value:
            "World's first mechanically ventilated underwater vehicular tunnel and longest underwater vehicular tunnel at time of completion. Introduced an evolutionary ventilation system which became the standard for all subsequent vehicular tunnels.",
        },
      ],
      image_caption:
        "Holland Tunnel Postcard. Wikimedia Commons. ca. 1927.",
      image_link:
        "https://commons.wikimedia.org/wiki/File:Holland_Tunnel_--_1927_(53753501716).jpg",
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
      borough: "Manhattan",
      bullets: [
        {
          key: "Built",
          value:
            "1941-1943 (keel laid December 1, 1941; launched April 26, 1943; commissioned August 16, 1943)",
        },
        {
          key: "Architect",
          value:
            "Newport News Shipbuilding & Dry Dock Company, Virginia (shipbuilder)",
        },
        {
          key: "Architectural style",
          value:
            "Essex-class aircraft carrier design; 872 ft. overall length, 147.5-foot beam, displacement of 27,100 tonnes",
        },
        {
          key: "Significance",
          value:
            'WWII Pacific Theater veteran, surviving torpedo strike and five kamikaze attacks. Nicknamed "The Fighting I" and "Ghost Ship" by Japanese forces. Served in Cold War, Vietnam War, and as NASA recovery vessel for Mercury and Gemini missions. National Historic Landmark since 1986.',
        },
        {
          key: "Current",
          value:
            "Intrepid Sea, Air & Space Museum at Pier 86, Hudson River (since 1982)",
        },
      ],
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
      borough: "Manhattan",
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
      borough: "Queens",
      image_caption: "Rufus King House. Library of Congress. 1933.",
      image_link:
        "https://www.loc.gov/resource/hhh.ny2046.photos/?sp=1&st=image",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1893" },
        {
          key: "Builder",
          value: "Arthur D. Story shipyard, Essex, Massachusetts",
        },
        { key: "Type", value: "Fredonia-type fishing schooner" },
        {
          key: "Significance",
          value:
            "The sole surviving Georges Bank fishing schooner and the only remaining example of the Fredonia-model fishing schooners that were widely used along the entire Eastern seaboard from Maine to the Gulf Coast.",
        },
      ],
      link: "https://southstreetseaportmuseum.org/about-lettie/",
      image_caption:
        "Schooner Lettie G. Howard, South Street Seaport Museum, New York County, NY. Library of Congress.",
      image_link: "https://www.loc.gov/resource/hhh.ny1621.photos/?sp=4",
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
      borough: "The Bronx",
      bullets: [
        { key: "Built", value: "ca. 1840" },
        { key: "Period", value: "1840-1870" },
        {
          key: "Significance",
          value:
            "Oldest surviving tobacco manufacturing building in the United States, built by the Lorillard family to grind tobacco into snuff using water-powered stone wheels. It represents one of America's first major tobacco manufacturing enterprises.",
        },
        {
          key: "Current",
          value:
            "Lillian and Amy Goldman Stone Mill, event venue within New York Botanical Garden",
        },
      ],
      image_caption:
        "Lorillard Snuff Mill, Botanical Gardens, Bronx Park, Bronx, Bronx County, NY. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/resource/hhh.ny0101.photos/?sp=1",
      link: "https://hdc.org/buildings/lorillard-snuff-mill-at-the-new-york-botanical-garden/",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1895-1897" },
        {
          key: "Architect",
          value:
            "Charles Follen McKim of McKim, Mead & White (assisted by William M. Kendall, Austin W. Lord, and Egerton Swartwout)",
        },
        {
          key: "Architectural style",
          value:
            "Neoclassical/Beaux-Arts style, modeled on Rome's Pantheon and Baths of Caracalla; arranged in Greek cross plan with central octagonal hall and dome",
        },
        {
          key: "Significance",
          value:
            "Centerpiece of Columbia University's Morningside Heights campus, considered a masterwork of American academic architecture. Funded by Seth Low in memory of his father Abiel Abbot Low. Features the largest freestanding granite dome in the United States. NYC landmark (1967) and National Historic Landmark.",
        },
        {
          key: "Current",
          value:
            "Columbia University administrative offices and visitor center (converted from library use in 1934)",
        },
      ],
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1902 (with later expansions)" },
        { key: "Architects", value: "De Lemos & Cordes, Robert D. Kohn" },
        { key: "Architectural Style", value: "Palladian, Art Deco" },
        { key: "Size", value: "2.5 million square ft." },
        {
          key: "Significance",
          value:
            "Flagship store of America's largest department store chain and historic retail landmark, famous for its Thanksgiving Day Parade and holiday windows.",
        },
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
      coordinates: [-73.98222767810792, 40.759444025009714],
    },
    properties: {
      id: 55,
      name: "McGraw-Hill Building",
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1931" },
        { key: "Architect", value: "Raymond Hood" },
        { key: "Architectural Style", value: "Art Deco, International Style" },
        { key: "Height", value: "485 ft. (33 stories)" },
        {
          key: "Significance",
          value:
            "One of the first International Style buildings, marking the transition from Art Deco to modern skyscraper design.",
        },
      ],
      image_caption:
        "McGraw Hill Building. The New York Public Library Digital Collections. 1936.",
      image_link:
        "https://digitalcollections.nypl.org/items/689c3020-a48d-013a-8d98-0242ac110003#/?uuid=4f3d4120-a48e-013a-7a4f-0242ac110002,",
      link: "https://archsb.com/projects/mcgraw-hill-building-archstone-builders/",
      quote: "The most beautiful building in New York City",
      quote_author: "Ayn Rand",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1931-1932" },
        {
          key: "Architect",
          value:
            "James C. Mackenzie Jr.",
        },
        {
          key: "Residents",
          value: "Claude McKay (1941-1946) and other notable Harlem Renaissance figures including Langston Hughes, Richard Wright, and Malcolm X",
        },
        {
          key: "McKay Legacy",
          value: 'Jamaican-American poet known as the "Father of the Harlem Renaissance."',
        },
        {
          key: "Significance",
          value:
            "Served as a crucial cultural institution during segregation, providing housing for prominent African-American writers, artists, and performers who were denied lodging in mainstream New York hotels due to racial discrimination.",
        },
      ],
      image_caption: "Harlem YMCA. Wikimedia Commons. 2014.",
      image_link: "https://en.wikipedia.org/wiki/Harlem_YMCA#/media/File:Harlem_YMCA_180_West_135th_Street_top.jpg",
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
      borough: "Manhattan",
      bullets: [
        {
          key: "Built",
          value: "1905-1909 (tower); 1893-1905 (original east wing base)",
        },
        { key: "Architect", value: "Napoleon LeBrun" },
        {
          key: "Architectural style",
          value: "Gothic Revival, Renaissance Revival",
        },
        { key: "Height", value: "700 ft. (50 stories)" },
        {
          key: "Significance",
          value:
            "World's tallest building from 1909-1913. Features four monumental 26.5-foot diameter clocks on the tower faces. Built as headquarters for Metropolitan Life Insurance Company, then the nation's largest life insurer.",
        },
      ],
      image_caption: "Metropolitan Life Ins. Bldg. Library of Congress. 1912.",
      image_link: "https://commons.wikimedia.org/wiki/File:Metropolitan_Life_Insurance_Bldg.,_N.Y.C._LCCN2002712606.jpg#/media/File:Metropolitan_Life_Insurance_Bldg.,_N.Y.C._LCCN2002712606.jpg",
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
      borough: "Manhattan",
      bullets: [
        { key: "Founded", value: "1870" },
        { key: "Architect", value: "Richard Morris Hunt" },
        { key: "Architectural style", value: "Beaux-Arts" },
        {
          key: "Significance",
          value:
            "One of the world’s largest art museums. Its collection spans 5,000 years of global culture and includes all art mediums, from painting and sculpture to textiles and decorative arts.",
        },
      ],
      link: "https://www.metmuseum.org/about-the-met/history",
      image_caption:
        "Metropolitan Museum of Art. Library of Congress. ca. 1903.",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1902-1906" },
        { key: "Architect", value: "Charles McKim" },
        {
          key: "Architectural Style",
          value: "American Renaissance/Classical Revival",
        },
        {
          key: "Significance",
          value:
            "Originally the private collection of financier J.P. Morgan, it was gifted to New York and opened to the public in 1924. It is home to Morgan's  renowned book collections and historic documents.",
        },
      ],
      image_caption: "J.P. Morgan art gallery. Library of Congress. 1910.",
      image_link: "https://www.loc.gov/item/2014692840/",
      link: "https://www.themorgan.org/",
      quote:
        "Mr. Morgan buys books as some financiers buy a thousand shares of stock",
      quote_author: "The Wall Street Journal, 1911",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1765" },
        {
          key: "Architectural Style",
          value: "Georgian Colonial with Federal period modifications",
        },
        {
          key: "Significance",
          value:
            "Manhattan's oldest surviving house; served as George Washington's Revolutionary War headquarters in 1776 and later became home to socialite Eliza Jumel, who famously married former Vice President Aaron Burr.",
        },
      ],
      link: "https://morrisjumel.org/",
      image_caption:
        "Morris-Jumel Mansion with people on benches. The New York Public Library Digital Collections. 1890.",
      image_link:
        "https://digitalcollections.nypl.org/items/110b3f20-af04-0132-eead-58d385a7bbd0#/?uuid=11c25970-af04-0132-a5fa-58d385a7bbd0",
      quote: "The Crown of Sugar Hill",
      quote_author: "Duke Ellington, who lived in the area",
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
      borough: "Manhattan",
      description:
        "Home to one of the country's largest and most important banks since 1908",
      image_caption:
        "National City Bank, Wall St. Library of Congress. ca. 1909.",
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
      borough: "Manhattan",
      description:
        "Influential black newspaper the New York Amsterdam News was published here 1916-38",
      image_caption:
        "New York Amsterdam News Building, Seventh Avenue. Library of Congress. 1933",
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
      borough: "The Bronx",
      description:
        "One of the world's leading botanical gardens, with the largest herbarium in the U.S. and second largest in the world after the French National Museum of Natural History and home to many plant laboratories",
      image_caption:
        "Bronx Park - Central Dome - Botanical Garden. The New York Public Library Digital Collections. 1938.",
      image_link:
        "https://digitalcollections.nypl.org/items/8456e240-c52f-012f-d9ec-58d385a7bc34#/?uuid=510d47dc-a537-a3d9-e040-e00a18064a99",
      link: "https://www.nybg.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00974498798847, 40.70463700220222],
    },
    properties: {
      id: 64,
      name: "New York Cotton Exchange",
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1854" },
        { key: "NYCE Period", value: "1872 to 1885" },
        { key: "Architect", value: "Ebenezer L. Roberts" },
        { key: "Architectural style", value: "Italian Renaissance" },
        {
          key: "Significance",
          value:
            "First permanent headquarters of the New York Cotton Exchange and site of the first cotton futures exchange in the United States.",
        },
      ],
      image_caption:
        "1 Hanover Square when it was occupied by the New York Cotton Exchange. Wikimedia Commons. 1900",
      image_link:
        "https://en.wikipedia.org/wiki/1_Hanover_Square#/media/File:1_Hanover_Square_006.JPG",
      link: "https://www.onehanoverevents.com/history.html",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98619151351224, 40.743017801087944],
    },
    properties: {
      id: 65,
      name: "New York Life Building",
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1926-1928" },
        { key: "Architect", value: "Cass Gilbert" },
        { key: "Architectural style", value: "Gothic Revival" },
        { key: "Height", value: "615 ft. (40 stories)" },
        {
          key: "Significance",
          value:
            "One of the finest examples of Gothic Revival architecture, distinguished by its iconic golden pyramid crown; exemplifies the pinnacle of 1920s skyscraper design.",
        },
      ],
      image_caption:
        "West 25th Street - Broadway. The New York Public Library Digital Collections. 1952.",
      image_link:
        "https://digitalcollections.nypl.org/items/b6763c10-c5ec-012f-5f14-58d385a7bc34#/?uuid=510d47e2-f28e-a3d9-e040-e00a18064a99",
      link: "https://www.newyorklife.com/newsroom/history-of-51madison-home-office",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1901-1911" },
        { key: "Architects", value: "John Merven Carrère and Thomas Hastings" },
        { key: "Architectural Style", value: "Beaux-Arts" },
        { key: "Significance", value: "Architectural Beaux-Arts masterpiece and one of the world's leading research institutions with over four millions volumes." },
      ],
      image_caption:
        "New York Public Library. Library of Congress. 1908.",
      image_link:
        "https://www.loc.gov/resource/det.4a28067/",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1903" },
        { key: "Architect", value: "George B. Post" },
        { key: "Architectural style", value: "Neoclassical" },
        {
          key: "Significance",
          value:
            "Headquarters of the world's largest stock exchange and iconic symbol of American capitalism.",
        },
      ],
      image_caption:
        "New York Stock Exchange (1903) Trading floor. The New York Public Library Digital Collections. 1903.",
      image_link:
        "https://digitalcollections.nypl.org/items/18ac7210-9daa-0132-f116-58d385a7b928#/?uuid=1966cf50-9daa-0132-e13e-58d385a7b928",
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
      borough: "Manhattan",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1901" },
        { key: "Architect", value: "Whitney Warren" },
        { key: "Architectural Style", value: "Beaux-Arts" },
        {
          key: "Significance",
          value:
            "Architectural masterpiece and home of the America's Cup from 1857-1983 (the longest winning streak in sports history); it also houses the world's most significant collection of yacht models documenting American yachting heritage.",
        },
      ],
      image_caption:
        "New York Yacht Club: Exterior facade. Library of Congress. 1901.",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1832" },
        { key: "Architect", value: "Joseph Brewster (builder/developer)" },
        { key: "Architectural Style", value: "Late Federal/Greek Revival" },
        {
          key: "Significance",
          value:
            " NYC's only fully preserved 19th-century family home; continuously occupied by the Tredwell family for nearly 100 years (1835-1933).",
        },
      ],
      link: "https://merchantshouse.org/",
      image_caption:
        "Doorway - Treadwell House (Old Merchants House). The New York Public Library Digital Collections. 1936.",
      image_link:
        "https://digitalcollections.nypl.org/items/96c36480-998a-013a-a209-0242ac110003#/?uuid=1e14d1a0-9993-013a-51c6-0242ac110003",
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
      borough: "Queens",
      bullets: [
        { key: "Built", value: "1694" },
        { key: "Architectural style", value: "Dutch Colonial" },
        {
          key: "Significance",
          value:
            "Reputed to be the oldest house of worship in New York State, where Quakers have gathered continuously for Sunday services for more than 330 years.",
        },
        {
          key: "Legacy",
          value:
            "The early community produced the Flushing Remonstrance (1657), which laid the groundwork for Bill of Rights religious freedom protections.",
        },
      ],
      link: "https://flushingfriends.org/",
      quote:
        "We desire therefore in this case not to judge least we be judged, neither to condemn least we be condemned, but rather let every man stand and fall to his own Master.",
      quote_author: "Excerpt from the Flushing Remonstrance",
      image_caption:
        "Society of Friends Meetinghouse. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/resource/hhh.ny0888.photos/?sp=11",
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
      borough: "Manhattan",
      description:
        "Edwin Armstrong developed FM radio in this Columbia University building",
      image_caption:
        "Edwin Armstrong's laboratory in 102 Philosophy, Columbia University. Wikimedia Commons. 1930.",
      image_link:
        "https://en.wikipedia.org/wiki/Philosophy_Hall#/media/File:102Philosophy.jpg",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1847 (house), 1888 (clubhouse conversion)" },
        {
          key: "Architect",
          value:
            "Stanford White (McKim, Mead & White)",
        },
        { key: "Architectural Style", value: "Greek Revival" },
        {
          key: "Significance",
          value:
            "Founded by Edwin Booth in 1888, oldest NYC membership club still in original home, National Historic Landmark (1962), repository of American theater history and memorabilia, located at 16 Gramercy Park South",
        },
      ],
      image_caption:
        "The Players Club at No. 17 Gramercy Park. The New York Public Library Digital Collections. 1905–1907.",
      image_link:
        "https://digitalcollections.nypl.org/items/902e86a0-c55c-012f-c4ca-58d385a7bc34#/?uuid=510d47e0-cc21-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1907" },
        { key: "Architect", value: "Henry Janeway Hardenbergh" },
        {
          key: "Architectural Style",
          value: "French Renaissance-inspired château style",
        },
        {
          key: "Significance",
          value: "Represents the pinnacle of American luxury hotel design from the early 20th century",
        },
      ],
      link: "https://www.theplazany.com/",
      image_caption:
        "Plaza Hotel, New York, N.Y. Library of Congress. [Between 1910 and 1920].",
      image_link: "https://www.loc.gov/item/2016815530/",
      quote: "New York's most celebrated symbol of cosmopolitan and turn-of-the-century splendor, inside and out.",
      quote_author: "Ada Louise Huxtable, New York Times, 1971",
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
      borough: "Brooklyn",
      description:
        "Important station on Underground Railroad when Henry Ward Beecher was pastor",
      image_caption:
        "Plymouth Church. The New York Public Library Digital Collections. 1905–1907.",
      image_link:
        "https://digitalcollections.nypl.org/items/e2c37db0-c559-012f-d02f-58d385a7bc34#/?uuid=510d47e1-0ef3-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      description:
        "Columbia University building; site of first splitting of uranium atom in U.S. and other milestones in development of atomic bomb",
      link: "https://quantum.columbia.edu/videos/tour-columbia-physics-design-laboratory",
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
      borough: "Brooklyn",
      description: "Home to Matthew Perry at the time of his opening of Japan",
      image_caption:
        "Quarters A, 1935 (Brooklyn Public Library Digital Collection)",
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
      borough: "Manhattan",
      bullets: [
        {
          key: "Built",
          value: "1914-1916",
        },
        {
          key: "Residents",
          value: "Paul Robeson from 1939-1941 and numerous other prominent African American figures including Duke Ellington and Langston Hughes.",
        },
      {
        key: "Legacy",
        value: "Robeson was a multi-talented individual who used his fame to fight for racial justice.",
      },
      {
        key: "Significance",
        value: "Represents the achievements and community of Black Americans during the mid-20th century.",
      },
      { 
        key: "Current", 
        value: "Residential apartment building nicknamed 'The Triple Nickel'" 
      },
    ],
      image_caption: "555 Edgecombe Avenue. Libarary of Congress.",
      image_link: "https://commons.wikimedia.org/wiki/File:555_Edgecombe_Avenue_entrance.jpg",
      link: "https://www.loc.gov/pictures/resource/hhh.ny0415.photos.118479p/",
      quote:
        "To be free . . . to walk the good American earth as equal citizens, to live without fear, to enjoy the fruits of our toil, to give our children every opportunity in life–that dream which we have held so long in our hearts is today the destiny that we hold in our hands.",
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
      borough: "Brooklyn",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1930-1939" },
        { key: "Commissioner", value: "John D. Rockefeller" },
        { key: "Architect", value: "Raymond Hood" },
        { key: "Architectural Style", value: "Art Deco" },
        { key: "Height", value: "850 ft. (70 stories)" },
        {
          key: "Significance",
          value:
            "Iconic commercial complex built during the Great Depression serving as a symbol of American optimism and resilience.",
        },
      ],
      image_caption:
        "Rockefeller Center. Wikimedia Commons. 1933.",
      image_link:
        "https://en.wikipedia.org/wiki/Rockefeller_Center#/media/File:Rockefeller_Center,_December_1933.jpg",
      link: "https://www.rockefellercenter.com/",
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
      borough: "Staten Island",
      bullets: [
        { key: "Founded", value: "1801" },
        {
          key: "Founder",
          value:
            "Robert Richard Randall, wealthy merchant who left his fortune to establish the institution",
        },
        { key: "Architects", value: "	Martin E. Thompson, Minard Lafever" },
        { key: "Architectural style", value: "Greek Revival, Late Victorian" },
        {
          key: "Significance",
          value:
            "A pioneering philanthropic institution that served thousands of retired merchant sailors and established America's first model for occupational retirement care.",
        },
      ],
      link: "https://snug-harbor.org/",
      image_caption:
        "Sailors' Snug Harbor, Richmond Terrace, Staten Island, New Brighton, Richmond County, NY. Library of Congress. 1933",
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
      borough: "Brooklyn",
      description: "Site of first figural stained-glass windows in U.S.",
      link: "https://www.stannholytrinity.org/",
      image_caption:
        "St. Ann's Church, Brooklyn. The New York Public Library Digital Collections. 1850 - 1930.",
      image_link:
        "https://digitalcollections.nypl.org/items/74ab40c0-c555-012f-748d-58d385a7bc34#/?uuid=510d47e1-e2a4-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        {
          key: "Founded",
          value: "1749 as St. George's Chapel of Trinity Church",
        },
        { key: "Built", value: "1846–1856 (current building)" },
        { key: "Architects", value: "Charles Otto Blesch and Leopold Eidlitz" },
        { key: "Architectural style", value: "Romanesque Revival" },
        {
          key: "Significance",
          value:
            "Among the earliest Romanesque Revival churches in the United States, known for its long-standing commitment to serving the urban poor through outreach and community programs.",
        },
      ],
      link: "https://www.calvarystgeorges.org/full-parish-history",
      image_caption:
        "St. George's Church. The New York Public Library. 1911–1921",
      image_link:
        "https://digitalcollections.nypl.org/items/6597dae0-c55c-012f-4d68-58d385a7bc34#/?uuid=510d47e2-8bb9-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1858-1878 (dedicated 1879)" },
        { key: "Architect", value: "James Renwick Jr." },
        { key: "Architectural style", value: "Gothic Revival" },
        { key: "Purpose", value: "Largest Roman Catholic cathedral in the United States, built to replace St. Patrick's Old Cathedral to accommodate the city's growing Catholic population. It represents a major symbol of Catholic faith in the city." },
      ],
      image_caption:
        "Cathedral prior to the installation of spires. The New York Public Library. 1858 - 1925",
      image_link: "https://digitalcollections.nypl.org/items/df3444c0-c557-012f-f6ba-58d385a7bc34#/?uuid=510d47e0-1f38-a3d9-e040-e00a18064a99",
      link: "https://saintpatrickscathedral.org/",
      quote: "America's Parish Church",
      quote_author: "Nickname reflecting its national significance",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1766" },
        { key: "Architect", value: "Thomas McBean" },
        { key: "Architectural style", value: "Georgian" },
        {
          key: "Significance",
          value: "Manhattan's oldest surviving church building",
        },
        {
          key: "Notable",
          value: "Served as refuge for Ground Zero recovery workers after 9/11",
        },
      ],
      image_caption:
        "St. Paul's Chapel (front). The New York Public Library Digital Collections. 1905",
      image_link:
        "https://digitalcollections.nypl.org/items/643e3df0-8ad6-0132-17a4-58d385a7bbd0#/?uuid=650b0e30-8ad6-0132-8653-58d385a7bbd0",
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
      borough: "Manhattan",
      bullets: [
        {
          key: "Founded",
          value: "1916 in Brooklyn, moved to Manhattan location 1930",
        },
        { key: "Founder", value: "Margaret Sanger" },
        { key: "Operated", value: "1930-1973" },
        {
          key: "Significance",
          value:
            "Pioneering center for reproductive rights and family planning research that reshaped attitudes toward reproductive health and sexuality.",
        },
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
      borough: "Brooklyn",
      bullets: [
        {
          key: "Built",
          value:
            "Original building: 1904 (McKim, Mead & White); Main building: 1980; Expansion: 1991",
        },
        {
          key: "Architect",
          value:
            "McKim, Mead & White (1904 original building), J. Max Bond Jr. of Bond Ryder Associates (1980 main building), John James of Bond Ryder James Architects (1991 expansion)",
        },
        {
          key: "Architectural style",
          value:
            "Carnegie library design (1904 original), Modern/Contemporary (1980 main building)",
        },
        {
          key: "Significance",
          value:
            "World-leading research institution for African American, African Diaspora, and African experiences. Founded in 1925 with collection from scholar Arturo Alfonso Schomburg. Houses over 11 million items documenting Black history and culture.",
        },
        {
          key: "Current",
          value:
            "Schomburg Center for Research in Black Culture (New York Public Library research division)",
        },
      ],
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1851-1852" },
        { key: "Architect", value: "Charles Partridge (developer/builder)" },
        {
          key: "Architectural style",
          value:
            "Anglo-Italianate style, four-story brownstone with rusticated first floor and segmental-arch windows",
        },
        {
          key: "Significance",
          value:
            'Home of General Winfield Scott (1853-1855), Civil War commander and 1852 Whig presidential candidate known as "Old Fuss and Feathers." Designated National Historic Landmark in 1973.',
        },
        {
          key: "Current",
          value:
            "Casa Italiana Zerilli-Marimò, home to NYU Department of Italian Studies",
        },
      ],
      image_caption:
        "Manhattan: 12th Street (West). The New York Public Library Digital Collections. 1870 - 1980.",
      image_link:
        "https://digitalcollections.nypl.org/items/d7f72c70-c53f-012f-db8d-58d385a7bc34#/?uuid=510d47dc-f796-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1877-1880" },
        { key: "Architect", value: "Charles W. Clinton" },
        { key: "Architectural Style", value: "Gothic Revival" },
        {
          key: "Significance",
          value:
            "Manhattan's first true armory, home to the elite 'Silk Stocking' Regiment of prominent Gilded Age families; features exceptional interiors by Louis Comfort Tiffany and leading artists of the American Aesthetic Movement.",
        },
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1897-1899" },
        { key: "Architect", value: "C.P.H. Gilbert" },
        { key: "Architectural Style", value: "French Renaissance" },
        {
          key: "Significance",
          value: "Surviving Gilded Age Fifth Avenue mansion that housed prominent figures including oil magnate Harry F. Sinclair and descendants of Peter Stuyvesant",
        },
        { key: "Current", value: "Ukrainian Institute of America" },
      ],
      image_caption:
        "Harry F. Sinclair House, 2 East Seventy-ninth Street, New York County, NY. Library of Congress. 1930s",
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
      borough: "Manhattan",
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
      borough: "Manhattan",
      bullets: [
        {
          key: "Original Purpose",
          value:
            "Manufacturing district for textiles and light industrial goods (1800s)",
        },
        {
          key: "Cast-Iron Benefits",
          value:
            "Cheaper than stone, fire-resistant, allowed large windows and open floor plans",
        },
        {
          key: "Architectural Styles",
          value: "Italianate and Second Empire cast-iron facades",
        },
        {
          key: "Significance",
          value:
            "World's largest collection of cast-iron architecture with 250+ buildings",
        },
      ],
      image_caption:
        "E. V. Haughwout & Company Building, 488-492 Broadway, New York County, NY. Library of Congress. 1930s",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1845-1846" },
        { key: "Architects", value: "Joseph Trench and John B. Snook" },
        { key: "Architectural style", value: "Italian Renaissance" },
        { key: "Nickname", value: "Marble Palace" },
        {
          key: "Owner",
          value:
            "Alexander Turney Stewart, Irish immigrant and business legend",
        },
        {
          key: "Significance",
          value:
            "America's first department store which transformed the retail landscape and became the model for modern department stores.",
        },
      ],
      image_caption:
        "Grace Church and Stewart's Store. The New York Public Library Digital Collections. 1858 - 1925.",
      image_link:
        "https://digitalcollections.nypl.org/items/d3487520-c557-012f-0c37-58d385a7bc34#/?uuid=510d47e0-1eee-a3d9-e040-e00a18064a99",
      quote: "The Sun... It Shines for All.",
      quote_author:
        "Inscription on a non-working clock from the building's time as The Sun newspaper headquarters",
      link: "https://www.nyc.gov/site/dcas/business/dcasmanagedbuildings/sun-building.page",
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
      borough: "Manhattan",
      bullets: [
        { key: "Date", value: "June 28, 1969" },
        {
          key: "Event",
          value:
            "Police raid turned into six days of protests and demonstrations",
        },
        {
          key: "Significance",
          value: "Sparked the modern LGBTQ+ rights movement",
        },
        {
          key: "Notable",
          value:
            "Led to the first Gay Pride marches and formation of LGBTQ+ advocacy groups",
        },
      ],
      description:
        "This Greenwich Village bar became a symbol of resistance when patrons and community members fought back against routine police harassment, transforming a local confrontation into a watershed moment for civil rights in America.",
      quote:
        "Gay power! Isn't that great! It's about time we did something to assert ourselves.",
      quote_author: "Allen Ginsberg, poet and Greenwich Village resident",
      link: "https://www.nps.gov/ston/index.htm",
      image_caption:
        "Stonewall Inn. The New York Public Library Digital Collections. 1969",
      image_link:
        "https://digitalcollections.nypl.org/items/29ebdc90-c5b1-012f-08e3-58d385a7bc34#/?uuid=510d47e3-57e3-a3d9-e040-e00a18064a99",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.97332826941016, 40.75749169778962],
    },
    properties: {
      id: 95,
      name: "St. Bartholomew's Church and Community House",
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1918-1930" },
        {
          key: "Architect",
          value:
            "Bertram Goodhue (with later additions by Mayers, Murray & Phillip)",
        },
        {
          key: "Architectural Style",
          value: "Byzantine Revival with Romanesque influences",
        },
        {
          key: "Significance",
          value:
            "Represents innovative early 20th-century ecclesiastical design that successfully departed from prevailing Gothic Revival traditions; known for its distinctive dome and beautiful combination of Romanesque and Byzantine styles.",
        },
      ],
      image_caption:
        "St. Bartholomew's on Park Avenue. The New York Public Library Digital Collections. 1931",
      image_link:
        "https://digitalcollections.nypl.org/items/2186af80-980e-013a-2ba1-0242ac110003#/?uuid=7ace51b0-9810-013a-e254-0242ac110003",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1899-1907" },
        { key: "Architect", value: "John Rochester Thomas" },
        { key: "Architectural style", value: "Beaux-Arts" },
        {
          key: "Significance",
          value:
            "One of the finest examples of Beaux-Arts architecture in the US; embodies the City Beautiful movement that transformed American civic architecture at the turn of the 20th century.",
        },
        {
          key: "Current",
          value:
            "Surrogate's Court (probate and estate matters), NYC Municipal Archives, and Department of Records and Information Services",
        },
      ],
      link: "https://ww2.nycourts.gov/courts/1jd/surrogates/historical.shtml",
      image_caption:
        "31 Chambers Street - Centre Street. The New York Public Library Digital Collections. 1887 - 1964.",
      image_link:
        "https://digitalcollections.nypl.org/items/2e6caaa0-c5ed-012f-1470-58d385a7bc34#/?uuid=510d47e2-eef9-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1863 (active 1863-1935)" },
        { key: "Residents", value: "7,000 people from 20+ nations" },
        {
          key: "Significance",
          value:
            "Located on Orchard Street, the epicenter of immigrant life in NYC. Today, it serves as a museum dedicated to preserving and interpreting the history of immigration in America.",
        },
      ],
      quote:
        "I walked toward the Lower East Side - where you walked 50 years ago, little girl - from Russia, eating the first poisonous tomatoes of America - frightened on the dock - then struggling in the crowds of Orchard Street toward what?",
      quote_author: "Allen Ginsberg, 'Kaddish'",
      link: "https://www.tenement.org/",
      image_caption:
        "Orchard Street Scene. The New York Public Library Digital Collections. 1902–1914.",
      image_link:
        "https://digitalcollections.nypl.org/items/17d33910-c6e9-012f-7616-58d385a7bc34#/?uuid=510d47e3-4c92-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1874-1877" },
        {
          key: "Architect",
          value:
            "Frederick Clarke Withers",
        },
        {
          key: "Architectural style",
          value:
            "American High Victorian Gothic",
        },
        {
          key: "Significance",
          value:
            "Originally a courthouse and known for America's first night court. It was once voted fifth most beautiful building in America by architects in the 1880s.",
        },
        {
          key: "Current",
          value:
            "Jefferson Market Library (New York Public Library branch since 1967)",
        },
      ],
      image_caption:
        "Third Judicial District Courthouse. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/item/ny0431/",
      link: "https://www.nypl.org/locations/jefferson-market",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1903-1905" },
        { key: "Period", value: "Tiffany’s flagship store until 1940" },
        { key: "Architect", value: "Stanford White (McKim, Mead & White)", },
        { key: "Architectural Style", value: "Renaissance Revival" },
        {
          key: "Significance",
          value: "One of White’s most celebrated designs which helped establish Fifth Avenue as America's premier luxury shopping district.",
        },
      ],
      image_caption:
        "Tiffany Building, New York, N.Y., Library of Congress, 1900–1906.",
      image_link: "https://www.loc.gov/item/2016805833/",
      link: "https://www.tiffany.com/world-of-tiffany/",
      quote: "If I could find a real-life place that made me feel like Tiffany's, then I'd buy some furniture and give the cat a name.",
      quote_author: "Breakfast at Tiffany's, Truman Capote",
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
      borough: "Manhattan",
      bullets: [
        {
          key: "Built",
          value:
            "1884, altered extensively 1885",
        },
        {
          key: "Resident",
          value:
            "Samuel J. Tilden (1860-1886), Governor of New York and 1876 presidential candidate who lost to Rutherford B. Hayes",
        },
        {
          key: "Architect",
          value:
            "Calvert Vaux",
        },
        {
          key: "Architectural style",
          value: "Gothic Revival (original), Italianate Victorian style (altered)",
        },
        {
          key: "Significance",
          value:
            "Represents a crucial figure in American democracy while also embodying the architectural and social history of New York's elite.",
        },
        {
          key: "Current",
          value: "National Arts Club headquarters (since 1906)",
        },
      ],
      image_caption: "Samuel J. Tilden Residence. Wikimedia Commons. 1872",
      image_link:
        "https://en.wikipedia.org/wiki/Samuel_J._Tilden_House#/media/File:C.Vaux_-_Samuel_J.Tilden_residence_-_NY_-_Albert_Levy.jpg",
      link: "https://www.nacnyc.org/default.aspx?p=.NETEventView&ID=3865409&qfilter=&title=&type=0&ssid=0&chgs=",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1919-1921" },
        { key: "Architect", value: "McKim, Mead & White" },
        { key: "Architectural Style", value: "Neo-Federal" },
        {
          key: "Significance",
          value: 'Built for the League for Political Education by suffragists as a venue for free speech and civic discourse. Historic performance space with exceptional acoustics that has hosted over a century of landmark cultural and political events.',
        },
      ],
      link: "https://www.thetownhall.org/",
      image_caption:
        "Exterior view of The Town Hall. The New York Public Library Digital Collections, 1840–2020.",
      image_link:
        "https://digitalcollections.nypl.org/items/59a524e0-3849-0131-5911-58d385a7bbd0#/?uuid=a7a79de0-3849-0131-e876-58d385a7bbd0",
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
      borough: "Manhattan",
      bullets: [
        { key: "Date", value: "March 25, 1911" },
        {
          key: "Event",
          value:
            "Site of factory fire that killed 146 workers (mostly young, immigrant women)",
        },
        {
          key: "Significance",
          value: "Led to landmark workplace safety laws and labor reforms",
        },
      ],
      quote:
        "There was a stricken conscience of public guilt and we all felt that we had been wrong, that something was wrong with that building which we had accepted or the tragedy never would have happened. Moved by this sense of stricken guilt, we banded ourselves together to find a way by law to prevent this kind of disaster.",
      quote_author: "Frances Perkins, Secretary of Labor",
      image_caption:
        "Trade Parade in Memory of Fire Victims, Library of Congress, April or May 1911",
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
      borough: "Manhattan",
      bullets: [
        { key: "Founded", value: "1697" },
        { key: "Built", value: "1846 (current building)" },
        { key: "Architect", value: "Richard Upjohn" },
        { key: "Architectural style", value: "Neo-Gothic" },
        {
          key: "Significance",
          value:
            "One of the earliest and finest examples of Neo-Gothic architecture in the U.S. Serves as the resting place of Alexander Hamilton and other notable figures.",
        },
      ],
      image_caption:
        "Trinity Church from Wall St. The New York Public Library Digital Collections. ca. 1895",
      image_link: "https://www.loc.gov/resource/stereo.1s07224/",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1861-1881" },
        {
          key: "Architect",
          value: "John Kellum (1861-1871), Leopold Eidlitz (1876-1881)",
        },
        {
          key: "Architectural style",
          value:
            "American Victorian, a neo-classical style popular in the U.S. during the 19th century",
        },
        {
          key: "Significance",
          value:
            "One of the city's grandest civic monuments and legacy of legendary Tammany Hall boss William M. Tweed.",
        },
        { key: "Current", value: "Department of Education" },
      ],
      image_caption: "New York County Courthouse. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/item/ny0926/",
      link: "https://www.nyc.gov/site/dcas/business/dcasmanagedbuildings/tweed-courthouse.page",
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
      borough: "Manhattan",
      bullets: [
        { key: "Established", value: "1833 (opened 1839)" },
        { key: "Designer", value: "Frederick Law Olmsted and Calvert Vaux" },
        {
          key: "Significance",
          value:
            "Site of America's first Labor Day parade in 1882, establishing its significance in labor history. Redesigned as an open forum for public gatherings, political rallies, and civic engagement.",
        },
      ],
      image_caption: "Union Square Looking North, Library of Congress, 1919",
      image_link: "https://www.loc.gov/item/2021644846/",
      link: "https://www.nps.gov/places/union-square.htm",
      quote: "This is Labor Day in earnest, Uncle Dick.",
      quote_author:
        "Robert Price to the General Worthy Foreman of the Knights of Labor",
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
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1893" },
        {
          key: "Architect",
          value: "Robert H. Robertson (assisted by Rowe & Baker)",
        },
        { key: "Architectural style", value: "Renaissance Revival" },
        {
          key: "Patron",
          value: "John Stewart Kennedy, wealthy banker and philanthropist",
        },
        {
          key: "Purpose",
          value:
            "House the Charity Organization Society and multiple charitable organizations",
        },
        {
          key: "Significance",
          value:
            "Pioneer headquarters for nonprofit organizations providing social services",
        },
      ],
      image_caption:
        "The New building for the United Charities of New York City, corner Twenty-Second Street and Fourth Avenue / drawn by Hughson Hawley .The New York Public Library Digital Collections, 1895",
      image_link: "https://www.loc.gov/item/93509656/",
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
      borough: "The Bronx",
      bullets: [
        { key: "Built", value: "1926-1929" },
        {
          key: "Architect",
          value:
            "Springsteen & Goldhammer (1926-1927), Herman Jessor (1927-1929)",
        },
        { key: "Architectural Style", value: "Tudor Revival" },
        {
          key: "Significance",
          value:
            'Pioneering example of cooperative housing for working-class people, built by the United Workers\' Association (part of the Industrial Workers of the World). Known as "The Coops" or "Allerton Coops," it housed primarily secular Jewish Communist workers from the needle trades. Featured innovative amenities including classrooms, library, and non-eviction policies, representing early 20th-century experiments in socialist cooperative living and workers\' housing.',
        },
      ],
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.0136885728153, 40.70400052117526],
    },
    properties: {
      id: 108,
      name: "U.S. Customhouse",
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1902-1907" },
        { key: "Period", value: "1907-1974" },
        { key: "Architect", value: "Cass Gilbert" },
        { key: "Architectural style", value: "Beaux-Arts" },
        {
          key: "Significance",
          value:
            "Headquarters for Port of New York duty collection operations and one of the finest examples of government architecture in the U.S.",
        },
        { key: "Current", value: "National Museum of the American Indian" },
      ],
      image_caption:
        "U.S. Custom House, New York, N.Y. The New York Public Library Digital Collections. 1908.",
      image_link:
        "https://digitalcollections.nypl.org/items/d46f7870-c55c-012f-dd3c-58d385a7bc34#/?uuid=510d47e0-ccce-a3d9-e040-e00a18064a99",
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
      borough: "Manhattan",
      bullets: [
        {
          key: "Built",
          value:
            "1894-1912 (Stanford White buildings); 1956-1967 (Marcel Breuer additions); 2012 (Robert A.M. Stern North Hall and Library)",
        },
        {
          key: "Architect",
          value:
            "Stanford White of McKim, Mead & White (core campus 1894-1912); Marcel Breuer (1956-1967 additions); Robert A.M. Stern (2012 library)",
        },
        {
          key: "Architectural style",
          value:
            'Beaux-Arts "American Renaissance" style (White buildings), Brutalist concrete (Breuer buildings), Contemporary contextual design (Stern building)',
        },
        {
          key: "Significance",
          value:
            "Originally New York University's University Heights campus (1894-1973). Features the first Hall of Fame in America and houses one of the finest concentrations of Beaux-Arts architecture in the US. Designated National Historic Landmark in 2012. Only community college with NHL status.",
        },
        {
          key: "Current",
          value:
            "Bronx Community College of the City University of New York (since 1973)",
        },
      ],
      image_link:
        "https://digitalcollections.nypl.org/items/609c3240-c5ec-012f-5204-58d385a7bc34#/?uuid=510d47e2-c3e5-a3d9-e040-e00a18064a99",
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
      borough: "The Bronx",
      bullets: [
        { key: "Built", value: "1748-1749" },
        { key: "Builder", value: "Frederick Van Cortlandt" },
        { key: "Architectural Style", value: "Georgian" },
        {
          key: "Significance",
          value:
            "Oldest surviving house in the Bronx, this home served as George Washington's headquarters during the Revolutionary War and represents 140 years of Van Cortlandt family heritage.",
        },
      ],
      image_caption:
        "The Van Cortlandt Mansion, New York. The New York Public Library Digital Collections. 1860 - 1920.",
      image_url:
        "https://digitalcollections.nypl.org/items/607674e0-c617-012f-f6e4-58d385a7bc34#/?uuid=510d47d9-adf4-a3d9-e040-e00a18064a99",
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
      borough: "Staten Island",
      bullets: [
        { key: "Built", value: "ca. 1695" },
        {
          key: "Architectural Style",
          value:
            "Dutch Colonial vernacular with steep-pitched roof, stone construction, and simple rectangular form",
        },
        {
          key: "Significance",
          value:
            "Oldest known elementary school building in the United States and one of the most important surviving relics of 17th-century Dutch settlement in New York.",
        },
      ],
      image_caption:
        "Voorlezer's House. The New York Public Library Digital Collections. 1990 - 1999.",
      image_link:
        "https://digitalcollections.nypl.org/items/7253fe10-c5ee-012f-c56a-58d385a7bc34#/?uuid=510d47d9-cc33-a3d9-e040-e00a18064a99",
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
      borough: "Staten Island",
      bullets: [
        { key: "Used", value: "Woodland period until Dutch colonization" },
        { key: "Rediscovered", value: "1858" },
        { key: "Significance", value: "One of the largest and best preserved Lenape burial sites in the New York area, offering insights into their culture and practices." },
      ],
      image_link: "https://commons.wikimedia.org/wiki/File:Vicinity-of-wards-point-site.JPG",
      image_caption: "Vicinity of Wards Point Archeological site. Wikimedia Commons. 2008.",
      link: "https://heritagetrails.tottenvillehistory.com/inside-beach-trail/site-5.html",
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
      borough: "The Bronx",
      bullets: [
        { key: "Founded", value: "1863" },
        { key: "Designer", value: "Olmstead Brothers" },
        { key: "Design", value: "Rural Cemetery Movement, later transitioning to Lawn Cemetery style" },
        { key: "Architects", value: "McKim, Mead & White, John Russell Pope, Cass Gilbert, and others" },
        { key: "Significance", value: "Contains the largest collection of architecturally significant private mausoleums in the country and final resting place of over 300,000 people including numerous notable Americans." },
      ],
      link: "https://www.woodlawn.org/",
      image_caption: "Map of the Woodlawn Cemetery. The New York Public Library Digital Collections. 1870.",
      image_link:
        "https://digitalcollections.nypl.org/items/9a98d280-f948-0130-fd87-58d385a7b928#/?uuid=a6a42f20-f94a-0130-073e-58d385a7bbd0",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.0083556135951, 40.712469825250466],
    },
    properties: {
      id: 114,
      name: "Woolworth Building",
      borough: "Manhattan",
      bullets: [
        { key: "Built", value: "1910 - 1913" },
        { key: "Commissioner", value: "Frank W. Woolworth" },
        { key: "Architect", value: "Cass Gilbert" },
        { key: "Architectural Style", value: "Neo-Gothic" },
        { key: "Height", value: "792 ft. (57 stories)" },
        {
          key: "Significance",
          value:
            "World's tallest building from 1913-1930 and a showcase for modern technology.",
        },
      ],
      image_caption:
        "Woolworth Building. New York City. Library of Congress. 1912.",
      image_link: "https://www.loc.gov/resource/ppmsca.54245/",
      link: "https://www.woolworthbuilding.com/",
      quote: "Cathedral of Commerce",
      quote_author:
        "Dubbed nickname for its neo-Gothic architecture and height",
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
      borough: "Brooklyn",
      bullets: [
        { key: "Built", value: "ca. 1652, with later expansions" },
        {
          key: "Commissioned",
          value: "Wouter van Twiller, director general of New Netherland",
        },
        { key: "Architectural style", value: "Dutch Colonial" },
        {
          key: "Significance",
          value:
            "One of the oldest surviving examples of a Dutch frame house in America; Among the first structures built by settlers on Long Island, where Pieter Claesen Wyckoff and his family lived from around 1652.",
        },
      ],
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
      borough: "Brooklyn",
      bullets: [
        { key: "Built", value: "ca. 1766" },
        {
          key: "Builder",
          value: "Hendrick H. Wyckoff, son of Pieter Claesen Wyckoff",
        },
        { key: "Architectural style", value: "Dutch Colonial" },
        {
          key: "Significance",
          value:
            "The best preserved Dutch Colonial architecture in Brooklyn; housed Hessian soldiers during the Revolutionary War who etched their names on windowpanes that remain preserved today.",
        },
      ],
      image_caption: "Wyckoff-Bennett House. Library of Congress. 1933.",
      image_link: "https://www.loc.gov/item/ny0256/",
      link: "https://vimeo.com/51563990",
      quote:
        "I often wonder about the future of our house...and pray that those after us will will love it as we do and respect it for its own personality.",
      quote_author: "Gertrude Ryder Bennet (1900 - 1982), former resident",
    },
  },
];

export default landmarks;
