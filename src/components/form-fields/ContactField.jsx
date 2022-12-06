import { useField } from 'formik';

export const ContactField = ({ label, isRequired = false, children, ...props }) => {
    const [field, meta] = useField(props.name);
    
    return (
        <div className="mt-3">
            <label htmlFor={props.name} className="flex items-center gap-2">
                {/* children is for icon element */}
                {children}
                {label}
                {
                    <p className='text-sm text-slate-400'>
                        {isRequired ? "(obligatorio)" : "(opcional)"}
                    </p>
                }
            </label>
            <input {...field} className={`formField ${meta.touched && meta.error ? 'inputError':''}`} />
            {
                meta.touched && meta.error
                    ? <div className="text-red-500 text-sm">{meta.error}</div>
                    : null
            }
        </div>
    )
}
