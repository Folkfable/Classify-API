Number Classifier API

Overview

The Number Classifier API provides interesting mathematical properties about a given number, along with a fun fact. The API handles CORS and returns JSON responses.

Base URL

<your-url>

Endpoint

GET /api/classify-number

Query Parameters

Parameter

Type

Required

Description

number

number

Yes

The number to classify

Example Request

GET /api/classify-number?number=371

Success Response (200 OK)

{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}

Explanation:

is_prime: Boolean indicating if the number is prime.

is_perfect: Boolean indicating if the number is a perfect number.

properties: Array of relevant properties like even, odd, armstrong, perfect, prime.

digit_sum: Sum of the digits of the number.

fun_fact: A fun fact related to the number.

Error Response (400 Bad Request)

{
    "number": "alphabet",
    "error": true
}

Explanation:

number: The invalid input provided.

error: Indicates an error occurred due to invalid input.

CORS Support

The API includes CORS headers to allow requests from any origin.

Response Header:

Access-Control-Allow-Origin: *

Example Usage

Using curl

curl -X GET "<your-url>/api/classify-number?number=371"

Sample Output

{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}

Notes

The API accepts only numeric values for the number parameter.

In case of non-numeric input, the API returns a 400 Bad Request response.

Supports standard HTTP methods and JSON response format.

License

MIT License.
