const welcomePage = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trab Nuvem | Rotas</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap');

        body {
            font-family: 'Roboto', sans-serif;
            margin: 0 auto;
            width: 800px;
            height: 97vh;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        h2 {
            text-transform: uppercase;
        }

        .header {
            width: 266px;
            margin: 0 auto;
            padding: 15px 0;
        }

        .content {
            margin: 15px;
        }

        .content ul {
            margin: 15px;
            list-style: none;
        }

        .content p {
            margin: 15px;
        }

        .footer {
            margin: 15px;
        }

        .footer ul {
            margin: 15px;
        }

        .agradecimento {
            margin: 0 auto;
            padding-top: 40px;
            width: 206px;
        }

        .agradecimento h1 {
            text-align: center;
        }


    </style>
</head>
<body>
    <div class="header">
        <h1>Trabalho 2 nuvem</h1> 
    </div>
    <div class="content">
        <h2>Rota:</h2>
        <p>/calculator/operação/firstNumber=54&secondNumber=8</p>
        <h2>Operações:</h2>
        <ul>
            <li>subtract</li>
            <li>sum</li>
            <li>multiplication</li>
            <li>division</li>
        </ul>
    </div>
    
    <div class="footer">
        <h2>Integrantes:</h2>
        <ul>
        <li>Hamilton Morais</li>
        <li>Moises Cruz</li>
        <li>João Paulo</li>
        <li>João Pedro Guarany</li>
        </ul>
    </div>
    <div class="agradecimento">
        <div>
            <h1>Obrigado <3</h1>
        </div>
    </div>
   
</body>
</html>
`

const calculatorPage = (result) => { return `Calculation result is: ${result}` }
export default {welcomePage, calculatorPage};