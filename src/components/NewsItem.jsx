import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date } = this.props;
     
    return (
      <div>
        <div className="container items-center  lg:px-10">
          <div className="p-6 mx-auto bg-white border  rounded-lg shadow-xl w-full ">
            <div className="flex flex-col items-start  py-2 rounded-lg ">
              <div className="flex items-center  justify-start w-full">
                <img
                  src={imgUrl ? imgUrl : "https://source.unsplash.com/random"}
                  alt="placeholder"
                  className="rounded-lg md:h-60 sm:w-full"
                />
              </div>
              <div className="flex flex-col w-full text-blueGray-500 ">
                <h2 className="mt-4 mb-8 text-xl font-semibold tracking-wider text-black uppercase">
                  {title
                    ? title.slice(0, 35)
                    : "Title Missing of this NewsItem is missing"}
                  ...
                </h2>
                <p className="mb-3 text-base leading-relaxed text-blueGray-500">
                  {description
                    ? description.slice(0, 100)
                    : "Missing Description"}
                  ...
                </p>
                <p className="mb-4 text-xs font-medium text-gray-500 ">
                  By {author ? author.slice(0,15): "Unknown"} on{" "}
                  {new Date(date).toGMTString()}{" "}
                </p>
                <a
                  href={newsUrl}
                  className="text-center text-indigo-400 font-bold rounded py-2  focus:outline-none bg-gray-900 border-2 border-indigo-400"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
