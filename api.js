const PORT = process.env.PORT || 3000;

const express = require('express')
const app = express()

let mots = [
  "Afrique",
  "Aiguille",
  "Aile",
  "Air",
  "Alien",
  "Allemagne",
  "Alpes",
  "Amour",
  "Ampoule",
  "Amérique",
  "Ange",
  "Angleterre",
  "Anneau",
  "Appareil",
  "Araignée",
  "Arc",
  "Argent",
  "Asile",
  "Astérix",
  "Atlantique",
  "Atout",
  "Australie",
  "Avion",
  "Avocat",
  "Baguette",
  "Baie",
  "Balance",
  "Baleine",
  "Balle",
  "Ballon",
  "Banane",
  "Banc",
  "Bande",
  "Banque",
  "Bar",
  "Barbe",
  "Base",
  "Bateau",
  "Berlin",
  "Bière",
  "Blé",
  "Bombe",
  "Bon",
  "Botte",
  "Bouche",
  "Bouchon",
  "Bougie",
  "Boulet",
  "Bourse",
  "Bouteille",
  "Bouton",
  "Boîte",
  "Branche",
  "Bretelle",
  "Brique",
  "Bureau",
  "But",
  "Bâton",
  "Bête",
  "Bûche",
  "Bɶuf",
  "Cabinet",
  "Cadre",
  "Cafard",
  "Café",
  "Camembert",
  "Campagne",
  "Canada",
  "Canard",
  "Canne",
  "Canon",
  "Carreau",
  "Carrière",
  "Carte",
  "Carton",
  "Cartouche",
  "Casino",
  "Ceinture",
  "Cellule",
  "Centre",
  "Cercle",
  "Champ",
  "Champagne",
  "Chance",
  "Chapeau",
  "Charge",
  "Charme",
  "Chasse",
  "Chat",
  "Chausson",
  "Chaîne",
  "Chef",
  "Chemise",
  "Cheval",
  "Chevalier",
  "Chien",
  "Chine",
  "Chocolat",
  "Chou",
  "Château",
  "Cinéma",
  "Cirque",
  "Citrouille",
  "Classe",
  "Club",
  "Clé",
  "Cochon",
  "Code",
  "Col",
  "Colle",
  "Commerce",
  "Coq",
  "Corde",
  "Corne",
  "Coton",
  "Coupe",
  "Courant",
  "Couronne",
  "Course",
  "Court",
  "Couteau",
  "Couverture",
  "Critique",
  "Crochet",
  "Cuisine",
  "Cycle",
  "Cɶur",
  "Danse",
  "Dinosaure",
  "Docteur",
  "Don",
  "Dragon",
  "Droit",
  "Droite",
  "Eau",
  "Enceinte",
  "Ensemble",
  "Entrée",
  "Espace",
  "Espagne",
  "Espion",
  "Esprit",
  "Essence",
  "Europe",
  "Facteur",
  "Fantôme",
  "Farce",
  "Fer",
  "Ferme",
  "Feu",
  "Feuille",
  "Figure",
  "Filet",
  "Fin",
  "Flûte",
  "Formule",
  "Fort",
  "Forêt",
  "Fou",
  "Foyer",
  "Fraise",
  "Français",
  "Front",
  "Fuite",
  "Garde",
  "Gauche",
  "Gel",
  "Glace",
  "Gorge",
  "Grain",
  "Grenade",
  "Grue",
  "Grèce",
  "Guerre",
  "Guide",
  "Géant",
  "Génie",
  "Herbe",
  "Himalaya",
  "Histoire",
  "Hiver",
  "Hollywood",
  "Héros",
  "Hôpital",
  "Hôtel",
  "Indien",
  "Iris",
  "Jet",
  "Jeu",
  "Jour",
  "Journal",
  "Jumelles",
  "Jungle",
  "Kangourou",
  "Kiwi",
  "Lait",
  "Langue",
  "Laser",
  "Lentille",
  "Lettre",
  "Licorne",
  "Lien",
  "Ligne",
  "Lion",
  "Liquide",
  "Lit",
  "Livre",
  "Londres",
  "Louche",
  "Lumière",
  "Lune",
  "Lunettes",
  "Luxe",
  "Machine",
  "Magie",
  "Main",
  "Majeur",
  "Maladie",
  "Manche",
  "Manège",
  "Marche",
  "Marin",
  "Marque",
  "Marron",
  "Mars",
  "Maîtresse",
  "Membre",
  "Menu",
  "Meuble",
  "Microscope",
  "Miel",
  "Millionaire",
  "Mine",
  "Mineur",
  "Mode",
  "Molière",
  "Mort",
  "Mouche",
  "Moule",
  "Mousse",
  "Moustache",
  "Mémoire",
  "Nain",
  "Napoléon",
  "Neige",
  "New-York",
  "Ninja",
  "Noir",
  "Note",
  "Noël",
  "Nuit",
  "Numéro",
  "Nɶud",
  "Oiseau",
  "Opéra",
  "Opération",
  "Or",
  "Orange",
  "Ordre",
  "Page",
  "Paille",
  "Palais",
  "Palme",
  "Papier",
  "Parachute",
  "Paris",
  "Partie",
  "Passe",
  "Patron",
  "Pendule",
  "Pensée",
  "Perle",
  "Peste",
  "Phare",
  "Physique",
  "Piano",
  "Pied",
  "Pigeon",
  "Pile",
  "Pilote",
  "Pingouin",
  "Pirate",
  "Pièce",
  "Place",
  "Plage",
  "Plan",
  "Planche",
  "Plante",
  "Plat",
  "Plateau",
  "Plume",
  "Point",
  "Poire",
  "Poison",
  "Poisson",
  "Police",
  "Pomme",
  "Pompe",
  "Portable",
  "Poste",
  "Pouce",
  "Poêle",
  "Princesse",
  "Prise",
  "Prêt",
  "Pyramide",
  "Pétrole",
  "Pêche",
  "Pôle",
  "Quartier",
  "Queue",
  "Radio",
  "Raie",
  "Rame",
  "Rat",
  "Rayon",
  "Recette",
  "Reine",
  "Religieuse",
  "Remise",
  "Requin",
  "Restaurant",
  "Robe",
  "Robot",
  "Roi",
  "Rome",
  "Ronde",
  "Rose",
  "Rouge",
  "Rouleau",
  "Roulette",
  "Russie",
  "Règle",
  "Résistance",
  "Révolution",
  "Sardine",
  "Satellite",
  "Schtroumpf",
  "Science",
  "Scène",
  "Sens",
  "Sept",
  "Serpent",
  "Sirène",
  "Siège",
  "Sol",
  "Soldat",
  "Soleil",
  "Solution",
  "Somme",
  "Sorcière",
  "Sortie",
  "Souris",
  "Table",
  "Tableau",
  "Talon",
  "Tambour",
  "Temple",
  "Temps",
  "Tennis",
  "Terre",
  "Timbre",
  "Titre",
  "Toile",
  "Tokyo",
  "Tour",
  "Trait",
  "Trou",
  "Trésor",
  "Tube",
  "Tuile",
  "Tête",
  "Uniforme",
  "Vague",
  "Vaisseau",
  "Vampire",
  "Vase",
  "Vent",
  "Verre",
  "Vert",
  "Vie",
  "Vin",
  "Visage",
  "Vision",
  "Voile",
  "Voiture",
  "Vol",
  "Voleur",
  "Volume",
  "Zéro",
  "Échelle",
  "Éclair",
  "École",
  "Égalité",
  "Égypte",
  "Éponge",
  "Étoile",
  "Étude",
  "Oeil",
  "Oeuf"
];

