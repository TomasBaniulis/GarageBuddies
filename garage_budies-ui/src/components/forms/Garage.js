import * as Yup from "yup";
const Garage = () => {
    const FormValidationForma = Yup.object().shape(
        {
            companyCode:Yup.string().required("Company code is required"),
            vatCode:Yup.string().required("VAT code is required"),
            companyName:Yup.string().required("Company name is required"),
            email:Yup.string().required(),
            password:Yup.string().required(),
            passwordRepeat:Yup.string().required(),
        }
    )

    return(
        <>
        </>
    )

}

export default Garage;