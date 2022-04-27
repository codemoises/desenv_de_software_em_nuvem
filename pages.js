const welcomePage = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trab Nuvem | Rotas</title>
    <style>
        html {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>
    <h1>Trabalho 2 nuvem</h1>
    <h2>Integrantes:</h2>
    <ul>
    <li>Hamilton Morais</li>
    <li>Moises Cruz</li>
    <li>João Paulo</li>
    <li>João Pedro Guarany</li>
    </ul>
    <h3></h3>
</body>
</html>
`

const calculatorPage = (test) => { return `calculator test: ${test}` }
export default {welcomePage, calculatorPage};