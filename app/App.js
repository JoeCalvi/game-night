// import { ValuesController } from "./Controllers/ValuesController.js";

// class App {
//   valuesController = new ValuesController();
// }

// window["app"] = new App();

import { PlayersController } from "./Controllers/PlayersController.js";

class App {
    playersController = new PlayersController();
}

window["app"] = new App();