 {let i = 0;
while (++i < 5) alert( i ); }// Pre-incrémentation

{let i = 0;
while (i++ < 5) alert( i );} // Post-incrémentation


for (let i = 0; i < 10; i++) {alert(i)}

  // let chiffre = prompt('Entrer un nombre', '');
       // if (chiffre > 10 || chiffre <0) {
        //    alert( "Ce nombre n'est pas entre 0 et 10")
       // } else { while(chiffre >= 0){
       //     alert(chiffre);
       //     chiffre--;
       // }
      //  }
        //ou 
       // for (let i = chiffre; i >= 0; i--) {
       //     alert(i);}

       //boucle
   // let guess = 8;
  //  let answer = prompt( 'Devine le nombre', '' )*1;
   // while ( answer != guess) {
   //     alert('Essaie encore..');
  //      answer = prompt( 'Devine le nombre', '' )*1;
  //  } 
//alert('Bonne réponse'); 
   //boucle 2

   {let chiffre 
    while(chiffre != guess){
        chiffre = prompt('Votre chiffre')
        if (chiffre != guess) {
            alert('Essaie encore')
        }
    }
    }
    alert('Bonne réponse');
    
    function ask(question, yes, no) {
      if (confirm(question)) yes();
      else no();
    }
    //
    ask(
      "Do you agree?",
      function() { alert("You agreed."); },
      function() { alert("You canceled the execution."); }
    );
    
    function ask(question, yes, no) {
      if (confirm(question)) yes();
      else no();
    }
    
    ask(
        "Do you agree?",
       () => alert("You agreed."),
       () => alert("You canceled the execution.")
    );
    
    // exercices ClaudeAI
    
    function addition(a, b){
        return a + b;
    }
    
    // =
    {let addition = (a, b) => a + b;}
    //
    {let salution = nom => "Bonjour" + nom + "!";}
    //
    {let estPair = nom => nombre % 2 === 0;}
    
    //Utilisation avec les méthodes de tableau
    {const nombres = [1, 2, 3, 4, 5];
    let map = nombres => nombres * 2;
    } 


    // Réécrire le "switch" dans un "if"

    if(browser == 'Edge'){
        alert( "You've got the Edge!" );
    } else if( browser == 'Chrome' 
        || browser == 'Firefox' 
        || browser == 'Safari' 
        || browser == 'Opera') {
        alert( 'Okay we support these browsers too' );
    } else {
        alert( 'We hope that this page looks ok!');
    }

    // Réécrire le "if" dans un "switch"

    let a = +prompt('a?', '');
        switch (a) {
            case (0): // pas besoin de mettre (a == 0), on met juste la value
                alert( 0 );
                break;

            case (1):
                alert( 1 );
                break;

            case (2):
            case (3):
                alert( 2,3 );
                break;
        }
    