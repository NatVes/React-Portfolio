import { useState } from "react";
import Footer from "../Footer";
import "./style.css";

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submittedData, setSubmittedData] = useState({
        emailMessage: null,
        submitted: false,
    });

    const handleInputChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;
        
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleFormSend = (event) => {
        event.preventDefault();

        if(!formData.email) {
            alert('Fill out your email address please!');
        } else {
            const emailMessage = {
                name: formData.name, 
                email: formData.email, 
                message: formData.message,
            };

            setSubmittedData({
                emailMessage: emailMessage,
                submitted: true,
            });
        }       
        
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    }
    
    return (
            <>
            <h2 className="my-5 text-center">CONTACT ME</h2>
            <form>
            <div className="mb-3">
                <label for="FormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="FormControlInput1" placeholder="John Doe" value={formData.name} name="name" onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label for="FormControlInput2" className="form-label">Email address</label>
                <input type="email" className="form-control" id="FormControlInput2" placeholder="email@gmail.com" value={formData.email} name="email" onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
                <label for="Textarea" className="form-label">Message</label>
                <textarea className="form-control" id="Textarea" rows="6" value={formData.message} name="message" onChange={handleInputChange}></textarea>
            </div>
            <div className="text-center">
                <button className="btn" onClick={handleFormSend}>Send</button>
            </div>
            {submittedData.submitted && <p className="mt-3">Thank you {submittedData.emailMessage.name}! Your message will be sent soon</p>}
        </form>
        </>            
    )
}

export default Form;