import React, { Component } from "react";
import NewsItemCMP from "./NewsItemCMP";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import { v4 as uuid } from 'uuid';

export class NewsCMP extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };

 
  constructor(props) {
      super(props);
      this.state = {
        articles: [],
        page: 1,
        pageSize: 8,
        Spinner: false,
        totalResults: 0,
        apiKey: '17cf0f2d113c42a29559b990cd1cd568', 
      };
    }

   Capitalize = (string) =>{
     return string.charAt(0).toUpperCase() + string.slice(1);
     }
    
   async UpdateData() {
    try {
      this.props.setprogress(20);
      // const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page}&apiKey=${this.state.apiKey}`;
      const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.state.pageSize}&apiKey=${this.state.apiKey}`;
      document.title = `NewsMonkey - ${this.Capitalize(this.props.category)}`
      console.log(URL)
      console.log(this.props.category)
      console.log(this.props.country)
      console.log(this.state.pageSize)
      console.log(this.state.page)
      this.setState({ Spinner: true });
      let data = await fetch(URL);
      let parsedData = await data.json();
      this.props.setprogress(50);
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        Spinner: false,
      });
      this.props.setprogress(100);
    } catch (error){
      console.error(error);
    }
   }

   componentDidMount() {
     this.UpdateData();
   }
  
   componentDidUpdate(prevProps) {
     if (prevProps.country !== this.props.country || prevProps.category !== this.props.category) {
       this.UpdateData();
     }
     else if (prevProps.mode !== this.props.mode) {
       this.colorChanging();
     }
   }

   colorChanging = () => {
     if(this.props.mode === 'dark'){
       document.body.style.backgroundColor = 'rgb(4, 39, 67)';
     } else {
       document.body.style.backgroundColor = 'white';
     }
   }
   
   fetchMoreDataDelay = () =>{
     setTimeout(() => {
       this.fetchMoreData();
      }, 1000);
   }

   fetchMoreData = async (props) => {
    this.props.setprogress(0);
         const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page+1}&apiKey=${this.state.apiKey}`;
         this.props.setprogress(20);
         let data = await fetch(URL);
         let parsedData = await data.json();
         this.props.setprogress(50);
       this.setState({
         articles: this.state.articles.concat(parsedData.articles),
         totalResults: parsedData.totalResults,
         page: this.state.page+1,
       });
       this.props.setprogress(100);
      };
    
    
      render() {
  const CtgryWithCntry = `${this.props.country}/${this.props.category}`.toUpperCase();
  return (
    <>
      <h2 className={`content text-3xl text-center mt-3 mb-3 ${this.props.mode === 'light' ? 'text-black' : 'text-gray-100'}`}>
        <strong>News Monkey - Top {this.Capitalize(this.props.category)} Headlines</strong>
      </h2>
      <h1 className={`ml-28 text-xl ${this.props.mode === 'light' ? 'text-black' : 'text-gray-400'}`}>{CtgryWithCntry}</h1>

         <InfiniteScroll
             dataLength={this.state.articles.length}
             next={this.fetchMoreDataDelay}
             hasMore={this.state.totalResults > this.state.articles.length}
             loader={<Spinner/>}>
         <div className={`d-flex flex-row justify-content-center align-self-start mb-10`} style={{ marginRight: "100px", marginLeft: "100px" }}>
           <div className="row">
             {this.state.articles.map(element => {
               const uniqueKey = uuid();
              
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    key={uniqueKey}
                    className="align-self-start col-md-4"
                  >
                  <NewsItemCMP
                    name={element.title}
                    description={element.description}
                    newsUrl={element.url}
                    imageURL={element.urlToImage}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                    mode={this.props.mode}
                    />
                  </div>
                );
              })}
            </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default NewsCMP;