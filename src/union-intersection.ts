type NoobDeveloper ={
  name : string;
}

type JuniorDeveloper =  NoobDeveloper & {
  expertise : string;
  experiance : number;
};

enum Level{
  junior = "junior",
  mid = "mid", 
  senior = "senior",
}

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperiance : number;
  level: Level;
}

const newDeveloper : NoobDeveloper | JuniorDeveloper = {
  name: 'Abul',
  expertise: 'javascript',
  experiance: 1,
};

const developer : NextLevelDeveloper ={
  name: "Next Bhai",
  expertise: "Typescript",
  experiance: 2,
  leadershipExperiance: 1,
  level: Level.junior,
}