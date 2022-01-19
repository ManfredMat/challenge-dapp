import { ethers } from 'ethers';
import { useState } from 'react';
import contract from '../contracts/Storage.json';
import './inputStore.css'
const contractAddress = "0x1DD2B8c53876344DC017E2980a27d17bDb019f9d"
const abi = contract;

export default function InputStore(){
    
    const[newStore , setNewStore] =useState({
        name:'',
        description:''
    })




    async function submitHandler(name , description){
        try{

            const {ethereum} = window;

            if(ethereum){

                const provider = new ethers.providers.Web3Provider(ethereum);

                const signer =  provider.getSigner();

                const storageContract =  new ethers.Contract(contractAddress , abi , signer);
                
                await storageContract.createStorage(name , description)

                return
                
            }else{

                console.log("NO HAY RED ETHEREUM")
                return;
            }




        }catch(error){
            console.log(error)
        }
    }


    function onInputChange(e){
        e.preventDefault()
        setNewStore({
                ...newStore,
                [e.target.name]: e.target.value,
            })    
        
    }
    function clickHandler(e){
        e.preventDefault()
        submitHandler(newStore.name , newStore.description) 
        
    }
    return<>
    <div className='divInput'>
    <div>

        <label className='label'>Name: </label>
        <input className='input' type="text" name='name' placeholder='Name the store item' onChange={onInputChange} value={newStore.name}/>

    </div>

    <div>

        <label className='label'>Description: </label>
        <input className='input' type="text" name='description' placeholder='Description of  the store item' onChange={onInputChange} value={newStore.description}/>
        
    </div>    

    <button className='sendButton' onClick={clickHandler}>Send</button>
    </div>    
    </>
}