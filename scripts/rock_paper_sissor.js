let score = JSON.parse(localStorage.getItem('Score')) || 
                        {
                            wins: 0,
                            loses: 0,
                            ties: 0
                        }; // default operator ||

            updateScore();

            let move = '';
            let result = '';

            function gameplay(my_move)
            {
                const move = comp_pick();

                if(my_move === 'rock')
                {
                    if(move === 'rock')
                    {
                        result = 'it\'s a tie !!';
                        score.ties += 1;
                    }
                    else if(move === 'paper')
                    {
                        result = 'you lose !';
                        score.loses+=1;
                    }
                    else if(move === 'scissor')
                    {
                        result = 'you won !!!';
                        score.wins+=1;
                    }
                }

                else if(my_move === 'paper')
                {
                    if(move === 'rock')
                    {
                        result = 'you won !!!';
                        score.wins+=1;
                    }
                    else if(move === 'paper')
                    {
                        result = 'it\'s a tie !!';
                        score.ties += 1;
                    }
                    else if(move === 'scissor')
                    {
                        result = 'you lose !';
                        score.loses+=1;
                    }
                }

                else if(my_move === 'scissor')
                {
                    if(move === 'rock')
                    {
                        result = 'you lose !';
                        score.loses+=1;
                    }
                    else if(move === 'paper')
                    {
                        result = 'you won !!!';
                        score.wins+=1;
                    }
                    else if(move === 'scissor')
                    {
                        result = 'it\'s a tie !!';
                        score.ties += 1;
                    }
                }

                localStorage.setItem('Score', JSON.stringify(score));

                updateScore();

                document.querySelector('.js-outcome').innerHTML = result;

                document.querySelector('.js-comp_user_choices').innerHTML = `you
            <img class="rock-img" src="images/${my_move}-emoji.png">
            <img class="rock-img" src="images/${move}-emoji.png">
            computer`;

            }

            function new_game()
            {
                document.querySelector('.js-outcome').innerHTML = '';

                document.querySelector('.js-comp_user_choices').innerHTML = '';
            }
            
            function updateScore()
            {
                document.querySelector('.js-Score').innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;//for the <p> element!! 
            }

            function comp_pick()
            {
                const comp = Math.random();
                

                if(comp >= 0 && comp < 1/3)
                {
                    return 'rock';
                }
                else if(comp >= 1/3 && comp < 2/3)
                {
                    return 'paper';
                }
                else if(comp >= 2/3 && comp < 1)
                {
                    return 'scissor';
                }
            }