import {IApp} from "../emulator/models/dataModels/IApp";
export class application{
    static getInstance():IApp{
        return null;
    }
}


class Handler {
    msgs:string[];
    constructor(msgs:string[]) {
        this.msgs = msgs;
    }
    greet() {
        this.msgs.forEach(x=>alert(x));
    }
}

function createHandler(handler: typeof Handler, params: string[]) {
    var obj = new handler(params);
    return obj;
}

var h = createHandler(Handler, ['h111i', 'b1ye']);
h.greet();