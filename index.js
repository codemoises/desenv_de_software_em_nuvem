import express from 'express';
import pages from './pages.js';
import basicOperations from './operation.js'
const app = express();

app.get('', (req, res) => {res.send(pages.welcomePage)});

app.get('/calculator/subtract', (req, res) => operation(req, res, "-"));
app.get('/calculator/sum', (req, res) => operation(req, res, "+"));
app.get('/calculator/multiplication', (req, res) => operation(req, res, "*"));
app.get('/calculator/division', (req, res) => operation(req, res, "/"));

app.listen(4000, () => {
    console.log('Rodando...')
})


function operation(req, res, operator){
    let firstNumber = parseFloat(req.query["firstNumber"]);
    let secondNumber = parseFloat(req.query["secondNumber"]);
    res.send(pages.calculatorPage(basicOperations.operations[operator](firstNumber, secondNumber)));
}