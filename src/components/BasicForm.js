import { useFormik } from "formik";
import { basicSchema } from "../schemas";

// onSubmit function
const onSubmit = async (values, actions) => {
  console.log(values) 
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Resetting form not working...
  actions.resetForm({
    values: {
      // the type of `values` inferred to be Blog
      userName: '',
      email: '',
      age: '',
      password: '',
      confirmPassword: ''
    },
});
}


const BasicForm = () => {

  // destrucuring formik
const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
  initialValues: {
    userName: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
  },
  // with below the form will use the schema to validate the form
  validationSchema: basicSchema,
  onSubmit,
});

console.log(errors);
  
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      
      <label htmlFor="userName">Username</label>
      <input 
      id="userName" 
      type="text" 
      placeholder="Enter your Username" 
      values={values.userName}
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.userName && touched.userName ? "input-error" : ""}
      />
      {errors.userName && touched.userName && <p className="error">{errors.userName}</p>}

      <label htmlFor="email">Email</label>
      <input 
      id="email" 
      type="email" 
      placeholder="Enter your email" 
      values={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="age">Age</label>
      <input 
      id="age" 
      type="number" 
      placeholder="Enter your age"
      values={values.age}
      onChange={handleChange}
      onBlur = {handleBlur} 
      className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}

      <label htmlFor="password">Password</label>
      <input 
      id="password" 
      type="password" 
      placeholder="Enter your password"
      values={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && <p className="error">{errors.password}</p>}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input 
      id="confirmPassword" 
      type="password" 
      placeholder="Confirm password"
      values={values.confirmPassword}
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
       />
      {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

    <button disabled={isSubmitting} type="submit">Submit</button>
  
    </form>
  );
};
export default BasicForm;
