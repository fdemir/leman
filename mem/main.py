import os
from memgpt import MemGPT
from dotenv import load_dotenv

load_dotenv()

client = MemGPT(
    quickstart="openai",
    config={
      "openai_api_key":
    }
)