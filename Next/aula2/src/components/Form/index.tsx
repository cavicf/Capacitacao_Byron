"use client"
import Image from "next/image";
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { use } from "react";
import { spawn } from "child_process";
import { Span } from "next/dist/trace";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const schema = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório').min(2, 'nome tem que ter pelo menos 2 caracteres'),
    idade: yup.number().required('idade obrigatoria').min(18, 'idade minima é 18 anos'),
    senha: yup.string()
    .required("Senha é obrigatória")
    .min(8, "Mínimo de 8 caracteres")
    .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
    "A senha deve ter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial"
    ),
    confirmaSenha: yup.string().required("confirmar senha  é obrigatorio").oneOf([yup.ref('senha')], "As senhas devem conferir")
    });

export default function Form() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit"
    })

    const onSubmit = (data: any) => {
        console.log(data)
        reset()
    }
    return(
        <Dialog>
            <DialogTrigger className="border border-white rounded-lg p-2 font-bold hover:scale-105 transition-all">Abrir Formulário</DialogTrigger>
            <DialogContent className="bg-slate-600 rounded-xl border border-white text-white min-w-2/5 p-6">
            <DialogHeader>
                <DialogTitle>Cadastrar Usuário</DialogTitle>
                <DialogDescription>Cadastre-se para utilizar nosso sistema</DialogDescription>
            </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="flex flex-col">
                        <label htmlFor="nome">nome</label>
                        <input type="text" id="nome" placeholder="José da silva" {...register("nome")}/>
                        {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
                    </div>
                    <hr />
                    <div className="flex flex-col">
                        <label htmlFor="idade">idade</label>
                        <input type="text" id="idade" placeholder="23" {...register("idade", {valueAsNumber: true})}/>
                        {errors.idade && <span className="text-red-500 text-sm">{errors.idade.message}</span>}
                    </div>
                    <hr />
                    <div className="flex flex-col">
                        <label htmlFor="senha">senha</label>
                        <input type="password" id="senha" placeholder="senha forte" {...register("senha")}/>
                        {errors.senha && <span className="text-red-500 text-sm">{errors.senha.message}</span>}
                    </div>
                    <hr />
                    <div className="flex flex-col">
                        <label htmlFor="confirmeSuaSenha">confirme sua senha</label>
                        <input type="password" id="confirmeSuasenha" placeholder="confirme sua senha"  {...register("confirmaSenha")}/>
                        {errors.confirmaSenha && <span className="text-red-500 text-sm">{errors.confirmaSenha.message}</span>}
                    </div>
                    <button className="bg-red-700 font-bold p-2 border border-white rounded-xl" type="submit">Enviar</button>
                </form>
            </DialogContent>
        </Dialog>

    )
};
