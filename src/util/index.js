class myEventEmitter{
    constructor(){
        console.log('123')
        this.eventMap = {}
    }
    on(type,handler){
        if(!handler instanceof Function){
            throw new Error('请传递一个函数')
        }
        if(!this.eventMap[type]){
            this.eventMap[type] = []
        }
        this.eventMap[type].push(handler)
    }
    emit(type,params){
        if(this.eventMap[type]){
            this.eventMap[type].forEach(handler => {
                handler(params)
            });
        }
    }
}
export default new myEventEmitter()