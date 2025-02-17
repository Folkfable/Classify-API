const express = require('express');
const axios = require('axios'); // For fetching the fun fact from Numbers API
const {isPrime, isPerfect, isArmstrong, getDigitSum} = require('./index.js');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/classify-number', async (req, res) => {
    const numberParam = req.query.number;
    const num = parseInt(numberParam);

    if (isNaN(num) || numberParam.includes('.') || numberParam.trim() === '') {
        return res.status(400).json({
            number: numberParam,
            error: true
        });
    }

    const isPrimeNum = isPrime(num);
    const isPerfectNum = isPerfect(num);
    const isArmstrongNum = isArmstrong(num);
    const digitSum = getDigitSum(num);
    const isEven = num % 2 === 0;

    let properties = [];
    if (isArmstrongNum) properties.push('armstrong');
    properties.push(isEven ? 'even' : 'odd');

    try {
        const factResponse = await axios.get(`http://numbersapi.com/${num}/math?json`);
        const funFact = factResponse.data.text;

        res.status(200).json({
            number: num,
            is_prime: isPrimeNum,
            is_perfect: isPerfectNum,
            properties: properties,
            digit_sum: digitSum,
            fun_fact: funFact
        });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch fun fact from Numbers API'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
