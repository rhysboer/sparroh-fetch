import { defineStore } from "pinia";

const coreStore = defineStore('coreStore', {
    state: () => ({
        cart: new Map(),
        items: [],
        selectedID: null 
    }),
    getters: {
        selected: (state) => state.cart.get(state.selectedID)
    },
    actions: {
        setCart(items) {
            this.cart = new Map();
            items.forEach(e => this.cart.set(e.id, e));
            console.log(this.cart);
        },

        setSelected(id){
            if(this.cart.has(id)){
                this.selectedID = id;
                return;
            }

            console.log('NULL');
            this.selectedID = null;
        }
    }
});

export default coreStore;