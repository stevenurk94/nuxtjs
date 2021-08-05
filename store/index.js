export const state = () => ({
    mountains: [], 
    data1: "test123"
})

export const mutations = {

    setMountains(state, message){
        state.mountains = message
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        const mountains = await fetch('https://api.nuxtjs.dev/mountains').then(response => response.json())
    commit('setMountains', mountains)
    }
}

