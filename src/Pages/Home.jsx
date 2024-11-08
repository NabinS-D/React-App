import { Form, useActionData } from "react-router-dom";
import { useRef, useEffect } from "react";
import "../Home.css";

export const contactformsubmit = async ({ request }) => {
    const formdata = await request.formData();
    const data = Object.fromEntries(formdata);
    return data;
};

export const Contact = () => {
    const formDetails = useActionData();
    const formRef = useRef(null);  // Ref to reset the form

    useEffect(() => {
        // Reset the form when new form data is submitted
        if (formDetails && formRef.current) {
            formRef.current.reset();
        }
    }, [formDetails]);

    return (
        <div className="parent-container">
            <div className="img">
                <figure>
                    <img src="/logo.png" alt="Description of the image" />
                </figure>
            </div>

            <div className="form-container">
                <h1>Contact Us</h1>
                <Form method="POST" action="/contactform" ref={formRef}>
                    <div className="mb-3">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your Email Address"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="query">Query</label>
                        <textarea
                            id="query"
                            name="query"
                            required
                            placeholder="Type your Query"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </Form>
            </div>

            <section className="display-section">
                <h1> Dashboard </h1>
                {formDetails ? (
                    <p>
                        <section>Email: {formDetails.email}</section>
                        <section>
                            <strong>Message:</strong> {formDetails.query}
                        </section>
                    </p>
                ) : (
                    <p>Nothing to display!!</p>
                )}
            </section>
        </div>
    );
};
