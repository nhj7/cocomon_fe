export const state = () => ({
    "upbit": {
        "KRW-BTC": {}
    }
})

export const mutations = {
    add: (state, text) => {
        state.counter++;
        var item = {
            id: state.counter, title: text, done: false
        }; state.list.push(item);
    }, remove: (state, todo) => {
        var list = state.list; list.splice(list.indexOf(todo), 1)
    }, toggle: (state, todo) => {
        todo.done = !todo.done
    }
}


