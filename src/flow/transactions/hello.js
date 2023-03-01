import * as fcl from "@onflow/fcl"

export async function change(name , ab) {
    return fcl.mutate({
      cadence: REGISTER_DOMAIN,
      args: (arg, t) => [arg(name, t.String), arg(ab, t.String)],
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 1000,
    });
  }
  
  const REGISTER_DOMAIN = `
  import proj2 from 0xDomains


  transaction(name:String , acb : String) {

    prepare(acct: AuthAccount) {}
  
    execute {
      proj2.change(new:name , ac : acb)
    }
  }
  `;