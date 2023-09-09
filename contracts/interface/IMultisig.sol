// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

import {Transaction} from "../Multisig.sol";

interface IMultisig {

    function createTransaction(uint _amount, address _spender) external;

    function getTransaction(uint id) external view returns (Transaction memory);
}