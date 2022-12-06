import { Field } from 'formik'

export const RadioField = ({ span, groupName, value}) => {
    return (
        <div className="flex gap-2">
            <span>{span}</span>
            <Field type="radio" name={groupName} value={value} className="cursor-pointer" />
        </div>
    )
}
