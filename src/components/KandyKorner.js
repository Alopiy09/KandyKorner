import React, { Component } from 'react';
import StoreList from './StoreList';

export default class KandyKorner extends Component {

    employeesFromApi = [
        { id: 1, name: "Jon Jones" },
        { id: 2, name: "Vasyl Lomachenko" },
        { id: 3, name: "Mark Hunt" },
        { id: 4, name: "Butter Bean" }
    ]

    storeLocationsFromApi = [
        { id: 1, name: "Nashville" },
        { id: 2, name: "Toronto" },
        { id: 3, name: "REDACTED" },
        { id: 4, name: "New York" }
    ]

    candyTypesFromApi = [
        { id: 1, name: "Chocolate" },
        { id: 2, name: "Hard Candy" },
        { id: 3, name: "Gummy" }
    ]

    individualCandiesFromApi = [
        { id: 1, name: "Snickers" },
        { id: 2, name: "Jolly Ranchers" },
        { id: 3, name: "Gummy Bears" },
        { id: 4, name: "Milky Way" },
        { id: 5, name: "Warheads" },
        { id: 6, name: "Gummy Worms" }
    ]

    state = {
        employees: this.employeesFromApi,
        storeLocations: this.storeLocationsFromApi,
        candyTypes: this.candyTypesFromApi,
        individualCandies: this.individualCandiesFromApi
    }

    render() {
        return (
            <div>
                <h1>The Kandy Korner</h1>
                <StoreList store={this.state.storeLocations} />
            </div>
        );
    }
}