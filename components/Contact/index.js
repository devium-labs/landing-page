import React from "react";
import toast, { Toaster } from "react-hot-toast";

import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notifyError = () =>
    toast.error("Ocorreu uma falha.", {
      style: {
        border: "1px solid #f7312a",
        boxShadow: "10px 10px 75px -13px rgba(247,49,42,1)",
        fontSize: "1.4rem",
      },
    });
  const notifySuccess = () =>
    toast.success("Enviado com sucesso!", {
      style: {
        border: "1px solid #28fc76",
        boxShadow: "10px 10px 75px -13px rgba(40,252,118,1)",
        fontSize: "1.4rem",
      },
    });

  const onSubmit = async ({ email, name, tel,type, message }) => {
    const body = `
    <h3>Novo interessado DEVIUM</h3>
    <p>Nome: ${name}</p>  
    <p>Email: ${email}</p>  
    <p>Telefone: ${tel}</p>  
    <p>Interesse: ${type}</p>  
    <p>Mensagem: ${message}</p>                   
  `;

    try {
      toast.promise(sendMessage(), {
        loading: "Enviando...",
        success: <b>Mensagem enviada!</b>,
        error: <b>Infelizmente, não conseguimos enviar a mensagem.</b>,
      });

      async function sendMessage() {
        console.log(body);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section
      className="tw-w-full tw-max-w-[540px] tw-text-white tw-flex tw-flex-col tw-items-center tw-mt-[150px] tw-mb-[50px]"
      id="contact"
    > 
      <h1 className="title">Contato</h1>
      <p className="tw-my-6 tw-mx-[20px]">
        {/* Tem alguma dúvida ou quer fazer um orçamento? Preencha o formulário
        abaixo nos contando um pouco do que tem em mente que entraremos em
        contato. */}
        Tem alguma dúvida ou quer fazer um orçamento? Nos conte um pouco de suas ideias que entraremos em contato.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="tw-w-full tw-p-3">
        {/* NOME */}
        <div className="tw-flex tw-flex-col tw-items-start tw-mb-4">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="nome"
            {...register("name", { required: true })}
            className={`tw-bg-transparent tw-border-2 ${errors.name && 'tw-border-red'} tw-p-2 tw-w-full tw-outline-0`}
          />
          {errors.name && <span className="tw-text-red tw-text-[14px] tw-pt-[5px]">Campo nome é obrigatório!</span>}
        </div>
        {/* EMAIL */}
        <div className="tw-flex tw-flex-col tw-items-start tw-mb-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            className={`tw-bg-transparent tw-border-2 ${errors.email && 'tw-border-red'} tw-p-2 tw-w-full tw-outline-0`}
          />
          {errors.email && <span className="tw-text-red tw-text-[14px] tw-pt-[5px]">Campo email é obrigatório!</span>}
        </div>
        {/* TELEFONE */}
        <div className="tw-flex tw-flex-col tw-items-start tw-mb-4">
          <label htmlFor="tel">Telefone:</label>
          <input
            type="tel"
            name="tel"
            {...register("tel", { required: true })}
            className={`tw-bg-transparent tw-border-2 ${errors.tel && 'tw-border-red'} tw-p-2 tw-w-full tw-outline-0`}
          />
          {errors.tel && <span className="tw-text-red tw-text-[14px] tw-pt-[5px]">Campo telefone é obrigatório!</span>}
        </div>
        {/* TIPO DE INTERESSE */}
        <div className="tw-flex tw-items-center tw-mb-4 tw-flex-wrap">
          <div className="tw-flex tw-items-center tw-justify-center tw-my-[5px]">
          <input
            type="radio"
            name="type"
            value="Orçamento"
            defaultChecked
            {...register("type", { required: true })}
          />
          <label htmlFor="type" className="tw-mr-3">
            Orçamento
          </label>
          </div>
          <div className="tw-flex tw-items-center tw-justify-center tw-my-[5px]">
          <input
            type="radio"
            name="type"
            value="Dúvida"
            {...register("type", { required: true })}
          />
          <label htmlFor="type">Dúvida</label>
          </div>
        </div>
        {/* MENSAGEM */}
        <div className="tw-flex tw-flex-col tw-items-start tw-mb-4">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            name="message"
            {...register("message", { required: true })}
            className={`tw-bg-transparent tw-border-2 ${errors.message && 'tw-border-red'} tw-p-2 tw-w-full tw-outline-0 tw-h-40`}
          ></textarea>
          {errors.message && <span className="tw-text-red tw-text-[14px] tw-pt-[5px]">Campo mensagem é obrigatório!</span>}
        </div>
        <div className="tw-w-full tw-text-center">
          <button className="button tw-w-full" type="submit">ENVIAR</button>
        </div>
      </form>
      <div>
        <Toaster position="bottom-right" />
      </div>
    </section>
  );
}
