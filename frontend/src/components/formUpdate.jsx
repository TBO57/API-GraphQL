import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ALL_USERS } from "../graphql/queries/query.js";
import { UPDATE_USER } from "../graphql/mutations/mutation.js";
import { useParams, useNavigate } from "react-router-dom";

export const FormUpdate = () => {
  //Variable para la navegación
  let navigate = useNavigate();

  //Variable donde se almacena el parámetro recibido
  let dniparam = useParams();

  //Campos del formulario para actualizar
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [username, setUsername] = useState("");
  const [rol, setRol] = useState("");

  const [updateUsuario] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: ALL_USERS }],
  });

  const submit = (event) => {
    event.preventDefault();

    updateUsuario({
      variables: {
        id: Number(dniparam.id),
        nombre,
        apellido,
        telefono,
        correo,
        contrasena,
        username,
        rol,
      },
    });

    setNombre("");
    setApellido("");
    setTelefono("");
    setCorreo("");
    setContrasena("");
    setUsername("");
    setRol("");

    navigate(`/`);
  };
  //----

  return (
    <>
      <div className="tarjeta">
        <div className="row justify-content-center">
          <div className="form-content">
            <h2 className="title-h2">
              <span className="text-dark"> Ingrese datos </span>
            </h2>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={submit}>
                <input
                  type="text"
                  className="form-control mb-3"
                  name={dniparam.id}
                  value={dniparam.id}
                  disabled
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  name={nombre}
                  onChange={({ target }) => setNombre(target.value)}
                  placeholder="Nombre"
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  name={apellido}
                  onChange={({ target }) => setApellido(target.value)}
                  placeholder="Apellido"
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  name={telefono}
                  onChange={({ target }) => setTelefono(target.value)}
                  placeholder="Telefono"
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  name={correo}
                  onChange={({ target }) => setCorreo(target.value)}
                  placeholder="Correo"
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  name={contrasena}
                  onChange={({ target }) => setContrasena(target.value)}
                  placeholder="Contraseña"
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  name={username}
                  onChange={({ target }) => setUsername(target.value)}
                  placeholder="Username"
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  name={rol}
                  onChange={({ target }) => setRol(target.value)}
                  placeholder="Rol"
                />

                <button
                  id="button-cancel"
                  className="btn btn-danger px-2"
                  onClick={async () => {
                    navigate(`/`);
                  }}
                >
                  {" "}
                  Cancelar{" "}
                </button>

                <button
                  type="submit"
                  className="btn btn-success px-2"
                  onClick={submit}
                >
                  {" "}
                  Guardar{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