let mots_geographie = [
  "Afrique",
  "Asie",
  "Europe",
  "Russie",
  "Amérique",
  "Océanie",
  "Eurasie",
  "Alpes",
  "Pyrénées",
  "Himalaya",
  "Massif Central",
  "Carpates",
  "Grand Balkan",

  "Afghanistan", "Afrique du Sud", "Albanie",
  "Algérie", "Allemagne", "Andorre",
  "Angola", "Arabie Saoudite", "Argentine",
  "Arménie", "Australie",
  "Autriche", "Azerbaïdjan", "Bahamas"
  , "Bangladesh", "Barbade",
  "Belgique", "Belize", "Bénin",
  "Bermudes", "Bhoutan", "Biélorussie",
  "Birmanie", "Bolivie", "Bosnie-Herzégovine",
  "Botswana", "Brésil", "Brunei",
  "Bulgarie", "Burkina Faso", "Burundi",
  "Cambodge", "Cameroun", "Canada",
  "Cap-vert", "Chili", "Chine",
  "Chypre", "Colombie", "Comores",
  "Corée du Nord", "Corée du Sud", "Costa Rica",
  "Côte d'Ivoire", "Croatie", "Cuba",
  "Danemark", "Djibouti", "Dominique",
  "Égypte", "Émirats Arabes Unis", "Équateur",
  "Espagne", "Estonie",
  "États-Unis", "Éthiopie",
  "Fidji", "Finlande", "France",
  "Gabon", "Gambie", "Géorgie",
  "Ghana", "Gibraltar",
  "Grèce", "Grenade", "Groenland",
  "Guadeloupe", "Guam", "Guatemala",
  "Guinée", "Guinée",
  "Guyane Française", "Haïti",
  "Londres",
  "Paris",
  "Washington",
  "Moscou",
  "Lille",
  "Madrid"

];

