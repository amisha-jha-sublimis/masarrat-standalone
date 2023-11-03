import React from "react";
import Aux from '../../atom/children';
import MarginForm from '../../atom/formMargin';
import Label from '../../atom/label/label';
import Select from '../../atom/select/select';
import Error from '../../atom/error';



const Reactselect = (props) => {

    console.log("React select c", props)

    // const onBlur = (name, value) => {
    //     props.onBlur(name, value)
    // }

    // const onChange = (e) => {
    //     console.log("props data", data, "PropsNAme", props.name)
    //     if (props.name == "bankDetails") {
    //         props.onChange(data.label, data.value)
    //     }
    // }

    const ChageHandler = (e) => {
        console.log(e.target.value, 'ChageHandler')
        props.onChange(e.target.name, e.target.value)
    }
    const BlurHandler = (value) => {
        props.onBlur(props.name, props.value)
    }

    return (
        <Aux>
            <MarginForm margin={props.margin}>
                {props.label !== undefined ?
                    <Label label={props.label} class={props.lblClass} /> : null}
                <div className="formRe">
                    <Select
                        name={props.name}
                        id={props.name}
                        option={props.options}
                        // value={props.options.filter(function(curr){                            
                        //     return props.value === curr.value? curr.value: ""
                        // })}
                        value={props.value}
                        onBlur={BlurHandler}
                        onChange={ChageHandler}
                        selectClass={props.class}
                        disabled={props.disabled}
                    />
                    <Error errorMessage={props.errorMsg} />
                </div>
            </MarginForm>
        </Aux>
    );
};

export default Reactselect
