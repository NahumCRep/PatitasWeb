import { useEffect, useState } from 'react'
import { useAuthStore } from '../../hooks'
import Swal from 'sweetalert2'
import { ProfileLayout } from '../../components/layouts'
import { UserSection, PasswordSection } from '../../components/dashboard/configuration'

export const ConfigPage = () => {
    const { user, startUpdateUser } = useAuthStore()
    const [userValues, setUserValues] = useState(user)

    useEffect(() => {
        setUserValues(user)
    },[user])

    const passwordValues = {
        currentPassword: '',
        password: '',
        confirmPassword: ''
    }

    const handleSubmit = (updateData) => {
        const resp = startUpdateUser(user.uid, updateData)
        resp.then(res => {
            let alertType = res.ok ? 'success' : 'error'
            Swal.fire(
                'Datos!',
                `${res.message}`,
                `${alertType}`
            )
        })
        return resp
    }

    return (
        <ProfileLayout layoutTitle={'Configuracion'}>
            <div className='w-[90%] min-h-screen mx-auto p-4 shadow-lg flex flex-col gap-6 md:w-[70%]'>
                <UserSection
                    formValues={userValues}
                    handleSubmit={handleSubmit}
                />
                <hr/>
                <hr/>
                <PasswordSection
                    formValues={passwordValues}
                    handleSubmit={handleSubmit}
                />
            </div>
        </ProfileLayout>
    )
}
