import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_USERS } from "../graphql/queries/query.js";
import { CREATE_USER, DELETE_USER } from "../graphql/mutations/mutation.js";
import { Modal, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Index = () => {
  //Variable para la navegación
  let navigate = useNavigate();

  //Control de la Modal
  const [show, setShow] = useState(false);

  const cerrar = () => {
    setShow(!show);
  };
  //---

  //Campos del formulario de la Modal
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [username, setUsername] = useState("");
  const [rol, setRol] = useState("");

  const [createUsuario] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: ALL_USERS }],
  });

  const submit = (event) => {
    event.preventDefault();
    console.log(event);

    createUsuario({
      variables: {
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
  };
  //----

  //Funcion para eliminar un usuario
  const [deleteUsuario] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: ALL_USERS }],
  });

  const deleteUser = (id) => {
    console.log(id);

    deleteUsuario({ variables: { id } });
  };
  //----

  //Se muestran las tuplas
  const { data, error, loading } = useQuery(ALL_USERS);

  if (loading)
    return (
      <>
        <div className="loading-div">
          <Spinner animation="border" variant="primary" />
          <div>
            <span> Cargando... </span>
          </div>
        </div>
      </>
    );

  if (error) return `Error! ${error.message}`;

  return (
    <>
      <div className="content mt-5">
        <div className="container mt-2">
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-active bg-primary">
              <tr align="center" className="columns">
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>Contraseña</th>
                <th>Username</th>
                <th>Rol</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.listarUsers.map((user) => (
                <>
                  <tr align="center" key={user.id}>
                    <th scope="row">{user.Id}</th>
                    <td>{user.Nombre}</td>
                    <td>{user.Apellido}</td>
                    <td>{user.Telefono}</td>
                    <td>{user.Correo}</td>
                    <td>{user.Contrasena}</td>
                    <td>{user.Username}</td>
                    <td>{user.Rol}</td>

                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-primary"
                        onClick={async () => {
                          navigate(`/actualizarusuario/${user.Id}`);
                        }}
                        key={user.Id}
                      >
                        Editar
                      </button>
                    </td>

                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => deleteUser(user.Id)}
                        key={user.Id}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>

          {/* ---- */}

          <div className="buton-modal">
            <button className="btn btn-success px-2" onClick={cerrar}>
              {" "}
              Agregar nuevo usuario{" "}
            </button>
          </div>
        </div>
      </div>

      {/* Ventana Modal */}
      <div>
        <Modal show={show} onHide={cerrar} className="modalwindow">
          <Modal.Body className="body-modal">
            <div className="modal-header pb-4 border-bottom-0 text">
              <div className="titulo-modal">
                <h2 className="fw-bold mb-0">
                  <span class="badge text-dark">Ingrese los datos</span>
                </h2>
              </div>

              <div className="abrir">
                <button
                  type="button"
                  onClick={cerrar}
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>

            <div class="modal-body p-5 pt-0">
              <form onSubmit={submit}>
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
                  className="btn btn-danger mx-5 mt-3 px-4"
                  onClick={cerrar}
                >
                  {" "}
                  Cancelar{" "}
                </button>

                <button
                  type="submit"
                  className="btn btn-success mx-4 mt-3 px-4"
                  onClick={cerrar}
                >
                  {" "}
                  Guardar{" "}
                </button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      {/* ---- */}
    </>
  );
};
