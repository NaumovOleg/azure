import { Construct } from 'constructs';
import SharedStack from './SharedStack';
import User from './User';

class FunctionStack extends Construct {

  constructor(scope: Construct, id: string, shared: SharedStack) {
    super(scope, id);

    new User(this, 'User', shared.rg, shared.plan, shared.sta, shared.ins);
  }
}

export default FunctionStack;
