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

def generate_code_debug(code):

    prompt = f'''Analyze the following code for bugs and errors.

    Cover:

    1. What the code is trying to do
    2. Any bugs or errors you find
    3. Why each bug or error occurs
    4. How to fix each issue
    5. Any other potential problems

    Code:

    {code}
    '''

    return generate_ai_response(prompt)

def generate_code_improvement(code):

    prompt = f'''Improve the following code while preserving its intended functionality.

    Cover:

    1. What could be improved
    2. Why those improvements are useful
    3. Readability and maintainability improvements
    4. Performance improvements where relevant
    5. Provide the improved version of the code

    Code:

    {code}
    '''

    return generate_ai_response(prompt)