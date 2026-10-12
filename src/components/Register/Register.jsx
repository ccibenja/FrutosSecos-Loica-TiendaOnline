import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/");
    } catch (err) {
      setError("Error al registrarse. Intenta con otro correo o contraseña más segura.");
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.titulo}>Registro de Usuario</h2>
      
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
          placeholder="Contraseña (mínimo 6 caracteres)" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className={styles.inputField}
          required 
        />
        <button type="submit" className={styles.botonSubmit}>
          Registrarme
        </button>
      </form>

      {error && <p className={styles.mensajeError}>{error}</p>}

      <p className={styles.textoLogin}>
        ¿Ya tienes cuenta? <Link to="/login" className={styles.linkLogin}>Inicia sesión aquí</Link>
      </p>
    </div>
  );
}

export default Register;