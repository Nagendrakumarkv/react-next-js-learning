import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(4).required()
});

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    // Dummy login
    if (data.email === "admin@test.com" && data.password === "1234") {
      localStorage.setItem("token", "abcd1234");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register("email")} />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
