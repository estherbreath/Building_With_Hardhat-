import {ethers} from "hardhat";

async function main() {
  


    const multisigFac = await ethers.deployContract('MultiSigFactory', []) 
    await multisigFac.waitForDeployment()
    
    console.log(`This contract has been deployed to ${multisigFac.target}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
  })

  