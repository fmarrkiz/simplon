### Révisions

**Variables globales**

Les variables déclarées en dehors de toute fonction, telle que userName externe dans le code ci-dessus, sont appelées globales.

Les variables globales sont visibles depuis n’importe quelle fonction (sauf si elles sont masquées par les variables locales).

C’est une bonne pratique de minimiser l’utilisation de variables globales. Le code moderne a peu ou pas de variable globales. La plupart des variables résident dans leurs fonctions. Parfois, cependant, ils peuvent être utiles pour stocker des données au niveau du projet.

### Comprendre l'intérêt et le fonctionnement des boucles en JS

[lien](https://fr.javascript.info/while-for)

#### la boucle "while"

```javascript
while (condition) {
    // code
    // appelé "loop body" ("corps de boucle")
}
```

Une unique exécution du corps de la boucle est appelée une itération.

```javascript
let i = 0;
while (i < 3) { // affiche 0, puis 1, puis 2
  alert( i );
  i++;
}
```

#### La boucle "do...while"

```javascript
do {
  // corps de la boucle
} while (condition);
```

#### La boucle "for"

```javascript
for (début; condition; étape) {
  // ... corps de la boucle ...
}
```

|a | b | c |
| --- | --- | --- |
|début | let i = 0  |Exécute une fois en entrant dans la boucle.|
| condition | i < 3 |Vérifié avant chaque itération de la boucle, en cas d’échec, la boucle s’arrête.|
| corps | alert(i) |Exécute encore et encore tant que la condition est vraie
|étape |i++ | Exécute après le corps à chaque itération|

Toute partie de `for` peut être ignorée

#### Briser la boucle

Normalement, la boucle sort quand la condition devient fausse.

Mais nous pouvons forcer la sortie à tout moment. Il y a une directive spéciale appelée `break` pour cela.

`if (!value) break;`

```javascript
let sum = 0;

while (true) {

  let value = +prompt("Entrez un nombre", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
```

#### Continuer jusqu'à la prochaine itération

`continue` est "plus léger" que `break`
Cela n’arrête pas toute la boucle. Au lieu de cela, elle arrête l’itération en cours et force la boucle à en démarrer une nouvelle (si la condition le permet).

```javascript
for (let i = 0; i < 10; i++) {

  // si vrai, saute le reste du corps
  if (i % 2 == 0) continue;

  alert(i); // 1, ensuite 3, 5, 7, 9
}
  ```

La directive `continue` aide à réduire le niveau d’imbrication

#### La déclaration "switch"

Le `switch` a un ou plusieurs blocs case (cas) et une valeur par défaut facultative.

Cela ressemble à ceci :

```javascript
switch(x) {
  case 'value1':  // si (x === 'value1')
    ...
    [break]
  case 'value2':  // si (x === 'value2')
    ...
    [break]
  default:
    ...
    [break]
}
```

    La valeur de `x` est vérifiée pour une égalité stricte avec la valeur du premier case (c’est-à-dire, `value1`), puis du second (`value2`) et ainsi de suite.
    Si l’égalité est trouvée, `switch` commence à exécuter le code à partir du case correspondant, jusqu’au prochain `break` (ou jusqu’à la fin du switch).
    Si aucun cas ne correspond, le code par défaut (`default`) est exécuté (s’il existe).

en gros **switch** to { } in **case**

S’il n’y a pas de `break`, l’exécution continue avec le case suivant sans aucun contrôle.

Exemple :

```javascript
let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```

La possibilité de “grouper” les `case` est un effet secondaire de la façon dont le `switch/case` fonctionne sans `break`. Ici, l’exécution du `case 3` commence à partir de la ligne `(*)` et passe par le `case 5`, car il n’y a pas de break.

**Attention!** Le type compte pour `switch/case`

### Fonctions

Les fonctions sont des actions. Donc, leur nom est généralement un verbe. Il convient de décrire brièvement, mais aussi précisément que possible, le rôle de la fonction. Pour qu’une personne qui lit le code reçoive le bon indice.

N’ajoutez jamais de nouvelle ligne entre `return` et la valeur sauf s'il y a des parenthèses

Par exemple, les fonctions qui commencent par `"show"` affichent généralement quelque chose.

Fonction commençant par…

    `"get…"` – retourne une valeur,
   `"calc…"` – calcule quelque chose,
    `"create…"` – créer quelque chose,
    `"check…"` – vérifie quelque chose et retourne un booléen, etc.

Exemples :

```javascript
showMessage(..)     // affiche un message
getAge(..)          // renvoie l'âge (l'obtient en quelque sorte)
calcSum(..)         // calcule une somme et renvoie le résultat
createForm(..)      // crée un formulaire (et le retourne généralement)
checkPermission(..) // vérifie une permission, retourne vrai/faux
```

##### Une fonction, une action

Une fonction doit faire exactement ce qui est suggéré par son nom, pas plus.

Deux actions indépendantes méritent généralement deux fonctions, même si elles sont généralement appelées ensemble (dans ce cas, nous pouvons créer une troisième fonction qui appelle ces deux actions).

Une déclaration de fonction ressemble à ceci :

```javascript
function name(parameters, delimited, by, comma) {
  /* code */
}
```

    Les valeurs transmises à une fonction en tant que paramètres sont copiées dans ses variables locales.
    Une fonction peut accéder à des variables externes. Mais cela ne fonctionne que de l’intérieur. Le code en dehors de la fonction ne voit pas ses variables locales.
    Une fonction peut renvoyer une valeur. Si ce n’est pas le cas, le résultat est `undefined`.

Une expression de fonction : (= fonction dans le contexte d'une expression)

```js
let name = function(a, b) {
  let result = a + b;

  return result;
};
```

##### Fonctions fléchées, les bases

[lien](https://fr.javascript.info/arrow-functions-basics)

Syntaxe plus simples :

```javascript
let func = (arg1, arg2, ..., argN) => expression;
```

Cela va créer une function `func` qui accepte les arguments arg1...argN, puis évalue l’expression sur le côté droit et retourne le résultat.

C’est donc la version raccourcie de :

```javascript
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```

Exemples :

```js
// expression à droite
let sum = (a, b) => a + b;

// ou une syntaxe multiligne avec {...}, il faut ajouter return ici :
let sum = (a, b) => {
  // ...
  return a + b;
}

// sans arguments
let sayHi = () => alert("Hello");

// avec un seul argument
let double = n => n * 2;
```

### L'interpolation de variables

Cette fonctionnalité permet d'insérer directement des variables ou des expressions JavaScript au sein d'une chaîne de caractères dans un *template literal*.

----
 **Les template literals**

Les template literals sont délimités par des backticks ` au lieu de guillemets simples ou doubles.

```javascript
const templateLiteral = `Ceci est un template literal`;
```

----

L'interpolation se fait avec la syntaxe `${expression}` à l'intérieur d'un template literal.

Exemple :

```javascript
const nom = "Sophie";
const age = 28;

// Avec interpolation (template literal)
const message = `Bonjour, je m'appelle ${nom} et j'ai ${age} ans.`;

// Sans interpolation (concaténation classique)
const messageClassique = "Bonjour, je m'appelle " + nom + " et j'ai " + age + " ans.";
```