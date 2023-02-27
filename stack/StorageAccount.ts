import { Construct } from "constructs";
import {StorageAccount} from "../.gen/providers/azurerm/storage-account";
import {ResourceGroup} from "../.gen/providers/azurerm/resource-group";

class StorageAccountConstruct extends Construct {
    sta: StorageAccount;
    constructor(scope: Construct, id: string, rg: ResourceGroup) {
        super(scope, id);
        this.sta = new StorageAccount(this, "storage-account-dmcbejkcce", {
            name: "sxdcfgvhjklmkjhv",
            location: "northeurope",
            accountReplicationType:"LRS",
            accountTier:"Standard",
            resourceGroupName:rg.name
        })
    }
}

export default StorageAccountConstruct
