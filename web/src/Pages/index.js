import "../Styles/index.css";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="Container">
      <header className="Container-header">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img className="logo" src="/images/logo.jpg" alt="logo" />
          <p>Username</p>
          <input
            className="input username"
            type="text"
            {...register("username")}
          />
          <p>Password</p>
          <input
            className="input password"
            type="password"
            {...register("password")}
          />
          <button className="btn submit" type="submit" name="login">
            <FiLogIn
              style={{
                fontSize: "18px",
                margin: "0 10px 0",
                padding: "5px 0 0",
              }}
            />
            <label className="textLogin">Login</label>
          </button>
          <Link to="/forgot_password">Forgot Password?</Link>
        </form>
      </header>
    </div>
  );
}

export default App;
