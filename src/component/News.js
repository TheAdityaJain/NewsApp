import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);

  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // eslint-disable-next-line
  const [loading, setLoading] = useState(true)
  

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };


  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?sources=${props.sources}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?sources=${
      props.sources
    }&apikey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  // handlePrevClick = async () => {
  //     console.log("Previous");
  //     let url = `https://newsapi.org/v2/top-headlines?sources=${props.sources}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
  //     this.setState({loading:true});
  //     let data = await fetch(url);
  //     let parsedData = await data.json()
  //     console.log(parsedData);
  //     this.setState({
  //         page: page - 1,
  //         articles: parsedData.articles,
  //         loading:false
  //     })
  // };

  // handleNextClick = async () => {
  //     console.log("Next");
  //     if (!page + 1 > Math.ceil(totalResults / props.pageSize)) {
  //     }
  //     else {
  //         let url = `https://newsapi.org/v2/top-headlines?sources=${props.sources}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
  //         this.setState({loading:true});
  //         let data = await fetch(url);
  //         let parsedData = await data.json()
  //         this.setState({
  //             page: page + 1,
  //             articles: parsedData.articles,
  //             loading:false
  //         })
  //     }
  // }
  // styles = {
  //     position: 'fixed',
  //     bottom: '10px',
  //     left:'40px',

  //     display:'flex',
  //     gap:'83rem'
  // }

  return (
    <>
      <div className="container my-3">
        <h2 className="text-center">
          {capitalize(props.category)} News - Top Headlines
        </h2>
        {/* {loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          style={{ display: "flex", flexDirection: "column" }} //To put endMessage and loader to the top.
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : " "
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
