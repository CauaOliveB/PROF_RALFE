import styles from './Login.module.css'

export function Login(){
    return(
        <div className={styles.container}>
            <p className={styles.titulo}>Login</p>

            <form className={styles.formulario}>

                <input
                    placeholder='E-mail'
                    className={styles.campo} 
                />

                <input
                    placeholder='Senha'
                    className={styles.campo} 
                />

                <button
                    className={styles.botao}
                >Entrar</button>
            </form>
        </div>
    )
}