import prompt from "prompt";
import mainPrompt from "./prompts-schema/prompt-main.js";
import chalk from "chalk";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(mainPrompt, async(err, choice) => {
        if(choice.select === "1") {
            //Lógica para gerar o QR Code
            await createQRCode();
        }
        else if(choice.select === "2") {
            // Aqui você pode adicionar a lógica para gerar a senha aleatória
            await createPassword();
        }

        if(err) {
            console.error(err);
            return;
        }
    });

    prompt.start();
}

main();