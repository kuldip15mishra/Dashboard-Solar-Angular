/**
 * This Class create Database connector attributes and Crud operation
 */
export class DbConnector {
    name: string;
    hostname: string;
    port: string;
    username: string;
    password: string;
    databasename: string;
    databasetype: ConnectorTypes;
    status: boolean;
    trackstatus: UserInfo;

    constructor() {

    }


    save() {
        //todo
    }

    update() {
        //TODO
    }

    delete() {
        //TODO
    }

}


export interface UserInfo {
    userid: string;
    createby: string;
    createddate: string;
    lastupdateddate: string;
    lastupdatedby: string;

}

export enum ConnectorTypes {
    POSTGRSSQL = 1,
    SQL = 2,
    OPENOPC=3,
    EXCEL=4
}