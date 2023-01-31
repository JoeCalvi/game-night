// NOTE HTML comes here, to "controller"
// NOTE "controller" then goes to "service"


import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js";


export class PlayersController {

    drawPlayers() {

        let players = appState.players
        let template = ''
        players.forEach(player => template += player.Template)

        document.getElementById('players').innerHTML = template

    }

    addNewPlayer() {
        window.event.preventDefault()
        const form = window.event.target
        let playerData = getFormData(form)
        playersService.addNewPlayer(playerData)
        this.drawPlayers()
    }

    increaseScore(name) {
        let player = appState.players.find(player => player.name == name)
        player.gainPoints()
        this.drawPlayers()
    }

    decreaseScore(name) {
        let player = appState.players.find(player => player.name == name)
        player.losePoints()
        this.drawPlayers()
    }

    constructor() {
        this.drawPlayers()
    }

}