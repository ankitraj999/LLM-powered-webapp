
# Surveillance LLM

Surveillance LLM integrates the image description capabilities of BLIP (Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding and Generation) and the text understanding and reasoning capabilities of ChatGPT. When an image is captured by a camera, the system processes it and uses BLIP to describe the contents of the image. It then leverages ChatGPT to analyze the image description and detect any potential security threats and make announcement using google text to speech library.



## Screenshots

<img width="1187" alt="Screenshot 2024-05-07 at 7 26 13 PM" src="https://github.com/ankitraj999/surveillance-LLM/assets/13768336/44fb02a1-da22-47ee-a937-a3658c7fcecd">
<img width="1161" alt="Screenshot 2024-05-07 at 7 26 19 PM" src="https://github.com/ankitraj999/surveillance-LLM/assets/13768336/2464f7e1-05a1-4625-b500-004c8bb97cca">
<img width="418" alt="Screenshot 2024-05-07 at 7 26 29 PM" src="https://github.com/ankitraj999/surveillance-LLM/assets/13768336/b7624168-2191-451e-8cf3-7ca7980ae695">
<img width="343" alt="Screenshot 2024-05-07 at 7 26 34 PM" src="https://github.com/ankitraj999/surveillance-LLM/assets/13768336/3d520c2f-e4ef-4e9b-99d9-8283e8da7555">
<img width="1101" alt="Screenshot 2024-05-07 at 7 26 41 PM" src="https://github.com/ankitraj999/surveillance-LLM/assets/13768336/b42e8749-10e4-4883-baee-1b5bd7c52f08">



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

