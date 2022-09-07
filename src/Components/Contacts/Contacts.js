import axios from 'axios';
import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import ContactImage from '../../Images/contact.png'
import { Helmet } from 'react-helmet';

const Contacts = () => {
    const { register, handleSubmit, reset } = useForm();
    const form = useRef();
    //handle plans from
    const onSubmit = data => {

        axios.post('https://rocky-coast-56612.herokuapp.com/contacts', data)
            .then(res => {
                if (res.data.insertedId) {

                    emailjs.sendForm('service_4vucu9f', 'template_1b8gj38', form.current, 'WwMM6HUPeHrDNxG_W')
                        .then((result) => {
                            console.log(form.current);
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });
                    reset();
                    alert('Query Submitted Successfully');
                }

            })
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact For SEO Consultancy & Services</title>
                <link rel="canonical" href="https://shabitahtashamsongi.com/contact" />
                <meta name="description" content="Submit your business information on hands of a professional, It's 100% secured." />
                <meta name="keywords" content="Contact Shabit Ahtasham Songi, Shabit Ahtasham Songi, Ahtasham Songi, Shabit Ahtasham, Songi" />
            </Helmet>
            <Container className=" mt-5 pt-5 mb-3 pb-3">
                <Row className=" align-items-center mt-5 pt-5 mb-3 pb-3" >
                    <Col lg={6} md={12} className=" rounded shadow p-5 border-golden">
                        <div className="form-section text-center test-light">
                            <h1 className="text-golden">Submit Your Query </h1>
                            <div className="form">
                                <form ref={form} className="p-2" onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-control frm-ctrl-custom mb-3 text-golden text-capitalize" placeholder="Enter Your Name" type="text"  {...register("name", { required: true, maxLength: 40 })} />
                                    <input className="form-control frm-ctrl-custom mb-3 text-golden" placeholder="Enter Email" type="text"  {...register("email", { required: true })} />
                                    <input className="form-control frm-ctrl-custom mb-3 text-golden" placeholder="Enter Phone Number" type="text"  {...register("phone", { required: true })} />
                                    <input className="form-control frm-ctrl-custom mb-3 text-golden" placeholder="Enter website" type="text"  {...register("website")} />
                                    <input className="form-control frm-ctrl-custom mb-3 text-golden" placeholder="Enter Company Name" type="text"  {...register("company")} />
                                    <input className="form-control frm-ctrl-custom mb-3 text-golden" placeholder="Enter Location" type="text"  {...register("location")} />
                                    <textarea className="form-control frm-ctrl-custom mb-3 text-golden" placeholder="Enter Your Text"   {...register("text")} ></textarea>
                                    <input className="btn btn-outline-golden w-100" type="submit" value="Send" />

                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} className='text-golden'>
                        <h2>Contact Me Or Submit Your Query</h2>
                        <img src={ContactImage} alt="" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contacts;