let mots_star = [
  "Fight Club",
  "Pulp Fiction",
  "Interstellar",
  "Blade Runner",
  "Le Parrain",
  "Forrest Gump",
  "Le Seigneur des Anneaux",
  "Batman",
  "Inception",
  "Apocalypse Now",
  "Orange mécanique",
  "Princesse Mononoké",
  "Old Boy",
  "Starwars",
  "Matrix",
  "Retour vers le futur",
  "Shining",
  "Gladiator",
  "Into the Wild",
  "Seven",
  "Les Affranchis",
  "Drive",
  "Les Évadés",
  "Alien",
  "La Ligne verte",
  "Django Unchained",
  "Barry Lyndon",
  "American Beauty",
  "Reservoir Dogs",
  "Shutter Island",
  "Mommy",
  "Kill Bill",
  "Jurassic Park",
  "Taxi Driver",
  "Donnie Darko",
  "Requiem for a Dream",
  "Usual Suspects",
  "American History X",
  "Brazil",
  "V pour Vendetta",
  "Inglourious Basterds",
  "La Liste de Schindler",
  "La vie est belle",
  "La La Land",
  "Snatch",
  "The Truman Show",
  "Titanic",
  "Her",
  "Mr. Nobody",
  "Big Fish",
  "Le Prestige",
  "Stalker",
  "Leonardo DiCaprio",
  "Brad Pitt",
  "Tom Hanks",
  "Johnny Depp",
  "Clint Eastwood",
  "Robert De Niro",
  "Will Smith",
  "Jack Nicholson",
  "Tom Cruise",
  "Denzel Washington",
  "Al Pacino",
  "Morgan Freeman",
  "Dwayne Johnson",
  "Kevin Spacey",
  "Matt Damon"
];

let mots_pop = [
  "Aragorn",
  "Arwen",
  "Albator",
  "Anakin",
  "Ange",
  "Aladdin",
  "Anneau",
  "Astérix",
  "Aquaman",
  "Annabelle",
  "Batman",
  "Casper",
  "Cartman",
  "Château",
  "Dragon",
  "Foncombe",
  "Franklin",
  "Frodon",
  "Fantôme",
  "Dracula",
  "Gandalf",
  "Gru",
  "Godzilla",
  "Géant",
  "Génie",
  "Harry Potter",
  "Hermione",
  "Hagrid",
  "Hercule",
  "Licorne",
  "Joker",
  "Kirikou",
  "Legolas",
  "Mine",
  "Nain",
  "Naruto",
  "Obélix",
  "Perceval",
  "Picsou",
  "Rambo",
  "Ron Weasley",
  "Schtroumpf",
  "Sorcière",
  "Tintin",
  "Spiderman",
  "Vampire",
  "Terminator",
  "Homer",
  "Ulysse 31",
  "Capitaine flam",
  "Pikachu"
];

let mots_hp = [
  "Phénix",
  "Dragon",
  "Sort",
  "Sorcier",
  "Magie noire",
  "Aragog",
  "Basilic",
  "Chambre des secrets",
  "Centaure",
  "Chimère",
  "Cheval ailé",
  "Cracmol",
  "Moldu",
  "Cognard",
  "Quidditch",
  "Diablotin",
  "Fée",
  "Farfadet",
  "Gnome",
  "Goule",
  "Griffon",
  "Galion",
  "Horcruxe",
  "Licorne",
  "Loup-garou",
  "Magyar à pointe",
  "Sortilège",
  "Avada Kedavra",
  "Crache-limaces",
  "Endoloris",
  "Lumos",
  "Oubliettes",
  "Repulso",
  "Stupéfix",
  "Patronus",
  "Harry Potter",
  "Albus Dumbledore",
  "McGonagall",
  "Bellatrix Lestrange",
  "Grindelwald",
  "Choixpeau",
  "Sirius Black",
  "Hermione Granger",
  "Voldemort",
  "Ron Weasley",
  "Drago Malefoy",
  "Rubeus Hagrid",
  "Dobby",
  "Neville Londubat",
  "Baguette",
  "Balais",
  "Souaffle",
  "Poudlard",
  "Animagus",
  "Chemin de Traverse",
  "Gringotts",
  "Goblin",
  "Pierre philosophale",
  "Sombral",
  "Hippogriffe"
];

