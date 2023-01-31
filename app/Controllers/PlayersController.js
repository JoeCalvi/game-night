// NOTE HTML comes here, to "controller"
// NOTE "controller" then goes to "service"


import { appState } from "../AppState";
import { playersService } from "../Services/PlayersService";


function _drawPlayers() {

    let players = appState.players
    let template = ''
    players.forEach(player => template += player.Template)

    document.getElementById('players').innerHTML = template

}

export class PlayersController {

    constructor() {
        _drawPlayers()
    }

    addNewPlayer(playerName){
        window.event.preventDefault()
        const form = window.event.target
        playersService.addNewPlayer(form.playername.value)
        _drawPlayers()
    }
}