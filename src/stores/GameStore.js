import { observable, action, computed, toJS } from "mobx";
import { persist } from 'mobx-persist'


export default class GameStore {
    @persist('list') @observable games = [];
    @persist('list') @observable list = [
        'Hello World !'
    ];

    @computed get get_games() {
        // toJs is going to convert the list of games which is an observable to a js Array
        let games = toJS(this.games)
        return games
    }

    @computed get get_list() {
        let list = toJS(this.list)
        return list
    }

    @computed get count_list() {
        let list = toJS(this.list)
        return list.length
    }

    @action 
    setGames(games) {
        this.games = [...games]
    }
    
    @action
    addToList(item) {
        this.list.push(item)
    }
}

