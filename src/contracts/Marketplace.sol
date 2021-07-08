pragma solidity ^0.5.0;

contract Marketplace {
    string public name;
    uint public productCount = 0;
    mapping(uint => Product) public products;

    struct Product {
        uint id;
        string name;
        uint price;
        address payable owner;
    }

    event ProductCreated(
        uint id,
        string name,
        uint price,
        address payable owner
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        address payable owner
    );

    constructor() public {
        name = "Covid Helpline";
    }

    function createProduct(string memory _name, uint _price) public {
        // Require a valid name
        require(bytes(_name).length > 0, 'Not a Valid Name');
        // Require a valid price
        require(_price > 0, 'Not a Valid Price');
        // Increment product count
        productCount ++;
        // Create the product
        products[productCount] = Product(productCount, _name, _price, msg.sender);
        // Trigger an event
        emit ProductCreated(productCount, _name, _price, msg.sender);
    }

    function donateProduct(uint _id) public payable {
        // Fetch the product
        Product memory _product = products[_id];
        // Fetch the owner
        address payable _seller = _product.owner;
        // Make sure the product has a valid id
        require(_product.id > 0 && _product.id <= productCount, 'Data Issue');
        // Require that there is enough Ether in the transaction
        require(msg.value >= _product.price, 'Sorry, You dont have enough Ether.');
        // Require that the product has not been purchased already
        // require(!_product.purchased, 'Sorry, The donation has already been made.');
        // Require that the buyer is not the seller
        require(_seller != msg.sender, 'Sorry, You cannot make donation on your own request.');
        // Transfer ownership to the buyer
        _product.owner = msg.sender;
        // Mark as purchased
        // _product.purchased = true;
        // Update the product
        products[_id] = _product;
        // Pay the seller by sending them Ether
        address(_seller).transfer(msg.value);
        // Trigger an event
        emit ProductPurchased(productCount, _product.name, _product.price, msg.sender);
    }
}
