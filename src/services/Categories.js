import { useStore } from 'vuex'

export function categoriesByParentId(arr, id){
    const store = useStore()
    //return store.state.categories.filter((e) => e.parent_id == 0)
    console.log(store.getters.categories)
}