import React, { useEffect } from 'react';
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import $ from "jquery";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, createStyles, IconButton, withStyles } from "@material-ui/core";
import clsx from "clsx";
import format from "date-fns/format";
import isBefore from "date-fns/isBefore";
import isSameDay from "date-fns/isSameDay";
import isWithinInterval from "date-fns/isWithinInterval";


const materialUiTheme = createMuiTheme({
    overrides: {
        MuiPickersDay: {
            day: {
                color: "white",
            },
            daySelected: {
                backgroundColor: "#be8a7d",
                color: "white !important",
                "&:hover": {
                    backgroundColor: "#deb3aa"
                }
            },
            dayDisabled: {
                color: "#f9ddd7 !important",
            },
            current: {
                color: "white",
            },
        },
        MuiInput: {
            underline: {
                "&:after": {
                    borderBottom: "2px solid #be8a7d"
                }
            }
        }
    }
});

const styles = createStyles(theme => ({
    dayWrapper: {
        position: "relative",
    },
    day: {
        width: 36,
        height: 36,
        fontSize: theme.typography.caption.fontSize,
        margin: "0 2px",
        color: "inherit",
    },
    customDayHighlight: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "2px",
        right: "2px",
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "50%",
        color: "white !important"
    },
    nonCurrentMonthDay: {
        color: "#676767",
    },
    prevCurrentMonthDay: {
        color: "#f9ddd7 !important",
        // backgroundColor:"#f9ddd7"
    },
    highlightNonCurrentMonthDay: {
        color: "white !important",
    },
    highlight: {
        background: `#be8a7d`,
        color: "white !important",
    },
    firstHighlight: {
        extend: "highlight",
        borderTopLeftRadius: "50%",
        borderBottomLeftRadius: "50%",
    },
    endHighlight: {
        extend: "highlight",
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "50%",
    },
}));

// #be8a7d
const DatePickerComponent = (props) => {
    let { value, placeholder, minDate, onChange, open, disablePast, id, onOpen, onClose, dateRange, startDate } = props;

    useEffect(() => {
        $(document).ready(() => {
            $(`#${id}`).on("click", () => {
                onOpen()
            })
        })
    }, []);
    const renderWrappedMonthDays = (date, selectedDate, dayInCurrentMonth) => {
        const { classes } = props;
        let dateClone = new Date(date);
        let selectedDateClone = new Date(selectedDate);
        let disablePast = new Date(minDate);
        const start = !dateRange ? new Date(selectedDateClone.setHours(0, 0, 0, 0)) : new Date(new Date(startDate).setHours(0, 0, 0, 0));
        const end = !dateRange ? new Date(selectedDateClone.setHours(23, 59, 59, 999)) : new Date(new Date(value).setHours(23, 59, 59, 999));
        const dayIsBetween = isWithinInterval(dateClone, { start, end });
        const isFirstDay = isSameDay(dateClone, start);
        const isLastDay = isSameDay(dateClone, end);
        const isBefore_ = isBefore(disablePast, dateClone);

        const wrapperClassName = clsx({
            [classes.highlight]: dayIsBetween,
            [classes.firstHighlight]: isFirstDay,
            [classes.endHighlight]: isLastDay,
        });

        const dayClassName = clsx(classes.day, {
            [classes.prevCurrentMonthDay]: !isBefore_,
            [classes.nonCurrentMonthDay]: dayInCurrentMonth,
            [classes.highlightNonCurrentMonthDay]: dayIsBetween,
        });

        return (
            <div className={wrapperClassName}>
                <IconButton className={dayClassName}>
                    <span> {format(dateClone, "d")} </span>
                </IconButton>
            </div>
        );
    }

    const handleChange = (val) => {
        onChange(val)
    }

    return (
        <ThemeProvider theme={materialUiTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM-dd-yyyy"
                    margin="none"
                    id={id}
                    value={value}
                    className="form-control"
                    placeholder={placeholder}
                    minDate={minDate}
                    onChange={handleChange}
                    renderDay={renderWrappedMonthDays}
                    allowKeyboardControl={true}
                    animateYearScrolling={true}
                    autoOk={true}
                    onOpen={onOpen}
                    onClose={onClose}
                    disablePast={disablePast}
                    open={open}
                    color="black"
                />
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    );
};

export default withStyles(styles)(DatePickerComponent);