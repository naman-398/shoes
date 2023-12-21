import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const Sectiontab = () => {
    const [key, setKey] = useState('home');
    return (
        <div>
            <section className="pt-2 mt-2 mt-md-4 pt-md-5 pb-1">
                <Container className="container">
                    <div className="gap-tab overflow-x_scroll pb-4 mb-2">
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="DESCRIPTION">
                                <p className='tabs-para'>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura </p>
                            </Tab>
                            <Tab eventKey="profile" title="ADDITIONAL INFORMATION">
                            <p className='tabs-para'>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod.</p>
                            </Tab>
                            <Tab eventKey="contact" title="REVIEWS (1)" >
                            <p className='tabs-para'>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate</p>
                            </Tab>
                        </Tabs>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Sectiontab