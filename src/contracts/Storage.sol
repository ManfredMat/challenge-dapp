pragma solidity ^0.8.6;
pragma experimental ABIEncoderV2;

contract StorageContract {

    uint public nextId = 0;
    
    struct Store {
        uint id;
        string name;
        string description;
    }

    Store [] store;
    
    function createStorage (string memory _name , string memory _description) public {
        store.push(Store( nextId , _name , _description ));
        nextId++;
    }

    function findIndex(uint _id) internal view returns (uint) {

        for( uint i=0 ; i < store.length ; i++){
            if(store[i].id == _id){
                return i;
            }
        }

        revert("store not found");
    }

    function getOnePosition (uint _id) public view returns ( uint , string memory , string memory) {
        uint index = findIndex( _id );

        return (store[index].id , store[index].name  , store[index].description );
    }

    function getAll () public view returns ( Store[] memory) {
        return store;
    }
}
