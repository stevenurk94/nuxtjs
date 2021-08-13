
export const state = () => ({
    mountains: []
})

export const mutations = {

    setMountains(state, message) {
        state.mountains = message
    }
}

export const actions = {


    
    async nuxtServerInit({ commit }) {
        const mountains = await fetch('https://api.nuxtjs.dev/mountains').then((response) => {

            if (response.status != 404) {
                return response.json()
            } 
            
            else {
                console.log("-- Letop: API werkt niet, content vanuit local JSON-file")
                const mountains2 = import("~/assets/json/mountains.json")
                return mountains2
                // return this.$router.replace({ path: '/404' });
            }
        }
    )

    commit('setMountains', mountains) 

    }    
}

