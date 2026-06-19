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

    set points(value) {
        if (value < 0) {
            throw new Error("Points can not be of a negative Value.")
        }
        this._points
    }

    get points() {
        return this._points
    }

    static fromObject(data) {
        return new Team(
            data.id,
            data.name,
            data.group,
            data.points,
            data.played,
            data.goalDifference,
        )
    }
}

const Vincy = new Team(909, "St.Vincent", "Group V", 2, "Mexico", 2);
console.log(Vincy.group)
Vincy.points = 6;
console.log(Vincy)
