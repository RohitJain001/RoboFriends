import React,{Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);

        this.state={
            hasError:false
        }
    }
           /* new in react16 */
        componentDidCatch(error,info){
            this.setState({hasError:true})
        }

        render()
        {
            if(this.state.hasError)
            return <h1>Ooops Error occured..</h1>;
            return this.props.children;
        }
    
}

export default ErrorBoundary;