import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";


class ScrollToTop extends React.Component<any>{
    componentDidUpdate(prevProps: any, prevState : any, snapshot: any) {
        if(
            this.props.location.pathname !== prevProps.location.pathname
        ){
            window.scrollTo(0,0);
        }
    }
    render() {
        return null
    }
}


export default withRouter(ScrollToTop)

// : any 4