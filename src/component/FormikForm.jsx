// import React from 'react'
// import { Form, Formik} from 'react-router-dom';

// const FormikForm = () => {
//   return (
//     <div>
//        <Formik
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         validationSchema={validationSchema}
//       >
//         {(formik) => {
//           return (
//             <Form>
            
//               <FormikInput
//                 name="email"
//                 label="Email:"
//                 type={"email"}
//                 onChange={(e) => {
//                   formik.setFieldValue("email", e.target.value);
//                 }}
//                 placeholder="Enter"
//                 required={true}
//               ></FormikInput>
            

//               <button type="submit">Submit</button>
//             </Form>
//           );
//         }}
//       </Formik>

//     </div>
//   )
// }

// export default FormikForm
