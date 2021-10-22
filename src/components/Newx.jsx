import React, { Component } from "react";
import Spinner from "./Spinner";
import Item from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

export default class Newx extends Component {
  captilizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      results: 0,
    };
    document.title = `${this.captilizeFirstLetter(this.props.category)}- RNewx`;
  }
  static defaultProps = {
    category: "general",
  };
  static propTypes = {
    category: PropTypes.string,
  };
  getData = async () => {
    this.props.setProgress(10);
    try {
      const data = await axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=efa851cdcb5b4da2be6a3d0caf44dda7&page=${this.state.page}&pageSize=9`
        )
        .then(({ data }) => data);
      this.setState({
        articles: this.state.articles.concat(data.articles),
        // results: data.totalResults,
      });
      this.props.setProgress(100);
    } catch (err) {
      console.log(err);
    }
  };

  async componentDidMount() {
    this.getData();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    this.getData();
  };
  render() {
    const { articles } = this.state;
    const renderArticles = articles.map((article) => {
      return (
        <div key={article.url}>
          <Item
            title={article.title}
            description={article.description}
            imgUrl={article.urlToImage}
            newsUrl={article.url}
            date={article.publishedAt}
            author={article.author}
          />
        </div>
      );
    });

    return (
      <div className="bg-gray-200 py-5 ">
        <h1 className="text-center text-2xl mt-20 font-medium">
          {" "}
          Top Headlines ({this.captilizeFirstLetter(this.props.category)})
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.results}
          loader={<Spinner />}
        >
          <div className="container mx-auto grid md:grid-cols-3 gap-y-2 mt-10 ">
            {renderArticles}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
