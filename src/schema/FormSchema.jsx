import * as yup from "yup";

export const addFormSchema = yup.object().shape({
  company: yup.string().required("company is required"),
  position: yup.string("url must be string").required("position is required"),
  labour: yup.string().required("labour is required"),
  degree: yup.string().required("degree is required"),
  dateStart: yup.string().required("dateStart is required"),
  dateEnd: yup.string().required("dateEnd is required"),
 
  no: yup.boolean().oneOf([true], 'Bir seçenek seçin').required(),
});