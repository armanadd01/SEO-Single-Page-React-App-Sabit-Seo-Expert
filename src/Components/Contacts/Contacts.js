import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Contacts = () => {
    const { register, handleSubmit, reset } = useForm();
    //handle plans from
    const onSubmit = data => {
        console.log(data)
        axios.post('https://thawing-meadow-71532.herokuapp.com/mobiles', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Query Submitted Successfully');
                    reset();
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
                                <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-control m-3" placeholder="Enter Your Name" type="text"  {...register("name", { required: true, maxLength: 40 })} />
                                    <input className="form-control m-3" placeholder="Enter Email" type="text"  {...register("email", { required: true })} />
                                    <input className="form-control m-3" placeholder="Enter Phone Number" type="text"  {...register("phone", { required: true })} />
                                    <input className="form-control m-3" placeholder="Enter website" type="text"  {...register("website")} />
                                    <input className="form-control m-3" placeholder="Enter Company Name" type="text"  {...register("company")} />
                                    <input className="form-control m-3" placeholder="Enter Location" type="text"  {...register("Location")} />
                                    <textarea className="form-control m-3" placeholder="Enter Your Text"   {...register("text")} ></textarea>
                                    <input className="btn btn-outline-light" type="submit" />
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