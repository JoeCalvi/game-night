
export class Player {

    constructor(name, score = 0) {
        this.name = name
        this.score = score
    }


    get Template() {
        return `
          <div class="container-fluid bg-white" id="players">
      <div class="row p-2">
        <div class="col-12 d-flex align-items-center justify-content-between">
          <img src="https://via.placeholder.com/80" alt="profile pic" class="border border-warning rounded-circle">
          <div>
            <h5>${this.name}</h5>
          </div>
          <span class="mdi mdi-minus-circle-outline fs-5"></span>
          <div class="px-1 score-alignment">
            <h4>${this.score}</h4>
          </div>
          <span class="mdi mdi-plus-circle-outline fs-5"></span>
        </div>
        `
    }





}