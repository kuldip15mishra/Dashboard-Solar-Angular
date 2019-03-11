import { DbConnector } from "../";

export class OpenOPCconnector extends DbConnector{

    opcServer :any;
    isUA:boolean;
    isDA:boolean;
    isHMI:boolean;
    
    constructor(){
        super();
    }
}