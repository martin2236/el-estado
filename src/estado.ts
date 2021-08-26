export {estado}

const estado = {
    data :{},
    listener:[],
    getState(){return this.data},
    setState(newData){return this.data = newData},
    subscribe(callback:(any)=>any){
        this.listener.push(callback)
    }
}

