const TemplateExpressions = () => {
    const name = "Bruno";
    const data = {
        age: 30,
        job: "Programador",
    }
    return (
        <div>
            <h1>Olá {name}</h1>
            <p> Você tem {data.age} anos e atua como {data.job}</p>
            
        </div>
    );
};
export default TemplateExpressions;