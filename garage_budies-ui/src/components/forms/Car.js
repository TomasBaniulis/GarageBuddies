import {Formik} from "formik";

const Car = () => {

    return(
        <Formik initialValues={
            {
                vinCode:"",
                make:"",
                model:"",
                engineCapacity:"",
                fuel:["petroleum", "diesel", "LPG"],
                power:"",
                transmission:["automatic","manual"],
                drivetrain:["2WD", "4WD" ],
                airConditioning:["true", "false"],
                dateOfProduction:"",
                technicalInspectionDate:"",
                mileage:""
            }}
                onSubmit={}>

            <form>

            </form>


        </Formik>
    )
}



export default Car;