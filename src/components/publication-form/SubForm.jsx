import { useState, useEffect } from 'react';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { MdEmail, RiWhatsappFill } from '../../utils/reactIcons';
import { provinces, districts } from '../../utils/location';

import { InputField, RadioField, SelectField, ContactField } from '../form-fields'; 

const ageWithoutNumberOptions = ['adulto', 'joven', 'bebé'];
const ageWithNumberOptions = ['semanas', 'meses', 'años'];

export const SubForm = () => {
    const [isSpecificAge, setIsSpecificAge] = useState(false);
    const { values } = useFormikContext();

    const handleToggleAge = (e) => {
        e.target.checked
            ? setIsSpecificAge(true)
            : setIsSpecificAge(false)
    }

    const selectDistricts = (province) => (districts[province])

    useEffect(() => {
        const provinceDistricts = selectDistricts(values.location.province);
        values.location.district = provinceDistricts[0];
    },[values.location.province])

    useEffect(() => {
        isSpecificAge
            ? values.age = values.ageNumber + ' ' + values.ageString
            : values.age = values.ageString 
    }, [values.ageNumber, values.ageString])

    return (
        <div className="w-full h-auto mt-2 md:w-[60%] md:mt-0 font-secondary flex flex-col gap-5 md:grid md:grid-cols-2 ">
            {/* Name */}
            <InputField name={'name'} type={"text"} label="Nombre" />

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
                                    <Field type="number" name="ageNumber" className="formField" />
                                    <SelectField name={'ageString'} options={ageWithNumberOptions} />
                                </div>
                            )
                            : <SelectField name={'ageString'} options={ageWithoutNumberOptions} />

                    }
                    <ErrorMessage name="ageString" component="div" className="text-red-500 text-sm" />
                </div>
            </div>

            {/* Breed */}
            <InputField name={'breed'} type={'text'} label={'Raza'} />

            {/* genre */}
            <div>
                <label htmlFor='genre'>Sexo</label>
                <div className="flex gap-4 h-12 items-center">
                    <RadioField span="Macho" groupName="genre" value="macho" />
                    <RadioField span="Hembra" groupName="genre" value="hembra" />
                </div>
            </div>

            {/* Location */}
            <div className="h-auto md:h-16 mt-2 col-span-2">
                <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
                    <div>
                        <label htmlFor='location.province'>Provincia</label>
                        <SelectField name="location.province" options={provinces} />
                    </div>
                    <div>
                        <label htmlFor='location.district'>Distrito</label>
                        <SelectField name="location.district" options={selectDistricts(values.location.province)} />
                    </div>
                </div>

            </div>

            {/* Contact */}
            <div className="col-span-2 mt-3 h-auto md:h-24">
                <p>Medios de Contacto</p>
                <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
                    <ContactField type='text' name='contact.whatsapp' label='Whatsapp' isRequired >
                        <RiWhatsappFill size={25} color='#25d366' />
                    </ContactField>

                    <ContactField type='email' name='contact.email' label='Correo' >
                        <MdEmail size={25} color="#E74C3C" />
                    </ContactField>
                </div>
            </div>
        </div>
    )
}
