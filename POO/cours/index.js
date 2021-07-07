const obj = {
  //index: value
  pseudo: "adel",
  ville: "Alger",
  admin: false,

  direBonjour: function () {
    console.log("Bonjour " + this.pseudo + " tu as " + this.age);
  },

  //   direBonjour() {
  //     console.log("Bonjour " + this.pseudo + " tu as " + this.age);
  //   },
};
// console.log(typeof obj);

let array = [2, 4, 33];
// console.log(typeof array);

// console.log(document.body);
// console.log(typeof document.body);
// console.log(typeof null);

//-----------------------------Ajouter à objet--------------------------
obj.age = 24;
obj["admin"] = true;
// obj.admin = false;
// console.log(obj);
//-----------------------------Delete objet-----------------------------
// delete obj.ville;
// console.log(obj);
//-----------------------------Modifier----------------------------------
obj.pseudo += " boua";

//------------------checker si une propriété existe---------------------
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//------------------------------Parcourir un Objet----------------------
for (const key in obj) {
  //   console.log(key);
  //   console.log(key + " : " + obj[key]);
}
console.log(obj.direBonjour());

// -------------------LES METHODES!!!-----------------------------------
// -------------------Obtenir les clés-------------------------------------
const keys = Object.keys(obj);
console.log(keys);

//-------------------Obtenir les valeurs -----------------------------------
const values = Object.values(obj);
console.log(values);

const nestedArray = Object.entries(obj);
console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "70kg",
  pseudo: "Me",
};
//---------------------------Fusionner objets----------------------------------
const fusion = Object.assign({}, obj, obj2);
console.log(fusion);
// -----------------------------Empecher les modifications -------------------
// const newObj = Object.freeze(obj);
const newObj = Object.seal(obj);
newObj.pseudo = "test";
newObj.adresse = "43 rue du code";
console.log(newObj);

// -----------------------LES CONSTRUCTEURS -------------------------------
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}
const user1 = new User("ry", "qb");
const user2 = new User("lid", "gr");
console.log(user1, user2.getCity());

// ------------------------ FACTORY FUNCTION-------------------------------
function user3(pseudo, ville) {
  return {
    pseudo: pseudo,
    ville: ville,
  };
}
const user4 = user3("ade", "ms");
console.log(user4);

//-------------------------LES CLASSES!!!---------------------------------------
class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  //Méthode
  sayMyName = function () {
    console.log("Bonjour, je suis " + this.pseudo);
  };
}
const user5 = new Utilisateur("Samia", "Lyon");

// ---------------------------LES PROTOTYPES--------------------------------
Utilisateur.prototype.sayCity = function () {
  console.log("j'habite à " + this.ville);
};

Object.assign(Utilisateur.prototype, {
  methode1() {},
  methode2() {},
});
console.log(user5);

let array2 = [1, 2, 3];
console.log(array2);

// -----------------------------L'HERITAGE ------------------------------------
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomeThing(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("le chien court ! ");
  }
}

class Cat extends Animal {
  hunt() {
    console.log("j'ai tué un oiseau ");
  }
}

const rintintin = new Dog("Rintintin", 9);
console.log(rintintin);
