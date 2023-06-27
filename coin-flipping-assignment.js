// function tossCoin() {
//         return Math.random() > 0.5 ? "heads" : "tails";
//     }

// function fiveHeadsSync() {
//         let headsCount = 0;
//         let attempts = 0;
//         while(headsCount < 5) {
//             attempts++;
//             let result = tossCoin();
//             console.log(`${result} was flipped`);
//             if(result === "heads") {
//                 headsCount++;
//             } else {
//                 headsCount = 0;
//             }
//         }
//         return `It took ${attempts} tries to flip five "heads"`;
//     }
//     console.log( fiveHeadsSync() );
//     console.log( "This is run after the fiveHeadsSync function completes" );

    
    
    function fiveHeads() {
        
        return new Promise( (resolve, reject) => {
            function tossCoin() {
                return Math.random() > 0.5 ? "heads" : "tails";
                }
            let headsCount = 0;
            let attempts = 0;
            let flipComplete = false;
            while (flipComplete !== true){
                attempts++;
                let result = tossCoin()  
                    console.log(`${result} was flipped`);
                    if (result === "heads") {
                        headsCount++;
                        if (attempts <= 100){
                            if (headsCount == 5){
                                flipComplete = true;
                                resolve (`Heads has been flipped five times in a row, after ${attempts} try`)
                            } 
                        } else {
                                flipComplete = true;
                                reject (`Over 100 attempts, headcount: ${headsCount}`)
                                }
                    } else {
                    headsCount = 0;
                    }
    }});
        }
        fiveHeads()
            .then( res => console.log(res) )
            .catch( err => console.log(err) );
        // console.log( "When does this run now?" );