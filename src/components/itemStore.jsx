import './itemStore.css'

export default function ItemStore(item){
    let storedItem = item.item
    return<>
    <div className='divItems'>
        <div className='divBox'><h5 className='itemH5'>{storedItem.id}</h5></div> 
        <div className='divBox'><h5 className='itemH5'>{storedItem.name}</h5></div> 
        <div className='divBox'><h5 className='itemH5'>{storedItem.description}</h5></div>
    </div>
    
    </>
}