import { Construct } from "constructs";
import {AppServicePlan} from "../.gen/providers/azurerm/app-service-plan";
import {ResourceGroup} from "../.gen/providers/azurerm/resource-group";

class AppServicePlanConstruct extends Construct {
    plan: AppServicePlan;
    constructor(scope: Construct, id: string, rg:ResourceGroup ) {
        super(scope, id);
        this.plan = new AppServicePlan(this, "cdktf-asp", {
            kind: "Linux",
            reserved: true,
            resourceGroupName: rg.name,
            location: rg.location,
            name: "cdktf-demo-plan",
            sku: { size: "B1", tier: "Free" },
        });
    }
}

export default AppServicePlanConstruct
