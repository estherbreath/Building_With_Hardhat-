import { ethers } from 'hardhat'

async function main() {
  const multisigAddr = "0xCA5C57C39630508A1E88cD1FF4cA1d5207A1Ea33"
  const amount = ethers.parseEther("0.01")
  const spenderAddr =  '0x77aC3a62c12333DD9604f8D5cD6E350Cd33D04b4'
  //destructure the signers
  const [admin1, admin2, admin3] = await ethers.getSigners()

  const multisig = await ethers.getContractAt('IMultisig', multisigAddr)
  const newTransaction = await multisig.createTransaction(amount, spenderAddr)
  await newTransaction.wait()
  const approved = await multisig.connect(admin3).AprroveTransaction(1)
  await approved.wait()

  const transaction = await multisig.getTransaction(1)
  console.log(transaction)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})