import { StyledAut } from "./styled";

export function Cadastro() {
    return (
        <StyledAut>
            <form action="">

                <label htmlFor="">Nome</label>
                <input type="text" />

                <label htmlFor="">Email</label>
                <input type="text" />

                <label htmlFor="">Senha</label>
                <input type="text" />

                <button>Cadastrar</button>

            </form>
        </StyledAut>
    )
}
// import axios from "axios";
// import { useEffect, useState } from "react";

// import { StyledBotao1, StyledCarro } from './styled';


// export default function Carros() {

//     const atualizarPagina = () => {
//         window.location.reload();
//     }

//     const url = `http://localhost:4001/carros`;

//     const [carros, setCarros] = useState([]);

//     useEffect(() => {
//         const promisse = axios.get(url);

//         promisse.then(res => {
//             setCarros(res.data);
//         })
//         promisse.catch(err => {
//             console.error("Erro ao obter dados:", err);
//         });
//     }, []);


//     // adiciona novos carros------------------------
//     const [marca, setMarca] = useState('')
//     const [modelo, setModelo] = useState('')
//     const [carro, setCarro] = useState('')

//     function inputMarca(event) {
//         setMarca(event.target.value)

//     }
//     function inputModelo(event) {
//         setModelo(event.target.value)
//     }
//     function inputCarro(event) {
//         setCarro(event.target.value)
//     }

//     function addCarros(event) {
//         event.preventDefault();

//         const body = {
//             marca: marca,
//             modelo: modelo,
//             carro: carro
//         }
//         // Verificar se há campos vazios ou números
//         if (!marca || !modelo || !carro || !isNaN(marca) || !isNaN(modelo) || !isNaN(carro)) {
//             alert('Por favor, preencha corretamente os campos!');
//             return;
//         }

//         const promise = axios.post(url, body)

//         promise.then(res => {
//             console.log("Resposta do servidor:", res.data);
//             !res.data ? res.status(400) : alert('cadastrado com sucesso');
//         })
//         promise.catch(err => {
//             alert('Erro ao cadastrar carro!');
//             console.error("Erro:", err);
//         })
//         promise.finally(() => {
//             setMarca('');
//             setModelo('');
//             setCarro('');
//         });
//     }


//     // filtar carros---------------------------------
//     const [filtro, setFiltro] = useState('')

//     function inputFiltro(event) {
//         setFiltro(event.target.value)
//     }

//     function filtraCarros(event) {
//         event.preventDefault();

//         const body = {
//             marca: filtro
//         };


//         const promisse = axios.put(url, body);

//         promisse.then(res => {
//             setCarros(res.data);
//         })
//             .catch(err => {
//                 console.error("Erro ao obter dados:", err);
//             });
//     }


//     return (

//         <>
//             <StyledCarro>
//                 <div id="container" >
//                     {carros.length > 0 ? (
//                         <div id="container">
//                             {carros.map(car => (
//                                 <div key={car.carro}>
//                                     <p>Marca: {car.marca}</p>
//                                     <p>Modelo: {car.modelo}</p>
//                                     <p>Carro: {car.carro}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     ) : (
//                         <p>Nenhum carro encontrado para a marca especificada.</p>
//                     )}
//                 </div>

//                 <div id="containerForm">
//                     <form onSubmit={addCarros}>
//                         <input onChange={inputMarca} placeholder="marca" value={marca} type="text" />
//                         <input onChange={inputModelo} placeholder="modelo" value={modelo} type="text" />
//                         <input onChange={inputCarro} placeholder="carro" value={carro} type="text" />

//                         <button onClick={atualizarPagina} type="submit" name="submit">add carro</button>
//                     </form>

//                     <form onSubmit={filtraCarros}>
//                         <input onChange={inputFiltro} placeholder="filtra carros por marca" value={filtro} type="text" />
//                         <button type="submit" name="submit">Filtrar carro</button>
//                     </form>
//                 </div>


//             </StyledCarro>


//             <StyledBotao1 inclui={carros.find(objeto => objeto.marca)}>{carros.length !== 0 ? 'disponiveis' : 'não disponiveis'}</StyledBotao1>



//         </>

//     );
// }
