import { defineStore } from "pinia";

const coreStore = defineStore('coreStore', {
    state: () => ({
        cart: new Map(),
        items: new Map(),
        selectedID: null 
    }),
    getters: {
        selected: (state) => state.cart.get(state.selectedID),
        selectedItems: (state) => state.items.get(state.selectedID)
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

            this.selectedID = null;
        },

        setItems(id, items){
            this.items.set(id, items);
        }
    }
});

export default coreStore;