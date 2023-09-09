
// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;
import { IMultisig } from "./IMultisig.sol" ;

interface IFactory {
    function createMultisig(
        address[] memory _admins
    ) external payable returns (IMultisig newMultisig);
}