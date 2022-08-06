import React, { useState } from 'react'

export function Admin(){
    const [item, setItem] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [successMessage, setSuccessMessage] = useState(false)
    const [emptyField, setEmptyField] = useState(false)


    const handleSubmit = (event) => {
    event.preventDefault();


    const itemObject = {
        name: item,
        price: price,
        description: description,
        category: category,
    }
    
    fetch('http://localhost:4000/shop', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(itemObject)
    });
    }


    function handleMessage(event) {

        if (item === '') {
            setEmptyField(true)
        } else {
            setSuccessMessage(true)
            setEmptyField(false)
        }

         

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Item</label>
                    <input className="form-control" value={item} onChange={(e) => setItem(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control"  value={price} onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label >Description</label>
                    <input className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} ></input>
                </div>
                <div className="form-group">
                    <label value={category} >Category</label>
                    <input className="form-control" onChange={(e) => setCategory(e.target.value)}></input>
                </div>
               <button onClick={handleMessage}type="submit" className="btn btn-primary my-2">Add item</button>
               {successMessage && <div class="alert alert-success" role="alert">Item added succesfully</div>}
               {emptyField && <div class="alert alert-danger" role="alert">Can't have empty fields</div>}
            </form>
        </div>
    )
}

