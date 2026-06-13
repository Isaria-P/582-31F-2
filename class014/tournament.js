

export class Tournament {
    constructor(id, name, game, entryFee, maxPlayers, registeredPlayers, status) {
        this.id = id;
        this.name = name;
        this.game = game;
        this.entryFee = entryFee;
        this.maxPlayers = maxPlayers;
        this.registeredPlayers = registeredPlayers;
        this.status = status;

        this.registrations = [];
    }

    static fromObject(data) {
        return new Tournament(
            data.id,
            data.name,
            data.game,
            data.entryFee,
            data.maxPlayers,
            data.registeredPlayers,
            data.status
        );
    }

    addRegistration(registration) {
        this.registrations.push(registration);
    }

    get totalRegistrations() {
        return this.registrations.length;
    }

    get confirmedPlayers() {
        return this.registrations.filter(
            r => r.status === "confirmed"
        ).length;
    }

    get pendingPlayers() {
        return this.registrations.filter(
            r => r.status === "pending"
        ).length;
    }

    get expectedRevenue() {
        return this.confirmedPlayers * this.entryFee;
    }

    get spotsLeft() {
        return this.maxPlayers - this.confirmedPlayers;
    }
}


