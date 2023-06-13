import {FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField,} from "@mui/material";
import {ErrorMessage, Field} from "formik";
import {useState} from "react";
import * as events from "events";



    const FormSelectComponent = ({ name,label, selections, ...props}) => {

        const [selection, setSelection] = useState("");

        const handleChange = (event) =>{
            setSelection(event.target.value);
            console.log(selections)
            console.log(event.target.value)

        }

        return(
            <FormControl fullWidth>
                <InputLabel >{label}</InputLabel>
                <Field
                    id={name}
                    name={name}
                    as={Select}
                    value={selection}
                    label={name}
                    onChange={handleChange}
                >
                    {selections.map((sel)=>
                        <MenuItem key={sel.value} value={sel.value}>{sel.value}</MenuItem>
                    )}

                    {/*<MenuItem value="gas">GAS</MenuItem>*/}
                    {/*<MenuItem value="diesel">DIESEL</MenuItem>*/}
                    {/*<MenuItem value="lpg">LPG</MenuItem>*/}
                </Field>
            </FormControl>
        );


    }

export default FormSelectComponent;