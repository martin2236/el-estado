const state = {
    data:{},
    listener:[],
    getState(){return this.data},
    setState (newState){return this.data = newState},
    subscribe(callback:(any)=>any){
        this.listener.push(callback)
    }
}
export {state}