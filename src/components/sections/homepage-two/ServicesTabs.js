import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Paper } from '@material-ui/core';
import { constants } from '../../../utils/constants';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const ServiceTabs = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="service-tabs-wrapper">
            <h2 className="text-center section-heading text-muted">
                {constants?.site_content?.home_page?.premium_offer?.title[props?.activeLang]}
            </h2>
            <div className={classes.root}>
                <Paper square elevation={0}>
                    <Tabs
                        value={value}
                        variant="scrollable"
                        scrollButtons="on"
                        onChange={handleChange}
                        aria-label="scrollable auto tabs example"
                    >
                        {
                            props.data?.map((x, i) => (
                                <Tab label={x.post_name} {...a11yProps(i)} />
                            ))
                        }
                    </Tabs>
                </Paper>
                {
                    props.data?.map((x, i) => (
                        <TabPanel value={value} index={i} className="service-tab-panel">
                            <i className="fa fa-arrow-left service-left" onClick={() => value > 0 ? setValue(value - 1) : setValue(props.data.length - 1)} />
                            <div className="tab-slider">
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sm={12} className="px-0 py-0">
                                        <div className="slider-image-wrapper-service">
                                            <img src={process.env.REACT_APP_IMAGE_BASE_URL + x.thumbnailPreview} alt={x.title || ""} />

                                            <div className="hotel-title-wrapper">
                                                <h4 className="hotel-tagline my-3">
                                                    {x.post_name}
                                                </h4>
                                                <h1 className="hotel-title my-4"
                                                    dangerouslySetInnerHTML={{ __html: x.short_description }}
                                                >
                                                </h1>
                                                <a href={`${x?.post_name === "Book Now" ? `${x.post_url}` : `/${props?.activeLang}/${x.post_url}`}`}>
                                                    <button className="main-btn btn-filled mt-4" >
                                                        {constants?.site_content?.home_page?.premium_offer?.btn_text[props?.activeLang]}
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <i className="fa fa-arrow-right service-right" onClick={() => value + 1 < props.data?.length ? setValue(value + 1) : setValue(0)} />
                        </TabPanel>
                    ))
                }
            </div>
        </div>
    );
}

export default ServiceTabs;