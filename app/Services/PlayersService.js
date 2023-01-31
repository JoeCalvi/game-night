// NOTE "service" talks to the model and the appstate
// NOTE "service" manipulates the data

import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"


class PlayersService {

    addNewPlayer(playerData){
        let newPlayer = new Player(playerData.name)
        appState.players.push(newPlayer)
        console.log(newPlayer)
    }


}


export const playersService = new PlayersService()