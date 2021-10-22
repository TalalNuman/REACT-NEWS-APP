import React, { Component } from 'react'

// let {pageP,result} = this.props
// console.log(pageP)
// console.log(result)

  // componentDidUpdate(){
  //   setTimeout(() => {window.scrollTo(0,0) }, 1500)
  // }
  // handleNextClick = async () => {
  //   await this.setState({ page: this.state.page + 1 });
  //    this.getData();

  // };
  // handlePrevClick = async () => {
  //   //   console.log()
  //  await this.setState({ page : this.state.page - 1})
  //  this.getData();
  // };
export default class Buttons extends Component {
   
render() {
       
        return (
            <div>
                 <div className="container mx-auto flex justify-between md:px-24 px-5 mt-5 ">
          <button
            disabled={this.props.page <= 1}
            onClick={this.props.prev}
            className="text-center text-indigo-400 font-bold rounded py-2 w-4/12 md:w-2/12 focus:outline-none bg-gray-900 border-2"
          >
            Previous
          </button>
          <button
            disabled={this.props.page >= Math.ceil(this.props.result/ 9)}
            
            onClick={this.props.next}
            className="text-center text-indigo-400 font-bold rounded py-2 w-4/12 md:w-2/12 focus:outline-none bg-gray-900 border-2"
          >
            Next
          </button>
        </div>
            </div>
        )
    }
}
