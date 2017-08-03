import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Description from './Description';
import Buttons from './Buttons';

const styleSheet = createStyleSheet('Footer', theme => ({
    root: {
        backgroundColor: theme.palette.common.darkBlack,
        color: '#f5f5f5'
    },
    container: {
        width: 1120,
        flexBasis: 1120,
        marginTop: 0,
        paddingTop: theme.spacing.unit * 11,
        paddingBottom: theme.spacing.unit * 11
    }
}));

const Footer = ({ classes }) => (
    <div className={classes.root + " row col-xs-12 center-xs"}>
        <div className={classes.container + " row center-xs"}>
            <Description />
            <Buttons />
        </div>
    </div>
)

Footer.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(Footer);