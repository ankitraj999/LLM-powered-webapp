# -*- coding: utf-8 -*-
"""Image_to_text_Module.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1pJzNmRwF1V8o-weWgB5ZULPX8P2xE2sU
"""

#@title BLIP: Unified Vision-Language Understanding and Generation

from google.colab import files
import requests
from PIL import Image
from transformers import BlipProcessor, BlipForConditionalGeneration
import torch

# Checking the current runtime
#"GPU" if torch.cuda.is_available() else "CPU"

# uploading image file and returning file name
def uploadImgFile():
  # Prompt the user to upload a file
  uploaded = files.upload()
  uploadedFileName=""
  # Print the uploaded file name
  for filename in uploaded.keys():
      uploadedFileName=filename
  return uploadedFileName

fileName=uploadImgFile()
fileName

fileName

#This code snippet defines a function BlipImagetoText(fileName) that
#performs image captioning using the Blip model for both conditional and unconditional image captioning.
def BlipImagetoText(fileName):
  processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-large")
  model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-large").to("cuda")

  raw_image = Image.open(fileName).convert('RGB')
  # conditional image captioning
  text = "a photograph of "
  inputs = processor(raw_image, text, return_tensors="pt")

  out = model.generate(**inputs)
  #print(processor.decode(out[0], skip_special_tokens=True))

  # unconditional image captioning
  inputs = processor(raw_image, return_tensors="pt")
  #set HF_TOKEN variable in google colab secret and get secret key from https://huggingface.co/settings/tokens
  out = model.generate(**inputs,max_new_tokens=200)
  return processor.decode(out[0], skip_special_tokens=True)

textResult=BlipImagetoText(fileName)
textResult

