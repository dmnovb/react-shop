import React, {Component} from 'react';
import Product from './product';
class Products extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false
           };
    }
    componentDidMount() {
        fetch("http://localhost:4000/shop")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result.items
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
       }

    render() {
        const {isLoaded, data} = this.state;
        if(isLoaded) {
            return (
                <ul> {data.map(item => (
                    <li key={item._id}><Product {...item}/></li>
                ))}
                </ul>
            )
        }
    }
}

export default Products;



// const {isLoaded, data} = this.state;
// console.log(data)
// if(isLoaded) {
//   return(
//     <div>
//       <ul >{data.map(item => (
//         // <li key={item._id}>{item.name}</li>
//         <Product key={item._id} item={item}/>
//       ))}
//       </ul>
//     </div>
    
//   ) 
// }