import { Component, OnInit } from '@angular/core';

export class Satellite {

    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string,
        operational: boolean) {

        this.name = name;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;

    }
    shouldShowWarning() {
        if (this.type.toUpperCase() === "Space Debris".toUpperCase()) {
            return true;
        };
        return false;
    }
}
