import React, { Component } from 'react';
// override
class ClassBased extends Component {
  constructor(props) {
    super(props);
    // this.props =  props;
    this.state = {
      name: { first: "first", middle: "middle", last: "last" },
      age: 0,
      rad: 5,
    }

    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    console.log('Im a method handleclick')
    this.setState({
      ...this.state,
      rad: (this.state.rad * 2) % 150
    })
    // FUNCTION VERSION OF SETSTATE
    // this.setState((prevState) => ({
    //   ...prevState, rad: prevState.rad + 10
    // })
    // )
  }

  componentDidMount() {
    console.log('this.state IN CDM:>> ', this.state.address);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Im being called after rerender')
    if(prevProps.message !== this.props.message) {
      this.setState({ ...this.state, mess: this.props.mess })
    }
  }

  componentWillUnmount() {
    console.log('Im dieing...')
    this.setState({ ...this.state })
  }

  render() {
    // const rad = 5;
    // const { name: { first, middle, last }} = this.props
    const { name: { first, middle, last }, mess } = this.state
    console.log('this.state :>> ', this.state.address);

    // WE ARE CREATING THIS FUNCTION EVERYTIME THIS COMPONENT RENDERS
    // const handleClick = function(){ console.log("Clicked") }
    return (
      <div>
        Hello World {mess}<br/>
        Hello World {middle}<br/>
        Hello World {last.length}

        <button
          // onClick={() => this.handleClick()}
          onClick={this.handleClick}
          style={{
            backgroundColor: 'tomato',
            borderRadius: this.state.rad,
            padding: '40px 80px',
            outline: '0px'
          }}
        >Change Me</button>
      </div>
    );
  }
}

export default ClassBased;