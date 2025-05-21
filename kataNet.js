
    
    function evenOrOdd(number) {
        return number % 2 === 0 ? 'Even' : 'Odd';
    }


    function greeting (name) {
        return `Bonjour, ${name} ! Heureux de faire votre connaissance.`;
    }


    let numbers = [4, 12, 7, 19, 3, 8];

    function Sum(numbers){
        let sum = numbers.reduce((a,b) => (a +b));
        return sum;
    }

    function AboveTen(numbers) {
        let numberAboveTen = [];
       for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            numberAboveTen.push(numbers[i]);

        } 
       } return numberAboveTen;
        
    }

    console.log(AboveTen(numbers));