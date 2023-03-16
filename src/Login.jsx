import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { schemaLogin } from "../src/services/data";
import { actionLoginAsync, loginProviderAsync } from "../src/redux/actions/userActions";
import "./login.scss"

const Login = () => {
  const dispatch=useDispatch()
  const {register, handleSubmit, formState: { errors } } = useForm({resolver:yupResolver(schemaLogin)})
  const onSubmit = (data) => {
    console.log(data);
    dispatch(actionLoginAsync(data))
  }
  const handleLoginFacebbok = () =>{
    dispatch(loginProviderAsync('facebook'))
  }
  return (
    <div className="p-5">
    <h1>Iniciar Sesión</h1>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FloatingLabel label="Email address" className="mb-3">
        <Form.Control
          type="email"
          autoComplete="off"
          placeholder="name@example.com"
          {...register("email")}
        />
      </FloatingLabel>
      <p>{errors.email?.message}</p>
      <FloatingLabel label="Password" className="mt-3 mb-3">
        <Form.Control
          type="password"
          autoComplete="off"
          placeholder="Password"
          {...register("password")}
        />
      </FloatingLabel>
      <p>{errors.password?.message}</p>

      <Button variant="warning" type="submit" className="inicio">
        Iniciar Sesión
      </Button>
      {/* <Button variant="warning" type="submit" className="mt-3 mb-3" onClick={handleLoginFacebbok}>
      facebook
      </Button> */}
      
    </Form>
    <Link to="/Register">¿Desea crear una cuenta?</Link>
  </div>

  );
};
export default Login;