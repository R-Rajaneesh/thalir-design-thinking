import whisper
import pyaudio
import wave

model = whisper.load_model("base")
CHUNK = 1024
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100
RECORD_SECONDS = 2
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(format=FORMAT,
                channels=CHANNELS,
                rate=RATE,
                input=True,
                frames_per_buffer=CHUNK)

print("Recording Started")

frames = []

for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("Reached Max Time limit, Recording stopped")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(CHANNELS)
wf.setsampwidth(p.get_sample_size(FORMAT))
wf.setframerate(RATE)
wf.writeframes(b''.join(frames))
wf.close()

result = model.transcribe("output.wav")
forward = ["move forward.", "move.", "Forward",
           "go.", "start.", "go forward." "go front"]
backward = ["move backward.", "move back.", "backward",
            "go back.", "back.", "go forward." "go back"]
right = ["move right.", "move rightside.", "forward",
         "go right.", "right.", "go right." "go right"]
left = ["move left.", "move leftside.", "left",
        "go left.", "left.", "go left." "go left"]
command = "No commands match"
checkCommand = True
for segment in result["segments"]:
    text = str(segment["text"])
    if checkCommand == False:
        break
    for f in forward:
        if text.lower().strip() == f:
            command = text
        checkCommand = False
    for b in backward:
        if text.lower().strip() == b:
            command = text
        checkCommand = False
    for r in right:
        if text.lower().strip() == r:
            command = text
        checkCommand = False
    for l in left:
        if text.lower().strip() == l:
            command = text
        checkCommand = False
actual_command = result["text"]
print(f"Executing command:\n   {command}")
print(f"Got input as {actual_command}")
