
export default function Services() {
  const services = [
    {image: '/services-web.png', title: 'Desenvolvimento web', text: 'Um site funcional e com bom desempenho é a nossa prioridade. Criamos projetos de excelente qualidade para sua empresa.'},
    {image: '/services-design.png', title: 'Design ux/ui', text: 'Design de layouts bonitos, que irão chamar a atenção de seus clientes.'},
    {image: '/services-painel.png', title: 'Painel backend', text: 'Integrando com o painel backend, o site se torna facilmente editável para você personalizar da forma que achar melhor.'},
    {image: '/services-ajustes.png', title: 'Ajustes de site', text: 'Já tem um site mas precisa resolver um erro ou adionar uma funcionalidade? É com a gente mesmo.'},
  ]
  return (
    <section id="works" className="tw-py-[75px]">
      <h1 className="title tw-text-center tw-pb-[30px]">Nossos serviços</h1>

      <div className="tw-flex tw-items-center tw-justify-center tw-flex-wrap">
        {services.map((s, i) => (
          <div style={{backgroundImage: `url('${s.image}'`}} key={i} className="tw-w-[230px] tw-h-[350px] tw-rounded-[20px] tw-bg-center tw-bg-cover tw-flex tw-items-center tw-justify-center tw-m-[7px]">
            <div className="services-card tw-px-[20px] tw-w-full tw-text-center tw-relative tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col tw-bg-[rgba(0,0,0,0.3)] tw-rounded-[20px]">
              <span className="tw-block tw-text-white tw-font-bantayog tw-text-[25px] tw-leading-[100%] tw-pb-[15px]">
                {s.title}
              </span>
              <p className="tw-text-white tw-leading-[100%] tw-pt-[10px] tw-text-start">{s.text}</p>
            </div>
        </div>
        ))}
      </div>
    </section>
  )
}