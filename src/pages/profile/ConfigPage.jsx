import { useEffect, useState } from 'react'
import { useAuthStore } from '../../hooks'
import Swal from 'sweetalert2'
import { ProfileLayout } from '../../components/layouts'
import { UserSection, PasswordSection } from '../../components/dashboard/configSections'

export const ConfigPage = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    })


    return (
        <ProfileLayout layoutTitle={'Configuracion'}>
            <div className='w-[90%] min-h-screen mx-auto p-4 shadow-lg flex flex-col gap-6 md:w-[70%]'>
                <UserSection formValues={{name:'', email:''}} />
                <PasswordSection formValues={{currentPassword: '', password:'', confirmPassword:''}} />
            </div>
        </ProfileLayout>
    )
}
