import React, { useState } from 'react';
import { ErrorMessage, Field } from 'formik';
import { InputFormField, SelectFormField, ContactInputField } from './';

import { MdEmail } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'

import { provinces } from '../../../localData/provinces'

const ageWithoutNumberOptions = ['adulto', 'joven', 'bebé'];
const ageWithNumberOptions = ['semanas', 'meses', 'años'];

export const SubForm = ({ touched, errors }) => {
    const [isSpecificAge, setIsSpecificAge] = useState(false);

    const handleToggleAge = (e) => {
        console.log(e.target.checked)
        e.target.checked
            ? setIsSpecificAge(true)
            : setIsSpecificAge(false)
    }

    return (
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 ">
            {/* Name */}
            <InputFormField
                name={'name'}
                type={"text"}
                label="Nombre"
                touchedField={touched.name}
                errorField={errors.name}
            />

            {/* Age */}
            <div className="h-16">
                <div className="flex gap-2 items-center">
                    <label htmlFor="age">Edad</label>
                    <p className="text-slate-400"> | edad especifica?</p>
                    <input type="checkbox" onChange={handleToggleAge} className="cursor-pointer" />
                </div>

                <div>
                    {
                        isSpecificAge
                            ? (
                                <div className="grid grid-cols-2 gap-3">
                                    <Field type="number" name="ageNumber" className="formFieldComponent" />
                                    <SelectFormField name={'ageString'} options={ageWithNumberOptions} />
                                </div>
                            )
                            : <SelectFormField name={'ageString'} options={ageWithoutNumberOptions} />

                    }
                    <ErrorMessage name="ageString" component="div" className="text-red-500 text-sm" />
                </div>
            </div>

            {/* Breed */}
            <div className="mt-2">
                <InputFormField name={'breed'} type={'text'} label={'Raza'} touchedField={touched.breed} errorField={errors.breed} />
            </div>

            {/* Location */}
            <div className="h-16 mt-2">
                <label htmlFor='location'>Provincia</label>
                <Field
                    as="select"
                    name="location"
                    className="block cursor-pointer formFieldComponent"
                >
                    <option disabled value="" >seleccionar...</option>
                    {provinces.map(province => (
                        <option value={province.value} key={province.value}>{province.province}</option>
                    ))}
                </Field>
            </div>

            {/* Contact */}
            <div className="col-span-2 mt-3">
                <p>Medios de Contacto</p>

                <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
                    <ContactInputField
                        name='email'
                        label='Correo'
                        type='email'
                        isRequired
                    >
                        <MdEmail size={25} color="#E74C3C" />
                    </ContactInputField>

                    <ContactInputField
                        name='whatsapp'
                        label='Whatsapp'
                        type='text'
                    >
                        <RiWhatsappFill size={25} color='#25d366' />
                    </ContactInputField>
                </div>
            </div>
        </div>
    )
}
