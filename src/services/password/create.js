import chalk from "chalk";
import handle from './handle.js';

async function createPassword() {
    console.log(chalk.green("✅ Senha criada com sucesso!"));
    const password = await handle();
    console.log(chalk.green(`Senha gerada: ${chalk.bold(password)}`));
}
//F2 renomeia todos os arquivos que importam determinada função
export default createPassword;