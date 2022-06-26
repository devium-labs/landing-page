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

  const onSubmit = async ({ email, name, type, message }) => {
    const body = `
    <h3>Novo interessado DEVIUM</h3>
    <p>Nome: ${name}</p>  
    <p>Email: ${email}</p>  
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
      className="tw-w-3/5 tw-text-white tw-flex tw-flex-col tw-items-center tw-mt-20"
      id="contact"
    >
      <h1 className="tw-text-6xl">Contato</h1>
      <p className="tw-text-center tw-my-6 ">
        Tem alguma dúvida ou quer fazer um orçamento? Preencha o formulário
        abaixo nos contando um pouco do que tem em mente que entraremos em
        contato.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="tw-w-full tw-p-3">
        <div className="tw-flex tw-flex-col tw-items-start tw-mb-4">
          <label for="name">Nome:</label>
          <input
            type="text"
            name="nome"
            {...register("name", { required: true })}
            className="tw-bg-transparent tw-border-2 tw-p-2 tw-w-full"
          />
        </div>
        <div className="tw-flex tw-flex-col tw-items-start tw-mb-4">
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            className="tw-bg-transparent tw-border-2 tw-p-2 tw-w-full"
          />
        </div>
        <div className="tw-flex tw-items-center tw-mb-4">
          <input
            type="radio"
            name="type"
            value="Orçamento"
            {...register("type", { required: true })}
          />
          <label for="type" className="tw-mr-3">
            Orçamento
          </label>
          <input
            type="radio"
            name="type"
            value="Dúvida"
            {...register("type", { required: true })}
          />
          <label for="type">Dúvida</label>
        </div>
        <div className="tw-flex tw-flex-col tw-items-start tw-mb-4">
          <label for="message">Mensagem:</label>
          <textarea
            name="message"
            {...register("message", { required: true })}
            className="tw-bg-transparent tw-border-2 tw-p-2 tw-w-full tw-h-40"
          ></textarea>
        </div>
        <div className="tw-w-full tw-text-center">
          <button type="submit">ENVIAR MENSAGEM</button>
        </div>
      </form>
      <div>
        <Toaster position="bottom-right" />
      </div>
    </section>
  );
}
