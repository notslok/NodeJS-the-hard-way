// const products = [];
const fs = require('fs');//FOR READING AND WRITING INTO FILE
const path =require('path');
const root = require('../util/path');// returns the project's root dir PATH

const filePath = path.join(path.dirname(process.mainModule.filename),"data","products.json");

const fetchProduct = callback => {
    fs.readFile(filePath,'utf8',(err, fileContent) => {
        let products = [];
        if(err){
            return callback(products);
        }
        
        products = JSON.parse(fileContent);
        callback(products);
        
        // console.log(products);
    })
}

module.exports = class Product{
    constructor(name){
        this.title=name;
    }
    //methods
    save(){
        // products.push(this);//pushes the current instance(i.e. object) of the class
        
        fetchProduct((products)=>{
            products.push(this);
            fs.writeFile(filePath,JSON.stringify(products),(err)=>{
                console.log(err)
            });
        })

        // fs.readFile(filePath,(err, fileContent) => {
        //                                             let products = [];
        //                                             if(!err){
        //                                                 products = JSON.parse(fileContent);
        //                                             }
        //                                             products.push(this);

        //                                             fs.writeFile(filePath,JSON.stringify(products),(err)=>{
        //                                                                                                     console.log(err)
        //                                                                                                 });
        //                                         });
    };
    static fetchAll(callback){//static bcz we are not fetching from an instance
        // return products;
        fetchProduct(callback);        
        // fs.readFile(filePath,'utf8',(err, fileContent) => {
        //                                             let products = [];
        //                                             if(err){
        //                                                 return callback(products);
        //                                             }
                                                    
        //                                             products = JSON.parse(fileContent);
        //                                             callback(products);
                                                    
        //                                             // console.log(products);
        //                                         })
    }
}