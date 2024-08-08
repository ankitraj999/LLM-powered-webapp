from flask import Flask ,request, jsonify
from flask_cors import CORS
from image_to_text_module import BlipImagetoText
from openai_api_module import openaiInference
from text_to_speech_converter_module import audioWithFileSave

#use python sever.py to run the file
#app instance
app=Flask(__name__)
CORS(app)

# @app.route("/api/home",methods=['GET'])
# def return_home():
#     return jsonify({
#         'message':"Hello World!"
#     })

@app.route('/api/upload', methods=['POST'])
def upload_image():
    # Check if the request contains a file
    if 'image' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    # Get the file from the request
    image_file = request.files['image']
    
    # Perform any processing or validation on the file
    # For example, you can save the file to a directory
    image_file.save('uploads/' + image_file.filename)
    file_name='uploads/' + image_file.filename
    
    descriptionQuery=BlipImagetoText(file_name)
    model="gpt-3.5-turbo"
    finalInference = " ".join(openaiInference(model,descriptionQuery))

    text_to_say=finalInference # text to convert into audio
    language='en'# gTTS support total 63 languages, here I am using english
    folderPath="audio/" # for example - "/content/"
    audioWithFileSave(text_to_say,language,folderPath)

    # # Respond with a success message
    print(finalInference)
    return jsonify({'message': finalInference}), 200

if __name__=="__main__":
    app.run(debug=True,port=8080) #for prduction remove debug parameter
    #run server by command - python3 server.py