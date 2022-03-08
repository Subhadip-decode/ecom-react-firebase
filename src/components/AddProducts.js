import React,{useState} from 'react'
import {storages,db} from '../config/Config'
import { collection,addDoc } from 'firebase/firestore';
// import 'firebase/storage';
// import firebase from 'firebase/app';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
const AddProducts = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [Error, setError] = useState('');
    const colRef = collection(db, 'Products');    
    const  types = ['image/png','image/jpeg']

    const handleProductImg = (e)=>{
        let selectedFile = e.target.files[0];
        // console.log(selectedFile.type);
        if(selectedFile && types.includes(selectedFile.type)){
            setProductImg(selectedFile);
            setError('');
        }
        else{
            setProductImg(null);
            setError('Please select a valid image type png or jpeg');
        }
    }

    const addProduct = (e)=>{
        e.preventDefault();
        if(!productImg){
            return;
        }
        const nameImg = productImg.name;
        const storageRef = ref(storages,'product-images/'+nameImg);
        const uploadTask = uploadBytesResumable(storageRef,productImg);
        uploadTask.on('state_changed', snapshot=>{
            const progress= (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log(progress);
        },err=>{
            setError(err.message);
        },()=>{
             getDownloadURL(uploadTask.snapshot.ref).then(url =>{
                // console.log(url);
                addDoc(colRef, {
                    productName: productName,
                    productPrice: Number(productPrice),
                    productImg:url
                }).then(()=>{
                    setProductName('');
                    setProductPrice(0);
                    setProductImg('');
                    setError('');
                    // console.log(document.getElementById('file').value);
                }).catch(err=>setError(err.message))
            })
        })
        
    }
    return (
    <div className='container'>
        <br/>
        <h2>ADD PRODUCTS</h2>
        <br/>
        <form autoComplete='off' className='form-group' onSubmit={addProduct}>
        <label htmlFor="product-name">Product Name</label>
        <br/>
        <br/>
        <input type="text" className="form-control" required onChange={(e)=>setProductName(e.target.value)} value={productName}/>
        <br/>
        <br/>
        <label htmlFor="product-price">Product Price</label>
        <br/>
        <br/>
        <input type="text" className="form-control" required onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
        <br/>
        <br/>
        <input type="file" className='form-control' id='file' required onChange={handleProductImg}/>
        <br/>
        <button type="submit" className='btn btn-success btn-md'>ADD</button>
        </form>
        {Error && <span>{Error}</span>}
    </div>
  )
}

export default AddProducts