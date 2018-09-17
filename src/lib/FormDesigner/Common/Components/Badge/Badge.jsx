import React from 'react';
import PropTypes from 'prop-types';

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';

import styles from './Badge.module.css';


const withBadge = (wrapperComponent,content) => {
    return (
        <Badge classes={{badge: styles.badge}} badgeContent={content} >
            {wrapperComponent}
        </Badge>
    );
};


export default withBadge;