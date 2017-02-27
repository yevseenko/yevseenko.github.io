var ProductItem = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
});

var ProductList = React.createClass({
  render: function () {
    var products = this.props.products.map(function (product, index) {
      return (
        <ProductItem
          key={index}
          name={product.name}
          price={product.price}
        />
      );
    });
    
    return (
      <table>
        {products}
      </table>
    );
  }
});

var products = [
  { name: 'Toast', price: 1499 },
  { name: 'Bacon', price: 3245 },
  { name: 'Coffee', price: 300 }
];

ReactDOM.render(<ProductList products={products} />, document.getElementById('root'));