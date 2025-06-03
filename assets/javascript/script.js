/*global $, jQuery, setInterval, clearInterval, setTimeout, document */
/*global alert */
/*global confetti */


const questions = {
    entertainment: {
        average: [{
                answer: "Robert Downey Jr.",
                options: ["Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
                question: "Which actor played Iron Man in the" +
                    "Marvel Cinematic Universe?"
            },
            {
                answer: "Frozen",
                options: ["Frozen", "Tangled", "Beauty and the Beast"],
                question: "In which movie did Elsa sing 'Let It Go'?"
            },
            {
                answer: "Breaking Bad",
                options: ["Breaking Bad", "The Sopranos", "Mad Men"],
                question: "Which TV series featured a character named Walter White?"
            },
            {
                answer: "Emma Watson",
                options: ["Emma Watson", "Kristen Stewart", "Natalie Portman"],
                question: "Who played Hermione Granger in Harry Potter films?"
            },
            {
                answer: "Madonna",
                options: ["Beyoncé", "Lady Gaga", "Madonna"],
                question: "Which pop star is known as the 'Queen of Pop'?"
            },
            {
                answer: "The Simpsons",
                options: ["The Simpsons", "Family Guy", "South Park"],
                question: "Which animated series has a dog named" +
                    "'Santa's Little Helper'?"
            },
            {
                answer: "Forrest Gump",
                options: ["Forrest Gump", "The Shawshank Redemption", "Titanic"],
                question: "Which movie won the Oscar for Best Picture in 1994?"
            },
            {
                answer: "Batman",
                options: ["Spider-Man", "Superman", "Batman"],
                question: "Which superhero is known as 'The Dark Knight'?"
            },
            {
                answer: "Avatar",
                options: ["Avatar", "Aladdin", "Frozen 2"],
                question: "What 2019 film became the top-grossing movie," +
                    "passing Endgame?"
            },
            {
                answer: "Lady Gaga",
                options: ["Lady Gaga", "Kesha", "Ariana Grande"],
                question: "Which singer's real name is Stefani Germanotta?"
            }
        ],
        easy: [{
                answer: "Leonardo DiCaprio",
                options: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio"],
                question: "Who played Jack Dawson in the movie Titanic?"
            },
            {
                answer: "Hogwarts",
                options: ["Hogwarts", "Hogwarts Academy", "The Magic School"],
                question: "What is the wizard school in Harry Potter called?"
            },
            {
                answer: "Finding Nemo",
                options: ["Shark Tale", "Finding Nemo", "The Little Mermaid"],
                question: "Which animated film has Marlin searching for his son?"
            },
            {
                answer: "Michael Jackson",
                options: ["Elvis Presley", "Michael Jackson", "Prince"],
                question: "Which singer is known as the 'King of Pop'?"
            },
            {
                answer: "1977",
                options: ["1975", "1977", "1980"],
                question: "In which year did the first Star Wars movie release?"
            },
            {
                answer: "Batman",
                options: ["Spider-Man", "Superman", "Batman"],
                question: "Who is the superhero alter ego of Bruce Wayne?"
            },
            {
                answer: "Star Wars",
                options: ["Star Wars", "Jurassic Park", "The Lord of the Rings"],
                question: "Which movie has the line, 'May the Force be with you'?"
            },
            {
                answer: "Friends",
                options: ["Friends", "The Big Bang Theory", "Seinfeld"],
                question: "Which TV show is known for the phrase 'How you doin'?'"
            },
            {
                answer: "Super Mario",
                options: ["Super Mario", "Sonic the Hedgehog", "Minecraft"],
                question: "Which video game features a character named Luigi?"
            },
            {
                answer: "Madonna",
                options: ["Madonna", "Beyoncé", "Lady Gaga"],
                question: "Which singer has hits like 'Like a Virgin'" +
                    "and 'Material Girl'?"
            }
        ],
        hard: [{
                answer: "Heath Ledger",
                options: ["Jared Leto", "Heath Ledger", "Jack Nicholson"],
                question: "Who played the Joker in the 2008 film 'The Dark Knight'?"
            },
            {
                answer: "Christopher Nolan",
                options: ["Steven Spielberg", "Christopher Nolan", "Quentin Tarantino"],
                question: "Who directed the movie 'Inception'?"
            },
            {
                answer: "Beauty and the Beast",
                options: ["Toy Story", "Shrek", "Beauty and the Beast"],
                question: "First animated film nominated for Best Picture Oscar?"
            },
            {
                answer: "Prince",
                options: ["Michael Jackson", "Prince", "David Bowie"],
                question: "Which music artist was known for the song 'Purple Rain'?"
            },
            {
                answer: "Kelly Clarkson",
                options: ["Kelly Clarkson", "Justin Guarini", "Carrie Underwood"],
                question: "Who won the first season of 'American Idol'?"
            },
            {
                answer: "Star Wars",
                options: ["Star Trek", "Star Wars", "Guardians of the Galaxy"],
                question: "Which franchise features a character named Luke Skywalker?"
            },
            {
                answer: "Pink Floyd",
                options: ["Led Zeppelin", "The Rolling Stones", "Pink Floyd"],
                question: "Which band made the album 'The Dark Side of the Moon'?"
            },
            {
                answer: "Inception",
                options: ["Interstellar", "Inception", "The Prestige"],
                question: "Which 2010 film featured a heist in the subconscious?"
            },
            {
                answer: "Robert Downey Jr.",
                options: ["Chris Hemsworth", "Robert Downey Jr.", "Chris Evans"],
                question: "Who played Tony Stark in the Marvel Cinematic Universe?"
            },
            {
                answer: "Johannes Vermeer",
                options: ["Vincent van Gogh", "Johannes Vermeer", "Claude Monet"],
                question: "Which artist painted 'Girl with a Pearl Earring'?"
            }
        ]
    },
    generalKnowledge: {
        average: [{
                answer: "Pacific",
                options: ["Atlantic", "Indian", "Pacific"],
                question: "Which ocean is the largest in the world?"
            },
            {
                answer: "Tokyo",
                options: ["Seoul", "Beijing", "Tokyo"],
                question: "What is the capital of Japan?"
            },
            {
                answer: "William Shakespeare",
                options: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
                question: "Who wrote the play 'Romeo and Juliet'?"
            },
            {
                answer: "Asia",
                options: ["Africa", "Asia", "Europe"],
                question: "What is the largest continent by land area?"
            },
            {
                answer: "Australia",
                options: ["Australia", "Brazil", "South Africa"],
                question: "In which country would you find the Great Barrier Reef?"
            },
            {
                answer: "Leonardo da Vinci",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
                question: "Which famous artist painted the 'Mona Lisa'?"
            },
            {
                answer: "Blue Whale",
                options: ["Elephant", "Blue Whale", "Giraffe"],
                question: "What is the largest mammal in the world?"
            },
            {
                answer: "Vatican City",
                options: ["Monaco", "Vatican City", "Nauru"],
                question: "What is the smallest country in the world?"
            },
            {
                answer: "Canada",
                options: ["USA", "Canada", "Norway"],
                question: "Which country is famous for producing Maple Syrup?"
            },
            {
                answer: "Nitrogen",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
                question: "Which gas makes up most of the Earth's atmosphere?"
            }
        ],
        easy: [{
                answer: "Paris",
                options: ["Lyon", "Nice", "Paris"],
                question: "What is the capital city of France?"
            },
            {
                answer: "Mars",
                options: ["Venus", "Mars", "Jupiter"],
                question: "What planet is known as the 'Red planet'?"
            },
            {
                answer: "H2O",
                options: ["H2O", "CO2", "O2"],
                question: "What is the chemical symbol for water?"
            },
            {
                answer: "7",
                options: ["5", "6", "7"],
                question: "How many continents are there?"
            },
            {
                answer: "Russia",
                options: ["Canada", "Russia", "USA"],
                question: "What is the largest country by land area?"
            },
            {
                answer: "Apple",
                options: ["Banana", "Apple", "Orange"],
                question: "Which fruit is known for keeping the doctor away?"
            },
            {
                answer: "Euro",
                options: ["Euro", "Pound", "Dollar"],
                question: "What is the currency of Europe?"
            },
            {
                answer: "Lion",
                options: ["Tiger", "Lion", "Elephant"],
                question: "Which animal is known as the 'King of the Jungle'?"
            },
            {
                answer: "New York City",
                options: ["Los Angeles", "New York City", "Chicago"],
                question: "Which city is known as the Big Apple?"
            },
            {
                answer: "Isaac Newton",
                options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei"],
                question: "Who discovered gravity?"
            }
        ],
        hard: [{
                answer: "Au",
                options: ["Au", "Ag", "Gd"],
                question: "What is the chemical symbol for gold?"
            },
            {
                answer: "Tungsten",
                options: ["Tungsten", "Wolfram", "Wolframium"],
                question: "Which element has the chemical symbol 'W'?"
            },
            {
                answer: "1912",
                options: ["1912", "1905", "1920"],
                question: "In which year did the Titanic sink?"
            },
            {
                answer: "Gabriel García Márquez",
                options: ["Jorge Luis Borges",
                    "G. García Márquez",
                    "Mario Vargas Llosa"
                ],
                question: "Who wrote the novel 'One Hundred Years of Solitude'?"
            },
            {
                answer: "Nile River",
                options: ["Amazon River", "Nile River", "Yangtze River"],
                question: "What is the longest river in the world?"
            },
            {
                answer: "Salvador Dalí",
                options: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh"],
                question: "Which artist painted 'The Persistence of Memory'?"
            },
            {
                answer: "Qin Shi Huang",
                options: ["Qin Shi Huang", "Han Wudi", "Li Shimin"],
                question: "Who was the first emperor of China?"
            },
            {
                answer: "Venus",
                options: ["Mars", "Venus", "Mercury"],
                question: "Which planet is known as the 'Morning Star'?"
            },
            {
                answer: "Greece",
                options: ["Greece", "France", "United States"],
                question: "In which country was the first modern Olympic Games held?"
            },
            {
                answer: "Ulaanbaatar",
                options: ["Ulaanbaatar", "Astana", "Tashkent"],
                question: "What is the capital of Mongolia?"
            }
        ]
    },
    history: {
        average: [{
                answer: "Florence Nightingale",
                options: ["Clara Barton", "Florence Nightingale", "Dorothea Dix"],
                question: "Who was the famous nurse during the Crimean War?"
            },
            {
                answer: "Qin Shi Huang",
                options: ["Qin Shi Huang", "Emperor Wu", "Emperor Taizong"],
                question: "Who was the first emperor of China?"
            },
            {
                answer: "The assassination of Archduke Franz Ferdinand",
                options: ["Archduke's assassination",
                    "Poland invasion",
                    "Lusitania sinking"
                ],
                question: "Which event triggered the start of World War I?"
            },
            {
                answer: "1776",
                options: ["1776", "1781", "1790"],
                question: "In which year did the United States declare independence?"
            },
            {
                answer: "Winston Churchill",
                options: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee"],
                question: "Who was British Prime Minister during most of WWII?"
            },
            {
                answer: "Croatia",
                options: ["Croatia", "Poland", "Romania"],
                question: "Which country was the last to join the European Union?"
            },
            {
                answer: "Amelia Earhart",
                options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby"],
                question: "Who was the first woman to fly solo across Atlantic?"
            },
            {
                answer: "Inca",
                options: ["Aztecs", "Maya", "Inca"],
                question: "Which ancient civilization built the Machu Picchu?"
            },
            {
                answer: "Iran",
                options: ["Iran", "Iraq", "Afghanistan"],
                question: "Which country was formerly known as Persia?"
            },
            {
                answer: "1989",
                options: ["1987", "1989", "1991"],
                question: "In which year did the Berlin Wall fall?"
            }
        ],
        easy: [{
                answer: "George Washington",
                options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
                question: "Who was the first President of the United States?"
            },
            {
                answer: "The Battle of Lexington and Concord",
                options: ["Boston Tea Party", "Bunker Hill", "Lexington and Concord"],
                question: "Which event was the start of the American Revolution?"
            },
            {
                answer: "United States",
                options: ["Russia", "United States", "China"],
                question: "Which country was the first to send a man to the moon?"
            },
            {
                answer: "1945",
                options: ["1940", "1939", "1945"],
                question: "What year did World War II end?"
            },
            {
                answer: "Cleopatra",
                options: ["Cleopatra", "Elizabeth I", "Nefertiti"],
                question: "Who was the famous queen of ancient Egypt?"
            },
            {
                answer: "Mayflower",
                options: ["Mayflower", "Santa Maria", "The Beagle"],
                question: "Which ship carried the Pilgrims to America in 1620?"
            },
            {
                answer: "Adolf Hitler",
                options: ["Adolf Hitler", "Joseph Stalin", "Winston Churchill"],
                question: "Who was the leader of Nazi Germany during World War II?"
            },
            {
                answer: "Sputnik 1",
                options: ["Apollo 11", "Sputnik 1", "Hubble"],
                question: "What was the first man-made satellite launched into space?"
            },
            {
                answer: "1912",
                options: ["1912", "1905", "1920"],
                question: "In which year did the Titanic sink?"
            },
            {
                answer: "The Roman Empire",
                options: ["Roman Empire", "Ottoman Empire", "British Empire"],
                question: "Which empire was ruled by Julius Caesar?"
            }
        ],
        hard: [{
                answer: "Cleopatra VII",
                options: ["Cleopatra VII", "Nefertiti", "Ramses II"],
                question: "Who was the last Pharaoh of Egypt?"
            },
            {
                answer: "Battle of Waterloo",
                options: ["Battle of Leipzig", "Battle of Waterloo", "Austerlitz"],
                question: "Which battle was Napoleon Bonaparte's final defeat?"
            },
            {
                answer: "Ogedei Khan",
                options: ["Kublai Khan", "Ogedei Khan", "Jebe"],
                question: "Who was the leader of the Mongol Empire after Genghis Khan?"
            },
            {
                answer: "Russia",
                options: ["Russia", "Canada", "Mexico"],
                question: "Which country sold Alaska to the U.S. in 1867?"
            },
            {
                answer: "1066",
                options: ["1066", "1204", "1199"],
                question: "In which year did the Battle of Hastings take place?"
            },
            {
                answer: "Religious tensions",
                options: ["Religious tensions",
                    "Famine and poverty",
                    "Western imperialism"
                ],
                question: "What was the primary cause of the Taiping Rebellion?"
            },
            {
                answer: "Treaty of Versailles",
                options: ["Treaty of Paris", "Versailles", "Brest-Litovsk"],
                question: "Which treaty ended the First World War?"
            },
            {
                answer: "Sumerians",
                options: ["Sumerians", "Egyptians", "Indus Valley"],
                question: "Which civilization developed the first known writing?"
            },
            {
                answer: "Saul",
                options: ["David", "Solomon", "Saul"],
                question: "Who was the first king of the united Kingdom of Israel?"
            },
            {
                answer: "Mexican-American War",
                options: ["Mexican-American War", "War of 1812", "Texas Revolution"],
                question: "Which war was fought between U.S. and Mexico, 1846-1848?"
            }
        ]
    },
    mathematics: {
        average: [{
                answer: "105",
                options: ["100", "105", "115"],
                question: "What is 15 × 7?"
            },
            {
                answer: "40 cm²",
                options: ["40 cm²", "30 cm²", "10 cm²"],
                question: "Area of a rectangle with length 8 cm and width 5 cm?"
            },
            {
                answer: "12",
                options: ["11", "12", "13"],
                question: "What is 144 ÷ 12?"
            },
            {
                answer: "3.14",
                options: ["3.12", "3.14", "3.16"],
                question: "What is the value of π (pi) rounded to two decimal places?"
            },
            {
                answer: "25",
                options: ["15", "20", "25"],
                question: "What is 5² (5 squared)?"
            },
            {
                answer: "24 cm",
                options: ["24 cm", "36 cm", "18 cm"],
                question: "What is the perimeter of a square with side length 6 cm?"
            },
            {
                answer: "27",
                options: ["29", "27", "12"],
                question: "What is the product of 3 and 9?"
            },
            {
                answer: "4",
                options: ["3", "4", "6"],
                question: "What is 32 ÷ 8?"
            },
            {
                answer: "180°",
                options: ["90°", "180°", "270°"],
                question: "What is the sum of the angles in a triangle?"
            },
            {
                answer: "8",
                options: ["8", "9", "10"],
                question: "What is the square root of 64?"
            }
        ],
        easy: [{
                answer: "8",
                options: ["6", "8", "9"],
                question: "What is 5 + 3?"
            },
            {
                answer: "8",
                options: ["6", "7", "8"],
                question: "What is 12 - 4?"
            },
            {
                answer: "18",
                options: ["16", "18", "19"],
                question: "What is 9 × 2?"
            },
            {
                answer: "6",
                options: ["6", "7", "8"],
                question: "What is 36 ÷ 6?"
            },
            {
                answer: "21",
                options: ["20", "21", "23"],
                question: "What is 15 + 6?"
            },
            {
                answer: "7",
                options: ["6", "7", "9"],
                question: "What is the square root of 49?"
            },
            {
                answer: "15",
                options: ["15", "11", "13"],
                question: "What is 25 - 10?"
            },
            {
                answer: "21",
                options: ["20", "21", "23"],
                question: "What is 7 × 3?"
            },
            {
                answer: "4",
                options: ["2", "4", "5"],
                question: "What is 16 ÷ 4?"
            },
            {
                answer: "19",
                options: ["18", "19", "20"],
                question: "What is 10 + 9?"
            }
        ],
        hard: [{
                answer: "323",
                options: ["323", "338", "345"],
                question: "What is the value of 17 × 19?"
            },
            {
                answer: "6x + 5",
                options: ["6x + 5", "6x - 5", "3x + 5"],
                question: "What is the derivative of f(x) = 3x² + 5x - 7?"
            },
            {
                answer: "153.94 cm²",
                options: ["153.94 cm²", "154.57 cm²", "156.96 cm²"],
                question: "Area of a circle with radius 7 cm? (Use π = 3.14)"
            },
            {
                answer: "3",
                options: ["1", "3", "4"],
                question: "What is the value of log₁₀(1000)?"
            },
            {
                answer: "x = 6",
                options: ["x = 4", "x = 6", "x = 7"],
                question: "What is the solution to the equation 2x + 3 = 15?"
            },
            {
                answer: "2",
                options: ["-2", "2", "10"],
                question: "What is the determinant of the 2x2 matrix [2, 3; 4, 5]?"
            },
            {
                answer: "1",
                options: ["0", "1", "√2/2"],
                question: "What is the value of sin(90°)?"
            },
            {
                answer: "720°",
                options: ["720°", "1080°", "1440°"],
                question: "What is the sum of the interior angles of a hexagon?"
            },
            {
                answer: "2.71",
                options: ["2.71", "2.72", "3.16"],
                question: "What is the value of e rounded to two decimals?"
            },
            {
                answer: "x² + C",
                options: ["x² + C", "x²", "2x² + C"],
                question: "What is the integral of f(x) = 2x with respect to x?"
            }
        ]
    },
    science: {
        average: [{
                answer: "Au",
                options: ["Au", "Ag", "Pb"],
                question: "What is the chemical symbol for gold?"
            },
            {
                answer: "Jupiter",
                options: ["Jupiter", "Saturn", "Mars"],
                question: "Which planet has the most moons in our solar system?"
            },
            {
                answer: "Chemical energy",
                options: ["Kinetic energy", "Chemical energy", "Thermal energy"],
                question: "What type of energy is stored in food?"
            },
            {
                answer: "Nitrogen",
                options: ["Oxygen", "Carbon dioxide", "Nitrogen"],
                question: "What is the most common gas in the Earth's atmosphere?"
            },
            {
                answer: "Nucleus",
                options: ["Mitochondria", "Nucleus", "Cytoplasm"],
                question: "Which part of the cell contains the genetic material?"
            },
            {
                answer: "Evaporation",
                options: ["Freezing", "Condensation", "Evaporation"],
                question: "What is the process by which a liquid turns into a gas?"
            },
            {
                answer: "Skin",
                options: ["Heart", "Brain", "Skin"],
                question: "What is the largest organ in the human body?"
            },
            {
                answer: "Deoxyribonucleic acid",
                options: ["DNA", "Deoxyribonate acid", "Dioxide nucleic acid"],
                question: "What does DNA stand for?"
            },
            {
                answer: "7",
                options: ["7", "5", "10"],
                question: "What is the pH level of pure water?"
            },
            {
                answer: "100°C",
                options: ["100°C", "90°C", "120°C"],
                question: "What is the boiling point of water at sea level?"
            }
        ],
        easy: [{
                answer: "The Sun",
                options: ["The Moon", "The Sun", "The Earth itself"],
                question: "What is the main source of energy for the Earth?"
            },
            {
                answer: "Heart",
                options: ["Lungs", "Heart", "Brain"],
                question: "Which organ in the human body pumps blood?"
            },
            {
                answer: "Photosynthesis",
                options: ["Photosynthesis", "Respiration", "Digestion"],
                question: "What process do plants use to make food with sunlight?"
            },
            {
                answer: "206",
                options: ["206", "220", "198"],
                question: "How many bones are in the adult human body?"
            },
            {
                answer: "Skin",
                options: ["Heart", "Lungs", "Skin"],
                question: "What is the largest organ in the human body?"
            },
            {
                answer: "Carbon dioxide",
                options: ["Oxygen", "Carbon dioxide", "Nitrogen"],
                question: "What gas do plants absorb for photosynthesis?"
            },
            {
                answer: "Nitrogen",
                options: ["Oxygen", "Nitrogen", "Carbon"],
                question: "What is the most common gas in the Earth's atmosphere?"
            },
            {
                answer: "Amphibian",
                options: ["Mammal", "Amphibian", "Reptile"],
                question: "What type of animal is a frog?"
            },
            {
                answer: "Mercury",
                options: ["Mercury", "Venus", "Earth"],
                question: "Which planet is closest to the Sun?"
            },
            {
                answer: "Roots",
                options: ["Leaves", "Roots", "Stem"],
                question: "What part of the plant absorbs water from the soil?"
            }
        ],
        hard: [{
                answer: "Oxygen",
                options: ["Oxygen", "Silicon", "Aluminum"],
                question: "What is the most abundant element in the Earth's crust?"
            },
            {
                answer: "Protein synthesis",
                options: ["Protein synthesis", "DNA replication", "Energy production"],
                question: "What is the main function of ribosomes in a cell?"
            },
            {
                answer: "Photosynthesis",
                options: ["Photosynthesis", "Respiration", "Fermentation"],
                question: "What process converts light to chemical energy in plants?"
            },
            {
                answer: "Albert Einstein",
                options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
                question: "Which scientist developed the theory of general relativity?"
            },
            {
                answer: "Covalent bond",
                options: ["Ionic bond", "Covalent bond", "Metallic bond"],
                question: "What bond involves sharing electron pairs between atoms?"
            },
            {
                answer: "Protium",
                options: ["Deuterium", "Tritium", "Protium"],
                question: "What is the most common isotope of hydrogen?"
            },
            {
                answer: "Saturn",
                options: ["Saturn", "Jupiter", "Uranus"],
                question: "Which planet has a moon named Titan, larger than Mercury?"
            },
            {
                answer: "Refraction",
                options: ["Reflection", "Refraction", "Diffraction"],
                question: "What causes light to bend in different mediums?"
            },
            {
                answer: "Mycology",
                options: ["Mycology", "Botany", "Zoology"],
                question: "What is the study of fungi called?"
            },
            {
                answer: "Oganesson",
                options: ["Uranium", "Oganesson", "Plutonium"],
                question: "What element has the highest atomic number today?"
            }
        ]
    },
    sport: {
        average: [{
                answer: "France",
                options: ["Germany", "France", "Brazil"],
                question: "Who won the 2018 FIFA World Cup?"
            },
            {
                answer: "LeBron James",
                options: ["Michael Jordan", "Kobe Bryant", "LeBron James"],
                question: "Which NBA player is known as 'King James'?"
            },
            {
                answer: "India",
                options: ["India", "Japan", "Brazil"],
                question: "Which country is famous for the sport of cricket?"
            },
            {
                answer: "Kansas City Chiefs",
                options: ["Patriots", "Chiefs", "49ers"],
                question: "Which team won the Super Bowl in 2020?"
            },
            {
                answer: "Rafael Nadal",
                options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic"],
                question: "Which tennis player won the most Grand Slam titles?"
            },
            {
                answer: "England",
                options: ["Australia", "England", "New Zealand"],
                question: "Which country is the birthplace of the sport of rugby?"
            },
            {
                answer: "1896",
                options: ["1896", "1900", "1912"],
                question: "In what year did the first modern Olympic Games take place?"
            },
            {
                answer: "Kareem Abdul-Jabbar",
                options: ["Michael Jordan", "LeBron James", "Kareem Abdul-Jabbar"],
                question: "Who is the all-time top scorer in the history of the NBA?"
            },
            {
                answer: "United Kingdom",
                options: ["Germany", "Italy", "United Kingdom"],
                question: "Which country has the most F1 World Championship titles?"
            },
            {
                answer: "Tennis",
                options: ["Football", "Tennis", "Golf"],
                question: "Which sport is associated with the Wimbledon tournament?"
            }
        ],
        easy: [{
                answer: "Baseball",
                options: ["Football", "Basketball", "Baseball"],
                question: "Which sport is known as 'America's pastime'?"
            },
            {
                answer: "11",
                options: ["7", "10", "11"],
                question: "How many players are there on a soccer team?"
            },
            {
                answer: "Brazil",
                options: ["China", "Brazil", "Russia"],
                question: "Which country hosted the 2016 Summer Olympics?"
            },
            {
                answer: "Tennis",
                options: ["Tennis", "Golf", "Basketball"],
                question: "Which sport does Serena Williams play?"
            },
            {
                answer: "Basketball",
                options: ["Basketball", "Football", "Volleyball"],
                question: "In which sport would you perform a slam dunk?"
            },
            {
                answer: "Yellow",
                options: ["Yellow", "Green", "Red"],
                question: "What color is the Tour de France winner's jersey?"
            },
            {
                answer: "Hockey",
                options: ["Football", "Hockey", "Rugby"],
                question: "In which sport would you find a puck?"
            },
            {
                answer: "France",
                options: ["Brazil", "France", "Germany"],
                question: "Which team won the 2018 FIFA World Cup?"
            },
            {
                answer: "Barry Bonds",
                options: ["Barry Bonds", "Babe Ruth", "Hank Aaron"],
                question: "Who holds the record for the most home runs in MLB history?"
            },
            {
                answer: "Golf",
                options: ["Tennis", "Golf", "Bowling"],
                question: "Which sport is known for the term 'hole-in-one'?"
            }
        ],
        hard: [{
                answer: "New Zealand",
                options: ["Australia", "New Zealand", "South Africa"],
                question: "Which country won the first Rugby World Cup in 1987?"
            },
            {
                answer: "Mohamed Salah",
                options: ["Mohamed Salah", "Harry Kane", "Alan Shearer"],
                question: "Who holds the record for most goals" +
                    "in a Premier League season?"
            },
            {
                answer: "Jack Nicklaus",
                options: ["Jack Nicklaus", "Tiger Woods", "Arnold Palmer"],
                question: "Which golfer has won the most major championships?"
            },
            {
                answer: "Usain Bolt",
                options: ["Usain Bolt", "Carl Lewis", "Tyson Gay"],
                question: "Who is the fastest sprinter in the history of the 100m race?"
            },
            {
                answer: "France",
                options: ["Brazil", "France", "Argentina"],
                question: "Which country won the 1998 FIFA World Cup?"
            },
            {
                answer: "1998",
                options: ["1998", "2000", "2003"],
                question: "When did Michael Jordan retire from" +
                    "basketball the second time?"
            },
            {
                answer: "Roger Federer",
                options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic"],
                question: "Which tennis player first won 20 Grand Slam titles?"
            },
            {
                answer: "Michael Phelps",
                options: ["Michael Phelps", "Ian Thorpe", "Ryan Lochte"],
                question: "Who is the most decorated Olympic swimmer of all time?"
            },
            {
                answer: "Houston Rockets",
                options: ["Chicago Bulls", "Houston Rockets", "Los Angeles Lakers"],
                question: "Which team won the NBA Championship in 1995?"
            },
            {
                answer: "Lewis Hamilton",
                options: ["Sebastian Vettel", "Lewis Hamilton", "Ayrton Senna"],
                question: "Which F1 driver holds the record for most pole positions?"
            }
        ]
    }
};
//Convert string into Title case format
function toTitleCase(str) {
    return str
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .replace(/\s+/g, " ")
        .trim();
}

let currentTopic = "";
let currentDifficulty = "";
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let totalTimeSpent = 0;
let timerInterval = null;

function startQuiz(topic, difficulty) {
    currentTopic = topic;
    currentDifficulty = difficulty;
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 15;
    totalTimeSpent = 0;

    $("#quizContent").empty();
    $("#quizModalLabel").text(
        `${toTitleCase(topic)} Quiz - ${toTitleCase(difficulty)}`
    );
    const $submitBtn = $("#submitBtn");
    $submitBtn
        .text("Submit Answer")
        .removeClass("d-none")
        .prop("disabled", false)
        .off("click")
        .on("click", submitAnswer);
    if (timerInterval !== null) {
        clearInterval(timerInterval);
    }
    loadQuestion();
}

function loadQuestion() {
    const $quizContent = $("#quizContent");
    const $submitBtn = $("#submitBtn");
    const $timerDisplay = $("#timerDisplay");

    const totalQuestions = questions[currentTopic][currentDifficulty].length;
    const question = questions[currentTopic]
        [currentDifficulty]
        [currentQuestionIndex];

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timeLeft = 15;
    $timerDisplay.html(
        `<i class="fa-solid fa-stopwatch"></i> Time left: ${timeLeft}s`
    );
    $submitBtn.prop("disabled", false);

    if (!question) {
        const maxTime = totalQuestions * 15;
        const timeRemainingPercentage = 100 - (totalTimeSpent / maxTime) * 100;
        const timeRemaining = 150 - totalTimeSpent;
        const minutes = Math.floor(totalTimeSpent / 60);
        const seconds = totalTimeSpent % 60;
        const timeFormatted =
            (minutes > 0 ? `${minutes}m
      ${seconds}s` :
                `${seconds}s`);
        const timeRemainingFormatted = `${timeRemaining}s`;

        $quizContent.html(`
      <h4>Quiz Completed!</h4>
      <p>Your score: ${score} out of ${totalQuestions}</p>
      <div class="progress mt-2" style="height: 20px;">
        <div class="progress-bar bg-danger" role="progressbar"
          style="width: ${100 - timeRemainingPercentage}%"
          aria-valuenow="${100 - timeRemainingPercentage}"
          aria-valuemin="0" aria-valuemax="100">
        </div>
        <div class="progress-bar bg-success" role="progressbar"
          style="width: ${timeRemainingPercentage}%"
          aria-valuenow="${timeRemainingPercentage}"
          aria-valuemin="0" aria-valuemax="100">
          <div>Time remaining: ${timeRemainingFormatted}</div>
        </div>
      </div>
      <div class="timeRemaining mt-2">It took you: ${timeFormatted}</div>
    `);

        clearInterval(timerInterval);
        $timerDisplay.html(`<i class="fa-solid fa-stopwatch"></i> Quiz finished`);

        if (score < totalQuestions) {
            $submitBtn.text("Try Again").off("click").on("click", tryAgain);
        } else {
            $submitBtn.addClass("d-none");
            $quizContent.append(
                `<p class="text-success fw-bold mt-2">Perfect Score! 🎉</p>`
            );
            triggerConfetti();
        }

        return;
    }

    const optionsHtml = question.options
        .map(
            (opt, i) => `
    <div class="form-check">
      <input type="radio" name="answer" id="option${i}"
        value="${opt}" class="form-check-input">
      <label class="form-check-label" for="option${i}">${opt}</label>
    </div>
  `
        )
        .join("");

    $quizContent.html(`
    <h4>Question ${currentQuestionIndex + 1}: ${question.question}</h4>
    <form id="quizForm">${optionsHtml}</form>
  `);

    $submitBtn.text("Submit Answer").removeClass("d-none");

    timerInterval = setInterval(function() {
        timeLeft -= 1;
        $timerDisplay.html(
            `<i class="fa-solid fa-stopwatch"></i> Time left: ${timeLeft}s`
        );

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            $timerDisplay.html(`<i class="fa-solid fa-stopwatch"></i> Time’s up!`);
            $submitBtn.prop("disabled", true);
            totalTimeSpent += 15;

            setTimeout(function() {
                currentQuestionIndex += 1;
                loadQuestion();
            }, 1000);
        }
    }, 1000);
}

function submitAnswer() {
    const $form = $("#quizForm");
    const selectedAnswer = $form.find("input[name='answer']:checked").val();

    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    const correctAnswer =
        questions[currentTopic][currentDifficulty][currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score += 1;
    }

    totalTimeSpent += 15 - timeLeft;
    clearInterval(timerInterval);
    currentQuestionIndex += 1;
    loadQuestion();
}

function tryAgain() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    startQuiz(currentTopic, currentDifficulty);
}

function triggerConfetti() {
    try {
        if (typeof confetti === "function") {
            confetti({
                colors: ["#28a745", "#ffffff", "#ffd700"],
                duration: 30000,
                origin: {
                    y: 0.6
                },
                particleCount: 1000,
                spread: 1000
            });
        } else {
            $("#quizContent").append(
                `<p class="text-warning">Confetti animation unavailable.</p>`
            );
        }
    } catch (error) {
        $("#quizContent").append(
            `<p class="text-warning">Confetti animation failed to load.</p>`
        );
    }
}