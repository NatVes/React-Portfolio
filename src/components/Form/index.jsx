import { useState } from "react";
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
        <form>
            <div className="mb-3">
                <label for="FormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="FormControlInput1" placeholder="John Doe" value={formData.name} name="name" onChange={handleInputChange}/>
                <label for="FormControlInput2" className="form-label">Email address</label>
                <input type="email" className="form-control" id="FormControlInput2" placeholder="email@gmail.com" value={formData.email} name="email" onChange={handleInputChange} required/>
                <label for="Textarea" className="form-label">Message</label>
                <textarea className="form-control" id="Textarea" rows="3" value={formData.message} name="message" onChange={handleInputChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleFormSend}>Send</button>
            {submittedData.submitted && <p>Thank you {submittedData.emailMessage.name}! Your message will be sent soon</p>}
        </form>
    )
}

export default Form;