import { ethers } from 'hardhat'

// const amount = ethers.parseEther('0.03')
const amount2 = ethers.parseEther('0.01')
const spender = '0x77aC3a62c12333DD9604f8D5cD6E350Cd33D04b4'



async function main() {
//     const factory_addr = '0xEF96135F3762eBC3052482B1e07BF1F253B6c7D2'
// const newFactory = await ethers.getContractAt('IFactory', factory_addr)
// await newFactory.createMultisig([
//     '0x77aC3a62c12333DD9604f8D5cD6E350Cd33D04b4',
//     '0x3D7BeDf2e394DFF17D3ab0AD0A90AEf7EfCEdFC6',
//     '0x825f886D6114753078b7d63FfC977b52e2Db88ac',
// ],
// { value: amount }
// );

// console.log(newFactory)

const mutisigTnx = await ethers.getContractAt('IMultisig', '0x8Ea03302920A26a4e3C8A837681701880D400E37' )

await mutisigTnx.createTransaction(amount2, spender)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
    })