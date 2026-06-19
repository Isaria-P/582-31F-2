export class Team {
    constructor(id, name, group, points, played, goalDifference) {
        this.id = id;
        this.name = name;
        this.group = group;
        this.points = points;
        this.played = played;
        this.goalDifference = goalDifference;
    }

    get summary() {
        return `${this.name} - ${this.group} - ${this._points}`
    }

    
}