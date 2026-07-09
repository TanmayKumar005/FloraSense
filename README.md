# 🌿 FloraSense — AI Powered Plant Health Intelligence

FloraSense is a full-stack web application that uses deep learning to detect diseases in crop leaves from a simple photo. Upload an image, and the model instantly classifies the plant's health status along with a confidence score and recommended action.

The project currently supports **potato leaf disease detection**, identifying:
- 🟢 **Healthy**
- 🟠 **Early Blight**
- 🔴 **Late Blight**

---

## 🚀 Features

- 📸 Drag-and-drop image upload for instant analysis
- 🧠 CNN-based image classification powered by TensorFlow/Keras
- ⚡ Fast, lightweight REST API built with FastAPI
- 🎨 Clean, responsive UI built with React and Material-UI
- 📊 Real-time confidence score with visual progress indicator
- 🌱 Actionable recommendations based on the detected condition

---

## 🏗️ Tech Stack

**Frontend**
- React
- Material-UI (`@material-ui/core`)
- Axios
- `material-ui-dropzone`

**Backend**
- FastAPI
- TensorFlow / Keras
- Uvicorn
- Pillow, NumPy

**Model**
- Convolutional Neural Network (CNN) trained on the [PlantVillage dataset](https://www.kaggle.com/datasets/emmarex/plantdisease)
- Data augmentation (random flip & rotation) for improved generalization
- Trained and evaluated in `training.ipynb`

---

## 📂 Project Structure

```
├── api/
│   └── main.py            # FastAPI backend serving the trained model
├── frontend/
│   └── src/
│       └── home.js        # React component for image upload & results
├── training/
│   └── training.ipynb     # Model training notebook
├── models/
│   └── potato_model.keras # Trained CNN model
└── README.md
```

> Note: Structure is simplified for clarity — refer to the actual repository for the complete folder layout.

---

## ⚙️ How It Works

1. The user uploads a leaf image via the React frontend.
2. The image is sent to the FastAPI `/predict` endpoint as form data.
3. The backend loads the trained Keras model and preprocesses the image.
4. The model predicts the disease class and confidence score.
5. Results are returned to the frontend and displayed with a status badge, confidence bar, and care recommendation.

---

## 🛠️ Getting Started

### Backend Setup

```bash
cd api
pip install -r requirements.txt
python main.py
```

The API will start at `http://localhost:8000`. You can verify it's running by visiting `/ping`.

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Set the backend URL in your environment file:

```
REACT_APP_API_URL=http://localhost:8000/predict
```

---

## 📌 Notes & Roadmap

- 🌾 **More crop detection coming soon** — potato is just the starting point. Support for additional crops and disease categories is actively planned.
- 🤝 **Open to contributions** — whether it's improving the model, refining the UI, adding new crop datasets, or fixing bugs, contributions are welcome. Feel free to fork the repo, open issues, or submit a pull request.

---

## 📄 License

This project is open source and available for learning and contribution purposes. Feel free to use and adapt it with attribution.

---

## 🙏 Acknowledgements

- [PlantVillage Dataset](https://www.kaggle.com/datasets/emmarex/plantdisease) for training data
- TensorFlow & FastAPI communities for excellent documentation and tooling
