import "./Form.css";

const Form = () => {
  return (
    <div className="form_container">
      <div className="form_content">
        <h2>Save time, save money!</h2>
        <p>Sign up and we'll send the best deals to you</p>
        <form>
          <input type="text" placeholder="Your Email"></input>
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
