// NOTE "service" talks to the model and the appstate
// NOTE "service" manipulates the data

import { appState } from "../AppState"
import { Player } from "../Models/Player"


class PlayersService {

    addNewPlayer(playerName){
        const newPlayer = new Player(playerName)
        appState.players.push(newPlayer)
    }

}


export const playersService = new PlayersService()