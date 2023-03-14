interface AvatarProps {
    id: number;
    img: string;
}

// images of hero
export const heroAvatars = () =>
    useState<AvatarProps[]>("avatars", () => [
        {
            id: 1,
            img: "/_nuxt/assets/images/hero/img-03.png",
            name: "Antonio Carlos",
        },
        {
            id: 2,
            img: "/_nuxt/assets/images/hero/img-01.png",
            name: "Jéssica Silva",
        },
        {
            id: 3,
            img: "/_nuxt/assets/images/hero/img-02.png",
            name: "Luis Paulo",
        },
        {
            id: 4,
            img: "/_nuxt/assets/images/hero/img-03.png",
            name: "Antonio Carlos",
        },
        {
            id: 5,
            img: "/_nuxt/assets/images/hero/img-01.png",
            name: "Jéssica Silva",
        },
        {
            id: 6,
            img: "/_nuxt/assets/images/hero/img-02.png",
            name: "Antonio Carlos",
        },
    ]);

// hero area dot selecte
export const dotSelect = () => useState<number>("dot", () => 0);

// events
interface EventsProps {
    id: number;
    icon: string;
    title: string;
    description: string;
}

export const eventsCard = () =>
    useState<EventsProps[]>("dot", () => [
        {
            id: 1,
            icon: `<svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.8934 28.0746C9.07335 25.4773 8.00269 22.3173 8.00269 18.9053C8.00269 14.4866 11.5827 10.9053 15.9987 10.9053C20.4147 10.9053 23.9947 14.4866 23.9947 18.9053"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M24.428 26.8839C24.284 26.8919 24.1427 26.9053 23.9973 26.9053C19.5813 26.9053 16.0013 23.3239 16.0013 18.9053"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M17.6627 29.0946C14.2653 26.9759 12.0027 23.2053 12.0027 18.9053C12.0027 16.6959 13.7933 14.9053 16.0013 14.9053C18.2093 14.9053 20 16.6959 20 18.9053C20 21.1146 21.7907 22.9053 23.9987 22.9053C26.2067 22.9053 27.9973 21.1146 27.9973 18.9053C27.9973 12.2773 22.6267 6.90527 16.0027 6.90527C9.37866 6.90527 4.008 12.2773 4.008 18.9053C4.008 20.3826 4.17333 21.8213 4.47733 23.2079"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M27.164 7.96394C24.4373 4.86661 20.4507 2.90527 16 2.90527C11.5493 2.90527 7.56267 4.86661 4.836 7.96394"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>`,
            title: "Autenticação no smartphone",
            description:
                "O cadastro da biometria facial é feito com o próprio celular da pessoa, sem precisar de equipamento específico.",
        },
        {
            id: 2,
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.33334 17.9999H16.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.33334 22.6667H13.3333" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3333 28H6.66667C5.19333 28 4 26.8067 4 25.3333V6.66667C4 5.19333 5.19333 4 6.66667 4H22.6667C24.14 4 25.3333 5.19333 25.3333 6.66667V12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.364 17.5506L27.7573 16.944C27.236 16.4226 26.392 16.4226 25.872 16.944L17.5027 25.3173C17.3773 25.4426 17.308 25.612 17.308 25.788V28H19.52C19.6973 28 19.8667 27.9293 19.9907 27.8053L28.364 19.436C28.8853 18.9146 28.8853 18.0706 28.364 17.5506Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33334 11.6001V8.66675H14.6667V11.6001L12 13.7334L9.33334 11.6001Z" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `,
            title: "Portaria com critérios",
            description:
                "Crie portarias e regras para reconhecer pessoas: entrada apenas para maiores, ingressos e lista de convidados. ",
        },
        {
            id: 3,
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6667 20V25.5053C18.6667 26.8827 17.5493 28 16.172 28H6.49467C5.11733 28 4 26.8827 4 25.5053V6.49467C4 5.11733 5.11733 4 6.49467 4H16.1707C17.5493 4 18.6667 5.11733 18.6667 6.49467V9.33333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.4 24.6667H14.2667" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7773 9.33325H26.2213C27.204 9.33325 28 10.1293 28 11.1106V18.2213C28 19.2039 27.204 19.9999 26.2227 19.9999H13.7787C12.796 19.9999 12 19.2039 12 18.2226V11.1106C12 10.1293 12.796 9.33325 13.7773 9.33325Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 13.3334H28" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            `,
            title: "Pagamento direto no app",
            description:
                "Elimine a necessidade de um ponto central de recebimento. O usuário paga pelo app e conferimos na saída.",
        },
        {
            id: 4,
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 28H5.33332C3.85999 28 2.66666 26.8067 2.66666 25.3333V6.66667C2.66666 5.19333 3.85999 4 5.33332 4H10.6667C12.14 4 13.3333 5.19333 13.3333 6.66667V25.3333C13.3333 26.8067 12.14 28 10.6667 28Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.99734 12.6667C7.62934 12.6694 7.33334 12.9681 7.33334 13.3361C7.33334 13.7041 7.63201 14.0027 8.00001 14.0001C8.36801 14.0001 8.66668 13.7014 8.66668 13.3334C8.66668 12.9654 8.36801 12.6667 7.99734 12.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.6667 16V6.66667C18.6667 5.19333 19.86 4 21.3333 4H26.6667C28.14 4 29.3333 5.19333 29.3333 6.66667V16" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29.3333 28.0001L26.8493 25.5161" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24 18.6667C26.2093 18.6667 28 20.4574 28 22.6667C28 24.8761 26.2093 26.6667 24 26.6667C21.7907 26.6667 20 24.8761 20 22.6667C20 20.4574 21.7907 18.6667 24 18.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.6667 7.99992H25.3333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.9973 12.6667C23.6293 12.6694 23.3333 12.9681 23.3333 13.3361C23.3333 13.7041 23.632 14.0027 24 14.0001C24.368 14.0001 24.6667 13.7014 24.6667 13.3334C24.6667 12.9654 24.368 12.6667 23.9973 12.6667" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66666 7.99992H9.33332" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66666 18.6667H9.33332" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66666 23.9999H9.33332" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            `,
            title: "Analise os dados",
            description:
                "Obtenha relatórios completos de tudo que está acontecendo: quem consome mais, quantidade de pessoas no evento.",
        },
    ]);

// qr code
interface QrCodeProps {
    id: number;
    img: string;
    title: string;
}

export const qrCode = () =>
    useState<QrCodeProps[]>("qr-code", () => [
        {
            id: 1,
            img: "/_nuxt/assets/images/qr/01.svg",
            title: "Configure seu evento com poucos cliques",
        },
        {
            id: 2,
            img: "/_nuxt/assets/images/qr/02.svg",
            title: "Venda seus ingressos de forma rápida",
        },
        {
            id: 3,
            img: "/_nuxt/assets/images/qr/03.svg",
            title: "Crie portarias e seus critérios",
        },
        {
            id: 4,
            img: "/_nuxt/assets/images/qr/04.svg",
            title: "Identifique o acesso de cada pessoa no evento",
        },
        {
            id: 5,
            img: "/_nuxt/assets/images/qr/05.svg",
            title: "Consumo e pagamento com a biometria",
        },
        {
            id: 6,
            img: "/_nuxt/assets/images/qr/06.svg",
            title: "Analise os dados do evento",
        },
    ]);

// work
interface WorkProps {
    id: number;
    img: string;
    title: string;
    brif: string;
    type: number;
}
export const workCards = () =>
    useState<WorkProps[]>("work", () => [
        {
            id: 1,
            img: "/_nuxt/assets/images/qr/work/01.png",
            title: "Convide o público",
            brif: `Crie um evento no Painel do Produtor e
    venda os ingressos pelo nosso site e app.
    Para obter ingressos, seu público pode se cadastrar no app Facepass Pessoal.`,
            type: 1,
        },
        {
            id: 2,
            img: "/_nuxt/assets/images/qr/work/02.png",
            title: "Defina as restrições",
            brif: `Permita o acesso de quem for identificado pela biometria facial. Inclua requisitos como idade, CPF e nome na lista.`,
            type: 1,
        },
        {
            id: 3,
            img: "/_nuxt/assets/images/qr/work/03.png",
            title: "Pagamento seguro",
            brif: `As vendas caem direto na conta do criador do evento e as transações são gerenciadas pela plataforma de pagamentos pagar.me.`,
            type: 1,
        },
        {
            id: 4,
            img: "/_nuxt/assets/images/qr/work/04.png",
            title: "Na palma da mão",
            brif: `Transforme o smartphone em uma câmera de reconhecimento facial. Use-o para validar ingressos, pontos de venda e criar portarias.`,
            type: 2,
        },
        {
            id: 5,
            img: "/_nuxt/assets/images/qr/work/05.png",
            title: "Entradas sem filas",
            brif: `Use o app Facepass Agentes para verificar os ingressos das pessoas e se cumprem os requisitos de acesso ao evento.`,
            type: 2,
        },
        {
            id: 6,
            img: "/_nuxt/assets/images/qr/work/06.png",
            title: "Personalize a comemoração",
            brif: `Por exemplo, você pode dar um bônus para todos os aniversariantes participantes.`,
            type: 2,
        },
        {
            id: 7,
            img: "/_nuxt/assets/images/qr/work/07.png",
            title: "Relatórios completos",
            brif: `Obtenha informações sobre tudo o que está acontecendo: faturamento, quem consome   e quantidade de pessoas no evento.`,
            type: 3,
        },
        {
            id: 8,
            img: "/_nuxt/assets/images/qr/work/08.png",
            title: "Segurança garantida",
            brif: `Nossa equipe especializada trabalha com inteligência artificial para garantir a identidade da pessoa usuária.`,
            type: 3,
        },
        {
            id: 9,
            img: "/_nuxt/assets/images/qr/work/09.png",
            title: "Tome decisões de acesso",
            brif: `Ao checar as informações do usuário, criamos níveis de segurança para o seu evento. Escolha os requisitos como desejar.`,
            type: 3,
        },
    ]);

export const workCardSelect = () =>
    useState<number>("work-card-select", () => 1);

// solutions
interface SolutionProps {
    id: number;
    icon: string;
    img: string;
    title: string;
    description: string;
    btn: boolean;
    imgbtn: boolean;
}

export const solutionsInfo = () =>
    useState<SolutionProps[]>("solution", () => [
        {
            id: 1,
            icon: `<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9187 25H3.08141C2.30008 25 1.66675 24.3667 1.66675 23.5853V2.41467C1.66675 1.63333 2.30008 1 3.08141 1H26.9201C27.7001 1 28.3334 1.63333 28.3334 2.41467V23.5867C28.3334 24.3667 27.7001 25 26.9187 25V25Z" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.66675 9.00006H5.66675C6.40275 9.00006 7.00008 9.59739 7.00008 10.3334V15.6667C7.00008 16.4027 6.40275 17.0001 5.66675 17.0001H1.66675" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.3333 17.0001H24.3333C23.5973 17.0001 23 16.4027 23 15.6667V10.3334C23 9.59739 23.5973 9.00006 24.3333 9.00006H28.3333" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.8287 10.1716C19.3908 11.7337 19.3908 14.2664 17.8287 15.8285C16.2666 17.3906 13.7339 17.3906 12.1718 15.8285C10.6097 14.2664 10.6097 11.7337 12.1718 10.1716C13.7339 8.60954 16.2666 8.60954 17.8287 10.1716" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.9999 1V9" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.9999 17V25" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `,
            img: "/_nuxt/assets/images/solution/01.jpg",
            title: "Estádios",
            description:
                "Controle de entrada e saída do estádio, verificação de dados e requisitos como vacinação e idade. Rápido e sem filas.",
            btn: true,
            imgbtn: false,
        },
        {
            id: 2,
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6667 24L18.4201 3.75737C18.5561 3.02671 19.2627 2.54671 19.9921 2.69337L25.3334 3.76137" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.7468 16.8534C21.6068 18.9081 18.1388 18.9081 16.0001 16.8548C13.8614 14.8014 10.3934 14.8014 8.25342 16.8561" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.24533 16.7947C8.08133 15.1147 8 13.428 8 11.74V11.4907C8 10.9493 8.12667 10.4147 8.368 9.92933V9.92933C8.96 8.74667 10.168 8 11.4907 8H20.5093C21.832 8 23.04 8.74667 23.632 9.92933V9.92933C23.8733 10.4147 24 10.9493 24 11.4907V11.74C24 13.428 23.9187 15.1133 23.7547 16.7933L22.9 25.5907C22.768 26.9573 21.62 28 20.2467 28H11.7533C10.38 28 9.232 26.9573 9.09867 25.5907L8.24533 16.7947V16.7947Z" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            `,
            img: "/_nuxt/assets/images/solution/02.jpg",
            title: "Eventos & Festas",
            description:
                "Para todas as etapas: venda de ingressos, acesso ao local, consumo e pagamento.",
            btn: true,
            imgbtn: false,
        },
        {
            id: 3,
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.6668 28V5.33333C22.6668 4.59733 22.0695 4 21.3335 4H10.6668C9.93083 4 9.3335 4.59733 9.3335 5.33333V28" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.33341 12H4.00008C3.26408 12 2.66675 12.5973 2.66675 13.3333V28" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29.3334 28V13.3333C29.3334 12.5973 28.7361 12 28.0001 12H22.6667" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.6665 22.6667H19.3332" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.0002 22.6667V28.0001" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.9999 28.0001V22.6667" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3333 13.9999H18.6666" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3333 18H18.6666" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.3333 9.99992H18.6666" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66675 18H9.33341" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66675 22.6667H9.33341" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.6667 18H25.3334" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.6667 22.6667H25.3334" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30.6668 27.9999H1.3335" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            `,
            img: "/_nuxt/assets/images/solution/03.jpg",
            title: "Condomínios",
            description:
                "Simplifique a rotina de acesso: visitantes, funcionários, salão de festas e piscina.",
            btn: false,
            imgbtn: true,
        },
        {
            id: 4,
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9995 28.0051V23.3365C13.9995 22.2315 14.8953 21.3357 16.0003 21.3357V21.3357C17.1054 21.3357 18.0012 22.2315 18.0012 23.3365V28.0051" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.33105 28.0051V15.3332C9.33105 14.423 9.7953 13.5757 10.5622 13.0855L14.5639 10.5285C15.4398 9.9687 16.5612 9.9687 17.4371 10.5285L21.4388 13.0855C22.2057 13.5757 22.6699 14.423 22.6699 15.3332V28.0051" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.0002 3.99536H21.3358V7.33008H16.0002" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.0002 10.1086V3.99536" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.0003 15.1105C15.8775 15.1112 15.7784 15.2112 15.7789 15.3341C15.7794 15.4569 15.8792 15.5562 16.0021 15.556C16.125 15.5557 16.2244 15.4561 16.2244 15.3332C16.2248 15.2738 16.2012 15.2167 16.1591 15.1748C16.117 15.1329 16.0597 15.1097 16.0003 15.1105" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.6697 19.2749H25.3375" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.6697 23.2766H25.3375" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66309 19.2749H9.33086" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66309 23.2766H9.33086" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.66113 28.0053H29.3389" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.99536 28.0051V16.0001C3.99536 15.2635 4.59256 14.6663 5.32925 14.6663H9.33092" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.0052 28.0051V16.0001C28.0052 15.2635 27.408 14.6663 26.6713 14.6663H22.6697" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            `,
            img: "/_nuxt/assets/images/solution/04.jpg",
            title: "Escolas",
            description:
                "Segurança de acesso para estudantes, professores e profissionais de ensino.",
            btn: false,
            imgbtn: true,
        },
        {
            id: 5,
            icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3333 13.3333H23.9999C25.4733 13.3333 26.6666 14.5266 26.6666 15.9999V21.3333C26.6666 22.8066 25.4733 23.9999 23.9999 23.9999H21.3333" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6667 14.6667V24.0001" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.9999 14.6667V24.0001" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.84823 10.6668C6.66956 10.2575 6.56689 9.80816 6.56689 9.3335C6.56689 7.64683 7.82423 6.26816 9.44956 6.0455C9.98689 4.4695 11.4762 3.3335 13.2336 3.3335C15.2722 3.3335 16.9349 4.86283 17.1829 6.8335C18.7936 6.8335 20.1002 8.13883 20.1002 9.75083C20.1002 10.0735 20.0349 10.3775 19.9389 10.6682" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6666 27.9998H7.99992C6.52659 27.9998 5.33325 26.8065 5.33325 25.3332V11.9998C5.33325 11.2638 5.93059 10.6665 6.66659 10.6665H19.9999C20.7359 10.6665 21.3333 11.2638 21.3333 11.9998V25.3332C21.3333 26.8065 20.1399 27.9998 18.6666 27.9998Z" stroke="#3482C3" stroke-width="1.78571" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `,
            img: "/_nuxt/assets/images/solution/05.jpg",
            title: "Bares",
            description: `Consumo e pagamento por reconhecimento facial. Simples
                e fácil como um brinde!`,
            btn: false,
            imgbtn: true,
        },
    ]);

