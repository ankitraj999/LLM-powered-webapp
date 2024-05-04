
# Surveillance LLM

Surveillance LLM integrates the image description capabilities of BLIP (Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding and Generation) and the text understanding and reasoning capabilities of ChatGPT. When an image is captured by a camera, the system processes it and uses BLIP to describe the contents of the image. It then leverages ChatGPT to analyze the image description and detect any potential security threats and make announcement using google text to speech library.



## Screenshots

![App Screenshot](https://drive.google.com/file/d/1AFoV0ErNwta31_ntwEh7tvY-cak8niyc/view?usp=sharing)
![App Screenshot](https://drive.google.com/file/d/1DqUwmcnCqY4Ig6kuEBDLRDEq5JQd_HhK/view?usp=sharing)
![App Screenshot](https://drive.google.com/file/d/1rQGX7qSWliiY_8Mo4t6RaPdyX9UYmKdl/view?usp=sharing)


## Documentation

[Documentation](https://drive.google.com/file/d/1i79kF1PWIWRBibkSOS-9tnAJXBQ9LgAm/view?usp=sharing)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`GOOGLE_MAP_API`

`HF_TOKEN`

`OPENAI_API_KEY`


## How to run the application

Go to 'Threat-Detection-web-app' folder

```bash 
  cd Backend
  python server.py
```

```bash 
  cd Frontend
  npm run dev
```
    
## Acknowledgements

 - [BLIP Paper](https://arxiv.org/pdf/2201.12086)
 - [chatGpt Guide](https://platform.openai.com/docs/guides/fine-tuning)
 - [Google Map Integration with NextJS app](https://www.99darshan.com/posts/interactive-maps-using-nextjs-and-google-maps)

