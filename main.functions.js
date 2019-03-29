/* QUESTIONS AND ANSWERS ARRAY AND FUNCTIONS */

// [DISABLED. IF YOU WANT TO LOAD AN EXTERNAL TXT FILE, UNCOMMENT THE LINES BELOW. THE QUESTIONS AND ANSWERS ARRAY IS WRAPPED IN A FUNCTION BECAUSE IT NEEDS THE VALUE OF THAT LOADED (DATA)]
//$.get('elsc.txt', function(data){
//	loaded(data);
//});

//function loaded(data) {
	
// QUESTIONS AND ANSWERS ARRAY
/* 
HOW TO ADD ANSWERS?
1. Wrap the question in a double quote.
2. add a colon (:) after the closing of that wrapped question.
3. Do the same in step #1 for the answer and add a comma (,) after that closing.
4. Remember to check if the question or the answer has a double quote. If it has, escape it by adding / eg. (\").
*/
var array_questions_answer = {

// PE WEEK 11-20
"A movement to end a routine that draws attention to the motion of losing control."
: "True",
"Breakdancing has standard moves or steps."
: "False",
"Battles refer to an open-forum, mock exhibition"
: "False",
"Breakdancing has provided youth a substitute for violent urban street gangs."
: "True",
"Clive Campbell is also known as DJ Hendrix"
: "False",
"Movement that requires momentum and physical power to perform."
: "power moves",
"Movements like head spinning, swipes and flare belong to _________."
: "power moves",
"Series of steps performed from a standing position."
: "toprock",
"Which is not a form of street jazz dance?"
: "tap dance",
"Where did breakdance originated?"
: "New York, USA",
"Which of the following is a characteristic of Robotic dance?"
: "pops and locks",
"floorwork"
: "downrock",
"Who is Clive Campbell?"
: "a deejay",
"Which of the following is the least significant advantage of dancing?"
: "Aids in self-confidence",
"Breakdancing emphasizes on movement, creativity, elements of danger and ________."
: "energy",
"Who created the locking style of funk dance?"
: "Don Campbell",
"A dance technique where muscles are contracted or relaxed, causing a jerk in the dancer’s body."
: "Popping",
"Pimp Walk"
: "L",
"Also known as a \“backslide\”"
: "Moonwalk",
"The time signature suited for \“popping\” music."
: "4/4",
"Funky Guitar"
: "L",
"Robot"
: "P",
"A quick, extended pointing gesture coming from opposite shoulder."
: "Locking",
"Scarecrow"
: "P",
"A quick, extended pointing gesture coming from opposite shoulder."
: "Point",
"Knee Drop"
: "L",
"Lowrider"
: "P",
"A shuffle hop move, either at the sides or front and back."
: "skeeter rabbit",
"Whichaway"
: "L",
"A leg-orientation style focusing on fast moving legs, knee rolls and twisting feet."
: "crazy legs",
"Who made the dance ‘Electric Boogaloo’?"
: "Sam Solomon",
"Tutting is inspired from the art of ______."
: "Ancient Egypt",
"Puppet"
: "P",
"Strobing"
: "P",
"It means ‘freezing from a fast movement’."
: "locking",
"Strutting"
: "P",
"If Iloilo City has Dinagyang, what festival does Aklan have?"
: "Ati-atihan",
"Religion brought by Spaniards to the Philippines"
: "Christianity",
"What is the meaning of \“Sulog\”?"
: "water current moving",
"Chief of Mactan, who Magellan had a fight with."
: "Lapu-lapu",
"A Spanish Voyager who arrived in Cebu to continue the purpose of Spain."
: "Miguel Lopez de Legazpi",
"When did Ferdinand Magellan landed in Cebu?"
: "April 7, 1521",
"A dance ritual in honor of the miraculous image of the Sto. Niño."
: "Sinulog",
"What is the significance of the cross that Magellan wants to plant on the Island of Mactan?"
: "To mark a territory",
"The name of Rajah Humabon’s wife, when she became a queen."
: "Juana",
"What is the meaning of \“Dinagyang\”?"
: "Merrymaking",
"What do you call the mascot in Dinagyang?"
: "Dagoy",
"Who organized the first Sinulog Festival?"
: "David S. Odilao Jr.",
"What are the two purposes that the emblem of Hapsburg Dynasty represent?"
: "Champion of Catholicism and Defender of Faith",
"In what month is Dinagyang Festival usually held?"
: "January",
"Which country did Magellan came from?"
: "Portugal",
"The street dance competition in Masskara Festival has three categories: the school division, the corporate division and the barangay division."
: "False",
"What type of rhythm is used in the dances of Masskara Festival?"
: "Latin",
"Panagbenga is celebrated every February."
: "True",
"The initial run of Panagbenga went on for 10 days, including two weekends."
: "True",
"Which of the following is not part of the core events of Panagbenga?"
: "Pole Climbing",
"A story about the Benguet hero who conquered adversity to bring home a gift for his chosen bride."
: "Ioway",
"Atty. Damaso Bangaoet Jr.’s idea related to the celebration of Panagbenga frestival is for the city to have as many pocket gardens and mini parks as the number of barangays."
: "True",
"The dance for planting and harvest season to drive away pests and bad spirits."
: "Hulin",
"Ike Picpican, an archivist and curator, proposed the idea of organizing a flower festival in February."
: "False",
"The Panagbenga Festival was made as a way for the people to rise up from the devastation of the 1990 Luzon earthquake."
: "True",
"On average, for how many weeks does Panagbenga Festival run?"
: "5",
"Which of the following is the meaning of the word, Panagbenga?"
: "season of flowering",
"The symbol of the festival is a mask depicting different expressions depending on the theme."
: "false",
"When is Bacolod City’s Charter Day anniversary?"
: "October 19",
"The festival dancers’ flower-inspired costume was a custom unique to Panagbenga Festival."
: "false",
"Which of the following is not a part of the festivities during Masskara Festival?"
: "boodle fight",
"Contemporary masks used in Masskara festival are adorned with plastic beads and sequins."
: "True",
"Masskara Festival was established in the year 1990."
: "false",
"This dance depicts the spirit of bayanihan in the community."
: "Abuyog ",
"Which of the following is not a movement under toprock breakdance element?"
: "Flare",
"The songs used in popping must have the following characteristics except for:"
: "A ¾ time signature",
"A breakdancing step that requires the dancer to suspend himself or herself off the ground using upper body strength in poses such as the handstand or pike."
: "Freeze",
"This is a two-step movement wherein the first step is overplayed towards a certain direction. The other foot slides across the floor to meet the other foot."
: "Leo walk",
"This inspired the Masskara Festival in Bacolod City."
: "Carnival of Venice",
"This term refers to the movements on the floor with the hands supporting the dancer as much as the feet."
: "Downrock",
"A style of popping wherein the dancer drops to the ground with his or her knees turned inward and feet outward. From this position, he or she moves up and down, similar to hydraulic movements."
: "Lowrider",
"The term \“break\” in breakdancing originated from ____."
: "The mixing sounds from records to produce a continuous dancing beat",
"In the origin of the word, MassKara, cara means ____."
: "Both choices are correct",
"What did the mask symbolize for the people in Bacolod?"
: "The happy spirit of the people despite the economic downturns in the sugar industry",
"A dance in the Cordillera region that depicts the story about birds that transformed into a beautiful lady who would marry the farmer they are helping to harvest rice."
: "Say-ang",
"This is a kick and shuffle hop move in both left and right or front and back."
: "The Skeeter rabbit",
"Which of the following is not true about the celebration of Dinagyang Festival?"
: "Carousel performances have added depth and improved choreography of the dance movements of Dinagyang dancers",
"The name Sinulog came from the word \“sulog\” meaning ____."
: "Like water current movement",
"Which of the following personalities created the locking move?"
: "Don Campbell",
"The name Dinagyang is an Ilonggo term which means ____."
: "Merrymaking",
"The first ever Sinulog parade was done in the year ____."
: "1980",
"The Funky Guitar move is done with hands positioned as if they’re holding/playing a guitar and walking _____."
: "Backwards",
"Which of the following dances did Bill Williams made famous in the 1960s?"
: "The Robot",
"Which of the following is not a genre of music used for breakdancing?"
: "None of the choices",
"A locking move which is characterized by a quick jab movement to the side."
: "Pacing",
"Street jazz is considered what type of workout?"
: "Cardiovascular",
"Which of the following is not a power move?"
: "Freeze",
"Which of the following is not in the logo of the Sinulog Festival?"
: "Sto. Niño’s image",
"The Sinulog dance step is composed of _____."
: "Two steps forward and one step backward",
"Which of the following is not true about the participants of MassKara Festival?"
: "The festival started from an idea that the city needs a fiesta to celebrate.",
"This is danced by the Ifugao tribe during the planting and harvest seasons to drive away pests and spirits"
: "None of the choices",
"A move to end a breakdancing performance that appears as if they have lost control of their bodies and eventually fall onto their backs or stomachs."
: "Suicide",
"This is a breakdancing competition which is a mere mock exhibitions of breakdancing skills of the performers."
: "Cyphers",
"This lock move alternates twirling kicks on both sides, using one leg and using the momentum to kick the other out like a pendulum."
: "Whichaway",
"This move starts with arms outstretched on both sides of the body to form rigid poses with loose hands and legs."
: "Scarecrow",
"A breakdancing style focused on the beat and rhythm of the song than the moves."
: "Flavor",
"The breakdancing style comprising of full body spins and rotations that give the illusion of defying gravity."
: "Power",
"This move is done by having an arm and a leg out and then switching with the other leg. The leg is once again stretched out with arms crossed before wrist twirling and clapping."
: "Scoobot",
"Which of the following is not a characteristic of locking?"
: "Upbeat, fast, and spontaneous",
"It is the movement available at our joints controlled by the length of our muscles."
: "flexibility",
"Basketball is an aerobic activity."
: "False",
"The aerobic system produces ____ molecules of ATP from each molecule of glucose."
: "38",
"This is said to be caused by the build-up of lactic acid in our body."
: "burn",
"Which of the following is not an effect of a good cardiovascular system?"
: "Avoiding injuries",
"Without muscular endurance, our movement decreases and our joints become stiff."
: "False",
"The healthy amount of fat for a woman is around 20-25%."
: "True",
"The Anaerobic energy system does not require oxygen to produce ATP."
: "False",
"What is pyruvate converted into in the ATP-PC system?"
: "lactate",
"Hydrogen is the main source of cellular energy."
: "False ",
"The healthy amount of fat for a man should be between 15 to 18%."
: "True",
"In the Anaerobic Energy System, when ATP is hydrolyzed, a hydrogen ion is released."
: "True",
"This term refers to the amount of muscle, fat, bone, cartilage making up our bodies."
: "body composition",
"Developing physical fitness requires you to address all three energy systems."
: "True",
"The human body must have this in order to do daily tasks. It is the ability of the muscle to exert a force to overcome a resistance."
: "strength",
"It refers to the ability of muscle to make repeated contractions over a period of time."
: "muscular endurance",
"If ATP in the ATP-PC Energy System Pathway stands for Adeonisne triphosphate, what does PC stand for?"
: "Phosphocreatine",
"Which of the following is not a stage in aerobic system?"
: "Lactic Acid Conversion",
"Two energy system pathways usually have the tendency to predominate the body in one activity."
: "False",
"Aerobic occurs only in the presence of oxygen."
: "True",
"The lady may be the one to decrease the distance between her and the dancers according to how comfortable she is."
: "True",
"Which of the following is incorrect about safety protocols in dance schools or studios?"
: "Overlook waivers on safety education",
"Important valuables must be placed on the dashboard so you can easily see them while driving"
: "False",
"Which of the following must be checked before attempting a dance?"
: "All of the choices",
"Complete the Personal Safety Awareness tip: Above all else, always trust your ______."
: "instinct",
"Important valuables must be placed on the dashboard so you can easily see them while driving."
: "False",
"Which of the following statements is incorrect?"
: "Always opt to go through shortcuts.",
"The level of personal safety awareness where the person involved analyzes the task first by taking in consideration the risks and then proceeding to remedy and decrease the possibility of an accident or injury."
: "Proactive",
"Which of the following must not be done while a song is playing?"
: "Offer advice, instruction or a critical comment to your partner so it may be fixed while dancing.",
"In preparing for emergencies inside dance studios, touch sprinkle heads and check if they’re working by trying to turn them on."
: "False",
"A substandard environment would be tolerable to live in as long as they do not reach extremes."
: "False",
"Touching your partner’s hair during the dance is permissible."
: "False",
"The level of personal safety awareness wherein caution is taken after an incident to keep themselves safe."
: "Realization with action",
"The gentleman must escort the lady back to her place when the dance is over."
: "True",
"Which of the following statements is incorrect?"
: "The leader’s timing in the dance may or may not be followed.",
"The key to smooth social interaction."
: "Politeness",
"Everyone has a right of access to education, academic excellence and achievement without being compromised by physical and psychological safety issues and concerns."
: "True",
"Which of the following is incorrect etiquette in a dance?"
: "Put on a nice and strong cologne to leave an impression.",
"More than half of the citizens in the United States do not experience stress."
: "False",
"The language for describing, visualizing, interpreting and documenting all varieties of human movement."
: "Laban Movement Analysis",
"Which of the following statements is not true?"
: "An hour of any type of exercise is needed to obtain anti-anxiety effects",
"This type of exercise has been shown to decrease overall levels of tension, elevate and stabilize mood, improve sleep and improve self-esteem."
: "aerobic exercise",
"Endorphins are chemicals acting as _____."
: "natural painkillers",
"According to a poll done by the American Psychological Association, the highest percentage of the respondents _______ as a way to cope with stress."
: "Talk with friends and family",
"Dance therapy special creates a combination of art and logic."
: "False",
"A workout of moderate to high intensity would be enough to make you feel healthy and energized."
: "False",
"The inconsistency of physical movement and mental activity causes mental and physical problems only."
: "False",
"Wang Yuchi’s technique in improving the group’s relationship is by shutting down newcomers and suspend the class if a member is not present"
: "True",
"Which of the following statements is not true about dancing as a way of reducing stress?"
: "None of the choices",
"The term that refers to \“old wounds that the person ignores.\”"
: "rotted roots",
"The first dance therapist in Guangzhou, China."
: "Wang Yuchi",
"Professional or semi-professional dancers with experience in different kinds of dance are allowed to participate in dance therapy sessions."
: "False",
"Dance is referred to as an alien language because some cultures do not allow for them to do so."
: "True",
"Which of the following techniques has been used by the Chinese to reduce their stress?"
: "dance therapy sessions",
"Wuqinxi is the physical exercise that imitates the movements of five animals."
: "True",
"Dance therapy studios are strategically placed near central business districts in the city, not far from the offices."
: "True",
"Dancing with a group provides _____ for an individual dancer?"
: "a sense of security",
"Walking is the most preferred exercise for people, according to the poll done by American Psychological Association."
: "True",
"This dance is characterized by fast and intricate footwork, spins, acrobatic flips and moves."
: "Street jazz ",
"What does the symbol of the Masskara Festival mean?"
: "happy spirit, despite periodic economic downturns in the sugar industry.",
"This term refers to any level of competition in which breakdancers in an open space participate in quick-paced, turn-based routines, whether improvised or planned."
: "Battles",
"Which of the following statements is not true?"
: "Dance is the only physical activity that can produce endorphins",
"The style of breakdancing that aims to perform a sequence of power moves in rapid transition."
: "Blow-up",
"This is the term used when the follower in the dance tries to maneuver the leader to do the pattern he/she wants the way he/she wants it."
: "Back-leading",
"This refers to the synchronous performances of competing tribes in different judging areas."
: "Carousel performance",
"Which of the following is incorrect?"
: "Beginners are given mild instructions on how to look good on the dance floor",
"When did Dagoy make his first appearance as the official logo of the Dinagyang festival?"
: "December 14, 2004",
"The lost ATP-PC must be remedied by the _____."
: "Anaerobic energy system ",
"A story about a bird that transformed into a beautiful lady who gets married to the farmer they are helping."
: "Say-ang ",
"The lock move was created because Campbell can’t do this move."
: "Funky Chicken",
"This refers to the efficiency of the human body to supply energy to all of its cells."
: "Energy system",
"In what church was the Santo Niño enshrined before it was renamed to Sto. Niño church?"
: "San Agustin Church",
"The year when Operation Balikbayan program was launched wherein tribes provide cultural entertainment for tourists."
: "1974",
"Jackhammers, backspins, hand glides and turtles belong under what style?"
: "Power",
"What does the word panagbenga mean?"
: "season of blossoming ",
"The freezes emphasize _____."
: "Both choices are correct",
"Complete the sentence: Close your _____ after dark."
: "All of the choices",
"This emblem had been carried through the Legaspi expedition."
: "Hapsburg emblem",
"One of the following choices does not belong with the group of the benefits of cardiovascular fitness. Which is it?"
: "Improve posture ",
"Which of the following is not a characteristic of anaerobic sports?"
: "None of the choices",
"Which of the following is not an advantage of flexibility?"
: "Decreased level of stress",
"Masskara Festival takes place in ___."
: "Bacolod",
"These moves require momentum and physical power to execute."
: "Power moves",
"Which of the following does not describe Dagoy?"
: "He is fair-skinned with a gold crown atop his head",
"Which of the following is not true about street jazz?"
: "Street jazz is an anaerobic exercise",
"He is the one who ruled Spain for 42 years starting on the year 1556."
: "Philip II",
"Which of the following is true about the Sinulog dance?"
: "It was from the dance that the little child did to wake Baladhay up from his slumber.",
"This dance style originated from California that is executed by angular arms, legs and body movements stepping to the beat in any direction."
: "Strutting",
"This style includes freestyle movement and circus styles."
: "Abstract",
"In this year, the Dinagyang festival events allowed ordinary people to dance in the streets and forget the pressures of everyday life."
: "1976",
"This term refers to the particular rhythms and sounds produced by DJs from records to produce a continuous beat."
: "Break",
"This occurs only in the presence of oxygen."
: "Aerobic",
"Which of the following is incorrect?"
: "Keep your keys in your pocket at all times.",
"What would be the most probable reaction to unwelcome monopolization of partners in a dance?"
: "The monopolized partner will avoid the monopolizer and find another partner",
"These are moves that convey the impression of a boneless body."
: "Boogaloo",
"Which of the following is a sub-maximal exercise?"
: "Long distance running",
"Which of the following is the best description for Stop and Go move?"
: "Starts with a muscle man lock then steps back with one foot and punch before doing a quarter turn in the direction of the backfoot breakdown once.",
"Most people prefer this exercise as coping technique."
: "Walking",
"Which of the following is true about ATP-PC System?"
: "Both the ATP and PC work together to provide very rapid, very pure but ultimately short lived energy to the brain and muscles",
"Why was the Panagbenga Festival created?"
: "to rise up from the devastation of earthquake",
"Which of the following is unacceptable in a dance event?"
: "Wave a partner over to join you on a dance",
"When does Baguio City celebrate Panagbenga Festival?"
: "February",
"The following are what breakdancing emphasizes except:"
: "None of the choices",
"Santo Niño was given as a gift to whom?"
: "Hara Amihan",
"Moonwalk by Michael Jackson is a variation of a popping dance. Which among the following does moonwalk belong under?"
: "Gliding",
"Which of the following statements is not true?"
: "Three molecules of ATP are produced for every one molecule of glucose",
"Danced during planting and harvesting seasons to drive away pest and bad spirit."
: "Hulin",
"Which of the following statements is true about aerobic system?"
: "It produces a stable and long-lasting source of energy.",
"The _____ produces the pyruvate which would be converted into lactate."
: "Glucose",
"This style starts with a squatting position and then the dancer shifts their pelvis to the side then back to the center."
: "Break down",
"This element of breakdancing allows the incorporation of dance styles as long as it is done while maintaining cleanliness, form, and attitude."
: "Toprock",
"He was the one who popularized the breakdancing style."
: "Charlie Robot",
"Which of the following is not true about power moves?"
: "This requires the dancer to suspend himself or herself off the ground in a stylish pose",
"This refers to the efficiency of the human body to supply energy."
: "Energy system fitness",
"The person who interpreted the logo for Sinulog Festival."
: "Olive Templa",
"The water current being referred to in Sinulog was that of _____."
: "Pahina River",
"Baguio City is also known as ______."
: "City of Pines",
"This consists of a semi-split done with one leg bent to get back up again in one swift movement."
: "Jazz split",
"This energy system is used for high intensity activities in short duration of 5 to 10 seconds."
: "Aerobic Energy System",
"This move focuses on moving legs rapidly with knee rolls and twisted feet."
: "Crazy legs",
"The tribe who first used the Dinagyang pipes."
: "Tribu Ilonganon",
"The level of personal safety awareness wherein an individual prevents the accident from happening by analyzing the task at hand before attempting it."
: "Proactive",
"The person who suggested that the flower festival be held on February."
: "Damaso Bangaoet Jr.",
"This was a famous move from gymnastics adapted into breakdancing."
: "Flare",
"A folktale about the defeat of a snake that threatened the farmer’s beautiful harvest."
: "Adivay",
"Which of the following is not an anaerobic sport?"
: "Zumba",
"Dry season rice production of Bontoc."
: "Tsinakhon",
"This ability allows us to perform certain skills more efficiently as our movement decreases and joints become stiff."
: "Flexibility",
"This is the main point of interest in terms of health."
: "Fat",
"Which of the following tips should not be followed?"
: "You may dance any dance you do not know because spontaneity still works.",
"Who among the following coined the term Dinagyang in 1977?"
: "Pacifico Sudario",
"It is the ability of the body to continuously provide enough energy to sustain submaximal levels of exercise."
: "Stamina",
"This dance style creates geometric positions and movements by using the arms and hands."
: "Tutting",
"Which of the following is not a major event during Dinagyang?"
: "Festival Queen",
"The following are the primary factors for causing at risk or unsafe behaviors except:"
: "Loss of control",
"Which of the following statements is incorrect?"
: "Hua Tuo founded the Sun Flower Counseling Center to carry out dance therapy.",
"The healthy amount of fat for women ranges from ____."
: "20 to 25%",
"This refers to a breakdancing style that is more intent on the beat and musicality of the song than the moves executed."
: "Flavor",

// PHILO WEEK 20
"The exact name of the sacrament in the Roman Catholic Church involved in Martin Luther's"
: "Holy Eucharist",
"It refers to a society driven by the use of technology to enable mass production, thus supporting a large population."
: "Industrial Society",
"An event that represents the permanent cessation of all biological functions that sustain a living organism"
: "death",
"It is the notion that all propositions, whether about the past, present, or future, are either true or false."
: "Logical determinism",
"This book by Voltaire claimed that"
: "Dictionnaire philosophique",
"This refers to problems in body function or alterations in body structure, such as paralysis or blindness."
: "Impairment",
"The philosopher who considers our body as the source of endless trouble."
: "Plato",
"This refers to the capacity to know everything that there is to know and is a property often attributed to a creator deity."
: "Omniscience",
"A concept in consequentialism where an action is morally right if and only if it does not violate the set o"
: "Rule consequentialism",
"An argument for consequentualism which states that actions are transient things, soon gone forever."
: "Only results remain",
"This is where horticulture and agriculture as types of subsistence developed among humans somewhere between 10,000 and 8,000 years ago."
: "Fertile Crescent",
"You can do what you will, but in any given moment of your life you can will only one definite thing and absolutely nothing other than that one thing."
: "On the Freedom of the Will",
"The state when the mind is in communion with universal and eternal ideas"
: "contemplation",
"Persons with disabilities (PWDs), according the UN Convention on the Rights of Persons With Disabilities, include those who have long-term physical, men"
: "True",
"This holds that the mind is a nonphysical substance, the seat of consciousness and intelligence, and is not identical with physical states of the brain or body."
: "Cartesian dualism",
"The German philosopher who stated that one cannot fully live unless he confronts his own mortality."
: "Martin Heidegger",
"According to Gabriel Marcel, this refers to the"
: "God",
"The work of Edith Stein which served as an extended basis of intersubjectivity."
: "On the Problem of Empathy",
"referred to this as something that shows itself in itself."
: "Phenomenon",
"which intends?to help countries direct their efforts towa"
: "World Health Organization",
"He posits that causality was a mental construct used to explain the repeated association of events, and repeated association of events,"
: "David Hume",
"He suggested that no connection could be made between indeterminism of nature and freedom of will."
: "Niels Bohr",
"It concentrates on the fundamental goods of the earth, communities of more limited economic and political scale than in modern society, and on simple living."
: "agrarianism",
"Which of these fields of study does not entail the use of the term intersubjectivity?"
: "Biology??",
"This is concerned with people with developmental disabilities."
: "Habilitation",
"This theory states that of any two things a person might do at any given moment, one is better than another to the"
: "Plain scalar consequentialism",
"Its focal points include simple living and fundamental goods of the earth."
: "agrarianism",
"This approach suggests that, instead of being individual or universal thinkers, human beings subscribe to"
: "Intersubjectivity",
"Aside from the Supplemental Security Disability Insurance (SSDI), what is the other program of the US federal government to assist persons with disability?"
: "American Association of People with Disabilities (AAPD)",
"which stated that the Eucharist was actually and not virtually the body of Christ."
: "Martin Luther",
"The primary source of energy within agrarian societies"
: "plant biomass",
"According to Socrates, the secret to this is in developing the capacity to enjoy less."
: "happiness",
"The philosopher behind virtuality."
: "Gilles Deleuze",
"Another term for state consequentalism"
: "Mohist Consequentialism",
"Per UNICEF, what is the maximum age for the so-called"
: "18",
"It refers to the capacity of a concept to be readily and accurately communicated between different individuals"
: "Intersubjective verifiability",
"Which is a focal point of agrarianism?"
: "both choices are correct",
"This period is considered the transition to agriculture."
: "Neolithic Revolution",
"His research suggests that as babies, humans are biologically wired to"
: "Colwyn Trevarthen",
"Daniel Stern developed this to focus on research on the non-verbal communication of infants, young children, and their parents."
: "Relational psychoanalysis",
"It refers to a controversial field which tries to find neural correlates and mechanisms of religious experience"
: "Neurotheology",
"He is the founder of phenomenology."
: "Edmund Husserl",
"It is grounded in the idea that everything in the world can actually be reduced analytically to its fundamental physical, or material, basis."
: "Reductive physicalism",
"The Philippines'"
: "RA No. 7277",
"The Philippines' Department of Health implements Republic Act No. 7277, also known as the"
: "True",
"The principle which claims that some non-physical mind, will, or soul overrides physical causality."
: "Interactionist Dualism",
"It is identified as a catalyst for the transition to post-modern society"
: "information technology",
"It refers to the view that only reason is the chief source and test of knowledge."
: "rationalism",
"One of the main architects of quantum theory who suggested that no connection could be made between indeterminism of nature and freedom of will."
: "Niels Bohr",
"which gave virtuality another core meaning"
: "Denis Berthier",
"The term used to refer to an aspect of reality that is ideal yet real."
: "virtual",
"State of being conscious, and therefore alive, but completely paralyzed with the possible exception of their eyes"
: "locked-in syndrome",
"He maintains that determinism is true because quantum phenomena are not events or things that can be located in space and time, but are abstract entities."
: "Ted Honderich",
"In consequentialism, this consists of the action itself and everything it causes."
: "Consequences",
"The Question Concerning Technology"
: "Martin Heidegger",
"Feudalism was considered a way of life during this period."
: "Medieval",
"It is the philosophy that all events of history, past, present and future, have been decided or are known (by God, fate, or some other force), including human actions."
: "Predeterminism",
"Edmund Husserl's best-known text on intersubjectivity."
: "Cartesian Meditations",
"It states that everything that exists is no more extensive than its physical properties, hence, there are no non-physical substances."
: "Physicalism",
"This refers to the treatment or consideration of, or making a distinction in favor of or against, a person based on the group, class,"
: "Discrimination",
"to designate an individual capacity and social domain."
: "Jurgen Habermas",
"The author behind the doctoral dissertation"
: "Edith Stein",
"This suggest that intdeterminacy of agent volition processes could map to the indeterminacy of certain physical events, and the outcomes of these events could therefore be considered caused by the agent."
: "Efforts of will theory",
"He introduced the concept of intersubjectivity aimed?to designate an individual capacity and a social domain, hence the term"
: "Jurgen Habermas",
"to help countries direct their efforts towards specific actions in order to address health concerns of persons with disabilities.?"
: "'False'.",
"The UN Declaration on the Rights of Mentally Retarded Persons took place in what year?"
: "1971",
"This refers to a state of reality characterized by interiority, subjectivity, sentience, feeling, experience, self-agency, meaning, and purpose."
: "Philosophical consciousness",
"The form of incompatibilism which posits that determinism is false and free will is possible."
: "Metaphysical libertarianism",
"IFSW is a global organisation striving for social justice, human rights and social development through the promotion of social work, best practice models and the facilitation of international cooperation.What does IFSW stand for?"
: "International Foundation of Social Workers",


// ELSC WEEK 20
"These cells function in photosynthesis"
: "Parenchyma",
"An ecosystem must have an ecosystem and a nutrient biochemical recycling system"
: "True",
"The guard cells function to control the opening and closing of the stomat"
: "True",
"Carrots have fibrous root"
: "False",
"The cuticle, or the wax, functions to protect against insects and pathogens"
: "True",
"The enzyme method is also known as the Maxam-Gilbert Method"
: "False",
"When primary producers capture solar energy and produce complex molecules, this is known a"
: "Gross primary production",
"Generation internal is inversely proportional to genetic gain"
: "True",
"These cells have thin and flexible walls and lack a secondary wall"
: "Parenchyma",
"These cells are fibrous"
: "Sclerenchyma",
"If a cat always eats the white colored mouse, then there brown colored mouse will increse in number"
: "True",
"This type of transformation involves the insertion of viral genomes into the host genome"
: "Episomal",
"Microbes that become resistant to an antibiotic are an example of microevolution"
: "True",
"These are all mechanisms which cause microevolution, excep"
: "Mutations",
"If a G gene codes for green eyes and a g gene codes for blue eyes, and G is dominant, then a girl with Gg genes will have green eyes"
: "True",
"What are pharyngeal pouches"
: "Throat pouches",
"Calcium chloride is used in DNA insertion"
: "True",
"Phosohorous-32 is a medium-energy emitte"
: "False",
"According to fossil records, these evolved from land vertebrates as well"
: "Amphibians",
"Genetic engineering may also be called as new genetic"
: "True",
"Where did Lindeman study the ecosystem concept"
: "Wisconsin",
"Who advocated for catastrophism"
: "Cuvier",
"Who developed the binomial naming of species"
: "Linnaeus",
"An organism is said to be homozygous if it carries two of the same genes"
: "True",
"Intraspecific competition is competition between two individuals from different species"
: "False",
"Affinity chromatography removes all of the following, excep"
: "RNA",
"Group selection is natural selection at the group leve"
: "True",
"Enzymes that catalyze reactions will perish at temperatures below 250"
: "False",
"Who was the first one to propose a mechanism for evolution"
: "Lamarck",
"What is the ratio used for the precipitation of nucleic acids"
: "2:1",
"A snake's pelvis is an example of a vestigial structure"
: "True",
"Ecosystem ecology is the implementation o"
: "Synecology",
"Indirect reciprocity occurs when a species is likely to help another due to lineage"
: "False",
"A260/280 for pure RNA shoul b"
: "2.0",
"The energy flow of the ecosystem starts with its primary producers"
: "True",
"Evolution moves towards order"
: "False",
"What can be used to further digest DNA after deproteinization"
: "Rnase",
"You can a leaf belongs to a _____ because it has parallel veins"
: "Monocot",
"These are all heterozygous genes, excep"
: "AA",
"Point mutations will always be harmful"
: "False",
"The vascular cambium in woody plants consists of a layer of this type of cel"
: "Parenchyma",
"All plants have secondary growth"
: "False",
"mean that there are organisms that feed from each trophic level"
: "True",
"Absorbance is measured a"
: "260 nm",
"The stomata allow the uptake of this gas"
: "Carbon dioxide",
"According to Darwin's theory, individuals can evolve"
: "False",
"The spongy mesophyll fills with oxygen and carbon dioxide"
: "True",
"What is the percentage of energy that is passed on to primary consumers"
: "10%",
"Two different species can occupy the same niche"
: "False",
"Who found that the body size of the organism can be controlled by controlling the biomass at each trophic level"
: "Elton",
"How many phalanges do we have"
: "5",
"The xylem transports water from the roots to the stem"
: "True",
"This is where the lateral roots originate from"
: "Pericycle",
"These organisms can capture energy without light"
: "Chemoautotrophs",
"Phenotype refers to an organism's genetic makeup"
: "False",
"This secretes polysaccharides to protect the young part of the plant"
: "Root cap",
"How many reactions are there in the Sanger-Coulson method"
: "4",
"These cells share their nucleus with seive tube elements"
: "Companion cells",
"The xylem and phloem in stems and leaves are collectively called a stele"
: "False",
"Lateral roots are also known a"
: "Taproots",
"Gene stacking is the presence of more than one gene in more than one plant"
: "False",
"Nucleic acids are polyionic at neutral p"
: "True",
"The chances of survival of organisms is maximized when they cooperate with one another"
: "True",
"These have features of both plasmids and bacteriophages"
: "Cosmids",
"Trichomes function as true roots"
: "False",
"Artificial selection occurs when we breed dogs for a certain length of coat or certain height"
: "True",
"Who coined the term"
: "Tansley",
"The vascular cambium can store water as well aid in wound repair and store carbohydrates"
: "False",
"Nucleic acids are recovered throug"
: "Centrifugation",
"The Continental Drift theory provides evidence for evolution"
: "True",
"Direct reciprocity occurs when two organisms gain from helping each other"
: "True",
"Apical meristems are located at the stems of plants"
: "False",
"The Phelloderm is a thin layer of this type of cells"
: "Parenchy"
};

