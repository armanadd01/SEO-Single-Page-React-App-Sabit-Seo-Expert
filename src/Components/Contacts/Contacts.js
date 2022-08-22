import axios from 'axios';
import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const { register, handleSubmit, reset } = useForm();
    const form = useRef();
    //handle plans from
    const onSubmit = data => {

        axios.post('http://localhost:5000/contacts', data)
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
            <Container className=" mt-5 pt-5 mb-3 pb-3">
                <Row className=" align-items-center mt-5 pt-5 mb-3 pb-3" >
                    <Col md={6} className=" rounded shadow p-5 border-golden">
                        <div className="form-section text-center test-light">
                            <h1 className="text-light">Submit Your Query </h1>
                            <div className="form">
                                <form ref={form} className="p-2" onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-control m-3" placeholder="Enter Your Name" type="text"  {...register("name", { required: true, maxLength: 40 })} />
                                    <input className="form-control m-3" placeholder="Enter Email" type="text"  {...register("email", { required: true })} />
                                    <input className="form-control m-3" placeholder="Enter Phone Number" type="text"  {...register("phone", { required: true })} />
                                    <input className="form-control m-3" placeholder="Enter website" type="text"  {...register("website")} />
                                    <input className="form-control m-3" placeholder="Enter Company Name" type="text"  {...register("company")} />
                                    <input className="form-control m-3" placeholder="Enter Location" type="text"  {...register("location")} />
                                    <textarea className="form-control m-3" placeholder="Enter Your Text"   {...register("text")} ></textarea>
                                    <input className="btn btn-outline-light" type="submit" value="Send" />

                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contacts;