import * as fcl from "@onflow/fcl"

export async function helloworld() {
    return fcl.query({
      cadence: GET_MY_DOMAIN_INFOS,
    });
  }
  
  const GET_MY_DOMAIN_INFOS = `
  import proj2 from 0xDomains
  
  pub fun main():[String] {
    return proj2.greetings
       
      }
  
  
  `;