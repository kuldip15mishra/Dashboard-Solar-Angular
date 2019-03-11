import { DbConnector ,PostgresSqlConnector,OpenOPCconnector,ConnectorTypes} from ".";

/**
 * 
 * 
 * @export
 * @class FactoryConnector
 */
export class FactoryConnector {


    createConnector(connectorName : ConnectorTypes): DbConnector {
        switch(connectorName) {
            case 0:
              return new PostgresSqlConnector();
            case 1:
              return new OpenOPCconnector();
            default:
              return null;
          }
       
    }
}