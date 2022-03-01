import boleto from '../../assets/compra/boleto.png'
import debito from '../../assets/compra/debito.jpg'
import credito from '../../assets/compra/credito.jpg'
import pix from '../../assets/compra/pix.png'

const finalizar = {
    detalhes: {
        titulo: "Detalhes da compra:",
        formas_de_pag: "Formas de pagamento disponíveis:",
        desc: "O link para rastreio e acompanhamento foi enviado ao email.",
        botao: "Voltar ao carrinho"

    },
    itens: {
        lista: [
            {
                nome: "Boleto",
                imagem: boleto

            },
            {
                nome: "Débito",
                imagem: debito

            },
            {
                nome: "Crédito",
                imagem: credito

            },
            {
                nome: "Pix",
                imagem: pix

            }
        ]
    }
}

export default finalizar;