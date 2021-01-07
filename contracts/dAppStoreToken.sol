pragma solidity ^0.5.0;

import "./ERC20Burnable.sol";

/**
 * @dev dAppStore Token implementation.
 */
contract dAppStoreToken is  ERC20Burnable {
    using SafeMath for uint256;

    string public constant name = "dAppstore Token";
    string public constant symbol = "DAPPX";
    uint8 public constant decimals = 18;

    uint256 internal constant INITIAL_SUPPLY = 1.5 * (10**9) * (10 ** uint256(decimals)); // 1.5 billions tokens

    /**
    * @dev Constructor that gives msg.sender all of existing tokens.
    */
    constructor() public {
        _totalSupply = INITIAL_SUPPLY;
        _balances[msg.sender] = INITIAL_SUPPLY;
        emit Transfer(address(0), msg.sender, INITIAL_SUPPLY);
    }
}