let mots_lotR = [
  "J.R.R. Tolkien",
  "Terre du Milieu",
  "Hobbit",
  "Nain",
  "Humain",
  "Elfe",
  "Magicien",
  "Ent",
  "Orque",
  "Uruk-hai",
  "Frodon",
  "Bilbon",
  "Sam",
  "Merry",
  "Pippin",
  "Aragorn",
  "Denethor",
  "Boromir",
  "Faramir",
  "Théoden",
  "Galadriel",
  "Elrond",
  "Arwen",
  "Legolas",
  "Gimli",
  "Gandalf",
  "Saroumane",
  "Conseil des Sages",
  "Sauron",
  "Sylvebarbe",
  "La Comté",
  "Le Pays de Bree",
  "Le Pays de Dun",
  "Les Terres Solitaires",
  "La Moria",
  "Le Rohan",
  "Le Gondor",
  "Mordor",
  "Minas Tirith",
  "Fondcombe",
  "Minas Morgul",
  "Isengard",
  "Golum",
  "Epée",
  "Chevalier",
  "Cavalier",
  "Magie",
  "Anneau",
  "La communauté de l'anneau",
  "Isildur",
  "Gobelin",
  "Arc",
  "Flêche",
  "Volcan",
  "Montagne",
  "Troll",
  "Géant",
  "Balrog",
  "Nazgul",
  "Fantomes",
  "Armée",
  "Guerre",
  "Bataille",
  "Aventure",
  "Smaug",
  "Azog",
  "Radagast",
];

let mots_marvel = [
  "Spiderman",
  "Captain America",
  "Iron Man",
  "Black Widow",
  "loki",
  "Winter Soldier",
  "Hulk",
  "Black Panther",
  "Hawkeye",
  "Vision",
  "Venom",
  "Wanda",
  "Wolverine",
  "Deadpool",
  "Carnage",
  "Dark Phoenix",
  "Nick Fury",
  "Red Skull",
  "S.H.I.E.L.D",
  "QuickSilver",
  "Dr. Fatalis",
  "Magneto",
  "Cyclope",
  "Mystique",
  "Thanos",
  "Pierre d'infinité",
  "La Torche",
  "La Chose",
  "Le Vautour",
  "Electro",
  "Les 4 Fantastiques",
  "Le Bouffon vert",
  "Mysterio",
  "X-men",
  "Professeur X",
  "Le Fauve",
  "Captain Marvel",
  "Thor",
  "Asgard",
  "Odin",
  "Le Faucon",
  "Colossus",
  "Tornade",
  "Le fléau",
  "Mephisto",
  "Ghost Rider",
  "Blade",
  "Mjöllnir",
  "Hela",
  "Star Lord",
  "Rocket",
  "Groot",
  "Galactus",
  "Superman",
  "Batman",
  "Wonder Woman",
  "Flash",
  "Aquaman",
  "Lex Luthor",
  "Zodd",
  "Zeus",
  "Ares",
  "Amazones",
  "Atlantes",
  "Joker",
  "Pinguin",
  "L'Epouvantail",
  "Catwoman",
  "Ra's al ghul",
  "Arrow",
  "Deathstroke",
  "Double-Face",
  "Gotham",
  "Central City",
  "Starlab",
  "Zoom",
  "Harley Quinn",
  "Atom",
  "Supergirl",
  "Le Martien",
  "Green Lantern",
  "Shazam",
  "Black Adam",
  "Doomsday",
  "Darkside",
  "Cyborg",
  "Lois Lane",
  "Daily Planet",
  "Deadshot",
]

function getRandom (listMots) {
  let l = []
  for (let i = 0; i < 24; i++) {
    let randomint = Math.ceil(Math.random() * (listMots.length - 1))
    if (l.indexOf(listMots[randomint]) == -1) l.push(listMots[randomint]);
    else i--;
  }
  return l;
}

app.get('/mots', (req, res) => {
  res.status(200).json(getRandom(mots));
});
app.get('/geo', (req, res) => {
  res.status(200).json(getRandom(mots_geographie));
});
app.get('/star', (req, res) => {
  res.status(200).json(getRandom(mots_star));
});
app.get('/pop', (req, res) => {
  res.status(200).json(getRandom(mots_pop));
});
app.get('/hp', (req, res) => {
  res.status(200).json(getRandom(mots_hp));
});
app.get('/lotR', (req, res) => {
  res.status(200).json(getRandom(mots_lotR));
});
app.get('/marvel', (req, res) => {
  res.status(200).json(getRandom(mots_marvel));
});

app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});

