import chalk from 'chalk';

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow.italic("Digite o link que deseja gerar o QR Code:"),
        pattern: /^(https?:\/\/[^\s]+)$/,
    },

    {
        name: "type",
        description: chalk.yellow.italic("Selecione o tipo de QR Code: 1 - Normal | 2 - Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Opção inválida. Por favor, selecione 1 ou 2."),
        required: true,
    }
]

export default promptQRCode;