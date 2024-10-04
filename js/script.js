// ===================== dom part start =============
// ======= player 1 dom
let playerOne                       = document.querySelector('.playerOne')
let PlayerOneInput                  = document.querySelector('.PlayerOneInput')
let PlayerOneButton                 = document.querySelector('.PlayerOneButton')

// ======= player 2 dom
let playerTwo                       = document.querySelector('.playerTwo')
let PlayerTwoInput                  = document.querySelector('.PlayerTwoInput')
let PlayerTwoButton                 = document.querySelector('.PlayerTwoButton')

// ======= player 3 dom
let playerThree                     = document.querySelector('.playerThree')
let PlayerThreeInput                = document.querySelector('.PlayerThreeInput')
let PlayerThreeButton               = document.querySelector('.PlayerThreeButton')

// ======= other dom
let playerName                      = document.querySelector('.playerName')
let error                           = document.querySelector('.error')
let Wresult                         = document.querySelector('.Wresult')
let winR                            = document.querySelector('.winR')
let chanceCount                     = document.querySelector('.chanceCount')
let chance                          = 0



let chanceCounT                     = document.querySelector('.chanceCounT')
let chancE                          = 0

// =================== dom part end =============
    chanceCount.innerHTML = chance

    //   ===player 1 function ===
    let inputkey = (item)=>{
        if(item.key == 'Enter'){
            PlayerOneButton.click()
        }
    }


    PlayerOneButton.addEventListener('click',()=>{
        if(PlayerOneInput.value ==''){
            error.innerHTML ='Kisu to ekta den.'
        }else{
            if(PlayerOneInput.value > 10 ){
                error.innerHTML='4 anao beshi colbe na'
            }else if(PlayerOneInput.value < 0){
                error.innerHTML='4 anao kom colbe na'
            }else{
                playerOne.style ='display: none;'
                error.innerHTML=''
                playerTwo.style='display:block;'
                PlayerTwoButton.innerHTML='Go'
            }

        }
        
       
    })
    // ============= player 2 function =====
    let Inputkey = (item)=>{
        if(item.key == 'Enter'){
            PlayerTwoButton.click()
        }
    }



    PlayerTwoButton.addEventListener('click',()=>{
        if(PlayerTwoInput.value ==''){
            error.innerHTML ='Dhuru miya, Moja koren'
        }else{
            error.innerHTML=''
            if(PlayerTwoInput.value > 10 ){
                error.innerHTML='4 anao beshi colbe na'
            }else if(PlayerTwoInput.value < 0){
                error.innerHTML='4 anao kom colbe na'
            }else{
                if(PlayerOneInput.value == PlayerTwoInput.value){
                    Wresult.style='display:block;'
                    winR.innerHTML='Player -2 Win'
                    playerTwo.style ='display: none;'
            }else{
              chance++
              chanceCount.innerHTML = chance
              if(chanceCount.innerHTML == 5){
                Wresult.style='display:block;'
                winR.innerHTML='Player -1 Win'
                playerTwo.style ='display: none;'
                playerThree.style ='display: block;'
                Wresult.style='display:none;'
              }
            }
        }

    }
    })

        // ============ player 3 function =====
        let INputkey = (item)=>{
            if(item.key == 'Enter'){
                PlayerThreeButton.click()
            }
        }
    



        PlayerThreeButton.addEventListener('click',()=>{
            if(PlayerThreeInput.value ==''){
                error.innerHTML ='Dhuru miya, Moja koren'
            }else{
                error.innerHTML=''
                if(PlayerThreeInput.value > 10 ){
                    error.innerHTML='4 anao beshi colbe na'
                }else if(PlayerThreeInput.value < 0){
                    error.innerHTML='4 anao kom colbe na'
                }else{
                    if(PlayerOneInput.value == PlayerThreeInput.value){
                        Wresult.style='display:block;'
                        winR.innerHTML='Player -3 Win'
                        playerThree.style ='display: none;'
                }else{
                  chancE++
                  chanceCounT.innerHTML = chancE
                  if(chanceCounT.innerHTML == 5){
                    Wresult.style='display:block;'
                    playerThree.style ='display: none;'
                    Wresult.style='display:block;'
                    winR.innerHTML='Player -1 Win'

                    
                  }
                }
            }
    
        }
        })
