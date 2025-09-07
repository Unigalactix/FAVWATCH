import { type SeriesData } from '../types';

export const seriesDataStore: Record<string, SeriesData> = {
  "Marvel Cinematic Universe": {
    name: "Marvel Cinematic Universe",
    synopsis: "A shared universe centered on a series of superhero films produced by Marvel Studios. The films are based on characters that appear in American comic books published by Marvel Comics.",
    bannerImage: "https://images.unsplash.com/photo-1635868423239-159b2a759886?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "cyan",
    characters: [
      { name: "Iron Man (Tony Stark)", description: "A genius billionaire, playboy, and philanthropist who creates a powered suit of armor to become the superhero Iron Man." },
      { name: "Captain America (Steve Rogers)", description: "A super-soldier from World War II who was frozen in time and awakens in the modern day to lead the Avengers." },
      { name: "Thor", description: "The Asgardian God of Thunder, who wields the enchanted hammer Mjolnir and protects both Asgard and Earth." },
      { name: "Hulk (Bruce Banner)", description: "A brilliant scientist who transforms into a giant, green, rage-fueled monster when angered or provoked." },
      { name: "Black Widow (Natasha Romanoff)", description: "A highly trained spy and assassin who becomes a key member of the Avengers." },
      { name: "Thanos", description: "A powerful galactic warlord who seeks to collect the Infinity Stones to wipe out half of all life in the universe." }
    ],
    movies: [
      { title: "Iron Man (2008)", description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil." },
      { title: "The Avengers (2012)", description: "Earth's mightiest heroes must come together and learn to fight as a team to stop the mischievous Loki and his alien army from enslaving humanity." },
      { title: "Guardians of the Galaxy (2014)", description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe." },
      { title: "Thor: Ragnarok (2017)", description: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop the goddess of death, Hela, from destroying his home." },
      { title: "Black Panther (2018)", description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past." },
      { title: "Avengers: Infinity War (2018)", description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe." },
      { title: "Avengers: Endgame (2019)", description: "The remaining Avengers must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe." }
    ],
    tvShows: [
      { title: "WandaVision", description: "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems." },
      { title: "Loki", description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of 'Avengers: Endgame'." },
      { title: "The Mandalorian", description: "While not directly MCU, it's a popular show in a Disney-owned universe about a lone gunfighter's travels in the outer reaches of the galaxy." }
    ]
  },
  "Harry Potter": {
    name: "Harry Potter",
    synopsis: "The story of a young orphan who discovers on his eleventh birthday that he is a wizard and is invited to attend Hogwarts School of Witchcraft and Wizardry, where he makes friends and uncovers a world of magic and dark secrets.",
    bannerImage: "https://images.unsplash.com/photo-1631686228791-d85f7560a0c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "red",
    characters: [
      { name: "Harry Potter", description: "The main protagonist, known as 'The Boy Who Lived,' destined to defeat the dark wizard Lord Voldemort." },
      { name: "Hermione Granger", description: "A highly intelligent and resourceful witch, and one of Harry's best friends. She is known for her quick thinking and vast knowledge of magic." },
      { name: "Ron Weasley", description: "Harry's loyal best friend from a large, pure-blood wizarding family. He provides comic relief and steadfast support." },
      { name: "Albus Dumbledore", description: "The wise and powerful headmaster of Hogwarts, who serves as a mentor to Harry." },
      { name: "Lord Voldemort (Tom Riddle)", description: "The main antagonist, a dark and powerful wizard obsessed with achieving immortality and conquering the wizarding world." },
      { name: "Severus Snape", description: "The enigmatic Potions Master at Hogwarts, whose true loyalties remain a mystery for much of the series." }
    ],
    movies: [
      { title: "Harry Potter and the Philosopher's Stone (2001)", description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world." },
      { title: "Harry Potter and the Chamber of Secrets (2002)", description: "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of the school, leaving its victims paralyzed." },
      { title: "Harry Potter and the Prisoner of Azkaban (2004)", description: "Harry's third year at Hogwarts sees him dealing with the escape of Sirius Black, an infamous prisoner from Azkaban who is rumored to be after him." },
      { title: "Harry Potter and the Goblet of Fire (2005)", description: "Harry finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares." },
      { title: "Harry Potter and the Order of the Phoenix (2007)", description: "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts." },
      { title: "Harry Potter and the Half-Blood Prince (2009)", description: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past." },
      { title: "Harry Potter and the Deathly Hallows: Part 1 (2010)", description: "As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows." },
      { title: "Harry Potter and the Deathly Hallows: Part 2 (2011)", description: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts." }
    ],
    tvShows: []
  },
  "Game of Thrones": {
    name: "Game of Thrones",
    synopsis: "Based on George R.R. Martin's novels, nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    bannerImage: "https://images.unsplash.com/photo-1577978505231-527858c2a4f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "amber",
    characters: [
      { name: "Jon Snow", description: "A bastard son of the Stark family who joins the Night's Watch to guard the realms of men, only to find himself at the center of a much larger conflict." },
      { name: "Daenerys Targaryen", description: "The last surviving member of the exiled Targaryen dynasty, who seeks to reclaim the Iron Throne with the help of her three dragons." },
      { name: "Tyrion Lannister", description: "A dwarf of the noble Lannister family, known for his sharp wit and intelligence, who navigates the deadly political games of Westeros." },
      { name: "Cersei Lannister", description: "The ruthless and ambitious queen of the Seven Kingdoms, who will stop at nothing to protect her power and her children." },
      { name: "Arya Stark", description: "A young, independent girl who rejects the traditional role of a noble lady to become a skilled assassin seeking vengeance for her family." },
      { name: "The Night King", description: "The master and the first of the White Walkers, an ancient and powerful being who leads the Army of the Dead." }
    ],
    movies: [],
    tvShows: [
      { title: "Game of Thrones", description: "The main series depicting the epic struggle for the Iron Throne of Westeros." },
      { title: "House of the Dragon", description: "A prequel series that chronicles the history of House Targaryen, set 200 years before the events of Game of Thrones." }
    ]
  },
    "Stranger Things": {
    name: "Stranger Things",
    synopsis: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    bannerImage: "https://images.unsplash.com/photo-1612036782180-6f0b6cd84627?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "red",
    characters: [
      { name: "Eleven (Jane Hopper)", description: "A young girl with psychokinetic and telepathic abilities who escapes from a secret government lab." },
      { name: "Mike Wheeler", description: "A loyal and determined member of the group who forms a special bond with Eleven." },
      { name: "Dustin Henderson", description: "The group's intelligent and comical peacemaker, known for his scientific curiosity." },
      { name: "Lucas Sinclair", description: "A pragmatic and brave member of the group, initially skeptical of Eleven but fiercely loyal to his friends." },
      { name: "Will Byers", description: "A kind and artistic boy whose disappearance into the Upside Down sets the series in motion." },
      { name: "Jim Hopper", description: "The gruff but caring chief of police in Hawkins who becomes a protective father figure to Eleven." },
      { name: "Vecna (Henry Creel)", description: "The main antagonist from the Upside Down, a powerful psychic being with a dark connection to Hawkins Lab." }
    ],
    movies: [],
    tvShows: [
      { title: "Stranger Things", description: "The hit sci-fi horror series set in the 1980s that blends supernatural mystery with coming-of-age drama." }
    ]
  },
  "Wednesday": {
    name: "Wednesday",
    synopsis: "A sleuthing, supernaturally infused mystery charting Wednesday Addams' years as a student at Nevermore Academy. She attempts to master her emerging psychic ability, thwart a monstrous killing spree, and solve a 25-year-old mystery.",
    bannerImage: "https://images.unsplash.com/photo-1507646874235-e3660f789e08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "emerald",
    characters: [
      { name: "Wednesday Addams", description: "The brilliant, sarcastic, and morbid daughter of the Addams family with emerging psychic powers." },
      { name: "Enid Sinclair", description: "Wednesday's cheerful and colorful werewolf roommate at Nevermore Academy, who becomes her unlikely best friend." },
      { name: "Tyler Galpin / The Hyde", description: "A barista at a local coffee shop who appears to be a normal love interest but hides a monstrous secret." },
      { name: "Xavier Thorpe", description: "A psychic artist at Nevermore who can make his drawings come to life and has a complicated history with Wednesday." },
      { name: "Principal Larissa Weems", description: "The glamorous and enigmatic headmistress of Nevermore Academy, a shapeshifter with a past connection to the Addams family." },
      { name: "Thing", description: "A sentient, disembodied hand and a loyal Addams family servant who acts as Wednesday's sidekick at school." }
    ],
    movies: [],
    tvShows: [
      { title: "Wednesday", description: "The gothic comedy-horror series that follows the iconic Addams Family daughter as she navigates a new school and a murder mystery." }
    ]
  },
  "Avatar (James Cameron's movie series)": {
    name: "Avatar",
    synopsis: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    bannerImage: "https://images.unsplash.com/photo-1596723724039-3a785c88f172?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "cyan",
    characters: [
      { name: "Jake Sully", description: "A former Marine who finds a new purpose when he connects with the Na'vi people through the Avatar Program." },
      { name: "Neytiri", description: "A fierce Na'vi warrior, princess of the Omaticaya clan, who becomes Jake's teacher and eventual partner." },
      { name: "Dr. Grace Augustine", description: "A xenobotanist and head of the Avatar Program who advocates for peaceful relations with the Na'vi." },
      { name: "Colonel Miles Quaritch", description: "The ruthless head of the RDA's security force, who is determined to exploit Pandora's resources at any cost." },
      { name: "Kiri", description: "Grace Augustine's Na'vi daughter, born from her avatar, who shares a deep and mysterious connection with Eywa." }
    ],
    movies: [
      { title: "Avatar (2009)", description: "The original film where humanity's greed clashes with the nature-worshipping Na'vi on the alien world of Pandora." },
      { title: "Avatar: The Way of Water (2022)", description: "Jake Sully and his family must seek refuge with the oceanic Metkayina clan when an old threat resurfaces." }
    ],
    tvShows: []
  },
  "Pirates of the Caribbean": {
    name: "Pirates of the Caribbean",
    synopsis: "A series of fantasy swashbuckler films centered on the adventures of the eccentric and cunning pirate, Captain Jack Sparrow.",
    bannerImage: "https://images.unsplash.com/photo-1599397191122-243b35582f3b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "amber",
    characters: [
      { name: "Captain Jack Sparrow", description: "A legendary pirate of the Seven Seas, known for his treachery, wit, and a constant state of drunkenness." },
      { name: "Will Turner", description: "A skilled blacksmith's apprentice who discovers his pirate heritage and becomes a courageous hero." },
      { name: "Elizabeth Swann", description: "The daughter of a governor who trades her privileged life for adventure on the high seas, eventually becoming the Pirate King." },
      { name: "Captain Hector Barbossa", description: "Jack Sparrow's nemesis and recurring ally, a cursed pirate captain who is both cunning and formidable." },
      { name: "Davy Jones", description: "The supernatural ruler of the ocean depths and captain of the Flying Dutchman, with a monstrous octopus-like appearance." }
    ],
    movies: [
      { title: "The Curse of the Black Pearl (2003)", description: "Blacksmith Will Turner teams up with eccentric pirate 'Captain' Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead." },
      { title: "Dead Man's Chest (2006)", description: "Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones' service, as other friends and foes seek the heart for their own agenda." },
      { title: "At World's End (2007)", description: "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, and make their final alliances for one last decisive battle." },
      { title: "On Stranger Tides (2011)", description: "Jack Sparrow and Barbossa embark on a quest to find the elusive Fountain of Youth, only to discover that the ruthless pirate Blackbeard and his daughter are after it too." },
      { title: "Dead Men Tell No Tales (2017)", description: "Captain Jack Sparrow is pursued by old rival Captain Salazar and his crew of deadly ghosts who have escaped from the Devil's Triangle, and are determined to kill every pirate at sea." }
    ],
    tvShows: []
  },
  "Friends (TV show)": {
    name: "Friends",
    synopsis: "Follows the personal and professional lives of six twenty- to thirty-something-year-old friends living in Manhattan.",
    bannerImage: "https://images.unsplash.com/photo-1543286006-2c7b43c5ef1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "red",
    characters: [
      { name: "Rachel Green", description: "A fashion enthusiast who starts her life over as a waitress at Central Perk and grows into a successful businesswoman." },
      { name: "Monica Geller", description: "A chef known for her competitive nature, obsessive-compulsive personality, and cleanliness." },
      { name: "Phoebe Buffay", description: "An eccentric masseuse and self-taught musician with a quirky, optimistic outlook on life." },
      { name: "Joey Tribbiani", description: "A struggling actor and food lover, famous for his dim-witted but loyal and good-natured personality." },
      { name: "Chandler Bing", description: "A sarcastic and witty IT manager who uses humor as a defense mechanism." },
      { name: "Ross Geller", description: "Monica's older brother, a paleontologist with a history of failed marriages and a love for science." }
    ],
    movies: [
       { title: "Friends: The Reunion (2021)", description: "The cast of 'Friends' reunites for a special celebration of the beloved show, featuring interviews, behind-the-scenes footage, and guest appearances." }
    ],
    tvShows: [
      { title: "Friends", description: "The iconic sitcom that ran for 10 seasons, defining a generation with its humor and heartwarming moments." }
    ]
  },
  "How I Met Your Mother": {
    name: "How I Met Your Mother",
    synopsis: "A father recounts to his children, through a series of flashbacks, the journey he and his four best friends took leading up to him meeting their mother.",
    bannerImage: "https://images.unsplash.com/photo-1504439199949-b3a93c72c1b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "amber",
    characters: [
      { name: "Ted Mosby", description: "An architect and hopeless romantic on a long quest to find his soulmate in New York City." },
      { name: "Marshall Eriksen", description: "Ted's kind-hearted and goofy best friend from college, a lawyer who is deeply in love with his wife, Lily." },
      { name: "Lily Aldrin", description: "Marshall's wife, a kindergarten teacher with a manipulative side and a passion for art." },
      { name: "Barney Stinson", description: "A womanizing, suit-wearing corporate executive with a playbook of schemes and a love for all things 'awesome'." },
      { name: "Robin Scherbatsky", description: "A committed journalist from Canada who joins the group and navigates her career and complex feelings for Ted and Barney." }
    ],
    movies: [],
    tvShows: [
      { title: "How I Met Your Mother", description: "The nine-season series known for its unique framing device and running gags." },
      { title: "How I Met Your Father", description: "A standalone sequel series that follows a new group of friends in New York City with a similar narrative structure." }
    ]
  },
  "Bahubali (movie series)": {
    name: "Bahubali",
    synopsis: "An Indian epic action film series about a prince from the kingdom of Mahishmati who learns about his royal heritage and must confront a tyrannical ruler.",
    bannerImage: "https://images.unsplash.com/photo-1609597334464-32f203a3d249?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "red",
    characters: [
      { name: "Amarendra Baahubali", description: "The noble and powerful heir to the throne of Mahishmati, known for his strength, compassion, and leadership." },
      { name: "Mahendra Baahubali (Shivu)", description: "Amarendra's son, raised in a tribal village, who embarks on a journey to discover his past and reclaim his kingdom." },
      { name: "Bhallaladeva", description: "Amarendra's ambitious and cruel cousin, who conspires to usurp the throne through treachery." },
      { name: "Devasena", description: "A fierce and proud princess of the Kuntala kingdom, and the wife of Amarendra Baahubali." },
      { name: "Sivagami", description: "The powerful and respected queen mother of Mahishmati, who makes a fateful decision that shapes the kingdom's destiny." },
      { name: "Kattappa", description: "A loyal and skilled warrior slave bound by an oath to serve the royal family of Mahishmati." }
    ],
    movies: [
      { title: "Baahubali: The Beginning (2015)", description: "The story of a young man who helps his love retrieve her from the clutches of a tyrannical king, only to learn his own epic past." },
      { title: "Baahubali 2: The Conclusion (2017)", description: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom." }
    ],
    tvShows: []
  },
  "Pushpa (Movie Series)": {
    name: "Pushpa",
    synopsis: "An Indian action-drama series following the rise of a coolie in the red sandalwood smuggling syndicate in the Seshachalam Hills of South India.",
    bannerImage: "https://images.unsplash.com/photo-1594732520339-e574b5ca8a41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "emerald",
    characters: [
      { name: "Pushpa Raj", description: "A clever and ambitious laborer who rises through the ranks of a red sanders smuggling syndicate with his defiant attitude." },
      { name: "Srivalli", description: "Pushpa's love interest, a spirited and independent milk vendor." },
      { name: "SP Bhanwar Singh Shekhawat IPS", description: "A ruthless and egotistical police officer who becomes Pushpa's main antagonist." },
      { name: "Mangalam Srinu", description: "A merciless syndicate head who sees Pushpa's rise as a direct threat to his power." },
      { name: "Dakshayani", description: "Mangalam Srinu's formidable wife, who is equally involved in their criminal enterprise." }
    ],
    movies: [
      { title: "Pushpa: The Rise (2021)", description: "The first part chronicling Pushpa Raj's ascent from a laborer to a powerful figure in the smuggling world." },
      { title: "Pushpa 2: The Rule (2024)", description: "The upcoming sequel that will continue Pushpa's story as he solidifies his rule and faces new enemies." }
    ],
    tvShows: []
  },
  "Star Wars": {
    name: "Star Wars",
    synopsis: "An epic space opera franchise set in a galaxy far, far away, depicting the struggle between the Jedi, who harness the light side of the Force, and the Sith, who use the dark side.",
    bannerImage: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    accentColor: "cyan",
    characters: [
      { name: "Luke Skywalker", description: "A farm boy from Tatooine who becomes one of the greatest Jedi the galaxy has ever known." },
      { name: "Darth Vader (Anakin Skywalker)", description: "A powerful Jedi who tragically falls to the dark side, becoming a formidable Sith Lord and the Emperor's enforcer." },
      { name: "Princess Leia Organa", description: "A fearless leader in the Rebel Alliance, a skilled diplomat, and one of the last survivors of Alderaan." },
      { name: "Han Solo", description: "A cynical smuggler and captain of the Millennium Falcon who gets drawn into the Rebel cause." },
      { name: "Obi-Wan Kenobi", description: "A legendary Jedi Master who mentors both Anakin and Luke Skywalker." },
      { name: "Emperor Palpatine (Darth Sidious)", description: "The shadowy mastermind behind the Clone Wars and the ruler of the Galactic Empire." },
      { name: "Grogu (The Child)", description: "A mysterious, Force-sensitive infant of the same species as Yoda, who becomes the ward of the Mandalorian." }
    ],
    movies: [
      { title: "A New Hope (1977)", description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station." },
      { title: "The Empire Strikes Back (1980)", description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader." },
      { title: "Return of the Jedi (1983)", description: "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star." },
      { title: "The Phantom Menace (1999)", description: "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory." },
      { title: "The Force Awakens (2015)", description: "Three decades after the Empire's defeat, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance." },
      { title: "Rogue One: A Star Wars Story (2016)", description: "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the plans for the Death Star." }
    ],
    tvShows: [
      { title: "The Mandalorian", description: "A lone bounty hunter's journey in the outer reaches of the galaxy, set after the fall of the Empire." },
      { title: "Andor", description: "A gritty spy thriller that explores the origins of the Rebel Alliance through the eyes of Cassian Andor." },
      { title: "Obi-Wan Kenobi", description: "Set ten years after 'Revenge of the Sith,' the series follows the Jedi Master as he hides from the Empire on Tatooine." }
    ]
  }
};