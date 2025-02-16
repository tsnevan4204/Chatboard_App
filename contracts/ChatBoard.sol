// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChatBoard {
    struct Message {
        address sender;
        string content;
        uint256 timestamp;
    }

    Message[] public messages;

    event NewMessage(address indexed sender, string content, uint256 timestamp);

    /// @notice Post a new message to the chat board.
    function postMessage(string memory _content) public {
        messages.push(Message(msg.sender, _content, block.timestamp));
        emit NewMessage(msg.sender, _content, block.timestamp);
    }

    /// @notice Get all messages from the chat board.
    function getMessages() public view returns (Message[] memory) {
        return messages;
    }
}
