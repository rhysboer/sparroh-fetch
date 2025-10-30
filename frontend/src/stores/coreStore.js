import { defineStore } from "pinia";

const state = {
    NO_DATA: 'nodata',
    LOADING: 'loading',
    ERROR: 'error',
    SUCCESS: 'success'
}

const coreStore = defineStore('coreStore', {
    state: () => ({
        cart: new Map(),
        items: new Map(),
        selectedID: null 
    }),
    getters: {
        selected: (state) => state.cart.get(state.selectedID),
        selectedItems: (state) => state.items.get(state.selectedID)?.items ?? [],
        selectedState: (state) => state.items.get(state.selectedID)?.state ?? null,
        selectedError: (state) => state.items.get(state.selectedID)?.error ?? null,
        isLoading: (state) => state.items
    },
    actions: {
        setCart(items) {
            this.cart = new Map();
            this.items = new Map();

            items.forEach(e => {
                this.cart.set(e.id, e);
                this.items.set(e.id, {
                    state: state.NO_DATA,
                    error: null,
                    items: null
                });
            });
        },

        setSelected(id){
            if(this.cart.has(id)){
                this.selectedID = id;
                return;
            }

            this.selectedID = null;
        },

        setItems(id, items){
            const item = this.items.get(id); 
            if(item){
                item.state = !items && items.length > 0 ? state.SUCCESS : state.NO_DATA;
                item.items = items;
            }
        },

        setError(id, errMsg){
            const item = this.items.get(id);
            if(item){
                item.state = state.ERROR;
                item.error = errMsg;
            }
        }
    }
});

export default coreStore;