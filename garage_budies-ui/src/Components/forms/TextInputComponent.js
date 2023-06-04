import {FormControl, FormHelperText, TextField} from "@mui/material";
import {ErrorMessage, Field} from "formik";

const TextInputComponent = ({error, name, label = 'Type something here', ...props}) => (
    <FormControl error={error}>
        <Field id={name}
               name={name}
               as={TextField}
               label={label}
               variant="outlined"
               error={error}
               {...props}
        />
        <ErrorMessage name={name}
                      component={FormHelperText}/>
    </FormControl>
);
export default TextInputComponent;