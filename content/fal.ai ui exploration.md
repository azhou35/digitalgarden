API Key:
0fb9dc4d-8f9b-4192-b345-d7504d9baffd:5fe6d09afea75d9b78e1938671c7441c
API Endopint:
import fal_client

def on_queue_update(update):
    if isinstance(update, fal_client.InProgress):
        for log in update.logs:
           print(log["message"])

result = fal_client.subscribe(
    "fal-ai/kling-video/v1/pro/image-to-video",
    arguments={
        "prompt": "Snowflakes fall as a car moves forward along the road.",
        "image_url": "https://storage.googleapis.com/falserverless/kling/kling_input.jpeg"
    },
    with_logs=True,
    on_queue_update=on_queue_update,
)
print(result)