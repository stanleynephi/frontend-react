import React from "react";
import styles from "../styles/forms.module.css";

/* Create a form for the user */

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={styles.forms}>
                <div className={styles.userinfo}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone" 
                        value={this.state.phone} 
                        onChange={this.handleChange} 
                    />
                </div>
                <div className={styles.message}>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    <button className={styles.button} type="submit">Submit</button>
                </div>
            </form>
        );
    }
}

export default Form;


                    
