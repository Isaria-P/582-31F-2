export class Artist {
    constructor(id, name, genre, stage, time, country, headliner) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.stage = stage;
        this.time = time;
        this.country = country;
        this. headliner = headliner;
    }

    get summary() {
        return `${this.name}-${this.genre}-${this.stage}`
    }
    set headliner(value){
        if (typeof value !== "boolean") {
            throw new Error("Headliner must be true or false")
        } else {
            this._headliner = value
        }
    }
    get headliner() {
        return this._headliner;
    }
    static fromObject(data) {
        return new Artist(
            data.id,
            data.name,
            data.genre,
            data.stage,
            data.time,
            data.country,
            data.headliner,
        )
    }
}

