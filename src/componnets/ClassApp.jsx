import React from 'react'
class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            heading: "Heading by state",
            subheading: "Subheading by state",
            number: 1,
        }
    }

    changeHeadingtext = () => {


        // this.setState({  number : this.state.number + 1 });
        // this.setState({  number : this.state.number + 1 });

        // this.setState({  number : this.state.number + 9 });



        // solution

        this.setState( 
            
            (prevstate)=> ({
            number: prevstate.number + 1,
        })
        
        )

        this.setState( 
            
            (prevstate)=> ({
            number: prevstate.number + 1,
        })
        
        )

        this.setState( 
            
            (prevstate)=> ({
            number: prevstate.number + 1,
        })
        
        )

        this.setState({

            heading: "Heading Changed!",
            modalOpen: true,

        }, () => {  console.log("Setstate Successful!")  })

        this.setState((prevState) => ({ heading: prevState.heading + "addition"  }))

    }

    render() {

        const { heading, subheading, number, modalOpen } = this.state;


        return <div>
            Navbar
            <h1 onMouseOver={this.changeHeadingtext}>{heading}</h1>
            <h2>{subheading}</h2>

            <p>
                {  number }
            </p>
            <p>
                {modalOpen && "text!"}
            </p>
        </div>
    }

}

export default Navbar;