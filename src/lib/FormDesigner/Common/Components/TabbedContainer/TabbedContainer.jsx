import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

export default class TabbedContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        };
        
    }
    handleTabChange = (event, value) => {
        this.setState({currentTab: value})
    };

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Tabs value={this.state.currentTab}
                        onChange={this.handleTabChange}>
                            {this.props.tabs.map((tab) => {
                                return <Tab label={tab.label} key={tab.label} />
                            })}
                    </Tabs>
                </AppBar>
                {this.getCurrentTab()}
            </div>
        );
    }

    getCurrentTab() {
        return <Typography component="div" style={{ padding: 8 * 3 }}>
                    {this.props.tabs[this.state.currentTab].component}
               </Typography>
    }
   
}

TabbedContainer.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
                        label: PropTypes.string.isRequired,
                        component: PropTypes.element.isRequired,
                    }))
                    .isRequired
};