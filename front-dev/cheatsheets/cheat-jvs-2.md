# Javascript - Semaine 2


### Révision

- La famille du C  dans les langages de progammation - langage de bas niveau

Jvs dérivé du C donc `;` à la fin d'une instruction/statement

Jvs n'est pas un langage compilé mais il faut quand même prendre l'habitude

- Variables = emplacement mémoire réservé = un nom et une valeur

`let nomVariable = <>`

Variable tableau ou Array = variable objet de type tableau
- **Conversion Egalité**

`==` va vérifier la valuer sans s'occuper du typage
`===` va vérifer la valeur et le typage

*exemple*

`"1" == 1;` // vrai
`"1" === 1;`// faux

`!=` means not equal

- **Commentaires**

Important pour le travail collaboratif ou pour revenir sur un code.

`//` ou `Cmd + /`




## Comparaisons 
[lien](https://fr.javascript.info/comparison)

- plus grand/ plus petit que <br>
`a > b` et `a < b`
- plus grand/ plus petit ou égal à   
`a >= b`, `a <= b`
- égalité (attention différent d'affectation `=`)<br>
`a == b`
- pas égal<br>
`a != b`

*Note* : symbol `!` kinda equals "not"

Une comparaison renvoie une valeur de type booléenne `true` ou `false`

exemple : `alert(2 > 1); // true`

Un résultat de comparaison peut être affecté à une variable :
```javascript 
let result = 5 > 4; 
alert( result ); // true
```

### Comparaison de chaînes de caractères

Pour voir quelle chaîne de caractère est plus grande que l'autre, on utilise l'ordre *lexicographique* (l'ordre Unicode)

Les chaînes de caractères (ou String) sont comparèes lettre par lettre.

```javascript
alert( 'Z' > 'A' ); // true
alert( 'Glow > 'Glee' ); // true
alert( 'Bee' > 'Be ); // true, a space is smaller than any letter
alert( '9' > '10' ); // true
```

Attention, l'ordre unicode can be tricky. Example, "A" est plus petit que "a" parce que le caractère minuscule a un index plus grand dans la table de codage interne (Unicode).

Un contrôle d’égalité convertit en utilisant la *conversion numérique* (par conséquent, "0" devient 0), tandis que la *conversion booléenne* utilise un autre ensemble de règles. Donc on peut avoir : 
```javascript
let a = 0;
alert( Boolean(a) ); // false
let b = "0";
alert( Boolean(b) ); // true because a not empty string is true
alert(a == b); // true!
``` 


- `==` égalité et '===' égalité stricte

`==`
Ne prend pas en compte le typage, les opérandes de différents types sont convertis en un nombre par l’opérateur d’égalité `==`
```javascript
alert( 0 == false); // true
alert(''= false); // true
```

`===`
Un opérateur d'égalité stricte `===` vérifie l'égalité sans conversion de type

```javascript
alert( 0 === false); // false parce que les types sont différents
```

Il existe également un opérateur de “strict non-égalité” `!==`, par analogie à la non-égalité `!=`.

### Comparaison avec `null` et `undefined`

Il y a des résultats contre-intuitifs qu'ils faut juste apprendre

 - `alert(null === undefined ); // false` parce qu'ils sont de types différents
- `alert( null == undefined ); // true` la vérification de l’égalité `==` pour undefined et null est définie de telle sorte que, sans aucune conversion, ils sont égaux et ne correspondent **à rien d’autre**. 

**Pour les maths et autres comparaisons** `<`, `>`, `<=`, `>=`

    Les valeurs null/undefined sont converties en un nombre : `null` devient `0`, alors qu’undefined devient `NaN`.

- `null` vs O

```javascript
alert( null > 0 ); // false
alert( null == 0 ); // false
alert( null >= 0 ); // true*
```
Les comparaisons convertissent null en un nombre, donc le traitent comme 0. C’est pourquoi `null >= 0` est vrai et `null > 0` est faux.

- undefined 

La valeur `undefined` ne doit pas du tout participer aux comparaisons

   - `undefined` est converti en NaN et NaN est une valeur numérique spéciale qui renvoie false pour toutes les comparaisons.
   - Le contrôle d’égalité renvoie false, car `undefined` est uniquement égal à null et à aucune autre valeur.

Exercices : 

let( 5 > 4 ); // true
let( "apple" > "pineapple" ); // false
let( "2" > "12" ); // true
let( undefined == null ); // true
let( undefined === null ); // false
let( null == "\n0\n" ); // false
let( null === +"\n0\n" ); // false


#### branches conditionnelles
[lien] (https://fr.javascript.info/ifelse)

##### L'instruction `if`

- `if(...)` évalue une condition entre parenthèses et, si le résultat est `true`, éxecute un bloc de code


exemple :

with `prompt(message, defaultValue)`
```javascript
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert( 'You are right!' );
```

S'il y a plus d'une instruction à éxecuter, nous devons mettre le bloc code entre { }

En vrai, mettre `if( ) { }` à chaque fois

- `if( ) évalue l'expression entre parenthèses et la convertit en type booléen.

- toujours commencer par la condition qui est vrai

question : quel sont les applications pratiques de `if(0) { }`

##### La clause "else"

L'instruction `if` peut contenir un bloc optionnel `else`. Il s'éxécute lorsque la condition est fausse.

Exemple : 
```javascript
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // toute autre valeur que 2015
}
```

##### Plusieurs variantes d'une condition `else if`

Exemple :

```javascript
let year = prompt('En quelle année la spécification ECMAScript-2015 a-t-elle été publiée ?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```

Il peut y avoir plus de blocks `else if`. Le dernier `else` est optionnel.

##### Opérateur ternaire `?`

`?` a trois opérandes<br>
`let result = condition ? value1 : value2;`

La `condition` est évaluée, si elle est vraie, alors `value1` est retournée, sinon – `value2`.

exemple :

au lieu de 
```javascript
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```
on écrit
```javascript
let accessAllowed = (age > 18) ? true : false; // en vrai, dans ce cas même chose que let accessAllowed = age > 18;
```

**On peut mettre plusieurs `?`**


Exemple : 
```javascript
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

exercices :
```javascript if( "0") {
alert( 'Hello' );
}
```
l'alerte est affichée parce que "0' est true (différent de 0)





## Les opérateurs logiques
[lien](https://fr.javascript.info/logical-operators)

3 opérateurs logiques en Javascript :
- `||` (OR)
manipule uniquement les valeurs booléennes
Si l'un des arguments est `true`, il renvoie `true` sinon il renvoie `false`

```javascript
alert( true  || true  ); // true
alert( false || true  ); // true
alert( true  || false ); // true
alert( false || false ); // false
```
Si un opérande n’est pas booléen, il est converti en booléen pour l’évaluation.

exemples :

```javascript
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}
```

```javascript
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // c'est le weekend
}
```

##### `||` dans JavaScript

En cas de multiples valeurs liées par OR :

`result = value1 || value2 || value3;`

L’opérateur `||` fait ce qui suit :

    - Évaluez les opérandes de gauche à droite.
    - Pour chaque opérande, il le convertit en booléen. Si le résultat est true, arrêtez et retournez la valeur d’origine de cet opérande.
    - Si tous les autres opérandes ont été évalués (c’est-à-dire que tous étaient false), renvoyez le dernier opérande.



Donc, on peut btenir la première valeur (booléenne ou non) vraie dans la liste des variables ou des expressions.

On peut aussi faire une évaluation dite de "court-circuit".


- `&&` (AND) 

L’opérateur **AND** `&&` effectue les opérations suivantes :

- Évalue les opérandes de gauche à droite.
- Pour chaque opérande, il le **convertit en booléen**. Si le résultat est false, arrêtez et retournez la valeur d’origine de cet opérande.
- Si tous les autres opérandes ont été évalués (c’est-à-dire tous étaient vrais), retournez le dernier opérande.

En d’autres termes, une chaîne de AND `&&` renvoie la première valeur false ou la dernière valeur si aucune valeur false n’a été trouvée.

Les règles ci-dessus sont similaires à OR. La différence est que AND retourne la première valeur `false` tandis que OR renvoie la première valeur `true`.

`&&` a une plus grande précédence que `||`

`&` would check both values

- `!` (NOT)

`result = !value`

L’opérateur accepte un seul argument et effectue les opérations suivantes :

- Convertit l’opérande en type booléen : true/false.
- Renvoie la valeur inverse.

Un double NOT `!!` est parfois utilisé pour convertir une valeur en type booléen 

`alert( !!"non-empty string" ); // true`

La précédence de NOT `!` est la plus élevée de tous les opérateurs binaire, il est donc toujours exécuté en premier, avant les autres.

- `??` (Coalescence des nulles)

Le cas d’utilisation courant de `??` est de fournir une valeur par défaut.

## Comprendre les conditions en Javascript
[lien](https://fr.javascript.info/ifelse)


-------
## Conf avec ancien CDA

*A connaître*

prog fonctionnelle
prof orientation objet

- frameworks

- clean archicture


- lire <br>
Clean Code: A Handbook of Agile Software Craftsmanship (Robert C. Martin)

- en jvs, pas de console.log
apprendre les debugger 

- avoid anti patterns 

- faire du pseudo code