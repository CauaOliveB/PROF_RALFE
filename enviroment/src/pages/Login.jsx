import styles from './Login.module.css'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import { Rotas } from '../rotas/Rotas';

const loginSchema = z.object({
    Email: z.string()
        .email({message: 'Informe um e-mail válido!'}),

    Senha: z.string()
        .length(6, {message: 'Defina uma senha de 6 caracteres!'})
})

export function Login(){

    const navegacao = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(loginSchema)})

    function autenticarUsuario (data){
        console.log(data.Email)
        console.log(data.Senha)

        navegacao('Initial')
    }


    return(
        <div className={styles.container}>
            <p className={styles.titulo}>Login</p>

            <form 
                onSubmit={handleSubmit(autenticarUsuario)}
                className={styles.formulario}
            >

                <input
                    {...register('Email')}
                    placeholder='E-mail'
                    className={styles.campo} 
                />
                { errors.Email && (
                    <p className={styles.mensagem}>
                        {errors.Email.message}
                    </p>
                )}

                <input
                    {...register('Senha')}
                    placeholder='Senha'
                    className={styles.campo} 
                />
                { errors.Senha && (
                    <p className={styles.mensagem}>
                        {errors.Senha.message}
                    </p>
                )}
                <button
                    className={styles.botao}
                >Entrar</button>
            </form>
        </div>
    )
}