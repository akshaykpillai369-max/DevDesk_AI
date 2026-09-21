import os

from google import genai
from google.genai import errors
from groq import Groq


def generate_ai_response(message):

    client = genai.Client(
        api_key=os.getenv("GEMINI_API_KEY")
    )

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=message
        )

        return response.text

    except errors.ClientError as error:

        if error.code == 429:
            return generate_groq_response(message)

        raise


def generate_groq_response(message):

    client = Groq(
        api_key=os.getenv("GROQ_API_KEY")
    )

    response = client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=[
            {
                "role": "user",
                "content": message
            }
        ]
    )

    return response.choices[0].message.content


def generate_code_explanation(code):

    prompt = f'''Explain the following code clearly.

    Cover:

    1. What the code does
    2. How it works
    3. Important concepts
    4. Any potential issues

    Code:

    {code}
    '''

    return generate_ai_response(prompt)