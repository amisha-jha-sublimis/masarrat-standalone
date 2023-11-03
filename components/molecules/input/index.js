import React from 'react';
import Aux from '../../atom/children';
import FormMargin from '../../atom/formMargin';
import Label from '../../atom/label/label';
import Input from '../../atom/input';
import Error from '../../atom/error';

const TextInput = (props) => {
    // console.info("TextInputvalue",  props);
    const ChageHandler = (e) => {
        //console.log(e.target.value, 'ChageHandler')
        props.onChange(e.target.name, e.target.value)
    }
    const BlurHandler = (value) => {
        props.onBlur(props.name, props.value)
    }

    return (
        <Aux>
            <FormMargin margin={props.margin}>
                <Label class={props.lblClass} label={props.label}></Label>
                <Input
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    inputClass={props.inputClass}
                    onChange={ChageHandler}
                    onBlur={BlurHandler}
                    maxLength={props.maxLength}
                    value={props.value}
                    inputAnimation={props.inputAnimation}
                    searchIcon={props.searchIcon}
                    disabled={props.disabled}
                />
                {props.children}
                <Error errorMessage={props.errorMSg} />
            </FormMargin>

        </Aux>
    )
}

export default TextInput
