import styles from './Teachers.module.css'

const teachersSchema = z.object({

    NI: z.string()
        .length(6, {message: 'Coloque seu NI de 6 caracteres!'})
})

export function Teachers(){
    return(
        <div className={styles.container}>
            <p className={styles.titulo}>Professores</p>

            <form className={styles.formulario}>

                <input
                    {...register('NI')}
                    placeholder='NI'
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