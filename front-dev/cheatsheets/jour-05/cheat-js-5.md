
# Révisions

##### Variables globales

Les variables déclarées en dehors de toute fonction, telle que `userName` externe dans le code ci-dessus, sont appelées globales.

Les variables globales sont visibles depuis n’importe quelle fonction (sauf si elles sont masquées par les variables locales).

C’est une bonne pratique de minimiser l’utilisation de variables globales. Le code moderne a peu ou pas de variable globales. La plupart des variables résident dans leurs fonctions. Parfois, cependant, ils peuvent être utiles pour stocker des données au niveau du projet.

# Les boucles

### Comprendre l'intérêt et le fonctionnement des boucles en JS

[lien](https://fr.javascript.info/while-for)

#### La boucle "while"

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

début | let i = 0  |Exécute une fois en entrant dans la boucle.
condition | i < 3 |Vérifié avant chaque itération de la boucle, en cas d’échec, la boucle s’arrête.
corps | alert(i) |Exécute encore et encore tant que la condition est vraie
étape |i++ | Exécute après le corps à chaque itération

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

Exemple :
Qu'est ce qui est le mieux? (Rappel : Une fonction = une action)

```js
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // un nombre premier
  }
}
//or ?
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // un nombre premier
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
```

  Les labels en JavaScript sont principalement utilisés avec les instructions `break` et `continue` pour préciser quelle boucle cibler dans des structures imbriquées. Sans label, ces instructions n'affectent que la boucle la plus proche.
`identifiant: instruction`

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

# Fonctions

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

##### Functions == Comments

Rappel : `for (début; condition; étape)`




##### Fonctions fléchées, les bases

Syntaxe plus simples :

```javascript
let func = (arg1, arg2, ..., argN) => expression;
```

Cela va créer une function func qui accepte les arguments arg1...argN, puis évalue l’expression sur le côté droit et retourne le résultat.

C’est donc la version raccourcie de :

```javascript
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```

-------

### Fonctions - Déclarations (Function - Declaration)

Les fonctions sont les principales “composantes” du programme. Ils permettent au code d’être appelé plusieurs fois sans répétition.

Un des principaux objectifs des fonctions: éviter la duplication de code.

exemples:  
`alert(message)`
`prompt(message, default)`
`confirm(question)`

#### Déclaration de fonction

- Syntaxe

```javascript
function name(parameter1, parameter2, ... parameterN) {
 // body
}
```

!Paramètres optionnels mais toujours mettre les parenthèses!

##### Variables locales

Une variable déclarée à l’intérieur d’une fonction n’est visible qu’à l’intérieur de cette fonction.

Mais..

##### Variables externes (Outer variable)

Une fonction peut accéder à une variable externe.  
Elle peut aussi modifier la variable.

Exemple :

```javascript
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function
```

La variable externe est utilisée que s'il n'y a pas de variable locale de ce nom.

!C’est une bonne pratique de minimiser l’utilisation de variables globales (variables en dehors de toute fonction)!

#### Paramètres

We can pass arbitrary data to functions using parameters.  
!Parameters different from arguments!

- A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
- An argument is the value that is passed to the function when it is called (it’s a call time term).

#### Default values

In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.

If a function is called, but an argument is not provided, then the corresponding value becomes `undefined`.

We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using `=` :

example :

```javascript
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```

The default value also jumps in if the parameter exists, but strictly equals `undefined`.

The default parameter doesn't have to be a string

exemple :

```javascript
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
```

##### Alternative default parameters

Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration.

We can check if the parameter is passed during the function execution, by comparing it with `undefined` or we could use the `||` operator.  
Modern JavaScript engines support the nullish coalescing operator `??`, it’s better when most falsy values, such as `0`, should be considered “normal”.

#### Returning a value

A function can return a value back into the calling code as the result.

```js
return;
return expression;
```

The return statement can only be used **within** function bodies. When a return statement is used in a function body, the execution of the function is stopped. The return statement has different effects when placed in different functions:

- In a *plain function*, the call to that function evaluates to the return value.
- In an *async function*, the produced promise is resolved with the returned value.
- In a *generator function*, the produced generator object's next() method returns `{ done: true, value: returnedValue }`.
- In an *async generator function*, the produced async generator object's `next()` method returns a promise fulfilled with `{ done: true, value: returnedValue }`.

If a return statement is executed within a try block, its finally block, if present, is first executed, before the value is actually returned.

  **Automatic semicolon insertion** :
  The syntax forbids line terminators between the return keyword and the expression to be returned.

Exemple d'application de `return`

```js
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}
```

*Note* :  
In JavaScript, function declarations are "hoisted" to the top of their scope during the compilation phase, meaning they're available throughout the entire scope regardless of where they're defined. This allows you to call functions before they appear in the code.  

  An empty `return` is also the same as `return undefined`

### Fonctions Expressions

En JS, une fonction est un type de valeur particulier
- déclaration de fonction : 

```js
function sayHi() {
  alert( "Hello" );
}
```

- expression de fonction :

```js
let sayHi = function() {
  alert( "Hello" );
};
```

Ici = “créer une fonction et la mettre dans la variable sayHi”
Veuillez noter qu’il n’y a pas de nom après le mot clé function. L’omission d’un nom est autorisée pour les fonctions expressions.

```js
function sayHi() {   // (1) créer
  alert( "Hello" );
}

let func = sayHi;    // (2) copier

func(); // Hello     // (3) exécuter la copie (ça fonctionne)!
sayHi(); // Hello    //     cela fonctionne toujours aussi (pourquoi pas)
```

  Note :  il n’y a pas de parenthèses après `sayHi`. S’il y en avait, alors `func = sayHi()` écrirait le résultat de l’appel `sayHi()` dans `func`, et non la fonction `sayHi` elle-même.

C'est la même chose que  :

```js
let sayHi = function() { // (1) create
  alert( "Hello" );
};

let func = sayHi;
// ...  
```

### Fonctions de rappel (Fonctions callback)

