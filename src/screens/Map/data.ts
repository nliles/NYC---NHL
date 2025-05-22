const landmarks = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.983611, 40.741667],
    },
    properties: {
      id: 1,
      name: "69th Regiment Armory",
      description:
        "Home of the watershed Armory Show in 1913, which introduced America to modern art",
      date_designated: "June 19, 1996",
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
      quote_author: "Memorial inscription, African Burial Ground",
      image_caption:
        "Map showing the location of the burial ground outside the northern boundary of the city",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.0025, 40.704722],
    },
    properties: {
      id: 4,
      name: "Ambrose (lightship)",
      description:
        "Lightship, several miles offshore, that marked Ambrose Channel into New York Harbor, now at South Street Seaport Museum.",
      date_designated: "April 11, 1989",
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
      coordinates: [-73.861667, 40.754444],
    },
    properties: {
      id: 6,
      name: "Louis Armstrong House",
      description: "Home of jazz legend Louis Armstrong for 28 years",
      date_designated: "May 11, 1976",
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
      coordinates: [-73.982222, 40.742778],
    },
    properties: {
      id: 7,
      name: "Chester A. Arthur House",
      description:
        "Home of President Chester A. Arthur; site of his inaugural oath",
      date_designated: "December 12, 1965",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.063056, 40.615],
    },
    properties: {
      id: 8,
      name: "Alice Austen House",
      description: "Home of photographer Alice Austen, now a museum",
      date_designated: "April 19, 1993",
      link: "https://aliceausten.org/",
      image_caption:
        "The Austen House, with the photographer's grandfather. (taken by Alice Austen)",
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
      date_designated: "December 8, 1976",
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
      date_designated: "December 8, 1976",
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
      
      date_designated: "May 15, 1975",
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
      
      date_designated: "July 17, 1991",
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
      date_designated: "May 11, 1976",
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
      
      date_designated: "December 29, 1962",
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
      
      date_designated: "November 13, 1966",
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
        "The Green Lung of the city; one of the most visited city parks in the world; designed by Frederick Law Olmsted and Calvert Vaux.",
      
      date_designated: "May 23, 1963",
      link: "https://www.centralparknyc.org/",
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
      
      date_designated: "May 15, 1975",
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
      
      date_designated: "December 22, 1977",
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
      
      date_designated: "December 8, 1976",
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
        "Early church design by Richard Upjohn; valuable interior artwork",
      
      date_designated: "December 23, 1987",
      link: "https://ascensionnyc.org/",
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
      
      date_designated: "December 19, 1960",
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
      date_designated: "May 23, 1966",
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
      date_designated: "May 11, 1976",
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
      date_designated: "July 4, 1961",
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
      date_designated: "June 29, 1989",
      image_caption:
        "Daily News Building, 42nd Street between 2nd and 3rd Avenues, 1935",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.976389, 40.776667],
    },
    properties: {
      id: 28,
      name: "Dakota Apartments",
      description:
        "Combination of Renaissance architectural styles by Henry Hardenbergh; setting for Rosemary's Baby and the shooting death of John Lennon",
      
      date_designated: "December 8, 1976",
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
      
      date_designated: "December 24, 1967",
      link: "https://dyckmanfarmhouse.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.993889, 40.715],
    },
    properties: {
      id: 30,
      name: "Eldridge Street Synagogue",
      description:
        "One of the oldest synagogues in the U.S.; first built by Jews from Eastern Europe",
      
      date_designated: "June 19, 1996",
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
      
      date_designated: "May 11, 1976",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.985556, 40.748333],
    },
    properties: {
      id: 32,
      name: "Empire State Building",
      description:
        "World's tallest building from 1931 to 1972 and internationally recognized symbol of New York City",
      
      date_designated: "June 24, 1986",
      link: "https://www.esbnyc.com/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.011111, 40.709722],
    },
    properties: {
      id: 33,
      name: "Equitable Building",
      description:
        "One of the earliest skyscrapers in Manhattan; profoundly influenced later skyscraper design",
      
      date_designated: "June 2, 1978",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.988611, 40.73],
    },
    properties: {
      id: 34,
      name: "Hamilton Fish House",
      description:
        "Home of Hamilton Fish, future Governor and Senator of New York",
      
      date_designated: "May 15, 1975",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.989722, 40.741111],
    },
    properties: {
      id: 35,
      name: "Flatiron Building",
      description: "Distinctive triangular building at Madison Square.",
      
      date_designated: "June 29, 1989",
      image_caption: "The Flatiron Building circa 1902",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.955, 40.7625],
    },
    properties: {
      id: 36,
      name: "Founder's Hall, The Rockefeller University",
      description:
        "Building marked the start of John D. Rockefeller Jr.'s putting the vast family fortune to philanthropic purposes",
      
      date_designated: "May 30, 1974",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.967222, 40.771389],
    },
    properties: {
      id: 37,
      name: "The Frick Collection and Frick Art Reference Library Building",
      description: "",
      
      date_designated: "October 6, 2008",
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
      coordinates: [-73.991304, 40.732369],
    },
    properties: {
      id: 39,
      name: "Grace Church",
      description: "Designed by James Renwick Jr., Grace Church on Broadway is New York City's earliest Gothic Revival structure. Since 1846, this historic Episcopal parish has been a fixture in Greenwich Village, serving the City and its people.",
      date_designated: "December 22, 1977",
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
      coordinates: [-73.976389, 40.752778],
    },
    properties: {
      id: 40,
      name: "Grand Central Terminal",
      description:
        "Beaux-Arts architecture; historic rail gateway to New York City; largest train station in the world by number of platforms",
      
      date_designated: "December 8, 1976",
      link: "https://grandcentralterminal.com/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.991111, 40.652222],
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
      coordinates: [-73.947222, 40.821389],
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
      coordinates: [-73.958889, 40.782778],
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
      coordinates: [-73.946389, 40.833611],
    },
    properties: {
      id: 46,
      name: "Hispanic Society of America",
      description: "Museum of Iberian Art",
      
      date_designated: "October 17, 2012",
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
      coordinates: [-74.001111, 40.764722],
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
      coordinates: [-73.943056, 40.815278],
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
      coordinates: [-73.988333, 40.750278],
    },
    properties: {
      id: 54,
      name: "R. H. Macy and Company Store (Macy's)",
      description: "Largest department store in world for many years",
      
      date_designated: "June 2, 1978",
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
      
      date_designated: "June 29, 1989",
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
      coordinates: [-73.9875, 40.741111],
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
      coordinates: [-73.963611, 40.778889],
    },
    properties: {
      id: 58,
      name: "Metropolitan Museum of Art",
      description:
        "The Fifth Avenue building of the Metropolitan Museum of Art, one of the world's most important and prestigious art museums",
      
      date_designated: "June 24, 1986",
      link: "https://www.metmuseum.org/",
      image_caption: "Hall of sculpture",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.981667, 40.749444],
    },
    properties: {
      id: 59,
      name: "J. Pierpont Morgan Library",
      description:
        "Office, Library, and now Museum of J. P. Morgan; the Panic of 1907 ended in the Library",
      
      date_designated: "November 13, 1966",
      link: "https://www.themorgan.org/",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.938611, 40.834444],
    },
    properties: {
      id: 60,
      name: "Morris-Jumel Mansion",
      description: "Oldest residential building in Manhattan",
      
      date_designated: "January 20, 1961",
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
      
      date_designated: "June 2, 1978",
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
      
      date_designated: "May 11, 1976",
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
      coordinates: [-73.982222, 40.753333],
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
      
      date_designated: "May 28, 1987",
      link: "https://nyyc.org/",
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
      name: "Old Merchant's House",
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
      date_designated: "December 24, 1967",
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
      county: "Richmond",
      date_designated: "December 8, 1976",
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
      date_designated: "December 23, 1987",
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
      architect: "Leopold Eidlitz",
      name: "St. George's Episcopal Church",
      description:
        "Home church of Harry Thacker Burleigh, African-American singer who helped establish the spiritual in the liturgy of many American faiths",
      
      date_designated: "December 8, 1976",
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
      coordinates: [-73.993889, 40.738056],
    },
    properties: {
      id: 86,
      name: "Margaret Sanger Clinic",
      description: "Clinic where Margaret Sanger dispensed birth control",
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
      coordinates: [-73.966111, 40.7675],
    },
    properties: {
      id: 89,
      name: "Seventh Regiment Armory",
      description:
        "One of the most impressive collections of 1880s interior decoration outside of a museum; only armory actually owned by the unit for which it was constructed",
      
      date_designated: "February 24, 1986",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.963611, 40.776667],
    },
    properties: {
      id: 90,
      name: "Harry F. Sinclair House",
      description:
        "Harry F. Sinclair, the oil industrialist, lived here from 1918 to 1930; now part of the Ukrainian Institute; often used in filmmaking and television production",
      
      date_designated: "June 2, 1978",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.9975, 40.713333],
    },
    properties: {
      id: 91,
      name: "Alfred E. Smith House",
      description:
        "Home of four-time New York State governor Alfred E. Smith (and later presidential candidate) from 1907 to 1923",
      
      date_designated: "November 28, 1972",
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
      coordinates: [-74.006111, 40.714167],
    },
    properties: {
      id: 93,
      name: "A. T. Stewart Company Store",
      description:
        'Site of the first American department store (now known as the "New York Sun Building")',
      
      date_designated: "June 2, 1978",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.002222, 40.733889],
    },
    properties: {
      id: 94,
      name: "Stonewall",
      description:
        "Site of 1969 Stonewall riots which began gay rights movement",
      
      date_designated: "February 16, 2000",
      link: "https://www.nps.gov/ston/index.htm",
      image_caption: "The Stonewall Inn circa 1969",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.973611, 40.757222],
    },
    properties: {
      id: 95,
      name: "St. Bartholomew's Church and Community House",
      description:
        "A pivotal example of the work of Bertram Grosvenor Goodhue and an outstanding example of early 20th-century ecclesiastical architecture.",
      date_designated: "October 31, 2016",
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
      
      date_designated: "December 22, 1977",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.99010, 40.71853],
    },
    properties: {
      id: 97,
      name: "Tenement Building at 97 Orchard Street",
      description:
        "Between 1863 and 1935, Orchard Street became the epicenter of immigrant life in America. By 1900, the street was the most densely populated place on earth. The five-story tenement building at 97 Orchard Street was home to an estimated 7,000 people from over 20 nations during this time.",
      description2: "Today, 97 Orchard Street is a National Historic Landmark and serves as the Tenement Museum, bringing to life the stories of the immigrant families who once called this building home.",
      date_designated: "April 19, 1994",
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
      
      date_designated: "December 22, 1977",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.981389, 40.75],
    },
    properties: {
      id: 99,
      name: "Tiffany and Company Building",
      description:
        "Served as the home of Tiffany and Company from 1905 through 1940",
      
      date_designated: "June 2, 1978",
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
      
      date_designated: "March 2, 2012",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.995833, 40.73],
    },
    properties: {
      id: 102,
      name: "Triangle Shirtwaist Factory",
      description:
        "Site of the Triangle Shirtwaist Factory fire, one of the worst industrial disasters in the U.S., which led to many workplace reforms",
      
      date_designated: "July 17, 1971",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.012222, 40.708056],
    },
    properties: {
      id: 103,
      name: "Trinity Church",
      description: "Founded in 1697, Trinity Church has served New York for over 300 years. The current building was designed by Richard Upjohn and consecrated in 1846, and is considered one of the first and finest examples of Neo-Gothic architecture in the country. Notable parishioners such as Alexander Hamilton are buried in the historic churchyard.",
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
      
      date_designated: "May 11, 1976",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.990556, 40.735556],
    },
    properties: {
      id: 105,
      name: "Union Square",
      description:
        "The political heart of Manhattan; many protests begin or end here",
      
      date_designated: "December 9, 1997",
      image_caption: "Union Square Park, 1936",
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
      
      date_designated: "July 17, 1991",
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
      
      date_designated: "December 8, 1976",
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
      coordinates: [-73.896389, 40.89],
    },
    properties: {
      id: 110,
      name: "Van Cortlandt House",
      description:
        "Mansion for the Van Cortlandt family built in 1748 and used during the American Revolution",
      date_designated: "December 24, 1976",
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
      date_designated: "November 5, 1961",
      link: "https://www.nps.gov/parkhistory/online_books/explorers/sitec50.htm",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.251944, 40.498889],
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
      coordinates: [-73.873333, 40.889167],
    },
    properties: {
      id: 113,
      name: "Woodlawn Cemetery",
      description:
        "Illustrates transition from rural cemetery to 20th-century styles; notable dead buried here include Robert Moses and R.H. Macy",
      
      date_designated: "June 23, 2011",
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
      coordinates: [-73.920833, 40.644444],
    },
    properties: {
      id: 115,
      name: "Wyckoff House",
      description: "Oldest surviving Dutch saltbox frame house in America",
      
      date_designated: "December 24, 1967",
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
      
      date_designated: "December 24, 1976",
    },
  },
];

export default landmarks;
