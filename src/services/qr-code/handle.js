import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if(err)
    {
        console.error("Erro ao obter os dados:");
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(qrcode);
        console.log(chalk.greenBright("✅ QR Code gerado com sucesso!\n"));
    });
}

export default handle;