export const solutionSelect = () =>
    useState<number>("solution-select", () => 1);

// accordion

export const faqStore = () =>
    useState("faq", () => [
        {
            id: 1,
            title: "Como o Facepass funciona na prática?",
            description:
                "É muito fácil. O público pode baixar o nosso app Facepass Pessoal e cadastrar uma selfie e os dados pessoais. As empresas podem criar eventos, permitir a entrada do público, monitorar consumo e pagamentos. Tudo com reconhecimento facial.",
        },
        {
            id: 2,
            title: "Porque o Facepass é revolucionário?",
            description:
                "É muito fácil. O público pode baixar o nosso app Facepass Pessoal e cadastrar uma selfie e os dados pessoais. As empresas podem criar eventos, permitir a entrada do público, monitorar consumo e pagamentos. Tudo com reconhecimento facial.",
        },
        {
            id: 3,
            title: "O que sua empresa pode fazer com o Facepass?",
            description:
                "É muito fácil. O público pode baixar o nosso app Facepass Pessoal e cadastrar uma selfie e os dados pessoais. As empresas podem criar eventos, permitir a entrada do público, monitorar consumo e pagamentos. Tudo com reconhecimento facial.",
        },
        {
            id: 4,
            title: "Uns dos diferenciais do Facepass é o cadastro polivalente e descentralizado. O que isso significa?",
            description:
                "É muito fácil. O público pode baixar o nosso app Facepass Pessoal e cadastrar uma selfie e os dados pessoais. As empresas podem criar eventos, permitir a entrada do público, monitorar consumo e pagamentos. Tudo com reconhecimento facial.",
        },
    ]);

export const faqSelect = () =>
    useState<number | null>("faq-select", () => null);
