import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import API from '../../../langapi/http';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CircularProgress from '@material-ui/core/CircularProgress';
import { formattedDate } from '../../../utils/snippets.js';
import { constants } from '../../../utils/constants';

export default function WeddingFormDialog({ activeLang }) {

    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setFirstName] = useState('');
    const [sr_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [contact_number, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [package_chosen, setPackage] = useState('');
    const [remark, setRemarks] = useState('');
    const [number_of_pax, setPaxAmount] = useState('');
    const [pr_date_1, setPreferredDateOne] = useState(null);
    const [pr_date_2, setPreferredDateTwo] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        if (name === "" || name === null) {
            alert(`${constants?.site_content?.weddings_page?.wedding_booking_form?.name_error[activeLang]}`);
            return;
        }
        if (sr_name === "" || sr_name === null) {
            alert(`${constants?.site_content?.weddings_page?.wedding_booking_form?.Last_name_error[activeLang]}`);
            return;
        }
        if (email === "" || email === null) {
            alert(`${constants?.site_content?.weddings_page?.wedding_booking_form?.email_error[activeLang]}`);
            return;
        }
        if (address === "" || address === null) {
            alert(`${constants?.site_content?.weddings_page?.wedding_booking_form?.address_error[activeLang]}`);
            return;
        }
        if (package_chosen === "" || package_chosen === null) {
            alert(`${constants?.site_content?.weddings_page?.wedding_booking_form?.package_error[activeLang]}`);
            return;
        }
        if (remark === "" || remark === null) {
            alert(`${constants?.site_content?.weddings_page?.wedding_booking_form?.remark_error[activeLang]}`);
            return;
        }
        if (number_of_pax === "" || number_of_pax === null) {
            alert(`${constants?.site_content?.weddings_page?.wedding_booking_form?.pax_error[activeLang]}`);
            return;
        }
        if (nationality === "" || nationality === null) {
            alert(`${constants?.site_content?.weddings_page?.wedding_booking_form?.nationality_error[activeLang]}`);
            return;
        }
        if (contact_number === "" || contact_number === null) {
            alert(`${constants?.site_content?.weddings_page?.wedding_booking_form?.numb_error[activeLang]}`);
            return;
        }
        setIsLoading(true);
        API.post('/book_wedding', JSON.stringify({ name, sr_name, address, package_chosen, remark, number_of_pax, nationality, contact_number, email, pr_date_1: formattedDate(pr_date_1, 'yyyy-MM-dd'), pr_date_2: formattedDate(pr_date_2, 'yyyy-MM-dd') }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.status === 200) {
                setIsLoading(false);
                setFirstName('');
                setLastName('');
                setEmail('');
                setAddress('');
                setNationality('');
                setRemarks('');
                setContactNumber('');
                setPackage('');
                setPreferredDateOne(formattedDate(new Date(), 'yyyy-MM-dd'));
                setPreferredDateTwo(formattedDate(new Date(), 'yyyy-MM-dd'));
                setPaxAmount('');
                alert(`${constants?.site_content?.weddings_page?.wedding_booking_form?.submit_text[activeLang]}`);
                setOpen(false);
            }
        }).catch(error => {
            console.log(error);
            setIsLoading(false);
        });
    }

    return (
        <div className="wedding-form-wrapper mt-3 mt-sm-5">
            <button onClick={handleClickOpen} className="btn main-btn btn-eden">
                {constants?.site_content?.home_page?.banner?.btn3[activeLang]}
            </button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle className="py-2" id="form-dialog-title">
                    {constants?.site_content?.weddings_page?.wedding_booking_form?.form_title[activeLang]}
                </DialogTitle>
                <DialogContent className="pt-0">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                        <div className="wedding-form">
                            <div className="container-fluid">

                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6 my-2">
                                            <input type="text" value={name} onChange={(e) => setFirstName(e.target.value)}
                                                placeholder={constants?.site_content?.weddings_page?.wedding_booking_form?.first_name[activeLang]} />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <input type="text" value={sr_name} onChange={(e) => setLastName(e.target.value)}
                                                placeholder={constants?.site_content?.weddings_page?.wedding_booking_form?.last_name[activeLang]} />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)}
                                                placeholder={constants?.site_content?.weddings_page?.wedding_booking_form?.nationality[activeLang]} />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <input type="text" value={contact_number} onChange={(e) => setContactNumber(e.target.value)}
                                                placeholder={constants?.site_content?.weddings_page?.wedding_booking_form?.contact_numb[activeLang]} />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                                                placeholder={constants?.site_content?.weddings_page?.wedding_booking_form?.email[activeLang]} />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}
                                                placeholder={constants?.site_content?.weddings_page?.wedding_booking_form?.address[activeLang]} />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <select value={package_chosen} onChange={(e) => setPackage(e.target.value)}>
                                                <option value="">
                                                    {constants?.site_content?.weddings_page?.wedding_booking_form?.choose_pkg[activeLang]}
                                                </option>
                                                <option value="pontoon">
                                                    {constants?.site_content?.weddings_page?.wedding_booking_form?.choose_pkg1[activeLang]}
                                                </option>
                                                <option value="special">
                                                    {constants?.site_content?.weddings_page?.wedding_booking_form?.choose_pkg2[activeLang]}
                                                </option>
                                                <option value="barefoot">
                                                    {constants?.site_content?.weddings_page?.wedding_booking_form?.choose_pkg3[activeLang]}
                                                </option>
                                                <option value="vows">
                                                    {constants?.site_content?.weddings_page?.wedding_booking_form?.choose_pkg4[activeLang]}
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <input type="number" value={number_of_pax} onChange={(e) => {
                                                if (e.target.value > -1) {
                                                    setPaxAmount(e.target.value)
                                                }
                                            }} placeholder={constants?.site_content?.weddings_page?.wedding_booking_form?.numb_pax[activeLang]} />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="yyyy-MM-dd"
                                                margin="none"
                                                id="date-picker-inline"
                                                value={pr_date_1}
                                                placeholder={constants?.site_content?.weddings_page?.wedding_booking_form?.date1[activeLang]}
                                                onChange={(date => setPreferredDateOne(date))}
                                                KeyboardButtonProps={{
                                                    'aria-label': `${constants?.site_content?.weddings_page?.wedding_booking_form?.change_date[activeLang]}`,
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-6 my-2">
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="yyyy-MM-dd"
                                                margin="none"
                                                id="date-picker-inline"
                                                value={pr_date_2}
                                                placeholder={constants?.site_content?.weddings_page?.wedding_booking_form?.date2[activeLang]}
                                                onChange={(date => setPreferredDateTwo(date))}
                                                KeyboardButtonProps={{
                                                    'aria-label': `${constants?.site_content?.weddings_page?.wedding_booking_form?.change_date[activeLang]}`,
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <textarea type="text" value={remark} onChange={(e) => setRemarks(e.target.value)}
                                                placeholder={constants?.site_content?.weddings_page?.wedding_booking_form?.remark[activeLang]} rows={3} >

                                            </textarea>
                                        </div>
                                        <div className="col-12 text-center py-2 my-2">
                                            {
                                                isLoading ? <CircularProgress /> :
                                                    <button type="button" onClick={handleSubmit} className="main-btn btn-filled btn-eden">
                                                        {constants?.site_content?.weddings_page?.wedding_booking_form?.btn_text[activeLang]}
                                                    </button>
                                            }
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </MuiPickersUtilsProvider>
                </DialogContent>
            </Dialog>
        </div>
    );
}
