import React, { Component } from "react";

 export class NewsItemCMP extends Component {
   render() {
     let { name, description, imageURL, newsUrl, author, publishedAt, source, mode } = this.props;
     let a = publishedAt;
     let b = new Date(a);
     return (
       <div className={`card`} style={{ marginTop: "10px", backgroundColor: mode === 'light' ? 'white' : 'rgb(0 0 0 / 48%)', color: mode === 'light' ? 'black' : 'white'}}>
        <div className="flex justify-end absolute right-0">
         <span className="badge rounded-pill bg-secondary">
           {source}
         </span>
        </div>
         <img
           src={
             !imageURL
               ? `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`
               : imageURL
           }
           className={`h-60`}
           htmlname="card-img-top"
           alt=""
         />
         <div className={`card-body`}>
           <h5 className={`card-title text-lg leading-6`}>{name}</h5>
           <p className={`card-text text-sm leading-4 mt-3 text-gray-600 ${mode === 'light' ? 'text-gray-600' : 'white'}`}>
             {description}
         </p>
         <div className={`card-footer text-body-secondary mt-6`} style={{backgroundColor: mode === 'light' ? '#eeeeee' : '#2e2e2e4f'}}>
           <p style={{color: mode === 'light' ? 'black' : 'gray'}}>{`Author :- ${!author ? "Not-Known" : author},`}</p>
           <p style={{color: mode === 'light' ? 'black' : 'gray'}}>{`Publish On :- ${
             !publishedAt ? "Not-Known" : `${b.toUTCString()}`
           }`}</p>
         </div>
           <a href={newsUrl} rel="noreferrer" target="_blank" className={`btn mt-3 mb-2 ${this.props.mode === 'light' ? 'btn-outline-primary' : 'btn-dark'}`}>
             View News
           </a>
         </div>
       </div>
     );
   }
 }
export default NewsItemCMP;