# Jour 07/05

### Révisions

Opérateurs ternaires mieux pour les petites instructions plutôt que `if`

### Daily

#### Découvrir les Objets en JS

[lien](https://javascript.info/object)

So 8 data types (ou variables (fr))
7 are primitives because they only contain one thing

- An object can have `{...}` with an optional list of *properties*   
A property = "key: value" where `key` is a string ("property name") and `value` can be anything.

#### Empty objet syntax

```javascript
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
```

***Object constructor*** : Object defined with a function constructor let us have multiple instances of that object. This means change made to one instance, will not affect other instances.

***Object literal*** (or *singleton*) :

This means when a change is made to the object, it affects that object across the entire script.

(Attention) Object literal syntax différent JSON

### "Hanging" Comma

The last property in the list may end with a comma
Optional but easier to then add/remove/move around properties without mistakes.

### Property values

- Property values are accessible using the dot notation :  

```javascript
// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30
alert(user.isAdmin); // true
```

- The dot requires the key to be a valid variable identifier = contains no spaces, doesn’t start with a digit and doesn’t include special characters (`$` and `_` are allowed).

### Remove a property

```javascript
delete user.age
```

### Multiword property names

They must be quoted
(ils sont "" dans la déclaration directe)

```javascript
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};
```

**But** for multiword properties, the dot access (ex: `user.name`) doesn't work because of the space.

#### Brackets `[]`

So we use square brackets to add/delete/get a property

```javascript
let user = {};
user["likes birds"] = true;
```

La notation avec crochets `[]` permet d'accéder aux propriétés dynamiquement avec des variables, tandis que la notation avec point . accède toujours littéralement au nom exact que vous écrivez.

exemple :

```javascript
let key = "like birds";
user[key] = true; // Définit la propriété "likes birds" à true

user.key = true; // Définit la propriété "key" (et non "likes birds") à true
```

### Computed properties (Propriétés calculées)

Examples :

```js
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```

Square brackets are much more powerful than dot notation. They allow any property names and variables. But they are also more cumbersome to write.

So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.

### Property value shorthand

```js
let user = {
  name,  // that's the shorthand, same as name:name
  age: 30
};
```

### Property names limitations

There are no limitations on property names. They can be any strings or symbols (a special type for identifiers). Other types are automatically converted to strings.  
Example : A number `0` becomes a `"0"` when used as a property key.

Note : `__proto__` is special, we'll talk about its properties later.

### property existence test, "in" operator

Syntax to test whether a property exists :
 
 ```js
 "key" in object
 ```

 