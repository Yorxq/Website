const app = require('express')();
const PORT = 9999;

app.listen(
    PORT,
    () => console.log(`Hosting on http://localhost:${PORT}`)
)

app.get('', (req, res) => {

    const output = Math.floor(Math.random() * 7);

    if (output == 0) {
    res.status(200).send({
        success: true,
        random: 'output 0',
        id: output
    })}

    if (output == 1) {
    res.status(200).send({
        success: true,
        random: 'output 1',
        id: output
    })}

    if (output == 2) {
    res.status(200).send({
        success: true,
        random: 'output 2',
        id: output
    })}

    if (output == 3) {
    res.status(200).send({
        success: true,
        random: 'output 3',
        id: output
    })}

    if (output == 4) {
        res.status(200).send({
        success: true,
        random: 'output 4',
        id: output
    })}

    if (output == 5) {
        res.status(200).send({
        success: true,
        random: 'output 5',
        id: output
    })}
        
    if (output == 6) {
    res.status(200).send({
        success: true,
        random: 'output 6',
        id: output
    })}
});