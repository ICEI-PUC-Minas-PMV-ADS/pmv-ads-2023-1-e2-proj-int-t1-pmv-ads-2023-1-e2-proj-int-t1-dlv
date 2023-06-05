import * as yup from 'yup'

const schemas = {
    login: yup.object({
        email: yup.string().required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório')
    }),
    signup:  yup.object({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().email('E-mail inválido*').required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório').min(6, "Mínimo de 6 dígitos"),
        confirm_password: yup.string().required("Você deve confirmar sua senha!").oneOf([yup.ref("password")], "Senha não confere com a senha criada acima!")
    }),
}

export {schemas}