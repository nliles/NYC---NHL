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
        { key: 'Architecture Style', value: 'Beaux-Arts' },
        { key: 'Historic Event', value: 'Armory Show (1913)' },
        { key: 'Notable', value: 'First NYC armory not modeled on medieval fortress, introduced America to modern art' }
      ],
      link: "https://sixtyninth.net/",
      image_caption: '"69th Regiment, New York National Guard, marching past armory entrance, New York City." Photograph. Library of Congress, 1916.'
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
        { key: 'Significance', value: "Nation's largest and earliest African American cemetery"},
        { key: 'Impact', value: "Honors thousands of enslaved Africans who built early NYC"},
      ],
      link: "https://www.nps.gov/afbg/index.htm",
      quote:
        "For all those who were lost, for all those who were stolen, for all those who were left behind, for all those who were not forgotten.",
      quote_author: "Memorial inscription",
      image_caption:
        "Map showing the location of the burial ground outside the northern boundary of the city",
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
      description:
        "Lightship, several miles offshore, that marked Ambrose Channel into New York Harbor, now at South Street Seaport Museum.",
      link: "https://museumships.us/coast-guard/ambrose",
      image_caption: "United States Lightship WLV-613, USCG photograph"
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
      image_caption: '"New York Curb Market Bldg." Underhill, Irving, -1960, photographer. Photograph. Library of Congress, 1921.',
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
      image_description: "James Grant Wilson, ed., The Presidents of the United States, 1914",
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
        { key: 'Resident', value: ' Alice Austen (1866-1952), pioneering photographer'},
        { key: 'Significance', value: 'Captured over 7,000 images of Victorian life'},
        { key: 'Impact', value: 'Preserving pioneering photography and LGBTQ+ history'},
      ],
      description: "Alice lived here for 30 years with her partner Gertrude Tate. Today, the house serves as a museum dedicated to her photographic legacy.",
      link: "https://aliceausten.org/",
      image_caption:
        "Clear Comfort, the Austen House, with the photographer's grandfather. Photo by Alice Austen., Digital Collections, The New York Public Library",
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
      link: "https://www.bartowpellmansionmuseum.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99480151671527, 40.727812827347826],
    },
    properties: {
      id: 10,
      name: "Bayard-Condict Building",
      bullets: [
        { key: 'Built', value: '1899' },
        { key: 'Architect', value: 'Louis H. Sullivan with Lyndon P. Smith' },
        { key: 'Architecture Style', value: 'Chicago School' },
        { key: 'Significance', value: 'Sullivan\'s only NYC work - the acclaimed "father of skyscrapers"' },
        { key: 'Notable', value: 'New York\'s first truly modern skyscraper' }
      ],
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
      description:
        "Bell Labs work here included experimental phonograph record, vacuum tubes, talking movies (1923), black and white and color TV, radar, and early commercial remote broadcasts. Today home to the Westbeth Artists Community (listed separately on the National Register of Historic Places).",
      image_caption: "The Western Electric complex, now called Westbeth, seen from Washington Street, with train on High Line in 1936, unknown author",
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
      description:
        "Completed in 1883, the Brooklyn Bridge was the first steel-wire suspension bridge connecting Manhattan and Brooklyn. Designed by John Augustus Roebling and completed under his son Washington and daughter-in-law Emily Warren Roebling after John's death, it became the world's longest suspension bridge. It remains a National Historic Landmark and iconic New York City symbol.",
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
        { key: 'Architecture Style', value: 'Neo-Italian Renaissance' },
        { key: 'Opened', value: 'May 5, 1891 (Tchaikovsky conducted opening night)' },
        { key: 'Benefactor', value: 'Andrew Carnegie, steel industrialist ($2 million investment)' },
        { key: 'Notable', value: 'One of the world\'s most prestigious music venues, saved from demolition in 1960s by Isaac Stern' }
      ],
      link: "https://www.carnegiehall.org/",
      image_caption: "Carnegie Hall, early 1900s",
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
        { key: 'Architecture Style', value: 'Georgian Revival' },
        { key: 'Owner', value: 'Andrew Carnegie, steel industrialist and philanthropist' },
        { key: 'Current Use', value: 'Cooper Hewitt, Smithsonian Design Museum' },
        { key: 'Notable', value: 'Largest private residence ever built in NYC, now prominent design museum with 215,000+ objects' }
      ],
      link: "https://www.cooperhewitt.org/about-the-carnegie-mansion-2/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.96563821905383, 40.78528724053565],
    },
    properties: {
      id: 18,
      name: "Central Park",
      bullets: [
        { key: 'Created', value: '1857 design competition, construction 1858-1873' },
        { key: 'Designers', value: 'Frederick Law Olmsted and Calvert Vaux' },
        { key: 'Design Plan', value: 'Greensward Plan' },
        { key: 'Size', value: '843 acres' },
        { key: 'Purpose', value: 'Provide all social classes access to nature amid rapid urbanization' },
        { key: 'Notable', value: 'First major landscaped public park in America' }
      ],
      link: "https://www.centralparknyc.org/",
      image_caption: "Stereograph, 1870",
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
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.97535703577218, 40.75521272097183],
    },
    properties: {
      id: 21,
      name: "Chrysler Building",
      bullets: [
        { key: 'Built', value: '1928-1930' },
        { key: 'Architect', value: 'William Van Alen' },
        { key: 'Architecture Style', value: 'Art Deco' },
        { key: 'Commissioner', value: 'Walter P. Chrysler, automotive magnate' },
        { key: 'Height', value: '1,046 feet (77 floors)' },
        { key: 'Famous For', value: 'Secretly-built spire revealed to win "tallest building" competition' },
        { key: 'Notable', value: 'Epitome of Art Deco architecture, world\'s tallest building for 11 months (1930-1931)' }
      ],
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99559223497673, 40.73519475201767],
    },
    properties: {
      id: 22,
      name: "Church of the Ascension",
      bullets: [
        { key: 'Founded', value: '1827' },
        { key: 'Built', value: '1841' },
        { key: 'Architect', value: 'Richard Upjohn' },
        { key: 'Architecture Style', value: 'Gothic Revival' },
        { key: 'Interior Features', value: 'John La Farge\'s altar mural "The Ascension" and Louis Saint-Gaudens\' marble altar' },
        { key: 'Notable', value: 'One of New York\'s most important 19th-century religious buildings' }
      ],
      link: "https://ascensionnyc.org/",
      image_caption: "Stereograph from the late 1800s",
      quote: "The Church of the Open Door.",
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
      description:
        "Only surviving pre-Revolutionary War manor house in New York City; site of unsuccessful peace conference in 1776",
      link: "https://conferencehouse.org/",
      image_caption: "Conference House postcard, 1900 (NYPL Digital Collection)",
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
      image_caption: "Will Marion Cook House, (Library of Congress)",
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
      description:
        "Pioneering adult education center; site of famous anti-slavery speech by Abraham Lincoln",
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
        { key: 'Architect', value: 'Raymond Hood' },
        { key: 'Architecture Style', value: 'Art Deco' },
        { key: 'Significance', value: 'First modern free-standing skyscraper' },
        { key: 'Notable', value: 'Pioneering example of modernist skyscraper design' }
      ],
      image_caption:
        "Daily News Building, 42nd Street between 2nd and 3rd Avenues, 1935",
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
        { key: 'Architecture Style', value: 'German Renaissance' },
        { key: 'Significance', value: 'First luxury apartment building in New York City' },
        { key: 'Notable', value: 'John Lennon\'s former home, setting for \'Rosemary\'s Baby\', remains one of NYC\'s most prestigious addresses' }
      ]
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
        { key: 'Built', value: 'c. 1784-1785' },
        { key: 'Builder', value: 'William Dyckman' },
        { key: 'Architecture Style', value: 'Dutch Colonial' },
        { key: 'Original Site', value: '250+ acre farm in northern Manhattan' },
        { key: 'Materials', value: 'Fieldstone, brick, and white clapboard with gambrel roof' },
        { key: 'Significance', value: 'Built to replace family home destroyed in Revolutionary War' },
        { key: 'Notable', value: 'Only remaining farmhouse in Manhattan, museum since 1916' }
      ],
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
      description:
        "World's tallest building from 1931 to 1972 and internationally recognized symbol of New York City",
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
      description:
        "One of the earliest skyscrapers in Manhattan; profoundly influenced later skyscraper design",
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
      description: "Distinctive triangular building at Madison Square.",
      image_caption: "The Flatiron Building ca. 1902",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.95533993600401, 40.762716327570274],
    },
    properties: {
      id: 36,
      name: "Founder's Hall, The Rockefeller University",
      description:
        "Building marked the start of John D. Rockefeller Jr.'s putting the vast family fortune to philanthropic purposes",
      image_caption: "Founder's Hall, ca. 1916, 1930 (Digital Commons @ RU)",
      link: "https://www.rockefeller.edu/about/history/",
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
        { key: 'Established', value: '1935' },
        { key: 'Collector', value: 'Henry Clay Frick (1849-1919), steel and coke industrialist' },
        { key: 'Architecture Style', value: 'Beaux-Arts' },
        { key: 'Collection', value: 'Masterpieces by Vermeer, Rembrandt, and other Old Masters' },
        { key: 'Notable', value: 'Mansion designed specifically to accommodate art collection, displayed with period furniture and decorative arts' }
      ],
      link: "https://www.frick.org/",
      image_caption: "The Frick Collection, 1920",
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
      description:
        "Island in NY Harbor which served various branches of the US Military from 1783 until the late 1990s; now a park",
      link: "https://www.nps.gov/gois/index.htm",
      image_caption: "Castle Williams, Governors Island (Library of Congress)",
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
        { key: 'Built', value: '1846' },
        { key: 'Architect', value: 'James Renwick Jr. (his first major commission at age 23)' },
        { key: 'Architecture Style', value: 'Gothic Revival' },
        { key: 'Significance', value: 'One of NYC\'s finest Gothic Revival structures. Once the most fashionable church in the city.' }
      ],
      link: "https://gracechurchnyc.org/",
      image_caption: '"Grace Church, New York." The New York Public Library Digital Collections, The Miriam and Ira D. Wallach Division of Art, Prints and Photographs: Photography Collection, 1860 - 1920.',
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
        { key: 'Architecture Style', value: 'Beaux-Arts' },
        { key: 'Significance', value: 'Historic rail gateway to New York City' },
        { key: 'Notable', value: 'Largest train station in the world by number of platforms' }
      ],
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
      description:
        "Popular tourist attraction in the 1850s; most famous New Yorkers who died during the second half of the nineteenth century buried here",
      link: "https://www.green-wood.com/",
      image_caption: "Cemetery entrance (NYPL Digital Collection)"
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
      description:
        "Home of Alexander Hamilton: military officer, lawyer, member of the United States Constitutional Convention, American statesman, first United States Secretary of the Treasury, and Founding Father",
      link: "https://www.nps.gov/hagr/index.htm",
      image_caption: "Hamilton Grange at its second location site, 1912 (NYPL Digital Collection)",
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
      description: "The only museum designed by Frank Lloyd Wright",
      link: "https://www.guggenheim.org/",
      image_caption: "Guggenheim Museum interior, 1955 (Library of Congress)",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9652940534302, 40.76041258963953],
    },
    properties: {
      id: 44,
      name: "Henry Street Settlement and Neighborhood Playhouse",
      bullets: [
        { key: 'Founded', value: '1893'},
        { key: 'Founder', value: 'Lillian Wald, nurse'},
        { key: 'Mission', value: 'Serve Lower East Side immigrants'},
        { key: 'Innovation', value: 'Transformed social services with community-based healthcare and education'},
        { key: 'Current', value: 'Still operating, serving 50,000 New Yorkers annually'},
        { key: 'Notable', value: 'Pioneering model for community-based social services'},
      ],
      quote: "That morning's experience was a baptism of fire. Deserted were the laboratory and academic work of college. I never returned to them. I rejoiced that I had a training in the care of the sick.",
      quote_author: "Lillian Wald, after helping a hemorrhaging new mother whose doctor had abandoned her because she could not pay, 1893",
      image_caption: "Backyard playground in nurse's settlement, Henry Street. New York, [Printed Ca. 1950] [Photograph] Retrieved from the Library of Congress",
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
      description: "Museum of Iberian Art",
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
      description:
        "Tunnel underneath the Hudson River, connecting Manhattan and New Jersey; civil engineering landmark; one of the earliest ventilated tunnels",
      image_caption: "Holland Tunnel vehicular traffic, 1927",
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
      description:
        "Home of Rufus King, a signer of Declaration of Independence and early U.S. Senator from New York",
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
      description:
        "Last remaining Fredonia-type schooner (once the standard for American fishing boats) at the South Street Seaport",
      link: "https://southstreetseaportmuseum.org/about-lettie/",
      image_caption: "Lettie G. Howard (Library of Congress)"
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
        "Stereograph of the Low Memorial Library, 1904 (Library of Congress)",
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
      quote: "If you haven't seen Macy's, you haven't seen New York.",
      quote_author: "Macy's advertisement, 1960s",
      description: "Largest department store in world for many years",
      image_caption:
        "Macy's during the week of Christmas, 1942 (Library of Congress)",
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
      description:
        "Early Art Deco building; first U.S. building in International Style",
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
      coordinates: [-73.97676690314741, 40.753521628315966],
    },
    properties: {
      id: 57,
      name: "Metropolitan Life Insurance Company Tower",
      description:
        "Tallest building in the world 1909-13; still part of the skyline a century later",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.963201087946421, 40.77967623459204],
    },
    properties: {
      id: 58,
      name: "Metropolitan Museum of Art",
      bullets: [
        { key: 'Founded', value: '1870' },
        { key: 'Architect', value: 'Richard Morris Hunt (1902)' },
        { key: 'Architecture Style', value: 'Beaux-Arts' },
        { key: 'Notable', value: 'One of the world\'s premier encyclopedic art museums, housing European masterpieces and world\'s largest Egyptian collection outside Cairo' }
      ],
      link: "https://www.metmuseum.org/about-the-met/history",
      image_caption: "The Met, 1903 (Library of Congress)",
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
      description:
        "Office, Library, and now Museum of J. P. Morgan; the Panic of 1907 ended in the Library",
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
      description: "Oldest residential building in Manhattan",
      link: "https://morrisjumel.org/",
      image_caption: "The Morris-Jumel Mansion ca. 1890",
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
      image_caption: "Second building from left (Library of Congress)",
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
      image_caption: "The New York Cotton Exchange in 1885",
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
      description: "Last significant Cass Gilbert skyscraper in Manhattan",
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
      description:
        "One of the largest and most important libraries in the U.S.; listing is for main branch building.",
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
      image_caption: "New York Stock Exchange Trading floor, 1903",
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
      description:
        "Oldest yachting club in U.S.; longtime home of the America's Cup",
      link: "https://nyyc.org/",
      image_caption: "The New York Yacht Club ca. 1900 (Library of Congress)",
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
      description: "Nineteenth-century family home; preserved inside and out",
      link: "https://merchantshouse.org/",
      image_caption: "The Merchant's House ca. 1936",
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
        { key: 'Architecture Style', value: 'Dutch Colonial, embodying Quaker principles' },
        { key: 'Historic Document', value: 'Community produced Flushing Remonstrance (1657)' },
        { key: 'Significance', value: 'Reputed to be oldest house of worship in New York State' },
        { key: 'Legacy', value: 'Helped lay groundwork for Bill of Rights religious freedom protection' },
        { key: 'Notable', value: 'Quaker community still gathers here for Sunday services after 330+ years' }
      ],
      link: "https://nylandmarks.org/celebrate-50-at-50/flushing-friends-meeting-house/",
      quote:
        "We desire therefore in this case not to judge least we be judged, neither to condemn least we be condemned, but rather let every man stand and fall to his own Master.",
      quote_author: "Excerpt from the Flushing Remonstrance",
      image_caption: "The Flushing Quaker Meetinghouse (Library of Congress)",
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
      image_caption: "Edwin Armstrong's laboratory in 102 Philosophy, Columbia University,"
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
      description:
        "Extensive collection of art and theater memorabilia; interior redone by Stanford White",
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
      description:
        "French Renaissance-style building; outstanding example of American hotel architecture; symbol of elegance; visible from much of lower Central Park; setting for Kay Thompson's popular Eloise series of children's books",
      link: "https://www.theplazany.com/",
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
      image_caption: "Plymouth Church, 1904 (NYPL Digital Collection)",
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
      description: "Successful urban planning project of 20th-century America; changed Midtown Manhattan; originating site of popular NBC television programs Today and Saturday Night Live",
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
        { key: 'Purpose', value: 'Haven for "aged, decrepit, and worn-out sailors"' },
        { key: 'Architecture Style', value: 'Greek Revival' },
        { key: 'Historic Significance', value: 'NYC\'s first designated landmark structures (1960s)' },
        { key: 'Notable', value: 'Once America\'s richest charitable institution with 50 buildings and 900 residents' }
      ],
      link: "https://snug-harbor.org/",
      image_caption: "Historic American Buildings Survey, Creator. Sailors' Snug Harbor, Richmond Terrace, Staten Island, New Brighton, Richmond County, NY. 1933."
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
      image_caption: "Stereograph of St Ann's Church, early 1900s (NYPL Digital Collection)",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.98488197879576, 40.73574443715123],
    },
    properties: {
      id: 83,
      name: "St. George's Episcopal Church",
      bullets: [
        { key: 'Founded', value: '1749 as St. George\'s Chapel by Trinity Church' },
        { key: 'Built', value: '1846' },
        { key: 'Architects', value: 'Charles Otto Blesch and Leopold Eidlitz' },
        { key: 'Architecture Style', value: 'Romanesque Revival' },
        { key: 'Parish History', value: 'Joined with Calvary Church (1832) and Holy Communion Church (1844), three congregations merged in 1975' },
        { key: 'Notable', value: 'Home to Harry T. Burleigh, the "savior of spirituals" who arranged African American spirituals' }
      ],
      quote:
        "Deep river, my home is over Jordan. Deep river, Lord, I want to cross over into campground.",
      quote_author:
        "Arranged by church member Harry T. Burleigh, the 'savior of spirituals'",
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
        { key: 'Architecture Style', value: 'Gothic Revival' },
        { key: 'Purpose', value: 'Built to replace Old St. Patrick\'s Cathedral and accommodate growing Catholic population' },
        { key: 'Notable', value: 'First large-scale medieval-style church built in U.S., largest Gothic Revival Catholic cathedral in North America' }
      ],
      link: "https://saintpatrickscathedral.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00919021031146, 40.71173786457011],
    },
    properties: {
      id: 85,
      name: "St. Paul's Chapel",
      bullets: [
        { key: 'Built', value: '1766' },
        { key: 'Architect', value: 'Thomas McBean' },
        { key: 'Architecture Style', value: 'Georgian' },
        { key: 'Significance', value: "Manhattan's oldest surviving church building" },
        { key: 'Notable', value: "Served as refuge for Ground Zero recovery workers after 9/11" },
      ],
      image_caption: '"St. Paul\'s Chapel (front)." The New York Public Library Digital Collections, Irma and Paul Milstein Division of United States History, Local History and Genealogy, 1905.',
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
        { key: 'Founded', value: '1916 in Brooklyn, moved to permanent location 1930' },
        { key: 'Operated', value: '1930-1973' },
        { key: 'Founder', value: 'Margaret Sanger, birth control advocate' },
        { key: 'Housed', value: 'Birth Control Clinical Research Bureau' },
        { key: 'Significance', value: 'Reshaped attitudes toward reproductive health and sexuality' },
        { key: 'Notable', value: 'Pioneering center for reproductive rights and family planning research' }
      ],
      quote:
        "No woman can call herself free who does not own and control her body. No woman can call herself free until she can choose consciously whether she will or will not be a mother.",
      quote_author: "Margaret Sanger",
      image_caption:
        "Outside The Sanger Brownsville clinic in Brooklyn (Library of Congress)",
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
      description:
        "One of the most impressive collections of 1880s interior decoration outside of a museum; only armory actually owned by the unit for which it was constructed",
      image_caption: "(Library of Congress)",
      link: "https://www.armoryonpark.org/about_us/history",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.96372071563547, 40.77907159122789],
    },
    properties: {
      id: 90,
      name: "Harry F. Sinclair House",
      description:
        "Harry F. Sinclair, the oil industrialist, lived here from 1918 to 1930; now part of the Ukrainian Institute; often used in filmmaking and television production",
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
      description:
        "Believed to be the largest existing collection of late 19th-century cast iron facades in the world",
      link: "https://www.nypap.org/preservation-history/soho-cast-iron-historic-district/",
      image_caption: "Haughwout Building (NYPL Digital Collection)",
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
        { key: 'Architecture Style', value: 'Italian Renaissance' },
        { key: 'Nickname', value: '"Marble Palace"' },
        { key: 'Owner', value: 'Alexander Turney Stewart, Irish immigrant and business legend' },
        { key: 'Significance', value: 'America\'s first department store' },
        { key: 'Legacy', value: 'Introduced Italian Renaissance architectural style to the United States' },
        { key: 'Notable', value: 'Now known as Sun Building, former headquarters of The Sun newspaper' }
      ],
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
        { key: 'Impact', value: 'Sparked the modern LGBTQ+ rights movement' },
        { key: 'Notable', value: 'Led to the first Gay Pride marches and formation of LGBTQ+ advocacy groups' }
      ],
      description: "This Greenwich Village bar became a symbol of resistance when patrons and community members fought back against routine police harassment, transforming a local confrontation into a watershed moment for civil rights in America.",
      quote: "Gay power! Isn't that great! It's about time we did something to assert ourselves.",
      quote_author: "Allen Ginsberg, poet and Greenwich Village resident",
      link: "https://www.nps.gov/ston/index.htm",
      image_caption: "The Stonewall Inn ca. 1969",
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
      description:
        "A pivotal example of the work of Bertram Grosvenor Goodhue and an outstanding example of early 20th-century ecclesiastical architecture.",
      image_caption: "St. Bartholomew's on Park Avenue, 1931 (NYPL Digital Collection)",
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
        { key: 'Built', value: '1863' },
        { key: 'Active', value: '1863-1935' },
        { key: 'Location', value: 'Orchard Street, epicenter of immigrant life in America' },
        { key: 'Residents', value: '7,000 people from 20+ nations' },
        { key: 'Notable', value: 'Preserving and interpreting the history of immigration to America' },
      ],
      quote: "I walked toward the Lower East Side - where you walked 50 years ago, little girl - from Russia, eating the first poisonous tomatoes of America - frightened on the dock - then struggling in the crowds of Orchard Street toward what?",
      quote_author: "Allen Ginsberg, 'Kaddish'",
      link: "https://www.tenement.org/",
      image_caption: '"Orchard Street Scene." The New York Public Library Digital Collections, Irma and Paul Milstein Division of United States History, Local History and Genealogy, 1902 - 1914.',
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
      image_caption: "Third Judicial District Courthouse (Library of Congress)",
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
      description:
        "Served as the home of Tiffany and Company from 1905 through 1940",
      image_caption: "Tiffany and Company Building (Library of Congress)",
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
      image_caption: "Albert Levy - 'L'Architecture Americaine', photo album, 1872",
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
      description:
        '"America\'s Town Meetings of the Air" radio programs from here in the 1930s created public-affairs media.',
      link: "https://www.thetownhall.org/",
      image_caption: "The Town Hall (NYPL Digital Collection)",
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
        { key: 'Event', value: 'Site of factory fire that killed 146 workers (mostly young immigrant women)' },
        { key: 'Significance', value: 'Led to landmark workplace safety laws and labor reforms' },
      ],
      quote:
        "There was a stricken conscience of public guilt and we all felt that we had been wrong, that something was wrong with that building which we had accepted or the tragedy never would have happened. Moved by this sense of stricken guilt, we banded ourselves together to find a way by law to prevent this kind of disaster.",
      quote_author: "Frances Perkins, Secretary of Labor",
      link: "https://www.mcny.org/story/triangle-shirtwaist-fire",
      image_caption: '"Trade Parade in Memory of Fire Victims. [April or May]" Photograph. Library of Congress.'
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.0118367122406, 40.70823058091367],
    },
    properties: {
      id: 103,
      name: "Trinity Church",
      bullets: [
        { key: 'Founded', value: '1697' },
        { key: 'Built', value: '1846 (current building)' },
        { key: 'Architect', value: 'Richard Upjohn' },
        { key: 'Architecture Style', value: 'Neo-Gothic' },
        { key: 'Significance', value: 'One of the first and finest examples of Neo-Gothic architecture in the country' },
        { key: 'Notable', value: 'Alexander Hamilton and other notable parishioners buried in historic churchyard, served New York for over 300 years' }
      ],
      link: "https://trinitychurchnyc.org/",
      image_caption: "View of Trinity Church, 1895",
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
      description:
        "The political heart of Manhattan; many protests begin or end here",
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
        { key: 'Architecture Style', value: 'Renaissance Revival' },
        { key: 'Patron', value: 'John Stewart Kennedy, wealthy banker and philanthropist' },
        { key: 'Purpose', value: 'House the Charity Organization Society and multiple charitable organizations' },
        { key: 'Significance', value: 'Pioneer headquarters for nonprofit organizations providing social services' }
      ],
      image_caption: "United Charities Building drawing, 1891 (NYPL Digital Collection)",
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
      description:
        "Built in 1926 by the United Workers' Association to improve the living standards of its members, many of whom lived in squalid conditions in the tenements of the Lower East Side",
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
      image_caption: "US Customs House, New York of to-day, Seymour B. Durst, 1912",
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
        "Collection of Beaux Arts buildings by Stanford White is one of the best examples of that style anywhere.",
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
      description:
        "Mansion for the Van Cortlandt family built in 1748 and used during the American Revolution",
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
      description:
        "Oldest known surviving schoolhouse in America; owned by the Staten Island Historical Society",
      link: "https://www.nps.gov/parkhistory/online_books/explorers/sitec50.htm",
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
      description:
        "Illustrates transition from rural cemetery to 20th-century styles; notable dead buried here include Robert Moses and R.H. Macy",
      link: "https://www.woodlawn.org/",
      image_caption: "Map of Woodlawn Cemetery, 1870",
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
      description:
        "One of the oldest — and most famous — skyscrapers in New York City; still one of the tallest buildings in New York City",
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
      link: "https://wyckoffmuseum.org/",
      image_caption: "The Wyckoff House early 1900s (NYPL Digital Collection)",
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
      link: "https://hdc.org/buildings/wyckoff-bennett-homestead/",
      image_caption: "Wyckoff-Bennett Homestead (Library of Congress)",
    },
  },
];

export default landmarks;
