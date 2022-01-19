import { ethers } from 'ethers';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fill_store } from '../actions';
import contract from '../contracts/Storage.json';
import ItemStore from './itemStore';
import './itemStore.css'

const contractAddress = "0x1DD2B8c53876344DC017E2980a27d17bDb019f9d"
const abi = contract;

export default function AllStore (){

    let dispatch = useDispatch()

    let [display , setDisplay]  = useState(false)

    let storeReducer = useSelector((state) => state.storedItems)

    async function getStore(){
        try{

            const {ethereum} = window;

            if(ethereum){

                const provider = new ethers.providers.Web3Provider(ethereum);

                const signer =  provider.getSigner();

                const storageContract =  new ethers.Contract(contractAddress , abi , signer);
                
                let store = await storageContract.getAll()

                store =  getStructure(store)

                return store
                
            }else{

                console.log("NO HAY RED ETHEREUM")
                return;
            }




        }catch(error){
            console.log(error)
        }
    }

    function getStructure(array){

        let newArray = []

        for(let i = 0 ; i < array.length ; i++){
            let id = array[i][0]._hex
            id = parseInt(id, 16)
            let name = array[i][1]
            let description = array[i][2]
            let storedItem = {
                id:id,
                name:name,
                description:description
            }
            newArray.push(storedItem)
        }

        return newArray

    }
    
    let store ;
    let storeItems;    
    async function storeHandler(){

        store = Promise.resolve(getStore())
        storeItems = await store.then((value) => { return value })
        dispatch(fill_store(storeItems))
    }

    function prueba(e){
        e.preventDefault()
        dispatch(fill_store(storeItems))
        setDisplay(true)
    }

    useEffect(()=>{
        storeHandler();      
    },[])
    
    const renderStore = (items)=>{
        let storeArray = items.map((items , index)=>{        
            return <ItemStore key={index} item={items}/>
        })
          
        return <>
            {storeArray}
        </>
    } 
    

return  <>
        <div className='divAllstore'>            
            <div className='divTitles'>
                <div ><h5 className='itemH5title'>ID: </h5></div> 
                <div ><h5 className='itemH5title'>Name: </h5></div> 
                <div ><h5 className='itemH5title'>Description: </h5></div>
            </div>
            {renderStore(storeReducer)}
        </div>
        </>
}