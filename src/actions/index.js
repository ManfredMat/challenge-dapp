export const CHANGE_DISPLAY = "CHANGE_DISPLAY"
export const FILL_STORE = "FILL_STORE"

export function change_display(){
    return {
        type: CHANGE_DISPLAY
    }
}
export function fill_store(array){
    return {
        type: FILL_STORE,
        payload:array
    }
}