// FUNCTION AND LOGIC | DONT TOUCH

// AUTO-INPUT
document.getElementById('input').addEventListener('click', function(){
jQuery.each(array_questions_answer, function(question, answer) {
	// FOR TEXT BOXES
	if ($("div.qtext:contains(" + question + ")").siblings('.ablock').find("span")) {
		$("div.qtext:contains(" + question + ")").siblings('.ablock').find("input").val(answer);
	}
	
	// FOR CHECK BOXES
	if ($("div.qtext:contains(" + question + ")").siblings('.ablock').find("answer")) {
		$("p:contains(" + answer + ")").parent().siblings('input').prop('checked', true);
	}
});
})

// HIGHLIGHTING
document.getElementById('highlight').addEventListener('click', function(){
jQuery.each(array_questions_answer, function(question, answer) {
	
	// FOR TEXT BOXES
	if ($("div.qtext:contains(" + question + ")").siblings('.ablock').find("span")) {
		$("div.qtext:contains(" + question + ")").siblings('.ablock').find("input").val(answer);
	}
	
	// FOR CHECK BOXES
	if ($("div.qtext:contains(" + question + ")").siblings('.ablock').find("answer")) {
		$("p:contains(" + answer + ")").parent().parent().css("border-left","3px solid red");
	}
});
})

//};
