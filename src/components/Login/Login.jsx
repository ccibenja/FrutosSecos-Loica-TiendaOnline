import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Error al iniciar sesión. Revisa tus credenciales.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.titulo}>Iniciar Sesión</h2>
      
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className={styles.inputField}
          required 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className={styles.inputField}
          required 
        />
        <button type="submit" className={styles.botonSubmit}>
          Ingresar
        </button>
      </form>

      {error && <p className={styles.mensajeError}>{error}</p>}

      <p className={styles.textoRegistro}>
        ¿No tienes cuenta? <Link to="/register" className={styles.linkRegistro}>Regístrate aquí</Link>
      </p>
    </div>
  );
}

export default Login;