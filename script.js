// Text Adventure Game
const start = `You must be wondering how I got my very own text adventure game. Well you can thank Mr. Riley for that. Now let's forget that I need your help to defeat the purple dinosaur. Oh I mean the guy with the cool golden glove or something; I think his name is Thanos. Now all I need you to do now is click the ok button to start this messed up game?`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Game Over You'll get them next time.";

const q1 = `First I need to find a way into space to find the purple freak on his home planet Titan, Should I … 
1. Go to Nasa and steal a rocket ship
OR
2. Go talk to my good friend Colossus at the X-mansion and ask to borrow their X-Jet?
${enter}`;

const gameOver1 = `I'm not trying to get on the government's bad side I Don't Know about you. ${gameOver}`;

const q2 = `Colossus said no so I stole it. Now that I'm in space, should I…
1. Use the ships GPS to find the planet Titan
OR
2. Full Send It and see if I get there by luck
${enter}`;

const gameOver2 = `I'm now lost in space not Knowing where I am. ${gameOver}`;

const q3 = `I have landed on Titan and need information on the whereabouts of Thanos
Should I ...
1. Ask people if they know where he is
OR
2. Go to the giant building you see in the distance.
${enter}`;

const gameOver3 = `The people you talk to snitch and Thanos leaves the planet. ${gameOver}`;

const q4 = `I shall go to the giant building cause bad guys are always in giant buildings. When I got to the building there was a gate I needed to enter. Should I …
1. Use 1 ton of explosives I have
OR
2. Ring the buzzer on the gate
${enter}`;

const gameOver4 = `I rang the buzzer but no one answered guess I'll have to come back at a different time
${gameOver}`;

const q5 = `I blew the gate into smithereens. When I entered the building the map said his room is on the 100th Floor. Should I ...
1. Take The Elevator
OR
2. Take the stairs
${enter}`;

const gameOver5 = `While going up the stairs I fell asleep cause It to many steps for me. ${gameOver}`;

const q6 = `When I got to the 100th floor Thanos was waiting for me. Should I …
1. Fight him with my Katanas
OR
2. Fight him with a rubber chicken 
${enter}`


const gameOver6 = `When I went to attack Thanos he broke my friggin Katanas and whooped my butt. ${gameOver}`

const win = `Winner via choking Thanos out with rubber chicken DEADPOOL!`;

// Alerts the user to start the game
alert (start);

// Sets the value of user's entry
let userInput = prompt(q1);

// NESTED CONDITIONAL STATEMENTS
// 1st Conditional statement
// NOTE: Prompts return the value entered as a string. That is why double equals == is used instead of triple equals (AKA Strict Equality)
if (userInput == 2){
    userInput = prompt(q2);
    
    // Second Conditional Statement
    if (userInput == 1){
        userInput = prompt(q3);

        // Third Conditional Statement
        if (userInput == 2){
            userInput = prompt(q4)

            // Fourth Conditional Statement
            if (userInput == 1){
                userInput = prompt(q5)

                // Fifth Conditional Statement
                if (userInput == 1){
                    userInput = prompt(q6);

                    if (userInput == 2){
                        alert(win);
                    }else{
                        alert(gameOver6)
                    }
                }else{
                    alert(gameOver5)
                }

            }else {
                alert(gameOver4)
            }

        } else{
            alert(gameOver3)
        }

    } else {
        alert(gameOver2)
    }

} else {
    alert(gameOver1)
}