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
      { title: "The Avengers (2012)", description: "Earth's mightiest heroes must come together and learn to fight as a team to stop the mischievous Loki and his alien army from enslaving humanity." },
      { title: "Captain America: The Winter Soldier (2014)", description: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier." },
      { title: "Guardians of the Galaxy (2014)", description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe." },
      { title: "Avengers: Infinity War (2018)", description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe." },
      { title: "Avengers: Endgame (2019)", description: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe." }
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
      { title: "Harry Potter and the Sorcerer's Stone (2001)", description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world." },
      { title: "Harry Potter and the Prisoner of Azkaban (2004)", description: "Harry Potter's third year at Hogwarts sees him dealing with the escape of Sirius Black, an infamous prisoner from Azkaban who is rumored to be after him." },
      { title: "Harry Potter and the Goblet of Fire (2005)", description: "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares." },
      { title: "Harry Potter and the Deathly Hallows: Part 2 (2011)", description: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts." }
    ],
    tvShows: []
  }
};
