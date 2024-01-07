import React from 'react';
import Proptypes from "prop-types"

class Gender extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <p>{this.props.gender}</p>
        )
    }
}
/* Gender.defaultProps = {       Default Props
    gender:"Rather Not Say",
};
Gender.propTypes = {             Defind datatype similar to typescript
    gender: Proptypes.string,
}
*/
// Is Required
Gender.propTypes = {
    gender: Proptypes.string.isRequired,
}

export default Gender