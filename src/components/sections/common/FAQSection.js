import React, { useContext } from 'react';
import { AccordionContext, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { constants } from "../../../utils/constants";


function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
        <div className="d-flex align-items-center">
            <i className={`pr-4 fa ${isCurrentEventKey ? 'fa-minus' : 'fa-plus'}`} />
            <h6 style={{ padding: '0.5rem 0' }}>
                {children}
            </h6>
        </div>
    );
}

const FAQSection = (props) => {

    return (
        <div className="faq-section-block my-3 my-sm-5">
            <div className="container">
                <h4 className="text-center main-title mb-3 mb-sm-5">
                    {constants?.site_content?.dinning_page?.faq_sec?.title[props?.activeLang]}
                </h4>

                <Accordion>
                    {
                        props?.faqData?.map((x, i) => (
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey={`${i}`} style={{ cursor: 'pointer' }} >
                                    <ContextAwareToggle eventKey={`${i}`} >
                                        {x.question}
                                    </ContextAwareToggle>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={`${i}`}>
                                    <Card.Body>
                                        <p dangerouslySetInnerHTML={{ __html: x.answer }}></p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))
                    }
                </Accordion>
            </div>
        </div>
    );
}

export default FAQSection;