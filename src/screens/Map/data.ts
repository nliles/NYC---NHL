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
      description:
        "Home of the watershed Armory Show in 1913, which introduced America to modern art",
      link: "https://sixtyninth.net/",
      image_caption: "Library of Congress",
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
      description:
        "Only intact known property directly associated with Admiral David Farragut",
      date_designated: "October 17, 2012",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00444, 40.71444],
    },
    properties: {
      id: 3,
      name: "African Burial Ground",
      description:
        "The African Burial Ground is the nation's largest and earliest known African American cemetery, serving as a burial site in Lower Manhattan for enslaved Africans from the 1690s to 1794. Rediscovered during 1991 construction, the site became a National Historic Landmark in 1993 and a National Monument in 2007.",
      date_designated: "April 19, 1993",
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
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.0125, 40.708889],
    },
    properties: {
      id: 5,
      name: "American Stock Exchange",
      description: "Former headquarters of the American Stock Exchange",
      date_designated: "June 6, 1978",
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
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.063, 40.6151],
    },
    properties: {
      id: 8,
      name: "Alice Austen House",
      description:
        "Alice Austen (1866-1952) was a pioneering American photographer who captured over 7,000 images of Victorian life from her Staten Island home, Clear Comfort. She lived there for 30 years with her partner Gertrude Tate. Today, her home is a National Historic Landmark, designated LGBTQ+ history site, and museum dedicated to her legacy.",
      link: "https://aliceausten.org/",
      image_caption:
        "The Austen House, with the photographer's grandfather. (taken by Alice Austen)",
      quote: "I guess I was too good to get married.",
      quote_author: "Alice Austen, on why she never married",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.805556, 40.871667],
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
      coordinates: [-73.995556, 40.726389],
    },
    properties: {
      id: 10,
      name: "Bayard-Condict Building",
      description:
        "Only Louis Sullivan building in New York City; one of the first steel skeleton skyscrapers.",
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
      date_designated: "January 29, 1964",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.996667, 40.696667],
    },
    properties: {
      id: 13,
      name: "Brooklyn Heights Historic District",
      description:
        "Exemplary collection of 19th-century architectural styles; first historic district in New York City",

      date_designated: "January 12, 1965",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.992778, 40.694722],
    },
    properties: {
      id: 14,
      name: "Center for Brooklyn History",
      description:
        "One of the few remaining buildings by George B. Post; innovative structural system",

      link: "https://www.bklynlibrary.org/center-for-brooklyn-history",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.8375, 40.706389],
    },
    properties: {
      id: 15,
      name: "Ralph Johnson Bunche House",
      description:
        "Home of Ralph Johnson Bunche, eminent African-American diplomat and Undersecretary General of United Nations",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.980278, 40.765],
    },
    properties: {
      id: 16,
      name: "Carnegie Hall",
      description: "One of the most famous music venues in the world",
      link: "https://www.carnegiehall.org/",
      image_caption: "Carnegie Hall circa early 1900s",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.957778, 40.784444],
    },
    properties: {
      id: 17,
      name: "Andrew Carnegie Mansion",
      description:
        "Home of Andrew Carnegie, now the Cooper-Hewitt, National Design Museum",
      link: "https://www.cooperhewitt.org/about-the-carnegie-mansion-2/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.966111, 40.781944],
    },
    properties: {
      id: 18,
      name: "Central Park",
      description:
        "Central Park was created in response to rapid mid-19th century urbanization to provide all social classes with access to nature and fresh air. In 1857, the city held a public design competition, which Frederick Law Olmsted and Calvert Vaux won with their 'Greensward Plan.' Construction began in 1858, and the 843-acre park was completed in 1873.",
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
      coordinates: [-73.970556, 40.759722],
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
      coordinates: [-74.01, 40.709444],
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
      coordinates: [-73.975278, 40.751667],
    },
    properties: {
      id: 21,
      name: "Chrysler Building",
      description:
        "Art Deco skyscraper; distinctive feature of Manhattan skyline; at one point world's tallest building",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.995788, 40.733812],
    },
    properties: {
      id: 22,
      name: "Church of the Ascension",
      description:
        "The Church of the Ascension was founded in 1827. The current Gothic Revival building designed by Richard Upjohn was completed in 1841. It's considered one of New York's most important 19th-century religious buildings due to its interior features such as John La Farge's altar mural 'The Ascension' and Louis Saint-Gaudens' marble altar.",
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
      coordinates: [-73.973611, 40.749444],
    },
    properties: {
      id: 27,
      name: "Daily News Building",
      description:
        "First modern free-standing skyscraper designed by Raymond Hood",
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
      description:
        "The Dakota was designed by Henry Janeway Hardenbergh in 1884 in the German Renaissance style and was the first luxury apartment building in New York City.",
      description2:
        "The building is widely known as John Lennon's former home, who was killed outside the building's entrance in 1980, and as the setting for 'Rosemary's Baby.' It remains one of New York's most prestigious residential addresses.",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.923333, 40.8675],
    },
    properties: {
      id: 29,
      name: "Dyckman House",
      description: "Only remaining farmhouse in Manhattan",
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
      coordinates: [-73.940833, 40.832222],
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
      image_caption: "The Flatiron Building circa 1902",
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
      description:
        "The Frick Collection was established in 1935 to preserve the art collection of businessman Henry Clay Frick (1849-1919), who made his fortune in coke and steel. Frick was an avid art collector and designed his Beaux-Arts mansion on Fifth Avenue specifically to accommodate his paintings and art.",
      description2:
        "His collection includes masterpieces by Vermeer, Rembrandt, and other Old Masters, displayed alongside period furniture and decorative arts.",
      link: "https://www.frick.org/",
      image_caption: "The Frick Collection, 1920",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.016111, 40.691389],
    },
    properties: {
      id: 38,
      name: "Governors Island",
      description:
        "Island in NY Harbor which served various branches of the US Military from 1783 until the late 1990s; now a park",
      date_designated: "February 4, 1985",
      link: "https://www.nps.gov/gois/index.htm",
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
      description:
        "Designed by James Renwick Jr., Grace Church on Broadway is one of New York City's finest Gothic Revival structures. Since 1846, this historic Episcopal parish has been a fixture in Greenwich Village, and for generations was considered 'the most fashionable church in New York.' It continues to serve the city and its people.",
      link: "https://gracechurchnyc.org/",
      image_caption: "A view of Grace Church from Broadway",
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
      description:
        "Beaux-Arts architecture; historic rail gateway to New York City; largest train station in the world by number of platforms",
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

      date_designated: "September 20, 2006",
      link: "https://www.green-wood.com/",
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

      date_designated: "December 19, 1960",
      link: "https://www.nps.gov/hagr/index.htm",
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

      date_designated: "October 6, 2008",
      link: "https://www.guggenheim.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.985278, 40.713889],
    },
    properties: {
      id: 44,
      name: "Henry Street Settlement and Neighborhood Playhouse",
      description:
        "One of the nation's first settlement homes where new immigrants and the poor could find assistance",

      date_designated: "May 30, 1974",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.938889, 40.825556],
    },
    properties: {
      id: 45,
      name: "Matthew Henson Residence",
      description:
        "Home of Matthew Henson, African-American polar explorer who may have been the first to reach the North Pole",

      date_designated: "May 15, 1975",
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

      date_designated: "November 4, 1993",
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

      date_designated: "January 14, 1986",
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

      date_designated: "May 11, 1976",
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

      date_designated: "April 11, 1989",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.876111, 40.859722],
    },
    properties: {
      id: 52,
      name: "Lorillard Snuff Mill",
      description: "Oldest existing tobacco-manufacturing facility in U.S.",

      date_designated: "December 22, 1977",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.961944, 40.808333],
    },
    properties: {
      id: 53,
      name: "Low Memorial Library",
      description:
        "First building on Morningside Heights campus; capped by largest freestanding granite dome in U.S.",
      date_designated: "December 23, 1987",
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
      coordinates: [-73.938333, 40.814167],
    },
    properties: {
      id: 56,
      name: "Claude McKay Residence",
      description:
        "The Harlem YMCA, whose residents included African-American writer Claude McKay",

      date_designated: "December 8, 1976",
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

      date_designated: "June 2, 1978",
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
      description:
        "Founded in 1870, the Met moved to its current Fifth Avenue location in 1880. Richard Morris Hunt designed the current building's iconic Beaux-Arts facade in 1902. The museum rapidly expanded, acquiring European masterpieces by Manet, Renoir, and Matisse, plus one of the world's largest Egyptian collections outside Cairo.",
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
      image_caption: "The Morris-Jumel Mansion circa 1890",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.009167, 40.706111],
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
      coordinates: [-73.944722, 40.815],
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
      coordinates: [-73.878333, 40.863611],
    },
    properties: {
      id: 63,
      name: "New York Botanical Garden",
      description:
        "One of the world's leading botanical gardens, with the largest herbarium in the U.S. and second largest in the world after the French National Museum of Natural History and home to many plant laboratories",

      date_designated: "May 28, 1967",
      link: "https://www.nybg.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.010278, 40.704444],
    },
    properties: {
      id: 64,
      name: "New York Cotton Exchange",
      description: "First commodity market in the U.S.; now 1 Hanover Square",

      date_designated: "December 22, 1977",
      image_caption: "The New York Cotton Exchange in 1885",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.985556, 40.742778],
    },
    properties: {
      id: 65,
      name: "New York Life Building",
      description: "Last significant Cass Gilbert skyscraper in Manhattan",

      date_designated: "June 2, 1978",
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

      date_designated: "December 21, 1965",
      link: "https://www.nypl.org/locations/schwarzman",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.011111, 40.706944],
    },
    properties: {
      id: 67,
      name: "New York Stock Exchange",
      description:
        "One of the first securities markets in the U.S.; still the world's largest",

      date_designated: "June 2, 1978",
      image_caption: "New York Stock Exchange Trading floor, 1903",
      link: "https://www.nyse.com/index",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.998333, 40.733056],
    },
    properties: {
      id: 68,
      name: "New York Studio School of Drawing, Painting and Sculpture",
      description:
        "Original home of the Whitney Museum, the first devoted to 20th-century American art",

      date_designated: "April 27, 1992",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.981667, 40.755556],
    },
    properties: {
      id: 69,
      name: "New York Yacht Club",
      description:
        "Oldest yachting club in U.S.; longtime home of the America's Cup",
      link: "https://nyyc.org/",
      image_caption: "The New York Yacht Club circa 1900 (Library of Congress)",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9925, 40.7275],
    },
    properties: {
      id: 70,
      name: "New York Yacht Club",
      description: "Nineteenth-century family home; preserved inside and out",

      date_designated: "June 23, 1965",
      link: "https://merchantshouse.org/",
      image_caption: "The Merchant's House circa 1936",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.830278, 40.763056],
    },
    properties: {
      id: 71,
      name: "Old Quaker Meeting House",
      description:
        "Only surviving 17th-century ecclesiastical frame building in New York; in almost continuous use since 1696",
      link: "https://nylandmarks.org/celebrate-50-at-50/flushing-friends-meeting-house/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9625, 40.806111],
    },
    properties: {
      id: 72,
      name: "Philosophy Hall",
      description:
        "Edwin Armstrong developed FM radio in this Columbia University building",

      date_designated: "July 21, 2003",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.986944, 40.7375],
    },
    properties: {
      id: 73,
      name: "Players Club",
      description:
        "Extensive collection of art and theater memorabilia; interior redone by Stanford White",

      date_designated: "December 19, 1962",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.974444, 40.764722],
    },
    properties: {
      id: 74,
      name: "Plaza Hotel",
      description:
        "French Renaissance-style building; outstanding example of American hotel architecture; symbol of elegance; visible from much of lower Central Park; setting for Kay Thompson's popular Eloise series of children's books",

      date_designated: "June 24, 1986",
      link: "https://www.theplazany.com/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.993611, 40.699167],
    },
    properties: {
      id: 75,
      name: "Plymouth Church of the Pilgrims",
      description:
        "Important station on Underground Railroad when Henry Ward Beecher was pastor",

      date_designated: "July 4, 1961",
      link: "https://www.plymouthchurch.org/#main",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.961667, 40.81],
    },
    properties: {
      id: 76,
      name: "Pupin Physics Laboratory, Columbia University",
      description:
        "Columbia University building; site of first splitting of uranium atom in U.S. and other milestones in development of atomic bomb",

      date_designated: "December 21, 1965",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.981111, 40.7025],
    },
    properties: {
      id: 77,
      name: "Quarters A, Brooklyn Navy Yard",
      description: "Home to Matthew Perry at the time of his opening of Japan",

      date_designated: "May 30, 1974",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.938889, 40.834444],
    },
    properties: {
      id: 78,
      name: "Paul Robeson Home",
      description:
        "Home of legendary African-American actor and activist Paul Robeson",
      date_designated: "December 8, 1976",
      link: "https://www.nps.gov/places/new-york-paul-robeson-home.htm",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.915, 40.648333],
    },
    properties: {
      id: 79,
      name: "Jackie Robinson House",
      description: "Home of baseball great Jackie Robinson",

      date_designated: "May 11, 1976",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.102778, 40.6425],
    },
    properties: {
      id: 81,
      name: "Sailors' Snug Harbor",
      description: "First and only home for retired merchant seamen in U.S.",
      link: "https://snug-harbor.org/",
      image_caption: "Library of Congress",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9925, 40.694444],
    },
    properties: {
      id: 82,
      name: "St. Ann and the Holy Trinity Church",
      description: "Site of first figural stained-glass windows in U.S.",
      link: "https://www.stannholytrinity.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.985, 40.734444],
    },
    properties: {
      id: 83,
      name: "St. George's Episcopal Church",
      description:
        "The Parish of Calvary-St. George's dates back to 1749 when Trinity Church established St. George's Chapel. It later joined Calvary Church (1832) and Holy Communion Church (1844). The current building was designed by Charles Otto Blesch and Leopold Eidlitz in 1846. In 1975, three congregations merged.",
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
      coordinates: [-73.976389, 40.758611],
    },
    properties: {
      id: 84,
      name: "St. Patrick's Cathedral",
      description: "First large-scale medieval-style church built in U.S.",
      link: "https://saintpatrickscathedral.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.00968, 40.71178],
    },
    properties: {
      id: 85,
      name: "St. Paul's Chapel",
      description:
        "St. Paul's Chapel opened in 1766 as an outreach center for Trinity Church's expanding congregation and remained a place of worship for the community as the city grew. Today it remains Manhattan's oldest surviving church building. After September 11, 2001, it served as a refuge for recovery workers at Ground Zero.",
      image_caption: "St. Paul's Chapel circa early 1900s",
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
      description:
        "The Margaret Sanger Clinic housed the Birth Control Clinical Research Bureau from 1930 to 1973. After opening in Brooklyn in 1916, Sanger moved to this permanent location in 1930. From here, she reshaped attitudes toward reproductive health and sexuality.",
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
      coordinates: [-73.941389, 40.814444],
    },
    properties: {
      id: 87,
      name: "Schomburg Center for Research in Black Culture",
      description:
        "Research library of the New York Public Library (NYPL) and an archive repository for information on people of African descent worldwide.",
      date_designated: "December 23, 2016",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.995833, 40.735],
    },
    properties: {
      id: 88,
      name: "Gen. Winfield Scott House",
      description:
        "Home of Winfield Scott, heroic general in the U.S.-Mexican War and later presidential candidate",

      date_designated: "November 7, 1973",
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
      coordinates: [-74.001389, 40.724444],
    },
    properties: {
      id: 92,
      name: "SoHo-Cast Iron Historic District",
      description:
        "Believed to be the largest existing collection of late 19th-century cast iron facades in the world",

      date_designated: "June 2, 1978",
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
      description:
        "The A.T. Stewart Store, built in 1845-46 and dubbed the 'Marble Palace,' was a commercial structure that housed America's first department store and introduced the Italian Renaissance architectural style to the United States. The store’s namesake, Alexander Turney Stewart, was an Irish immigrant who became a business legend and one of the wealthiest men in America through his dry-goods business. The building is now known as the Sun Building from its days as headquarters for The Sun newspaper.",
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
      description:
        "Site of 1969 Stonewall riots which began gay rights movement",
      link: "https://www.nps.gov/ston/index.htm",
      image_caption: "The Stonewall Inn circa 1969",
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
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.004722, 40.713611],
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
      description:
        "Between 1863 and 1935, Orchard Street became the epicenter of immigrant life in America. By 1903, the block around 97 Orchard Street was the most densely populated place on earth. The five-story tenement buildingt was home to an estimated 7,000 people from over 20 nations during this time.",
      description2:
        "Today, 97 Orchard Street is a National Historic Landmark and serves as the Tenement Museum, bringing to life the stories of the immigrant families who once called this building home.",
      link: "https://www.tenement.org/",
      image_caption: "A view of Orchard Street in the early 1900s",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.999167, 40.734722],
    },
    properties: {
      id: 98,
      name: "Third Judicial District Courthouse",
      description:
        "Originally built as the Third Judicial District Courthouse; faced with demolition, public outcry led to its reuse as a branch of the New York Public Library",
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
      coordinates: [-73.986944, 40.7375],
    },
    properties: {
      id: 100,
      name: "Samuel J. Tilden House",
      description:
        "Home of Samuel J. Tilden, former New York State governor and loser of the bitter 1876 presidential election",

      date_designated: "May 11, 1976",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.984722, 40.756111],
    },
    properties: {
      id: 101,
      name: "The Town Hall",
      description:
        '"America\'s Town Meetings of the Air" radio programs from here in the 1930s created public-affairs media.',
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
      description:
        "On March 25, 1911, a fire at the Triangle Shirtwaist Factory killed 146 workers, mostly young immigrant women. Weak regulations and industry corruption allowed for dangerous working conditions. The tragedy led to landmark workplace safety laws.",
      quote:
        "There was a stricken conscience of public guilt and we all felt that we had been wrong, that something was wrong with that building which we had accepted or the tragedy never would have happened. Moved by this sense of stricken guilt, we banded ourselves together to find a way by law to prevent this kind of disaster.",
      quote_author: "Frances Perkins, Secretary of Labor",
      link: "https://www.mcny.org/story/triangle-shirtwaist-fire",
      image_caption: "Trade parade in memory of the victims",
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
      description:
        "Founded in 1697, Trinity Church has served New York for over 300 years. The current building was designed by Richard Upjohn and consecrated in 1846, and is considered one of the first and finest examples of Neo-Gothic architecture in the country. Notable parishioners such as Alexander Hamilton are buried in the historic churchyard.",
      link: "https://trinitychurchnyc.org/",
      image_caption: "View of Trinity Church, 1895",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.006111, 40.713056],
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
      coordinates: [-73.99084607222422, 40.73721281970653],
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
      coordinates: [-73.986389, 40.739444],
    },
    properties: {
      id: 106,
      name: "United Charities Building",
      description:
        "Built in 1893 by a wealthy businessman in order to provide his favorite charities a low cost location for their operations",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.869722, 40.866389],
    },
    properties: {
      id: 107,
      name: "United Workers Cooperatives",
      description:
        "Built in 1926 by the United Workers' Association to improve the living standards of its members, many of whom lived in squalid conditions in the tenements of the Lower East Side",

      date_designated: "July 17, 1991",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.013889, 40.704167],
    },
    properties: {
      id: 108,
      name: "U.S. Customhouse",
      description:
        "Cass Gilbert designed Customhouse for New York Harbor; now part of the Smithsonian Institution",

      link: "https://americanindian.si.edu/visit/ny",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.912222, 40.857778],
    },
    properties: {
      id: 109,
      name: "University Heights Campus (Bronx Community College of the City University of New York)",
      description:
        "Collection of Beaux Arts buildings by Stanford White is one of the best examples of that style anywhere.",

      date_designated: "October 17, 2012",
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
      county: "Richmond",
      date_designated: "April 19, 1993",
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
      coordinates: [-74.008056, 40.712222],
    },
    properties: {
      id: 114,
      name: "Woolworth Building",
      description:
        "One of the oldest — and most famous — skyscrapers in New York City; still one of the tallest buildings in New York City",

      date_designated: "November 13, 1966",
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
      image_caption: "The Wyckoff House circa early 1900s",
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
    },
  },
];

export default landmarks;
