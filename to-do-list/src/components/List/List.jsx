import "./List.css";
import { Tarefas_mock } from "../../Mocks/Tarefas";
import { useState } from "react";

function ListAll () {

    let [tarefas, setTarefas] = useState([...Tarefas_mock]);
    let [novaTarefa, setNovaTarefa] = useState("");

    function addNovaTarefa () {
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa("");
    }

    function deleteTarefa (index) {
        let tempTarefa = [...tarefas];
        tempTarefa.splice(index, 1);
        setTarefas(tempTarefa);
    }

    return (
        <>
        <div>
            <input type="text" onChange={value => setNovaTarefa(value.target.value)} required/>
            <button onClick={() => addNovaTarefa()}>Adicionar</button>
        </div>
        
        <div className="lista-tarefas">
            {tarefas.map((itemTarefa, index) => (
                <>
                <fieldset>
                    <input type="checkbox" name="tarefa" value={itemTarefa} id={index} />
                    <label htmlFor="index">{itemTarefa}</label>
                    <button onClick={() => deleteTarefa()}>Remover</button>
                </fieldset>
                </>
            ))}
        </div>
        </>
    )
}

export default ListAll