import Base from "../../components/base";
import Link from "next/link";

export default function Receita9(){
    return (
        <div>
            <style jsx>{`

                nav{
                    margin-top: 20px;
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }

            `}
            </style>

        
            <Base title={'Receita 9'} 
            conteudo={'Esta aplicação é fruto do desenvolvimento dos exercícios práticos da Receita 9 da disciplina Programação Web.'}
        
            />
            <nav>
                <Link href='/tarefa-09/exe_1_2/16870'>Exercício 1 e 2</Link>
                <Link href='/tarefa-09/exe-03/movies/tt0095801'>Exercício 3</Link>
                <Link href='/tarefa-09/exe-04/xxxccc'>Exercício 4</Link>
            </nav>

        </div>
    )
}