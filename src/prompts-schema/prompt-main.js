import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.italic("Selecione uma opção: 1 - QRCODE | 2 - Gerar senha aleatória"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Opção inválida. Por favor, selecione 1 ou 2."),
        required: true,
    }
]

export default mainPrompt;