import { defineStore } from "pinia";
import { reactive } from "vue";

export const state = {
    NO_DATA: 'nodata',
    LOADING: 'loading',
    ERROR: 'error',
    SUCCESS: 'success'
}

export const useCoreStore = defineStore('coreStore', {
    state: () => ({
        cart: new Map(),
        id: null, /* Selected Key/Id */
        filter: '',
    }),
    getters: {
        selected: (state) => state.cart.get(state.id) ?? null,
        state: (state) => state.id ? state.cart.get(state.id).items_state : null, 
        error: (state) => state.id ? state.cart.get(state.id).error : '',
        entries: (state) => state.id ? state.cart.get(state.id).items : [],
        title: (state) => state.id ? state.cart.get(state.id).title : ''
    },
    actions: {
        addCartItems(items){
            this.cart = new Map();

            items.forEach(item => {
                const id = item.id;
                if(!this.cart.has(id)){
                    this.cart.set(id, new reactive({
                        id: id,
                        price: item.amount,
                        price_code: item.code,
                        image_url: item.image,
                        title: item.title,
                        items_state: state.NO_DATA,
                        items: [],
                        error: ''
                    }));
                }
            })
        },

        addFoundEntries(id, entries){
            const item = this.cart.get(id); 
            if(item && entries){
                item.items_state = state.SUCCESS;
                item.items = entries;
            }
        },

        setSelected(id){
            if(this.cart.has(id)){
                this.id = id;
                return;
            }

            this.id = null;
        },

        setLoading(){
            const item = this.cart.get(this.id);
            if(item){
                item.items_state = state.LOADING;
            }
        },

        setError(id, errMsg){
            const item = this.cart.get(id);
            if(item){
                item.items_state = state.ERROR;
                item.error = errMsg;
            } 
        }
    }
});