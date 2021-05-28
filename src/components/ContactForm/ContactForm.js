import { useForm } from "react-hook-form";
const ContactForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="row">
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-user"></i>
                    <input {...register("name", { required: true })} type="text" name="name" placeholder="Enter your name" />
                    {errors.name && <span className="text-danger">Name is required</span>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-envelope"></i>
                    <input {...register("email", { required: true })} type="email" name="email" placeholder="Enter your email" />
                    {errors.email && <span className="text-danger">Email is required</span>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-phone"></i>
                    <input {...register("phone", { required: true })} type="text" name="phone" placeholder="Phone number" />
                    {errors.phone && <span className="text-danger">Phone Number is required</span>}
                </div>
            </div>
            <div className="col-md-6">
                <div className="input-form">
                    <i className="fa fa-pencil-alt"></i>
                    <input {...register("subject", { required: true })} type="text" name="subject" placeholder="Subject" />
                    {errors.subject && <span className="text-danger">Subject is required</span>}
                </div>
            </div>
            <div className="col-md-12">
                <div className="input-form">
                    <i className="fa fa-edit"></i>
                    <textarea {...register("message", { required: true })} name="message" placeholder="Enter your message"></textarea>
                    {errors.message && <span className="text-danger">Message is required</span>}
                </div>
            </div>
            <div className="col-md-12 text-center">
                <button className="quomodo-btn" type="submit">Send Message<i className="fa fa-long-arrow-right"></i></button>
            </div>
        </form>
    );
};

export default ContactForm;