---
title: Facial Emotion Recognition
summary: A computer vision project comparing a custom CNN with transfer learning architectures for classifying facial expressions from grayscale images.
problem: How well can a model recognize emotion from a grayscale image of a face?
methods:
  - Python
  - TensorFlow/Keras
  - OpenCV
  - Transfer Learning
  - Computer Vision
status: completed
order: 3
thumbnail: /images/work/fer-confusion-matrix.png
video: /videos/fer-slides.mp4
links:
  - label: View project notebook on GitHub
    href: https://github.com/SARAH-GAKII/facial-emotion-recognition/blob/main/Facial_Emotion_Detection_Notebook.ipynb
---

## Overview

Facial expressions carry a large share of emotional communication, making facial emotion recognition (FER) an important part of affective computing and human-centered AI. This project explores how well deep learning models can classify facial expressions from low-resolution grayscale images. It develops and evaluates custom convolutional neural networks alongside transfer learning architectures to compare how different approaches perform on the same four-class classification task.

## Dataset

The dataset contains 48 × 48 grayscale facial images across four classes: happy, sad, surprise, and neutral, split into training, validation, and test sets. The low resolution and grayscale format make this a relatively constrained visual classification problem.

## Approach

- Exploratory analysis and image preprocessing
- Data augmentation to improve robustness
- Custom CNN architectures for feature extraction
- Benchmarking against transfer learning models: VGG16, ResNet, and EfficientNet
- Multi-metric evaluation using accuracy, loss, precision, recall, and F1-score
- Class-level error analysis to understand confusion across emotions

## Results

| Model | Test Accuracy | Test Loss | Precision | Recall | F1-Score |
| --- | --- | --- | --- | --- | --- |
| CNN Model 1 | 71.9% | 0.665 | 0.73 | 0.72 | 0.72 |
| VGG16 | 72.7% | 0.728 | 0.75 | 0.73 | 0.73 |
| ResNet50V2 | 75.0% | 0.828 | 0.76 | 0.75 | 0.75 |
| EfficientNetB0 | 75.8% | 0.808 | 0.78 | 0.76 | 0.76 |
| Complex CNN | 81.3% | 0.81 | 0.81 | 0.81 | 0.81 |
| **CNN Model 2** | **83.6%** | **0.454** | 0.84 | 0.84 | 0.84 |

CNN Model 2 achieved the strongest overall test performance, with 83.6% accuracy and the lowest test loss among the models evaluated.

![Confusion matrix for the final CNN model](/images/work/fer-confusion-matrix.png)

![Training and validation performance curves](/images/work/fer-training-performance.png)

## Key Insights

- **Custom CNNs outperformed transfer learning models.** Custom CNNs outperformed the transfer learning models. The strongest custom architectures achieved higher test accuracy than VGG16, ResNet50V2, and EfficientNetB0 on this dataset.
- **Some emotions were harder to classify.** Happy and surprise separated cleanly; neutral and sad showed more confusion.
- **Model complexity did not guarantee better performance.** The more complex and pretrained architectures were not necessarily the strongest performers on this task.
- **Model selection considered more than accuracy.** Test loss and generalization behavior were considered alongside accuracy when comparing the models.

## Tools

Python, TensorFlow, Keras, OpenCV, NumPy, Pandas, Matplotlib, Seaborn, CNNs, Transfer Learning, Computer Vision, Deep Learning
